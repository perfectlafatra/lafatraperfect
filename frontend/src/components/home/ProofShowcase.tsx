import { useTranslation } from 'react-i18next';
import type { Locale } from '../../routes/publicRoutes';

/** The public Portfolio's own evidence sections, without coupling to other apps. */
export function ProofShowcase({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const items = locale === 'fr'
    ? [
        { id: '01', title: 'Architecture Full-Stack', text: 'Projets, décisions techniques et architecture présentés avec une séparation claire des responsabilités.' },
        { id: '02', title: 'Qualité et traçabilité', text: 'Études de cas, documentation et preuves présentées avec leur statut réel de vérification.' },
      ]
    : [
        { id: '01', title: 'Full-Stack architecture', text: 'Projects, design decisions and architecture presented with clear separation of concerns.' },
        { id: '02', title: 'Quality and traceability', text: 'Case studies, documentation and evidence presented with their actual verification status.' },
      ];
  return (
    <section className="section-shell" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="eyebrow">P0 / P1</p>
        <h2 id="proof-title">{t('home.proofTitle')}</h2>
        <p>{t('home.proofLead')}</p>
      </div>
      <div className="proof-grid">
        {items.map((item) => (
          <article className="proof-card" key={item.id}>
            <span>{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
