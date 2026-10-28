import type { CaseStudyContent } from '../../content/caseStudies.fr';

const caseStudySections = {
  fr: [
    { key: 'context', label: 'Contexte du projet' },
    { key: 'objectives', label: 'Objectifs' },
    { key: 'role', label: 'Mon rôle' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'features', label: 'Fonctionnalités clés' },
    { key: 'implementation', label: 'Travail réalisé' },
    { key: 'outcomes', label: 'Résultats obtenus' },
    { key: 'publishedScope', label: 'Périmètre publié' },
    { key: 'technicalDecisions', label: 'Décisions techniques' }
  ],
  en: [
    { key: 'context', label: 'Project context' },
    { key: 'objectives', label: 'Objectives' },
    { key: 'role', label: 'My role' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'features', label: 'Key features' },
    { key: 'implementation', label: 'Implementation' },
    { key: 'outcomes', label: 'Outcomes' },
    { key: 'publishedScope', label: 'Published scope' },
    { key: 'technicalDecisions', label: 'Technical decisions' }
  ]
} as const;

export function CaseStudySections({ content, locale }: { content: CaseStudyContent; locale: 'fr' | 'en' }) {
  return <div className="case-grid">{caseStudySections[locale].map((section, index) => <section key={section.key}><span className="section-index">{String(index + 1).padStart(2, '0')}</span><h2>{section.label}</h2><p>{content[section.key]}</p></section>)}</div>;
}

