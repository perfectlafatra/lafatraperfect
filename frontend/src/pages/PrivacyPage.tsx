import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function PrivacyPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Confidentialité' : 'Privacy';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><h1>{title}</h1><div className="prose-card"><p>{locale === 'fr' ? 'La version statique n’envoie aucune donnée personnelle au backend. Le thème peut être conservé localement. Le futur formulaire décrira sa finalité et exigera un consentement explicite.' : 'The static version sends no personal data to the backend. Theme preference may be stored locally. The future form will state its purpose and require explicit consent.'}</p></div></article>;
}

