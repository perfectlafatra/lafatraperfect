import { Component, lazy, Suspense, type ReactNode } from 'react';
import { heroAsset } from '../../config/heroAsset';
import HeroTurntable from './HeroTurntable';

// WebGL is NEVER bundled for the default image-sequence mode.
const HeroModel3D = lazy(() => import('./HeroModel3D'));

class HeroErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: unknown) {
    if (import.meta.env.DEV) console.error('Portrait GLB unavailable; displaying the photographic fallback.', error);
  }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

interface Hero3DProps {
  className?: string;
  locale?: 'fr' | 'en';
}

/**
 * The default portrait is an image sequence, not a GLB reconstruction.
 * Switch to WebGL only when a real model URL is explicitly configured.
 */
export default function Hero3D({ className = '', locale = 'fr' }: Hero3DProps) {
  if (heroAsset.mode !== 'IMAGE' && heroAsset.model3d?.url) {
    return (
      <HeroErrorBoundary fallback={<HeroTurntable locale={locale} className={className} />}>
        <Suspense fallback={<HeroTurntable locale={locale} className={className} />}>
          <HeroModel3D />
        </Suspense>
      </HeroErrorBoundary>
    );
  }
  return <HeroTurntable locale={locale} className={className} />;
}
