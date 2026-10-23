import { describe, expect, it } from 'vitest';
import { localizePath } from '../routes/publicRoutes';

describe('localized routes', () => {
  it('preserves a nested project page when switching locale', () => {
    expect(localizePath('/fr/projets/lalana', 'en')).toBe('/en/projects/lalana');
    expect(localizePath('/en/projects/zina-tsara-volo', 'fr')).toBe('/fr/projets/zina-tsara-volo');
  });

  it('preserves a nested journal post when switching locale', () => {
    expect(localizePath('/fr/journal/api-rest-spring-boot', 'en')).toBe('/en/journal/api-rest-spring-boot');
    expect(localizePath('/en/journal/postgresql-integrite-migrations', 'fr')).toBe('/fr/journal/postgresql-integrite-migrations');
  });

  it('falls back to the localized home for an unknown path', () => {
    expect(localizePath('/unknown', 'fr')).toBe('/fr');
  });
});

