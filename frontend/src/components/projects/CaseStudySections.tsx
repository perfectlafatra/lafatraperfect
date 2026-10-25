import type { CaseStudyContent } from '../../content/caseStudies.fr';

const caseStudySections = {
  fr: [
    { key: 'context', label: 'Contexte du projet' },
    { key: 'role', label: 'Mon rôle' },
    { key: 'implementation', label: 'Travail réalisé' },
    { key: 'outcomes', label: 'Résultats obtenus' },
    { key: 'publishedScope', label: 'Périmètre publié' },
    { key: 'technicalDecisions', label: 'Décisions techniques' }
  ],
  en: [
    { key: 'context', label: 'Project context' },
    { key: 'role', label: 'My role' },
    { key: 'implementation', label: 'Implementation' },
    { key: 'outcomes', label: 'Outcomes' },
    { key: 'publishedScope', label: 'Published scope' },
    { key: 'technicalDecisions', label: 'Technical decisions' }
  ]
} as const;

export function CaseStudySections({ content, locale }: { content: CaseStudyContent; locale: 'fr' | 'en' }) {
  return <div className="case-grid">{caseStudySections[locale].map((section, index) => <section key={section.key}><span className="section-index">0{index + 1}</span><h2>{section.label}</h2><p>{content[section.key]}</p></section>)}</div>;
}

