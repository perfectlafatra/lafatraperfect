import type { Locale } from '../../routes/publicRoutes';

const groups = [
  {
    title: { fr: 'Java & Backend', en: 'Java & Backend' },
    items: ['Java · POO', 'Spring Boot · MVC · Security', 'Jakarta EE · Servlets · JSP · JDBC', 'API REST · JSON · HTTP/HTTPS', 'Analyse technique · débogage · résolution de problèmes']
  },
  {
    title: { fr: 'Données, tests & outils', en: 'Data, testing & tools' },
    items: ['PostgreSQL · MySQL · SQL', 'Modélisation relationnelle', 'Postman · tests Backend et API', 'Git · GitHub · Docker', 'Windows · Ubuntu Linux']
  },
  {
    title: { fr: 'Full-Stack & intégration', en: 'Full-Stack & integration' },
    items: ['React · Vite', 'JavaScript · TypeScript', 'HTML/CSS · Tailwind · Bootstrap', 'Contrats client/serveur · intégration API', 'Documentation technique FR/EN · anglais technique']
  }
];

export function SkillsGrid({ locale }: { locale: Locale }) {
  return <div className="skills-grid">{groups.map((group) => <section key={group.title.en}><p className="eyebrow">{group.title[locale]}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="skills-grid__proof">{locale === 'fr' ? 'Compétences issues du CV et contextualisées dans les projets présentés.' : 'Skills from the résumé and contextualised through the featured projects.'}</p></section>)}</div>;
}

