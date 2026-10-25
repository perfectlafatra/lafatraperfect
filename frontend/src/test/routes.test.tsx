import { describe, expect, it } from 'vitest';
import { localizePath } from '../routes/publicRoutes';

describe('localized routes', () => {
  it('preserves a nested project page when switching locale', () => {
    expect(localizePath('/fr/projets/lalana', 'en')).toBe('/en/projects/lalana');
    expect(localizePath('/en/projects/zina-tsara-volo', 'fr')).toBe('/fr/projets/zina-tsara-volo');
  });

  it('preserves a nested project when switching locale', () => {
    expect(localizePath('/fr/projets/mada-bmp', 'en')).toBe('/en/projects/mada-bmp');
    expect(localizePath('/en/projects/zina-tsara-volo', 'fr')).toBe('/fr/projets/zina-tsara-volo');
  });

  it('falls back to the localized home for an unknown path', () => {
    expect(localizePath('/unknown', 'fr')).toBe('/fr');
  });
});

