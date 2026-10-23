import type { ProjectSummary } from '../../content/projectIndex';

export function ProjectMeta({ project }: { project: ProjectSummary }) {
  return <ul className="tag-list" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>;
}

