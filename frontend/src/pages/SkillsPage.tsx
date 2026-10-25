import { MetaTags } from '../components/seo/MetaTags';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import type { Locale } from '../routes/publicRoutes';

export function SkillsPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Compétences' : 'Skills';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">STACK</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'La stack utilisée dans mes projets React, Spring Boot et PostgreSQL, du développement à la livraison.' : 'The stack used in my React, Spring Boot and PostgreSQL projects, from development to delivery.'}</p><SkillsGrid locale={locale}/></article>;
}

