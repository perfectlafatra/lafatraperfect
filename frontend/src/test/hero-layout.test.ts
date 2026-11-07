import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('home hero first-screen layout', () => {
  it('keeps the portrait visible early on narrow screens without letterboxing', () => {
    const components = readFileSync(resolve('src/styles/components.css'), 'utf8');
    const portrait = readFileSync(resolve('src/components/home/HeroTurntable.css'), 'utf8');

    expect(components).toMatch(/@media \(max-width: 850px\)[\s\S]*?\.hero__copy\s*\{\s*display:\s*contents;/);
    expect(components).toMatch(/@media \(max-width: 850px\)[\s\S]*?\.hero__visual--3d[\s\S]*?order:\s*7;/);
    expect(portrait).toMatch(/object-fit:\s*cover;/);
  });
});
