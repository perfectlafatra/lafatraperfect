import type { Locale } from '../../routes/publicRoutes';

const groups = [
  {
    title: { fr: 'Java & Backend', en: 'Java & Backend' },
    items: [
      { fr: 'Java · POO', en: 'Java · OOP' },
      { fr: 'Spring Boot · MVC · Security', en: 'Spring Boot · MVC · Security' },
      { fr: 'Jakarta EE · Servlets · JSP · JDBC', en: 'Jakarta EE · Servlets · JSP · JDBC' },
      { fr: 'Python · FastAPI', en: 'Python · FastAPI' },
      { fr: 'API REST · JSON · HTTP/HTTPS', en: 'REST APIs · JSON · HTTP/HTTPS' },
      { fr: 'Analyse technique · débogage · résolution de problèmes', en: 'Technical analysis · debugging · problem solving' }
    ]
  },
  {
    title: { fr: 'Données, tests & outils', en: 'Data, testing & tools' },
    items: [
      { fr: 'PostgreSQL · MySQL · SQL', en: 'PostgreSQL · MySQL · SQL' },
      { fr: 'Modélisation relationnelle', en: 'Relational modelling' },
      { fr: 'Analyse décisionnelle et prédictive · science des données · notions d’IA', en: 'Decision and predictive analysis · data science · AI concepts' },
      { fr: 'Postman · tests Backend et API', en: 'Postman · backend and API testing' },
      { fr: 'Git · GitHub · Docker', en: 'Git · GitHub · Docker' },
      { fr: 'Windows · Ubuntu Linux', en: 'Windows · Ubuntu Linux' }
    ]
  },
  {
    title: { fr: 'Full-Stack & intégration', en: 'Full-Stack & integration' },
    items: [
      { fr: 'React · Vite', en: 'React · Vite' },
      { fr: 'JavaScript · TypeScript', en: 'JavaScript · TypeScript' },
      { fr: 'HTML/CSS · Tailwind · Bootstrap', en: 'HTML/CSS · Tailwind · Bootstrap' },
      { fr: 'TCP/UDP · client-serveur · WebSocket', en: 'TCP/UDP · client-server · WebSocket' },
      { fr: 'Contrats client/serveur · intégration API', en: 'Client-server contracts · API integration' },
      { fr: 'Tests · débogage · sécurité · intégration', en: 'Testing · debugging · security · integration' },
      { fr: 'Documentation technique FR/EN · anglais technique', en: 'FR/EN technical documentation · technical English' }
    ]
  }
];

export function SkillsGrid({ locale }: { locale: Locale }) {
  return <div className="skills-grid">{groups.map((group) => <section key={group.title.en}><p className="eyebrow">{group.title[locale]}</p><ul>{group.items.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul><p className="skills-grid__proof">{locale === 'fr' ? 'Compétences issues du CV et contextualisées dans les projets présentés.' : 'Skills from the résumé and contextualised through the featured projects.'}</p></section>)}</div>;
}

