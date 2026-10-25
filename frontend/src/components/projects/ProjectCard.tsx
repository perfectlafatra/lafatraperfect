import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { ProjectSummary } from '../../content/projectIndex';
import { routePath, type Locale } from '../../routes/publicRoutes';
import { Card } from '../ui/Card';
import { ProjectMeta } from './ProjectMeta';
import { ProofStatus } from './ProofStatus';

export function ProjectCard({ project, locale, compact = false }: { project: ProjectSummary; locale: Locale; compact?: boolean }) {
  const { t } = useTranslation();
  return (
    <Card className={compact ? 'project-card project-card--compact' : 'project-card'}>
      <img className="project-card__cover" src={project.cover.src} alt={project.cover.alt[locale]} width="1200" height="675" loading="lazy" />
      <div>
        <p className="eyebrow">{project.kind[locale]}</p>
        <h3>{project.title[locale]}</h3>
        <p>{project.summary[locale]}</p>
        <ProjectMeta project={project} />
      </div>
      <div className="project-card__footer">
        <ProofStatus status={project.proofStatus} locale={locale} />
        <Link className="text-link" to={`${routePath('projects', locale)}/${project.slug}`}>
          {project.slug === 'mada-bmp' ? t('home.madaLink') : t('home.caseLink')}
        </Link>
      </div>
    </Card>
  );
}

