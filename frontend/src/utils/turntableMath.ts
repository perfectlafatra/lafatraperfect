import type { TurntableLoop } from '../config/portraitSequence';

export interface TurntableBlend {
  current: number;
  next: number;
  mix: number;
}

/** Positive modulo that works for scroll in both directions. */
export function positiveModulo(value: number, period: number): number {
  return ((value % period) + period) % period;
}

/**
 * Image index mapping for the verified full circle (wrap), or a reversible
 * sweep when the original photos do not cover the back of the head (pingpong).
 * At every loop boundary, the indices connect without teleporting between the
 * last and first photos. This is image playback, NOT facial reconstruction.
 */
export function getTurntableBlend(
  cycles: number,
  frameCount: number,
  mode: TurntableLoop = 'pingpong',
  transitionFraction = 0.075,
): TurntableBlend {
  if (!Number.isFinite(cycles) || !Number.isInteger(frameCount) || frameCount < 1) {
    throw new Error('Invalid turntable progress or frame count');
  }
  if (!Number.isFinite(transitionFraction) || transitionFraction < 0 || transitionFraction > 1) {
    throw new Error('Invalid crossfade interval');
  }
  if (frameCount === 1) return { current: 0, next: 0, mix: 0 };

  const length = mode === 'pingpong' ? 2 * (frameCount - 1) : frameCount;
  const progress = positiveModulo(cycles * length, length);
  const segment = Math.floor(progress);
  const fractional = progress - segment;
  const at = (step: number): number => {
    const wrapped = step % length;
    return mode === 'pingpong' && wrapped >= frameCount
      ? length - wrapped
      : wrapped;
  };

  // For widely separated source viewpoints, keep both portraits superimposed
  // only near the boundary. Dense, coherent sequences may use a larger window.
  const start = 1 - transitionFraction;
  const linearMix = transitionFraction === 0
    ? 0
    : Math.max(0, Math.min(1, (fractional - start) / transitionFraction));
  const smoothMix = linearMix * linearMix * (3 - 2 * linearMix);
  return { current: at(segment), next: at(segment + 1), mix: smoothMix };
}
