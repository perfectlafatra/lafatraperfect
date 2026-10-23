import { MetaTags } from '../components/seo/MetaTags';
import { profile } from '../content/profile';
import type { Locale } from '../routes/publicRoutes';

export function AboutPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'À propos' : 'About';
  return <article className="page-shell"><MetaTags title={title} description={profile.summary[locale]} locale={locale}/><p className="eyebrow">PROFILE</p><h1>{title}</h1><p className="page-lead">{profile.summary[locale]}</p><div className="prose-card"><h2>{locale === 'fr' ? 'Positionnement' : 'Positioning'}</h2><p>{locale === 'fr' ? 'Un profil full-stack qui relie l’expérience utilisateur, les contrats HTTP, la sécurité et la persistance. Les affirmations de cette vitrine restent limitées aux éléments documentés.' : 'A full-stack profile connecting user experience, HTTP contracts, security and persistence. Claims in this site remain limited to documented evidence.'}</p><p>{profile.availability[locale]}</p></div></article>;
}

