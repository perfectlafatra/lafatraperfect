import type { Locale } from '../../routes/publicRoutes';

const groups = [
  { title: 'Frontend', items: ['React 18', 'TypeScript strict', 'Vite 5', 'Tailwind CSS 3', 'Accessibilité'] },
  { title: 'Backend', items: ['Java 17', 'Spring Boot 4', 'Spring Security', 'REST', 'Validation'] },
  { title: 'Data & delivery', items: ['PostgreSQL 18', 'MySQL', 'Flyway', 'Docker', 'Git', 'QA automatisée'] }
];

export function SkillsGrid({ locale }: { locale: Locale }) {
  return <div className="skills-grid">{groups.map((group) => <section key={group.title}><p className="eyebrow">{group.title}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="skills-grid__proof">{locale === 'fr' ? 'Utilisé dans les projets présentés.' : 'Used in the featured projects.'}</p></section>)}</div>;
}

