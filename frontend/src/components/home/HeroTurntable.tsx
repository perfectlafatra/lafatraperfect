import { useEffect, useMemo, useRef, useState } from 'react';
import { portraitSequence, type TurntableLoop } from '../../config/portraitSequence';
import { getTurntableBlend } from '../../utils/turntableMath';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroTurntable.css';

export interface HeroTurntableProps {
  locale?: 'fr' | 'en';
  className?: string;
}

interface PlaybackSequence {
  frames: readonly string[];
  cycleSeconds: number;
  loopMode: TurntableLoop;
  transitionFraction: number;
  scrollCycles: number;
}

interface OptionalManifest {
  version?: number;
  frames?: unknown;
  loopMode?: unknown;
  verifiedFull360?: unknown;
  cycleSeconds?: unknown;
  transitionFraction?: unknown;
  scrollCycles?: unknown;
}

const defaultSequence: PlaybackSequence = {
  frames: portraitSequence.frames,
  cycleSeconds: portraitSequence.cycleSeconds,
  loopMode: portraitSequence.loopMode,
  transitionFraction: portraitSequence.transitionFraction,
  scrollCycles: portraitSequence.scrollCycles,
};

/**
 * A manifest is an OPTIONAL override for an OFFLINE-produced dense image sequence.
 * Do not claim full360 unless the final-to-first seam and rear views were verified.
 * Keep resource URLs local to the public Hero folder; never evaluate arbitrary paths.
 */
function parseManifest(value: unknown): PlaybackSequence | null {
  if (!value || typeof value !== 'object') return null;
  const data = value as OptionalManifest;
  if (data.version !== 1 || !Array.isArray(data.frames) || data.frames.length < 2 || data.frames.length > 600) return null;
  const frames: string[] = data.frames;
  if (!frames.every((path) => typeof path === 'string' && /^\/media\/hero\/[a-zA-Z0-9_./-]+\.(png|webp|avif|jpg|jpeg)$/.test(path) && !path.includes('..'))) return null;
  const loopMode: TurntableLoop = data.loopMode === 'wrap' && data.verifiedFull360 === true ? 'wrap' : 'pingpong';
  const bounded = (value: unknown, fallback: number, low: number, high: number): number =>
    typeof value === 'number' && Number.isFinite(value)
      ? Math.max(low, Math.min(high, value))
      : fallback;
  return {
    frames,
    loopMode,
    cycleSeconds: bounded(data.cycleSeconds, 17, 6, 120),
    transitionFraction: bounded(data.transitionFraction, frames.length >= 32 ? 0.45 : 0.075, 0, 1),
    scrollCycles: bounded(data.scrollCycles, 0.12, -0.5, 0.5),
  };
}

/**
 * Responsive photographic turntable. No WebGL, video, or CSS faux-3D tilt.
 * IMPORTANT: an 8-pose sequence cannot become genuinely video-smooth through
 * rendering tricks. Sparse input => short blends (no persistent doubled face).
 * A dense, anatomically coherent image sequence gives the cinematic result.
 */
