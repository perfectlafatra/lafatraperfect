import { siteConfig } from '../../config/site';
import type { Locale } from '../../routes/publicRoutes';

export function ContactPanel({ locale }: { locale: Locale }) {
  if (!siteConfig.emailUrl && !siteConfig.whatsAppUrl) {
    return <div className="contact-panel" aria-label={locale === 'fr' ? 'Contact indisponible' : 'Contact unavailable'} />;
  }
  return <div className="contact-panel">{siteConfig.emailUrl && <a className="button button--primary" href={siteConfig.emailUrl}>Email</a>}{siteConfig.whatsAppUrl && <a className="button button--secondary" href={siteConfig.whatsAppUrl}>WhatsApp</a>}</div>;
}

