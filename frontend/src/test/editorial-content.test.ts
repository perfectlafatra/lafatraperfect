import { describe, expect, it } from 'vitest';
import { experience } from '../content/experience';
import { siteConfig } from '../config/site';

describe('editorial content contract', () => {
  it('publishes a dated experience timeline and recruiter contact assets', () => {
    expect(experience.every((item) => item.date.fr.trim() && item.date.en.trim())).toBe(true);
    expect(siteConfig.emailUrl).toMatch(/^mailto:/);
    expect(siteConfig.cvUrl).toMatch(/\/cv\//);
  });
});
