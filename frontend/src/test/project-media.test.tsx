import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { projects } from '../content/projectIndex';

describe('project media contract', () => {
  it('gives each case one documented cover and descriptive alt text', () => {
    expect(projects).toHaveLength(4);
    for (const project of projects) {
      expect(project.cover.src).toMatch(/^(https?:\/\/|\/)/);
      if (project.cover.src.startsWith('/')) {
        const assetPath = project.cover.src.startsWith(import.meta.env.BASE_URL)
          ? project.cover.src.slice(import.meta.env.BASE_URL.length)
          : project.cover.src.replace(/^\/+/, '');
        expect(existsSync(resolve('public', assetPath))).toBe(true);
      }
      expect(project.cover.alt.fr.length).toBeGreaterThan(12);
      expect(project.cover.alt.en.length).toBeGreaterThan(12);
      expect(project.cover.provenance.length).toBeGreaterThan(8);
      expect(project.cover.type).toMatch(/ILLUSTRATION|SCREENSHOT|THIRD_PARTY/);
    }
  });

  it('publishes only the authorised ZINA evidence from the signed public study', () => {
    const zina = projects.find((project) => project.slug === 'zina-tsara-volo');
    expect(zina?.cover).toBeDefined();
    expect('gallery' in (zina ?? {})).toBe(false);
    expect(zina?.cover.type).toBe('SCREENSHOT_REAL');
    expect(zina?.evidence?.every((asset) => asset.type === 'SCREENSHOT_REAL')).toBe(true);
  });
});
