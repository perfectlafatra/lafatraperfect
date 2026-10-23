import { access, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const routes = [
  'fr', 'en', 'fr/a-propos', 'en/about', 'fr/parcours', 'en/journey', 'fr/competences', 'en/skills',
  'fr/projets', 'en/projects', 'fr/methode', 'en/method', 'fr/journal', 'en/journal', 'fr/contact', 'en/contact',
  'fr/mentions-legales', 'en/legal', 'fr/confidentialite', 'en/privacy',
  'fr/projets/react-localstorage', 'fr/projets/lalana', 'fr/projets/zina-tsara-volo', 'fr/projets/mada-bmp',
  'en/projects/react-localstorage', 'en/projects/lalana', 'en/projects/zina-tsara-volo', 'en/projects/mada-bmp',
  'fr/journal/architecture-fullstack-maintenable', 'en/journal/architecture-fullstack-maintenable',
  'fr/journal/api-rest-spring-boot', 'en/journal/api-rest-spring-boot',
  'fr/journal/postgresql-integrite-migrations', 'en/journal/postgresql-integrite-migrations',
  'fr/journal/interface-react-responsive', 'en/journal/interface-react-responsive',
  'fr/journal/securiser-authentification', 'en/journal/securiser-authentification',
  'fr/journal/documenter-projet-star', 'en/journal/documenter-projet-star',
  'fr/journal/tester-fiabiliser-fullstack', 'en/journal/tester-fiabiliser-fullstack',
  'fr/journal/preparer-deploiement', 'en/journal/preparer-deploiement',
  'fr/journal/experience-bilingue-fr-en', 'en/journal/experience-bilingue-fr-en',
  'fr/journal/resoudre-anomalie-technique', 'en/journal/resoudre-anomalie-technique'
];
for (const route of routes) await access(join(dist, route, 'index.html'));
await access(join(dist, '404.html'));
const index = await readFile(join(dist, 'index.html'), 'utf8');
if (!index.includes('/assets/')) throw new Error('Built index does not contain Vite asset paths.');
if (index.includes('localhost')) throw new Error('Built index contains localhost.');
const english = await readFile(join(dist, 'en', 'index.html'), 'utf8');
if (!english.includes('<html lang="en">') || !english.includes('canonical')) throw new Error('English route metadata is incomplete.');
console.log(`Static route contract PASS: ${routes.length} route documents + 404.html exist with localized metadata.`);
