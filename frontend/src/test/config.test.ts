import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');

function read(relativePath: string) {
  return readFileSync(resolve(root, relativePath), 'utf8');
}

describe('development environment contract', () => {
  it('keeps the static frontend development port and Pages base configurable', () => {
    const vite = read('frontend/vite.config.ts');

    expect(vite).toContain("rootEnv.VITE_PORT || 3002");
    expect(vite).toContain('VITE_BASE_PATH');
    expect(vite).not.toContain('proxy:');
  });
});
