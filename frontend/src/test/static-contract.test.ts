import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { profile } from '../content/profile';
import { experience } from '../content/experience';

const frontendRoot = resolve(process.cwd());
const read = (relativePath: string) => readFileSync(resolve(frontendRoot, relativePath), 'utf8');

describe('static portfolio contract', () => {
  it('contains no active Axios/API/contact-server implementation', () => {
    const packageJson = JSON.parse(read('package.json')) as { dependencies?: Record<string, string> };
    expect(packageJson.dependencies?.axios).toBeUndefined();
    const apiDirectory = resolve(frontendRoot, 'src/api');
    expect(existsSync(apiDirectory) ? readdirSync(apiDirectory) : []).toHaveLength(0);
    expect(read('src/pages/ContactPage.tsx')).not.toMatch(/ContactForm|\/api|submitContact/);
  });

  it('states the owner timeline and database experience without inflated years', () => {
    const text = [profile.summary.fr, profile.summary.en, ...experience.map((item) => `${item.description.fr} ${item.description.en}`)].join(' ');
    expect(text).toMatch(/2024/);
    expect(text).toMatch(/MySQL/i);
    expect(text).toMatch(/PostgreSQL/i);
    expect(text).not.toMatch(/3 ans|three years|3 years/i);
  });
});
