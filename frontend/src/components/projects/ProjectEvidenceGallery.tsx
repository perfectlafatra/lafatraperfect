import type { ProjectEvidenceAsset } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';

const labels = {
  fr: {
    title: 'Interfaces documentées',
    lead: 'Captures de rendus locaux sélectionnées pour montrer les parcours et les rôles couverts.'
  },
  en: {
    title: 'Documented interfaces',
    lead: 'Selected local-render captures showing the covered journeys and roles.'
  }
} as const;

export function ProjectEvidenceGallery({
  assets,
  locale
}: {
  assets: ProjectEvidenceAsset[] | undefined;
  locale: Locale;
}) {
  if (!assets?.length) return null;

  const titleId = 'project-evidence-title';

  return (
    <section className="project-evidence" aria-labelledby={titleId}>
      <div className="project-evidence__heading">
        <p className="eyebrow">{locale === 'fr' ? 'Preuves visuelles' : 'Visual evidence'}</p>
        <h2 id={titleId}>{labels[locale].title}</h2>
        <p>{labels[locale].lead}</p>
      </div>
      <div className="project-evidence__grid">
        {assets.map((asset) => (
          <figure key={asset.src} className="project-evidence__item">
            <img
              src={asset.src}
              alt={asset.alt[locale]}
              width={asset.width}
              height={asset.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{asset.caption[locale]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
