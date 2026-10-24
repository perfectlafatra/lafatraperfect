import type { Locale } from '../../routes/publicRoutes';
import { siteConfig } from '../../config/site';

export function DownloadCV({ locale }: { locale: Locale }) {
  if (!siteConfig.cvUrl) {
    return null;
  }
  return <a className="button button--secondary" href={siteConfig.cvUrl} download>{locale === 'fr' ? 'Télécharger le CV' : 'Download CV'}</a>;
}

