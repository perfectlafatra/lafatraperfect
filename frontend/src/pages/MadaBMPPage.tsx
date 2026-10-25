import { Navigate } from 'react-router-dom';
import { CaseStudySections } from '../components/projects/CaseStudySections';
import { MetaTags } from '../components/seo/MetaTags';
import { ProjectMeta } from '../components/projects/ProjectMeta';
import { ProofStatus } from '../components/projects/ProofStatus';
import { caseStudiesEn } from '../content/caseStudies.en';
import { caseStudiesFr } from '../content/caseStudies.fr';
import { findProject } from '../content/projectIndex';
import type { Locale } from '../routes/publicRoutes';

export function MadaBMPPage({ locale }: { locale: Locale }) {
  const project = findProject('mada-bmp');
  if (!project) return <Navigate to={`/${locale}/404`} replace />;

  const content = locale === 'fr' ? caseStudiesFr['mada-bmp']! : caseStudiesEn['mada-bmp']!;

  return (
    <article className="page-shell case-study">
      <MetaTags title={project.title[locale]} description={project.summary[locale]} locale={locale} />
      <img className="case-study__cover" src={project.cover.src} alt={project.cover.alt[locale]} width="1200" height="675" />
      <p className="eyebrow">CASE STUDY</p>
      <h1>{project.title[locale]}</h1>
      <p className="page-lead">{project.summary[locale]}</p>
      <div className="case-study__meta">
        <ProofStatus status={project.proofStatus} locale={locale} />
        <ProjectMeta project={project} />
      </div>
      <CaseStudySections content={content} locale={locale} />
    </article>
  );
}
