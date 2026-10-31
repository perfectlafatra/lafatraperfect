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
  'fr/projets', 'en/projects',
  'fr/contact', 'en/contact', 'fr/mentions-legales', 'en/legal', 'fr/confidentialite', 'en/privacy',
  'fr/projets/lalana', 'fr/projets/volatech', 'fr/projets/zina-tsara-volo', 'fr/projets/mada-bmp',
  'en/projects/lalana', 'en/projects/volatech', 'en/projects/zina-tsara-volo', 'en/projects/mada-bmp'
];

const projectTitles = {
  lalana: ['Lalana — étude de cas', 'Lalana — case study'],
  volatech: ['VolaTech — vente et retrait de produits', 'VolaTech — product sales and pickup'],
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
    ? projectTitles[projectSlug]?.[english ? 1 : 0] ?? 'RANDRIAMANANTENA Fitahiana Lafatra — Portfolio'
    : english
      ? 'RANDRIAMANANTENA Fitahiana Lafatra — Junior Full-Stack Developer | Java, Spring Boot, React'
      : 'RANDRIAMANANTENA Fitahiana Lafatra — Développeur Fullstack Junior | Java, Spring Boot, React';
  const description = english
    ? 'Professional portfolio of a Master 1 junior Full-Stack developer: Java, Spring Boot, React, PostgreSQL and Python/FastAPI.'
    : 'Portfolio professionnel d’un développeur Fullstack junior en Master 1 : Java, Spring Boot, React, PostgreSQL et Python/FastAPI.';
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
