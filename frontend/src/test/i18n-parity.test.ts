import { describe, expect, it } from 'vitest';
import en from '../i18n/locales/en.json';
import fr from '../i18n/locales/fr.json';

function leafKeys(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, child]) =>
    leafKeys(child, prefix ? `${prefix}.${key}` : key)
  );
}

describe('translation catalogues', () => {
  it('keeps exactly the same meaningful keys in French and English', () => {
    expect(leafKeys(en).sort()).toEqual(leafKeys(fr).sort());
    expect(leafKeys(fr)).not.toContain('');
  });
});

