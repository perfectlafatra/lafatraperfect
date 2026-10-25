import { useTranslation } from 'react-i18next';
import { projects } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';
import { ProjectCard } from '../projects/ProjectCard';

export function FeaturedCases({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  return <section className="section-shell" aria-labelledby="cases-title"><div className="section-heading"><p className="eyebrow">PROJETS</p><h2 id="cases-title">{t('home.casesTitle')}</h2><p>{t('home.casesLead')}</p></div><div className="project-grid project-grid--featured">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} compact />)}</div></section>;
}

