import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function LegalPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Mentions légales' : 'Legal notice';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><h1>{title}</h1><div className="prose-card"><p>{locale === 'fr' ? 'Éditeur : LAFATRAPERFECT, développeur web indépendant. Contact : lafatraperamanantena69@gmail.com. Hébergement et publication : GitHub Pages, projet perfectlafatra/lafatraperfect. URL publique : perfectlafatra.github.io/lafatraperfect.' : 'Publisher: LAFATRAPERFECT, independent web developer. Contact: lafatraperamanantena69@gmail.com. Hosting and publication: GitHub Pages, project perfectlafatra/lafatraperfect. Public URL: perfectlafatra.github.io/lafatraperfect.'}</p></div></article>;
}

