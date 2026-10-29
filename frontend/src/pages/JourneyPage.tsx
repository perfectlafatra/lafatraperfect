import { Timeline } from '../components/experience/Timeline';
import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function JourneyPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Parcours' : 'Journey';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">{locale === 'fr' ? 'EXPÉRIENCE & FORMATION' : 'EXPERIENCE & EDUCATION'}</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Un parcours orienté Java, de Spring Boot et Jakarta EE au développement Full-Stack avec React et PostgreSQL.' : 'A Java-focused journey spanning Spring Boot and Jakarta EE through Full-Stack development with React and PostgreSQL.'}</p><Timeline locale={locale}/></article>;
}

