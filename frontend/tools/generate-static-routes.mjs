import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const templatePath = join(dist, 'index.html');
const template = await readFile(templatePath, 'utf8');
const baseMatch = template.match(/(?:src|href)="([^"]*?)assets\//);
const base = baseMatch?.[1] ?? '/';

export const routes = [
  'fr', 'en',
  'fr/a-propos', 'en/about', 'fr/parcours', 'en/journey', 'fr/competences', 'en/skills',
  'fr/projets', 'en/projects', 'fr/methode', 'en/method', 'fr/journal', 'en/journal',
  'fr/contact', 'en/contact', 'fr/mentions-legales', 'en/legal', 'fr/confidentialite', 'en/privacy',
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

const projectTitles = {
  'react-localstorage': ['React localStorage', 'React localStorage'],
  lalana: ['Lalana — étude de cas', 'Lalana — case study'],
  'zina-tsara-volo': ['ZINA by Tsara Volo — étude de cas', 'ZINA by Tsara Volo — case study'],
  'mada-bmp': ['Mada-BMP — étude de cas Full-Stack', 'Mada-BMP — Full-Stack case study']
};

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function metadataFor(route) {
  const english = route === 'en' || route.startsWith('en/');
  const projectSlug = route.match(/(?:projets|projects)\/([^/]+)/)?.[1];
  const title = projectSlug
    ? projectTitles[projectSlug]?.[english ? 1 : 0] ?? 'LAFATRAPERFECT — Portfolio'
    : english ? 'LAFATRAPERFECT — Full-Stack Web Developer' : 'LAFATRAPERFECT — Développeur Web Full-Stack';
  const description = english
    ? 'Evidence-led portfolio of a React and Spring Boot Full-Stack Web Developer.'
    : 'Portfolio fondé sur des preuves d’un développeur Web Full-Stack React et Spring Boot.';
  const canonical = `${base}${route}`;
  let html = template.replace(/<html lang="[^"]*">/, `<html lang="${english ? 'en' : 'fr'}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(canonical)}" />\n    <meta property="og:title" content="${escapeHtml(title)}" />\n    <meta property="og:description" content="${escapeHtml(description)}" />\n    <meta property="og:url" content="${escapeHtml(canonical)}" />\n  </head>`);
  return html;
}

for (const route of routes) {
  const destination = join(dist, route, 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, metadataFor(route), 'utf8');
}
await writeFile(join(dist, '404.html'), metadataFor('fr'), 'utf8');
console.log(`Generated ${routes.length} static route documents and 404.html.`);
