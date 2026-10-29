import { describe, expect, it } from 'vitest';
import { experience } from '../content/experience';
import { profile } from '../content/profile';
import { siteConfig } from '../config/site';

describe('editorial content contract', () => {
  it('publishes a dated experience timeline and recruiter contact assets', () => {
    expect(experience.every((item) => item.date.fr.trim() && item.date.en.trim())).toBe(true);
    expect(siteConfig.emailUrl).toMatch(/^mailto:/);
    expect(siteConfig.cvUrl).toMatch(/\/cv\//);
  });

  it('expands the M2I and DA2I degrees in both portfolio languages', () => {
    const master = experience.find((item) => item.key === 'master');
    const licence = experience.find((item) => item.key === 'licence');

    expect(master?.title.fr).toBe('Master 1 — Modélisation et Ingénierie Informatique (M2I)');
    expect(master?.title.en).toBe('Master 1 — Modeling and Computer Engineering (M2I)');
    expect(licence?.title.fr).toBe('Licence — Développement d’Applications Internet/Intranet (DA2I)');
    expect(licence?.title.en).toBe('Licence — Internet/Intranet Applications Development (DA2I)');
    expect(profile.summary.fr).toContain('Développement d’Applications Internet/Intranet (DA2I)');
    expect(profile.summary.fr).toContain('Modélisation et Ingénierie Informatique (M2I)');
    expect(profile.summary.en).toContain('Internet/Intranet Applications Development (DA2I)');
    expect(profile.summary.en).toContain('Modeling and Computer Engineering (M2I)');
  });
});
