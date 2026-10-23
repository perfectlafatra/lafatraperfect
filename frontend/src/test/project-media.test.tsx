import { describe, expect, it } from 'vitest';
import { projects } from '../content/projectIndex';

describe('project media contract', () => {
  it('gives each case one documented cover and descriptive alt text', () => {
    expect(projects).toHaveLength(4);
    for (const project of projects) {
      expect(project.cover.src).toMatch(/^https?:\/\//);
      expect(project.cover.alt.fr.length).toBeGreaterThan(12);
      expect(project.cover.alt.en.length).toBeGreaterThan(12);
      expect(project.cover.provenance.length).toBeGreaterThan(8);
      expect(project.cover.type).toMatch(/ILLUSTRATION|SCREENSHOT|THIRD_PARTY/);
    }
  });

  it('does not expose a ZINA gallery or private screenshot list', () => {
    const zina = projects.find((project) => project.slug === 'zina-tsara-volo');
    expect(zina?.cover).toBeDefined();
    expect('gallery' in (zina ?? {})).toBe(false);
    expect(zina?.cover.type).not.toBe('SCREENSHOT_REAL');
  });
});
