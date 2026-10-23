import { MetaTags } from '../components/seo/MetaTags';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import type { Locale } from '../routes/publicRoutes';

export function SkillsPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Compétences' : 'Skills';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">CAPABILITIES</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Des technologies reliées à des décisions, des tests et des livrables observables.' : 'Technologies connected to decisions, tests and observable deliverables.'}</p><SkillsGrid locale={locale}/></article>;
}

