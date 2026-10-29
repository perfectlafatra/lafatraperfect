import type { ProjectResources as ProjectResourcesData } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';

export function ProjectResources({ resources, locale }: { resources?: ProjectResourcesData; locale: Locale }) {
  if (!resources) return null;

  const copy = locale === 'fr'
    ? {
        eyebrow: 'Étude de cas technique',
        title: 'Explorer la réalisation',
        lead: 'Découvrez le contexte, les objectifs, l’architecture, les interfaces, les choix techniques et les limites documentées du projet.',
        viewPdf: 'Consulter l’étude de cas PDF',
        newTab: ' (s’ouvre dans un nouvel onglet)'
      }
    : {
        eyebrow: 'Technical case study',
        title: 'Explore the project',
        lead: 'Discover the context, objectives, architecture, interfaces, technical choices and documented limitations of the project.',
        viewPdf: 'View technical case study (PDF)',
        newTab: ' (opens in a new tab)'
      };

  return (
    <section className="project-resources" aria-labelledby="project-resources-title">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 id="project-resources-title">{copy.title}</h2>
      <p>{copy.lead}</p>
      <div className="button-row project-resources__actions">
        <a className="button button--primary" href={resources.pdf} target="_blank" rel="noopener noreferrer">
          {copy.viewPdf}<span className="sr-only">{copy.newTab}</span>
        </a>
      </div>
    </section>
  );
}
