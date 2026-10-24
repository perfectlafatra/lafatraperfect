/** Journal technique — notes versionnées avec le portfolio statique. */
import type { Locale } from '../routes/publicRoutes';

export type JournalCategory = 'architecture' | 'backend' | 'database' | 'frontend' | 'security' | 'devops' | 'method';

export interface JournalPostTranslation {
  title: string;
  summary: string;
  content: string[];
}

export interface JournalPost {
  slug: string;
  category: JournalCategory;
  tags: string[];
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  translation: Record<Locale, JournalPostTranslation>;
}

const P: JournalPost[] = [
  {
    slug: 'architecture-fullstack-maintenable', category: 'architecture', tags: ['architecture', 'full-stack', 'maintenabilité'], featured: true, publishedAt: '2026-09-28', updatedAt: '2026-10-12',
    translation: {
      fr: { title: 'Concevoir une architecture Full-Stack maintenable', summary: 'Séparer interface, services et données pour garder un projet compréhensible six mois plus tard.', content: ['Une architecture maintenable se juge quand une évolution mineure doit rester mineure, pas seulement le jour du déploiement.', 'Je pose trois frontières : interface/services, validation des données à chaque traversée et traçabilité des décisions. Chaque couche porte une responsabilité unique.', 'Les composants React consomment des contrats typés ; les contrôleurs Spring Boot délèguent aux services et les repositories restent responsables de l’accès aux données.', 'Les décisions structurantes sont journalisées avec leur contexte, leurs alternatives et leur conséquence sur les tests.'] },
      en: { title: 'Designing a maintainable full-stack architecture', summary: 'Separate interface, services and data so a project remains understandable six months later.', content: ['A maintainable architecture is judged when a small change stays small, not only on deployment day.', 'I set three boundaries: interface/services, validation at every crossing and decision traceability. Each layer owns one documented responsibility.', 'React components consume typed contracts; Spring Boot controllers delegate to services and repositories own data access.', 'Structural decisions are logged with their context, alternatives and impact on testing.'] },
    },
  },
  {
    slug: 'api-rest-spring-boot', category: 'backend', tags: ['Spring Boot', 'REST', 'API'], featured: true, publishedAt: '2026-09-14', updatedAt: '2026-09-14',
    translation: {
      fr: { title: 'Structurer une API REST avec Spring Boot', summary: 'Contrôleurs minces, DTO explicites et validation déclarative pour une API prévisible.', content: ['Une API grandit vite : les conventions doivent être posées dès le premier endpoint.', 'Un contrôleur reçoit un DTO validé, délègue au service et renvoie un DTO de réponse. Une entité de persistance ne traverse jamais directement HTTP.', 'Les erreurs sont normalisées par un gestionnaire global avec des codes stables, afin que le frontend n’ait pas à deviner.', 'Les statuts HTTP suivent leur sémantique : 201 pour une création, 409 pour un conflit d’idempotence et 429 pour une limitation.'] },
      en: { title: 'Structuring a REST API with Spring Boot', summary: 'Thin controllers, explicit DTOs and declarative validation for a predictable API.', content: ['An API grows quickly, so conventions must be defined from the first endpoint.', 'A controller receives a validated DTO, delegates to a service and returns a response DTO. Persistence entities never cross the HTTP boundary.', 'Errors are normalised by a global handler with stable codes so the frontend does not have to guess.', 'HTTP statuses follow their semantics: 201 for creation, 409 for an idempotency conflict and 429 for throttling.'] },
    },
  },
  {
    slug: 'postgresql-integrite-migrations', category: 'database', tags: ['PostgreSQL', 'Flyway', 'données'], featured: true, publishedAt: '2026-08-30', updatedAt: '2026-08-30',
    translation: {
      fr: { title: 'PostgreSQL : intégrité des données et migrations', summary: 'Faire respecter les invariants par la base et faire évoluer le schéma de manière reproductible.', content: ['La cohérence est un contrat : les règles critiques doivent être appliquées par PostgreSQL et vérifiées dans le code.', 'Clés étrangères, unicité et NOT NULL vivent dans le schéma. Les migrations Flyway versionnées rendent chaque évolution auditable et rejouable.', 'Une évolution sensible commence par une sauvegarde, un plan de retour arrière et une justification écrite.', 'Les tests d’intégration vérifient les frontières qui ne peuvent pas être prouvées par un test unitaire.'] },
      en: { title: 'PostgreSQL: data integrity and migrations', summary: 'Enforce invariants in the database and evolve the schema reproducibly.', content: ['Consistency is a contract: critical rules are enforced by PostgreSQL and checked in application code.', 'Foreign keys, uniqueness and NOT NULL belong in the schema. Versioned Flyway migrations make each change auditable and repeatable.', 'A sensitive change starts with a backup, a rollback plan and a written rationale.', 'Integration tests cover boundaries that a unit test cannot prove.'] },
    },
  },
  {
    slug: 'interface-react-responsive', category: 'frontend', tags: ['React', 'responsive', 'CSS'], featured: false, publishedAt: '2026-08-18', updatedAt: '2026-08-18',
    translation: {
      fr: { title: 'Construire une interface React responsive', summary: 'Du mobile-first aux grands écrans, conserver une hiérarchie lisible et zéro débordement.', content: ['Un layout responsive est un système de contraintes : largeurs fluides, grilles adaptatives et typographie avec clamp().', 'Je contrôle les vues à 360, 390, 768, 1024, 1440 et 1920 pixels et je considère tout débordement horizontal comme un bug.', 'Les médias hors écran sont différés, les dimensions sont réservées pour éviter le CLS et les bibliothèques lourdes ne sont chargées que lorsqu’elles servent une vue.', 'La compréhension ne dépend jamais d’un hover : les actions restent accessibles au clavier et au toucher.'] },
      en: { title: 'Building a responsive React interface', summary: 'From mobile-first to large screens, keep a clear hierarchy and zero overflow.', content: ['A responsive layout is a constraint system: fluid widths, adaptive grids and clamp-based typography.', 'I check views at 360, 390, 768, 1024, 1440 and 1920 pixels and treat horizontal overflow as a bug.', 'Below-the-fold media is deferred, dimensions are reserved to avoid CLS and heavy libraries load only when a view needs them.', 'Understanding never depends on hover: actions remain keyboard and touch accessible.'] },
    },
  },
  {
    slug: 'securiser-authentification', category: 'security', tags: ['sécurité', 'sessions', 'Spring Security'], featured: false, publishedAt: '2026-08-02', updatedAt: '2026-08-02',
    translation: {
      fr: { title: 'Sécuriser les parcours d’authentification', summary: 'Sessions httpOnly, BCrypt, limitation des tentatives et CSRF pour une surface privée maîtrisée.', content: ['Une authentification sérieuse est évaluée sur ses échecs : mots de passe erronés, cookie volé et requête forgée.', 'Le socle associe BCrypt, cookies httpOnly/SameSite, limitation par identifiant et IP, et protection CSRF pour les mutations.', 'Une session serveur est adaptée à une surface privée lorsque l’invalidation immédiate et l’audit priment sur la distribution.', 'La réinitialisation utilise des jetons à usage unique et de courte durée, sans révéler l’existence d’un compte.'] },
      en: { title: 'Securing authentication flows', summary: 'HttpOnly sessions, BCrypt, throttling and CSRF for a controlled private surface.', content: ['Serious authentication is evaluated by its failures: wrong passwords, stolen cookies and forged requests.', 'The foundation combines BCrypt, httpOnly/SameSite cookies, identifier and IP throttling, and CSRF protection on mutations.', 'A server session fits a private surface when immediate invalidation and auditability matter most.', 'Password reset uses short-lived single-use tokens without revealing whether an account exists.'] },
    },
  },
  {
    slug: 'documenter-projet-star', category: 'method', tags: ['documentation', 'STAR', 'recrutement'], featured: false, publishedAt: '2026-07-21', updatedAt: '2026-07-21',
    translation: {
      fr: { title: 'Documenter un projet avec la méthode STAR', summary: 'Transformer un vécu technique en preuve lisible sans gonfler les faits.', content: ['La méthode STAR impose le contexte avant la solution : situation, tâches, actions puis résultats.', 'Elle évite les listes de technologies sans problème résolu et les métriques sans point de comparaison.', 'Chaque résultat est relié à une preuve disponible : dépôt, tests, capture autorisée ou observation explicitement limitée.', 'Cette structure aide un recruteur à distinguer le rôle réellement tenu, les arbitrages et les compétences mobilisées.'] },
      en: { title: 'Documenting a project with the STAR method', summary: 'Turn technical experience into recruiter-readable evidence without inflating facts.', content: ['STAR puts context before solution: situation, tasks, actions and results.', 'It prevents technology lists with no solved problem and metrics with no baseline.', 'Each result is linked to available evidence: repository, tests, authorised capture or an explicitly bounded observation.', 'This structure helps a recruiter distinguish the actual role, trade-offs and skills used.'] },
    },
  },
  {
    slug: 'tester-fiabiliser-fullstack', category: 'method', tags: ['tests', 'qualité', 'CI'], featured: false, publishedAt: '2026-07-05', updatedAt: '2026-07-05',
    translation: {
      fr: { title: 'Tester et fiabiliser une application Full-Stack', summary: 'Répartir les tests là où ils détectent une régression précise.', content: ['Un test utile répond à une question de régression précise et reste compréhensible à la relecture.', 'Les tests unitaires couvrent la logique pure ; les tests d’intégration couvrent les frontières API, base et authentification.', 'Les parcours critiques sont vérifiés de bout en bout lorsqu’une rupture ferait perdre de la confiance ou des données.', 'La CI rejoue les mêmes commandes que le poste de développement afin de rendre le résultat reproductible.'] },
      en: { title: 'Testing and hardening a full-stack application', summary: 'Place tests where they catch a precise regression.', content: ['A useful test answers one precise regression question and remains readable during review.', 'Unit tests cover pure logic; integration tests cover API, database and authentication boundaries.', 'Critical paths are checked end to end when a break would lose trust or data.', 'CI runs the same commands as development so the result is reproducible.'] },
    },
  },
  {
    slug: 'preparer-deploiement', category: 'devops', tags: ['déploiement', 'Docker', 'config'], featured: false, publishedAt: '2026-06-20', updatedAt: '2026-06-20',
    translation: {
      fr: { title: 'Préparer une application pour le déploiement', summary: 'Rendre la configuration, le build et la publication reproductibles.', content: ['Les URLs, ports et secrets viennent de la configuration et ne sont jamais codés dans le bundle public.', 'Les images et scripts reproductibles réduisent l’écart entre développement, recette et production.', 'Une installation neuve doit fonctionner avec les seules variables documentées et produire le même artefact.', 'Pour ce portfolio statique, GitHub Actions construit puis publie dist sur GitHub Pages après les vérifications locales.'] },
      en: { title: 'Preparing an application for deployment', summary: 'Make configuration, builds and publication reproducible.', content: ['URLs, ports and secrets come from configuration and never enter the public bundle.', 'Reproducible images and scripts reduce the gap between development, QA and production.', 'A fresh installation must work with only documented variables and produce the same artifact.', 'For this static portfolio, GitHub Actions builds and publishes dist to GitHub Pages after local checks.'] },
    },
  },
  {
    slug: 'experience-bilingue-fr-en', category: 'frontend', tags: ['i18n', 'FR/EN', 'contenu'], featured: false, publishedAt: '2026-06-04', updatedAt: '2026-06-04',
    translation: {
      fr: { title: 'Concevoir une expérience bilingue FR/EN', summary: 'Stabiliser les URLs, la parité des libellés et les contenus éditoriaux par langue.', content: ['La langue appartient à l’URL (/fr, /en) : elle devient partageable, indexable et stable.', 'Un test de parité compare les arbres de clés français et anglais ; une clé manquante est une régression visible.', 'Les études de cas et le journal portent leurs variantes comme des données éditoriales versionnées.', 'Le sélecteur de langue conserve la page courante lorsque le slug existe dans les deux langues.'] },
      en: { title: 'Designing a bilingual FR/EN experience', summary: 'Stabilise URLs, label parity and editorial content per language.', content: ['Language belongs in the URL (/fr, /en), making it shareable, indexable and stable.', 'A parity test compares French and English key trees; a missing key is a visible regression.', 'Case studies and journal posts carry their variants as versioned editorial data.', 'The language switcher keeps the current page when the slug exists in both languages.'] },
    },
  },
];

export function getAllPosts(): JournalPost[] {
  return [...P].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function findPost(slug: string): JournalPost | undefined {
  return P.find((post) => post.slug === slug);
}

export function getFeaturedPosts(count = 3): JournalPost[] {
  return [...P].filter((post) => post.featured).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, count);
}
