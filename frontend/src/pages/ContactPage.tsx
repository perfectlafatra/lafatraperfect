import { ContactPanel } from '../components/contact/ContactPanel';
import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function ContactPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Contact' : 'Contact';
  return <article className="page-shell contact-page"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">CONTACT</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Parlons d’un besoin web, d’une opportunité ou d’un retour technique.' : 'Let’s discuss a web need, an opportunity or technical feedback.'}</p><ContactPanel locale={locale}/></article>;
}