export default function HeroTurntable({ locale = 'fr', className = '' }: HeroTurntableProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);
  const [playback, setPlayback] = useState<PlaybackSequence>(defaultSequence);
  const alt = locale === 'fr' ? 'Portrait du développeur en rotation' : 'Rotating developer portrait';

  useEffect(() => {
    const manifestUrl = portraitSequence.manifestUrl;
    if (!manifestUrl) return;
    const controller = new AbortController();
    void fetch(manifestUrl, { signal: controller.signal })
      .then((response) => response.ok ? response.json() as Promise<unknown> : null)
      .then((json) => {
        if (controller.signal.aborted) return;
        const verified = parseManifest(json);
        if (verified) setPlayback(verified);
        else if (import.meta.env.DEV) console.warn('Hero turntable: invalid manifest; original portraits retained.');
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted && import.meta.env.DEV) console.warn('Hero turntable: manifest unavailable; original portraits retained.', error);
      });
    return () => controller.abort();
  }, []);

  const frames = useMemo(() => playback.frames, [playback.frames]);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const base = baseRef.current;
    const overlay = overlayRef.current;
    if (!root || !stage || !base || !overlay || reducedMotion || frames.length < 2) return;

    const cache = new Map<number, HTMLImageElement>();
    const loading = new Set<number>();
    const failures = new Set<number>();
    let disposed = false;
    let raf = 0;
    let visible = false;
    let lastTick = 0;
    let elapsed = 0;
    let scrollPosition = 0;
    let displayedBase = '';
    let displayedOverlay = '';
    let currentIndex = 0;
    const capacity = frames.length <= 12 ? 12 : 26;

    const ensureImage = (index: number): void => {
      if (index < 0 || index >= frames.length || cache.has(index) || loading.has(index) || failures.has(index) || loading.size >= 4) return;
      const url = frames[index];
      if (!url) return;
      loading.add(index);
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => {
        void (typeof image.decode === 'function' ? image.decode().catch(() => undefined) : Promise.resolve())
          .then(() => {
            loading.delete(index);
            if (!disposed) cache.set(index, image);
          });
      };
      image.onerror = () => { loading.delete(index); if (!disposed) failures.add(index); };
      image.src = url;
    };

    // Prioritize a visible first image, then neighbor frames; keep bounded memory.
    ensureImage(0);
    ensureImage(1);
    ensureImage(Math.min(2, frames.length - 1));

    const updateScroll = (): void => {
      const container = root.closest('.hero') ?? root;
      const rect = container.getBoundingClientRect();
      scrollPosition = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
    };

    const tick = (now: number): void => {
      raf = 0;
      if (!visible || document.hidden || disposed) return;
      if (lastTick > 0) elapsed += Math.min(Math.max(0, now - lastTick), 80) / 1000;
      lastTick = now;

      const cycles = elapsed / playback.cycleSeconds + scrollPosition * playback.scrollCycles;
      const { current, next, mix } = getTurntableBlend(
        cycles, frames.length, playback.loopMode, playback.transitionFraction,
      );
      currentIndex = current;

      // Only prefetch a bounded neighborhood for long sequences. Images are
      // reusable from browser HTTP cache when the player loops.
      const count = frames.length;
      for (let distance = 0; distance <= (count <= 12 ? count - 1 : 8); distance += 1) {
        const forward = (current + distance) % count;
        ensureImage(forward);
        if (count <= 12 || distance <= 3) ensureImage((current - distance + count) % count);
      }

      const first = cache.get(current);
      const second = cache.get(next);
      if (first && (second || mix === 0)) {
        if (displayedBase !== first.src) {
          base.src = first.src;
          displayedBase = first.src;
        }
        if (second && displayedOverlay !== second.src) {
          overlay.src = second.src;
          displayedOverlay = second.src;
        }
        // Keep the base fully opaque; fade only the next pose on top.
        // Unlike the previous version, the two faces never remain doubled for
        // the full duration of a frame interval.
        overlay.style.opacity = second ? String(mix) : '0';
        stage.dataset.ready = 'true';
      }

      if (cache.size > capacity) {
        for (const index of cache.keys()) {
          if (cache.size <= capacity) break;
          const distance = Math.min(Math.abs(index - currentIndex), count - Math.abs(index - currentIndex));
          if (distance > 10 && index !== current && index !== next) cache.delete(index);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const start = (): void => {
      if (!visible || document.hidden || disposed || raf) return;
      lastTick = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = (): void => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      lastTick = 0;
    };
    const handleVisibility = (): void => { if (document.hidden) stop(); else start(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) start(); else stop();
    }, { threshold: 0.01 });

    stage.dataset.ready = 'false';
    updateScroll();
    observer.observe(root);
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      disposed = true;
      stop();
      observer.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
      cache.clear();
      loading.clear();
    };
  }, [frames, playback, reducedMotion]);

  return (
    <div ref={rootRef} className={`hero-3d hero-3d--image hero-turntable ${className}`.trim()} role="img" aria-label={alt}>
      <img className="hero-turntable__poster" src={portraitSequence.fallback} alt="" aria-hidden="true" decoding="async" draggable={false} fetchPriority="high" />
      {!reducedMotion && frames.length > 1 && (
        <div ref={stageRef} className="hero-turntable__stage" data-ready="false" aria-hidden="true">
          <img ref={baseRef} className="hero-turntable__base" src={frames[0] ?? portraitSequence.fallback} alt="" draggable={false} />
          <img ref={overlayRef} className="hero-turntable__overlay" src={frames[1] ?? portraitSequence.fallback} alt="" draggable={false} />
        </div>
      )}
    </div>
  );
}
