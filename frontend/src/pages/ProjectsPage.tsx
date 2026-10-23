import { MetaTags } from '../components/seo/MetaTags';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../content/projectIndex';
import type { Locale } from '../routes/publicRoutes';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Projets' : 'Projects';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">WORK / EVIDENCE</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Trois études historiques et une réalisation distincte, avec un statut de preuve explicite.' : 'Three historical studies and one separate product, each with an explicit evidence status.'}</p><div className="project-grid project-grid--all">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale}/>)}</div></article>;
}

