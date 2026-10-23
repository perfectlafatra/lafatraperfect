import { Timeline } from '../components/experience/Timeline';
import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function JourneyPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Parcours' : 'Journey';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">JOURNEY</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Une lecture par capacités, sans dates ou expériences ajoutées sans preuve.' : 'A capability-led view, without dates or experience added without evidence.'}</p><Timeline locale={locale}/></article>;
}

