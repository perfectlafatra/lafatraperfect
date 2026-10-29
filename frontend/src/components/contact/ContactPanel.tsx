import { siteConfig } from '../../config/site';
import type { Locale } from '../../routes/publicRoutes';

export function ContactPanel({ locale }: { locale: Locale }) {
  const labels = locale === 'fr'
    ? { email: 'Email', address: 'Adresse', primary: 'Téléphone principal', secondary: 'Téléphone secondaire', whatsApp: 'WhatsApp' }
    : { email: 'Email', address: 'Address', primary: 'Primary phone', secondary: 'Secondary phone', whatsApp: 'WhatsApp' };

  return (
    <address className="contact-panel">
      <div><strong>{labels.address}</strong><span>{siteConfig.address}</span></div>
      <div><strong>{labels.email}</strong><a href={siteConfig.emailUrl}>{siteConfig.email}</a></div>
      <div><strong>{labels.primary}</strong><a href={siteConfig.phonePrimaryUrl}>{siteConfig.phonePrimary}</a></div>
      <div><strong>{labels.secondary}</strong><a href={siteConfig.phoneSecondaryUrl}>{siteConfig.phoneSecondary}</a></div>
      <div><strong>{labels.whatsApp}</strong><a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer">WhatsApp · {siteConfig.whatsAppPhone}<span className="sr-only"> ({locale === 'fr' ? 'nouvel onglet' : 'new tab'})</span></a></div>
    </address>
  );
}

