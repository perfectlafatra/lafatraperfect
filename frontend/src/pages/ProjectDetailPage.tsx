import { Navigate, useParams } from 'react-router-dom';
import { CaseStudySections } from '../components/projects/CaseStudySections';
import { ProjectMeta } from '../components/projects/ProjectMeta';
import { ProofStatus } from '../components/projects/ProofStatus';
import { MetaTags } from '../components/seo/MetaTags';
import { caseStudiesEn } from '../content/caseStudies.en';
import { caseStudiesFr } from '../content/caseStudies.fr';
import { findProject } from '../content/projectIndex';
import { routePath, type Locale } from '../routes/publicRoutes';

export function ProjectDetailPage({ locale }: { locale: Locale }) {
  const { slug = '' } = useParams();
  if (slug === 'mada-bmp') return <Navigate to={`${routePath('projects', locale)}/mada-bmp`} replace/>;
  const project = findProject(slug);
  const content = (locale === 'fr' ? caseStudiesFr : caseStudiesEn)[slug as keyof typeof caseStudiesFr];
  if (!project || !content) return <Navigate to={`/${locale}/404`} replace/>;
  return <article className="page-shell case-study"><MetaTags title={project.title[locale]} description={project.summary[locale]} locale={locale}/><img className="case-study__cover" src={project.cover.src} alt={project.cover.alt[locale]} width="1200" height="675"/><p className="eyebrow">{project.kind[locale]}</p><h1>{project.title[locale]}</h1><p className="page-lead">{project.summary[locale]}</p><div className="case-study__meta"><ProofStatus status={project.proofStatus} locale={locale}/><ProjectMeta project={project}/></div><CaseStudySections content={content} locale={locale}/></article>;
}

