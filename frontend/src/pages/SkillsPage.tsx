import { MetaTags } from '../components/seo/MetaTags';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import type { Locale } from '../routes/publicRoutes';

export function SkillsPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Compétences' : 'Skills';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">STACK</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Java est mon domaine de prédilection, complété par React, les bases SQL et les outils de qualité nécessaires à une réalisation Full-Stack.' : 'Java is my primary focus, complemented by React, SQL databases and the quality tools needed for Full-Stack delivery.'}</p><SkillsGrid locale={locale}/></article>;
}

