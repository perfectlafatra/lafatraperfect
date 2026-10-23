import { siteConfig } from '../../config/site';
import type { Locale } from '../../routes/publicRoutes';

export function ContactPanel({ locale }: { locale: Locale }) {
  if (!siteConfig.emailUrl && !siteConfig.whatsAppUrl) {
    return <div className="contact-panel state-panel"><strong>{locale === 'fr' ? 'Coordonnées en cours de validation' : 'Contact details under validation'}</strong><p>{locale === 'fr' ? 'Aucune adresse ou messagerie non vérifiée n’est publiée. Revenez après validation des coordonnées professionnelles.' : 'No unverified address or messaging link is published. Please return after professional contact details are validated.'}</p></div>;
  }
  return <div className="contact-panel">{siteConfig.emailUrl && <a className="button button--primary" href={siteConfig.emailUrl}>Email</a>}{siteConfig.whatsAppUrl && <a className="button button--secondary" href={siteConfig.whatsAppUrl}>WhatsApp</a>}</div>;
}

