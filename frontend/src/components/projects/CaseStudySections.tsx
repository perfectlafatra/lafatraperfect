import type { StarCaseStudy } from '../../content/caseStudies.fr';

/** Étapes STAR enrichies : libellés bilingues par section. */
const starSteps = {
  fr: [
    { key: 'situation', label: 'S — Situation' },
    { key: 'tasks', label: 'T — Tâches' },
    { key: 'actions', label: 'A — Actions techniques' },
    { key: 'results', label: 'R — Résultats' },
    { key: 'limits', label: 'Limites et preuves' },
    { key: 'lessons', label: 'Enseignements' }
  ],
  en: [
    { key: 'situation', label: 'S — Situation' },
    { key: 'tasks', label: 'T — Tasks' },
    { key: 'actions', label: 'A — Technical actions' },
    { key: 'results', label: 'R — Results' },
    { key: 'limits', label: 'Limits and evidence' },
    { key: 'lessons', label: 'Lessons learned' }
  ]
} as const;

export function CaseStudySections({ content, locale }: { content: StarCaseStudy; locale: 'fr' | 'en' }) {
  return <div className="case-grid">{starSteps[locale].map((step, index) => <section key={step.key}><span className="section-index">0{index + 1}</span><h2>{step.label}</h2><p>{content[step.key]}</p></section>)}</div>;
}

