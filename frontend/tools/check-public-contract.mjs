import { readFile, access } from 'node:fs/promises';

const [projects, fr, en, app] = await Promise.all([
  readFile(new URL('../src/content/projectIndex.ts', import.meta.url), 'utf8'),
  readFile(new URL('../src/i18n/locales/fr.json', import.meta.url), 'utf8'),
  readFile(new URL('../src/i18n/locales/en.json', import.meta.url), 'utf8'),
  readFile(new URL('../src/routes/AppRouter.tsx', import.meta.url), 'utf8')
]);
for (const marker of ['react-localstorage', 'lalana', 'zina-tsara-volo', 'mada-bmp']) if (!projects.includes(marker)) throw new Error(`Missing project marker: ${marker}`);
if (/natur.?ally/i.test(projects)) throw new Error('Natur’Ally must not appear in the public project index.');
for (const marker of ["localeRoutes('fr')", "localeRoutes('en')"]) if (!app.includes(marker)) throw new Error(`Missing localized routes: ${marker}`);
if (!app.includes('NotFoundPage')) throw new Error('Missing not-found route contract.');
const flatten = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) => child && typeof child === 'object' ? flatten(child, `${prefix}${key}.`) : [`${prefix}${key}`]).sort();
const frKeys = flatten(JSON.parse(fr)); const enKeys = flatten(JSON.parse(en));
if (JSON.stringify(frKeys) !== JSON.stringify(enKeys)) throw new Error('FR/EN translation keys diverge.');
await access(new URL('../dist/index.html', import.meta.url));
console.log(`Public contract OK; ${frKeys.length} translation keys aligned and required projects/routes present.`);
