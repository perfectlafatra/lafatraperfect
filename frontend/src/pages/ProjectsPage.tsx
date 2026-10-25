import { MetaTags } from '../components/seo/MetaTags';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../content/projectIndex';
import type { Locale } from '../routes/publicRoutes';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Projets' : 'Projects';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">{locale === 'fr' ? 'RÉALISATIONS' : 'SELECTED WORK'}</p><h1>{title}</h1><p className="page-lead">{locale === 'fr' ? 'Une sélection de projets web présentant mon rôle, le contexte, la stack utilisée et les résultats disponibles.' : 'A selection of web projects presenting my role, context, technology stack and available outcomes.'}</p><div className="project-grid project-grid--all">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale}/>)}</div></article>;
}

