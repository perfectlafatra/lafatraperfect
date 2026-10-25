import { Timeline } from '../components/experience/Timeline';
import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function JourneyPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Parcours' : 'Journey';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">{locale === 'fr' ? 'EXPÉRIENCE' : 'EXPERIENCE'}</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Mon évolution du développement frontend React vers la conception d’applications Full-Stack avec Spring Boot et PostgreSQL.' : 'My progression from React frontend development to Full-Stack application design with Spring Boot and PostgreSQL.'}</p><Timeline locale={locale}/></article>;
}

