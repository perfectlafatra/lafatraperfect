import { MetaTags } from '../components/seo/MetaTags';
import { profile } from '../content/profile';
import type { Locale } from '../routes/publicRoutes';

export function AboutPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'À propos' : 'About';
  return <article className="page-shell"><MetaTags title={title} description={profile.summary[locale]} locale={locale}/><p className="eyebrow">{locale === 'fr' ? 'PROFIL' : 'PROFILE'}</p><h1>{title}</h1><p className="page-lead">{profile.summary[locale]}</p><div className="prose-card"><h2>{locale === 'fr' ? 'Ce que je construis' : 'What I build'}</h2><p>{locale === 'fr' ? 'Je travaille sur l’ensemble du parcours d’une application web : interface React, contrats REST, logique métier Spring Boot, sécurité et persistance PostgreSQL. J’accorde une attention particulière à la lisibilité de l’interface, à la structure du code et aux tests des parcours importants.' : 'I work across the web application lifecycle: React interfaces, REST contracts, Spring Boot business logic, security and PostgreSQL persistence. I pay close attention to interface clarity, code structure and tests for important user journeys.'}</p><p>{profile.availability[locale]}</p></div></article>;
}

