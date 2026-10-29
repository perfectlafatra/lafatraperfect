import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';
import { siteConfig } from '../config/site';

export function LegalPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Mentions légales' : 'Legal notice';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><h1>{title}</h1><div className="prose-card"><p>{locale === 'fr' ? `Éditeur : ${siteConfig.name}, candidat développeur Java / Full-Stack. Contact : ${siteConfig.email}. Adresse : ${siteConfig.address}. Hébergement et publication : GitHub Pages, projet perfectlafatra/lafatraperfect. URL publique : perfectlafatra.github.io/lafatraperfect.` : `Publisher: ${siteConfig.name}, Junior Java / Full-Stack developer candidate. Contact: ${siteConfig.email}. Address: ${siteConfig.address}. Hosting and publication: GitHub Pages, project perfectlafatra/lafatraperfect. Public URL: perfectlafatra.github.io/lafatraperfect.`}</p></div></article>;
}

