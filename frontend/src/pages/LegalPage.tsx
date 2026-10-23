import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function LegalPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Mentions légales' : 'Legal notice';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><h1>{title}</h1><div className="prose-card"><p>{locale === 'fr' ? 'Éditeur : LAFATRAPERFECT. Les coordonnées légales et l’hébergeur seront ajoutés uniquement après validation effective.' : 'Publisher: LAFATRAPERFECT. Legal contact and hosting details will be added only after effective validation.'}</p></div></article>;
}

