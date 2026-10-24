import { describe, expect, it } from 'vitest';
import { getAllPosts } from '../content/journal';
import { experience } from '../content/experience';
import { siteConfig } from '../config/site';

describe('editorial content contract', () => {
  it('publishes complete journal translations without demo/backoffice placeholders', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThanOrEqual(8);

    for (const post of posts) {
      expect(Object.keys(post)).not.toContain('demo');
      for (const locale of ['fr', 'en'] as const) {
        const translation = post.translation[locale];
        expect(translation.title.trim()).not.toBe('');
        expect(translation.summary.trim()).not.toBe('');
        expect(translation.content.length).toBeGreaterThanOrEqual(4);
        expect(`${translation.title} ${translation.summary} ${translation.content.join(' ')}`).not.toMatch(
          /contenu de démonstration|demo content|backoffice|back office|futur formulaire|à compléter|pending/i,
        );
      }
    }
  });

  it('publishes a dated experience timeline and recruiter contact assets', () => {
    expect(experience.every((item) => item.date.fr.trim() && item.date.en.trim())).toBe(true);
    expect(siteConfig.emailUrl).toMatch(/^mailto:/);
    expect(siteConfig.cvUrl).toMatch(/\/cv\//);
  });
});
