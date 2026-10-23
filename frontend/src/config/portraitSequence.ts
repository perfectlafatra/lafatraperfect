/**
 * Portrait media for the independent Portfolio application.
 * R..R7 are photographs, NOT a calibrated 360-degree capture.
 * No rear views were supplied, so sparse source photos play in ping-pong mode.
 *
 * For video-like movement, add actual intermediate views created offline and
 * configure an explicit manifest (see tools/manifest.example.json).
 */
export type TurntableLoop = 'pingpong' | 'wrap';

export interface PortraitSequenceConfig {
  readonly frames: readonly string[];
  /** Round trip in pingpong mode, full turn in wrap mode. */
  readonly cycleSeconds: number;
  readonly loopMode: TurntableLoop;
  /** Portion of each frame interval used for blending, 0...1. */
  readonly transitionFraction: number;
  /** Scroll contribution measured in additional complete sequence cycles. */
  readonly scrollCycles: number;
  readonly fallback: string;
  /** Optional when actual generated frames and a verified manifest exist. */
  readonly manifestUrl?: string;
}

const base = `${import.meta.env.BASE_URL}media/hero/portraits/`;

export const portraitSequence: PortraitSequenceConfig = {
  // INITIAL INVENTORY ONLY. Reorder after inspecting all original photographs.
  frames: ['R.png', 'R1.png', 'R2.png', 'R3.png', 'R4.png', 'R5.png', 'R6.png', 'R7.png']
    .map((name) => `${base}${name}`),
  cycleSeconds: 17,
  loopMode: 'pingpong',
  // Prevent long double-exposure of different heads (previous bug).
  transitionFraction: 0.075,
  scrollCycles: 0.12,
  fallback: `${base}R.png`,
  // Once the validated dense sequence exists, enable:
  // manifestUrl: '/media/hero/turntable/manifest.json',
};
