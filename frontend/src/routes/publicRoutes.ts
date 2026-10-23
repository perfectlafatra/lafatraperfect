export type Locale = 'fr' | 'en';

export interface PublicRouteDefinition {
  key: string;
  fr: string;
  en: string;
}

export const publicRoutes: PublicRouteDefinition[] = [
  { key: 'home', fr: '/fr', en: '/en' },
  { key: 'about', fr: '/fr/a-propos', en: '/en/about' },
  { key: 'journey', fr: '/fr/parcours', en: '/en/journey' },
  { key: 'skills', fr: '/fr/competences', en: '/en/skills' },
  { key: 'projects', fr: '/fr/projets', en: '/en/projects' },
  { key: 'method', fr: '/fr/methode', en: '/en/method' },
  { key: 'journal', fr: '/fr/journal', en: '/en/journal' },
  { key: 'contact', fr: '/fr/contact', en: '/en/contact' },
  { key: 'legal', fr: '/fr/mentions-legales', en: '/en/legal' },
  { key: 'privacy', fr: '/fr/confidentialite', en: '/en/privacy' }
];

const projectPattern = /^\/(fr\/projets|en\/projects)\/([^/]+)\/?$/;
const journalPattern = /^\/(fr\/journal|en\/journal)\/([^/]+)\/?$/;

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

export function routePath(key: string, locale: Locale): string {
  return publicRoutes.find((route) => route.key === key)?.[locale] ?? `/${locale}`;
}

export function localizePath(pathname: string, locale: Locale): string {
  const projectMatch = pathname.match(projectPattern);
  if (projectMatch?.[2]) {
    return `${routePath('projects', locale)}/${projectMatch[2]}`;
  }

  const journalMatch = pathname.match(journalPattern);
  if (journalMatch?.[2]) {
    return `${routePath('journal', locale)}/${journalMatch[2]}`;
  }

  const match = publicRoutes.find((route) => route.fr === pathname || route.en === pathname);
  return match?.[locale] ?? `/${locale}`;
}

