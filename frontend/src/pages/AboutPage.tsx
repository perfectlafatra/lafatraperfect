import { MetaTags } from '../components/seo/MetaTags';
import { profile } from '../content/profile';
import type { Locale } from '../routes/publicRoutes';

export function AboutPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'À propos' : 'About';
  return <article className="page-shell"><MetaTags title={title} description={profile.summary[locale]} locale={locale}/><p className="eyebrow">{locale === 'fr' ? 'PROFIL' : 'PROFILE'}</p><h1>{title}</h1><p className="page-lead">{profile.summary[locale]}</p><div className="prose-card"><h2>{locale === 'fr' ? 'Ce que je construis' : 'What I build'}</h2><p>{locale === 'fr' ? 'Je conçois en priorité la logique Backend Java : API REST, sécurité, sessions, services métier et persistance SQL. Je complète ce socle avec des interfaces React accessibles et lisibles, puis je vérifie les échanges avec Postman et les tests adaptés au projet.' : 'I focus first on Java backend logic: REST APIs, security, sessions, business services and SQL persistence. I complement that foundation with accessible, readable React interfaces and verify exchanges with Postman and project-appropriate tests.'}</p><p>{profile.availability[locale]}</p></div></article>;
}

