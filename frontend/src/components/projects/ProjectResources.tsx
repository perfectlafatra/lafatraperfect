import type { ProjectResources as ProjectResourcesData } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';

export function ProjectResources({ resources, locale }: { resources?: ProjectResourcesData; locale: Locale }) {
  if (!resources) return null;

  const copy = locale === 'fr'
    ? {
        eyebrow: 'Dossier public signé',
        title: 'Consulter les preuves du projet',
        lead: 'L’étude complète documente le contexte, l’architecture, les interfaces et les limites vérifiées.',
        viewPdf: 'Consulter le PDF',
        downloadPdf: 'Télécharger le PDF',
        downloadPptx: 'Télécharger le PowerPoint (.pptx)'
      }
    : {
        eyebrow: 'Signed public record',
        title: 'Review the project evidence',
        lead: 'The complete study documents the context, architecture, interfaces and verified limitations.',
        viewPdf: 'View the PDF',
        downloadPdf: 'Download the PDF',
        downloadPptx: 'Download the PowerPoint (.pptx)'
      };

  return (
    <section className="project-resources" aria-labelledby="project-resources-title">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 id="project-resources-title">{copy.title}</h2>
      <p>{copy.lead}</p>
      <div className="button-row project-resources__actions">
        <a className="button button--primary" href={resources.pdf} target="_blank" rel="noopener noreferrer">
          {copy.viewPdf}
        </a>
        <a className="button button--secondary" href={resources.pdf} download>
          {copy.downloadPdf}
        </a>
        <a className="button button--secondary" href={resources.pptx} download>
          {copy.downloadPptx}
        </a>
      </div>
    </section>
  );
}
