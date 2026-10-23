import { describe, expect, it } from 'vitest';
import { getTurntableBlend } from './turntableMath';

describe('portfolio turntable math', () => {
  it('keeps one image static with one source frame', () => {
    expect(getTurntableBlend(0.5, 1)).toEqual({ current: 0, next: 0, mix: 0 });
  });
  it('moves from front to last view and returns without an artificial 360 seam', () => {
    expect(getTurntableBlend(0, 8)).toEqual({ current: 0, next: 1, mix: 0 });
    expect(getTurntableBlend(0.5, 8)).toEqual({ current: 7, next: 6, mix: 0 });
    expect(getTurntableBlend(1, 8)).toEqual({ current: 0, next: 1, mix: 0 });
  });
  it('supports reversed scroll progress', () => {
    const reverse = getTurntableBlend(-1 / 14, 8);
    expect(reverse.current).toBe(1);
    expect(reverse.next).toBe(0);
  });
  it('does not create prolonged ghosting from sparse frames', () => {
    expect(getTurntableBlend(0.5 / 14, 8, 'pingpong', 0.075).mix).toBe(0);
    expect(getTurntableBlend(0.97 / 14, 8, 'pingpong', 0.075).mix).toBeGreaterThan(0);
  });
  it('supports wrap only when angular coverage is known', () => {
    const nearSeam = getTurntableBlend(0.999, 8, 'wrap', 1);
    expect(nearSeam.current).toBe(7);
    expect(nearSeam.next).toBe(0);
    expect(getTurntableBlend(1, 8, 'wrap', 1).current).toBe(0);
  });
  it('rejects invalid inputs', () => {
    expect(() => getTurntableBlend(NaN, 8)).toThrow();
    expect(() => getTurntableBlend(0, 0)).toThrow();
    expect(() => getTurntableBlend(0, 8, 'wrap', -0.1)).toThrow();
  });
});
