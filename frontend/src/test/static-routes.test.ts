import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(process.cwd());

describe('GitHub Pages static routes', () => {
  it('uses a calculated Vite base instead of a hard-coded API/server base', () => {
    const vite = readFileSync(resolve(root, 'vite.config.ts'), 'utf8');
    expect(vite).toMatch(/VITE_BASE_PATH/);
    expect(vite).not.toMatch(/proxy:\s*\{/);
  });

  it('declares the route generator and route metadata contract', () => {
    const generator = readFileSync(resolve(root, 'tools/generate-static-routes.mjs'), 'utf8');
    expect(generator).toContain('Generated');
    expect(generator).toContain('canonical');
    expect(generator).toContain('fr/projets/mada-bmp');
    expect(generator).toContain('fr/projets/volatech');
    expect(generator).toContain('en/projects/volatech');
    expect(generator).toContain('en/projects/zina-tsara-volo');
    expect(generator).toContain('RANDRIAMANANTENA Fitahiana Lafatra');
    expect(generator).toContain('Développeur Java junior');
    expect(generator).toContain('VolaTech — vente et retrait de produits');
    expect(generator).not.toContain('VolaTech — boutique Java EE');
    expect(generator).not.toContain('react-localstorage');
  });
});
