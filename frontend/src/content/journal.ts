/**
 * Journal technique — contenu éditorial versionné avec le portfolio statique.
 * Les consommateurs utilisent uniquement les fonctions locales ci-dessous.
 */
import type { Locale } from "../routes/publicRoutes";

export type JournalCategory =
  | "architecture"
  | "backend"
  | "database"
  | "frontend"
  | "security"
  | "devops"
  | "method";

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
  /** Identifie les contenus de démonstration à remplacer par de vrais articles. */
  demo: true;
  publishedAt: string; // ISO date
  updatedAt: string;
  translation: Record<Locale, JournalPostTranslation>;
}

const P: JournalPost[] = [
  {
    slug: "architecture-fullstack-maintenable",
    category: "architecture",
    tags: ["architecture", "full-stack", "maintenabilité"],
    featured: true,
    demo: true,
    publishedAt: "2026-09-28",
    updatedAt: "2026-10-12",
    translation: {
      fr: {
        title: "Concevoir une architecture Full-Stack maintenable",
        summary:
          "Les principes concrets qui séparent proprement interface, services et données — et rendent un projet compréhensible six mois plus tard.",
        content: [
          "Une architecture maintenable ne se juge pas le jour du déploiement, mais six mois plus tard, quand une évolution mineure doit rester mineure.",
          "Trois frontières comptent plus que les autres : la séparation interface/services, la validation des données à chaque traversée, et la traçabilité des décisions. Dans ce portfolio comme dans mes projets, chaque couche a une responsabilité unique et documentée.",
          "Côté frontend, les composants ne connaissent ni l’API ni le format des réponses : une couche d’abstraction (client HTTP typé) s’en charge. Côté backend, les contrôleurs ne contiennent pas de logique métier : les services portent les règles, les repositories portent l’accès aux données.",
          "Enfin, toute décision structurante est journalisée avec son contexte. Une décision non documentée est une dette invisible — elle revient toujours, au pire moment.",
          "Cet article est signalé comme contenu de démonstration afin de distinguer une méthode générale d’un résultat de mission vérifié.",
        ],
      },
      en: {
        title: "Designing a maintainable full-stack architecture",
        summary:
          "The concrete principles that cleanly separate interface, services and data — and keep a project understandable six months later.",
        content: [
          "A maintainable architecture is not judged on deployment day, but six months later, when a minor change must stay minor.",
          "Three boundaries matter more than the others: the interface/services split, data validation at every crossing, and traceability of decisions. In this portfolio as in my projects, each layer has a single, documented responsibility.",
          "On the frontend, components know neither the API nor the response shapes: an abstraction layer (a typed HTTP client) handles that. On the backend, controllers contain no business logic: services carry the rules, repositories carry data access.",
          "Finally, every structural decision is logged with its context. An undocumented decision is invisible debt — it always comes back, at the worst time.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "api-rest-spring-boot",
    category: "backend",
    tags: ["Spring Boot", "REST", "API"],
    featured: true,
    demo: true,
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    translation: {
      fr: {
        title: "Structurer une API REST avec Spring Boot",
        summary:
          "Contrôleurs minces, DTO explicites, validation déclarative : comment une API reste lisible et prévisible à mesure qu’elle grandit.",
        content: [
          "Une API REST grandit vite : trois ressources suffisent à produire de l’ambiguïté si les conventions ne sont pas posées dès le premier endpoint.",
          "Les contrôleurs restent minces : ils reçoivent un DTO validé, délèguent à un service, retournent un DTO de réponse. Aucune entité de persistance ne traverse la frontière HTTP.",
          "La validation est déclarative (contraintes sur les DTO) et systématique : les erreurs sont normalisées par un gestionnaire global, avec des codes stables que le frontend peut traiter sans deviner.",
          "Les codes de statut sont choisis pour leur sémantique, non par commodité : 201 avec localisation pour une création, 409 pour un conflit d’idempotence, 429 pour une limitation de débit.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Structuring a REST API with Spring Boot",
        summary:
          "Thin controllers, explicit DTOs, declarative validation: how an API stays readable and predictable as it grows.",
        content: [
          "A REST API grows fast: three resources are enough to create ambiguity if conventions are not set from the first endpoint.",
          "Controllers stay thin: they receive a validated DTO, delegate to a service, return a response DTO. No persistence entity ever crosses the HTTP boundary.",
          "Validation is declarative (constraints on DTOs) and systematic: errors are normalised by a global handler with stable codes the frontend can handle without guessing.",
          "Status codes are chosen for their semantics, not convenience: 201 with location for creation, 409 for idempotency conflicts, 429 for rate limiting.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "postgresql-integrite-migrations",
    category: "database",
    tags: ["PostgreSQL", "Flyway", "données"],
    featured: true,
    demo: true,
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    translation: {
      fr: {
        title: "PostgreSQL : intégrité des données et migrations",
        summary:
          "Pourquoi les contraintes appartiennent à la base, et comment des migrations versionnées évitent les dérives silencieuses du schéma.",
        content: [
          "La cohérence des données est un contrat : soit il est appliqué par la base, soit il est espéré au niveau applicatif. La deuxième option finit toujours par échouer.",
          "Clés étrangères, contraintes d’unicité, colonnes NOT NULL : ces règles vivent dans PostgreSQL, pas dans le code. Les migrations Flyway versionnées rendent chaque évolution du schéma reproductible et auditable — V1 à V5 dans ce projet, chacune documentée et non destructive.",
          "Une migration destructrice est une décision exceptionnelle : elle exige une sauvegarde, un plan de retour arrière et une justification écrite.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "PostgreSQL: data integrity and migrations",
        summary:
          "Why constraints belong to the database, and how versioned migrations prevent silent schema drift.",
        content: [
          "Data consistency is a contract: either the database enforces it, or the application hopes for it. The second option always fails eventually.",
          "Foreign keys, unique constraints, NOT NULL columns: these rules live in PostgreSQL, not in code. Flyway versioned migrations make every schema change reproducible and auditable — V1 to V5 in this project, each documented and non-destructive.",
          "A destructive migration is an exceptional decision: it requires a backup, a rollback plan and a written justification.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "interface-react-responsive",
    category: "frontend",
    tags: ["React", "responsive", "CSS"],
    featured: false,
    demo: true,
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    translation: {
      fr: {
        title: "Construire une interface React responsive",
        summary:
          "Du mobile-first aux grands écrans : les techniques qui garantissent zéro débordement et une lisibilité constante, sans sacrifier la performance.",
        content: [
          "Un layout responsive n’est pas une liste de media queries : c’est un système de contraintes. Largeurs fluides, grilles auto-adaptatives, typographie en clamp().",
          "Ma méthode de contrôle : tester systématiquement à 360, 390, 768, 1024, 1440 et 1920 pixels, et vérifier l’absence de tout débordement horizontal. Un pixel de défilement latéral est un bug.",
          "Les images sont chargées paresseusement, les polices avec preconnect et display=swap, les librairies lourdes en import dynamique — Three.js dans ce portfolio pèse 0 octet dans le bundle initial.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Building a responsive React interface",
        summary:
          "From mobile-first to large screens: techniques that guarantee zero overflow and consistent readability without sacrificing performance.",
        content: [
          "A responsive layout is not a list of media queries: it is a system of constraints. Fluid widths, auto-adaptive grids, typography with clamp().",
          "My control method: systematically test at 360, 390, 768, 1024, 1440 and 1920 pixels, and verify the absence of any horizontal overflow. One pixel of lateral scrolling is a bug.",
          "Images lazy-load, fonts load with preconnect and display=swap, heavy libraries use dynamic import — Three.js in this portfolio weighs zero bytes in the initial bundle.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "securiser-authentification",
    category: "security",
    tags: ["sécurité", "sessions", "Spring Security"],
    featured: false,
    demo: true,
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
    translation: {
      fr: {
        title: "Sécuriser les parcours d’authentification",
        summary:
          "Sessions httpOnly, BCrypt, limitation des tentatives, CSRF : le socle minimal d’une authentification d’administration sérieuse.",
        content: [
          "Une authentification d’administration se juge sur ses échecs : que se passe-t-il après dix mots de passe erronés, un cookie volé, une requête forgée ?",
          "Le socle : mots de passe hachés avec BCrypt, session par cookie httpOnly et SameSite, limitation du nombre de tentatives par identifiant et par IP, protection CSRF pour toutes les mutations.",
          "Aucun JWT n’est nécessaire pour un backoffice à périmètre contrôlé : la session serveur reste plus simple à invalider et à auditer.",
          "La réinitialisation de mot de passe passe par des jetons à usage unique, à durée de vie courte, jamais révélateurs de l’existence d’un compte.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Securing authentication flows",
        summary:
          "httpOnly sessions, BCrypt, attempt throttling, CSRF: the minimal foundation of a serious admin authentication.",
        content: [
          "Admin authentication is judged by its failures: what happens after ten wrong passwords, a stolen cookie, a forged request?",
          "The foundation: passwords hashed with BCrypt, sessions via httpOnly SameSite cookies, attempt throttling per identifier and per IP, CSRF protection on all mutations.",
          "No JWT is needed for a controlled-scope back office: server sessions remain simpler to invalidate and audit.",
          "Password reset uses single-use, short-lived tokens that never reveal whether an account exists.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "documenter-projet-star",
    category: "method",
    tags: ["documentation", "STAR", "recrutement"],
    featured: false,
    demo: true,
    publishedAt: "2026-07-21",
    updatedAt: "2026-07-21",
    translation: {
      fr: {
        title: "Documenter un projet avec la méthode STAR",
        summary:
          "Situation, Tâches, Actions, Résultats : un cadre qui transforme un vécu technique en preuve lisible par un recruteur — sans gonfler les faits.",
        content: [
          "Un projet mal raconté ressemble à un projet mal fait. La méthode STAR impose l’ordre inverse du code : d’abord le contexte, ensuite les contraintes, enfin la solution.",
          "Ce que STAR prévient : la liste de technologies sans problème résolu, la métrique sans baseline, la « réalisation » sans périmètre réel.",
          "La discipline essentielle : chaque Résultat doit être relié à une preuve — dépôt, tests, captures autorisées — ou explicitement marqué comme non vérifiable.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Documenting a project with the STAR method",
        summary:
          "Situation, Tasks, Actions, Results: a framework that turns technical experience into recruiter-readable evidence — without inflating the facts.",
        content: [
          "A poorly told project looks like a poorly done project. The STAR method reverses the order of code: context first, then constraints, finally the solution.",
          "What STAR prevents: technology lists with no solved problem, metrics with no baseline, an “achievement” with no real scope.",
          "The essential discipline: every Result must be tied to evidence — repository, tests, authorised screenshots — or explicitly marked as unverifiable.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "tester-fiabiliser-fullstack",
    category: "method",
    tags: ["tests", "qualité", "CI"],
    featured: false,
    demo: true,
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    translation: {
      fr: {
        title: "Tester et fiabiliser une application Full-Stack",
        summary:
          "La pyramide appliquée honnêtement : tests unitaires ciblés, intégration sur les frontières, parcours critiques bout en bout — et rien de décoratif.",
        content: [
          "Un test décoratif consomme du temps de CI sans prévenir aucune régression. Chaque test doit répondre à la question : quelle régression précise détecte-t-il ?",
          "Ma répartition : unitaires sur la logique pure, intégration sur les frontières (API, base, authentification), parcours critiques bout en bout sur les flux qui font perdre de l’argent ou de la confiance.",
          "Dans ce projet : tests Vitest côté frontend, tests d’intégration Spring Boot côté backend, avec la base réelle quand la frontière le justifie.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Testing and hardening a full-stack application",
        summary:
          "The pyramid applied honestly: targeted unit tests, integration on boundaries, critical end-to-end paths — nothing decorative.",
        content: [
          "A decorative test consumes CI time without catching any regression. Every test must answer: which specific regression does it catch?",
          "My split: unit tests for pure logic, integration on boundaries (API, database, authentication), critical end-to-end paths for flows that lose money or trust.",
          "In this project: Vitest on the frontend, Spring Boot integration tests on the backend, with the real database where the boundary justifies it.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "preparer-deploiement",
    category: "devops",
    tags: ["déploiement", "Docker", "config"],
    featured: false,
    demo: true,
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    translation: {
      fr: {
        title: "Préparer une application pour le déploiement",
        summary:
          "Configuration par variable d’environnement, images reproductibles, migrations automatiques : ce qui sépare « ça marche chez moi » d’un déploiement sérieux.",
        content: [
          "Une application prête pour la production ne contient aucune valeur d’environnement codée en dur : URLs, secrets, ports et répertoires de médias viennent de la configuration.",
          "Les images Docker rendent l’exécution reproductible ; les migrations Flyway automatiques garantissent que le schéma suit le code ; les répertoires de médias restent extérieurs au build pour survivre aux redéploiements.",
          "Le critère de sortie : une installation neuve, à partir des seules variables documentées, produit un système fonctionnel identique.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Preparing an application for deployment",
        summary:
          "Environment-based configuration, reproducible images, automatic migrations: what separates “works on my machine” from a serious deployment.",
        content: [
          "A production-ready application contains no hard-coded environment values: URLs, secrets, ports and media directories all come from configuration.",
          "Docker images make execution reproducible; automatic Flyway migrations keep the schema aligned with the code; media directories live outside the build so they survive redeployments.",
          "The exit criterion: a fresh install, using only the documented variables, produces an identical working system.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "experience-bilingue-fr-en",
    category: "frontend",
    tags: ["i18n", "FR/EN", "contenu"],
    featured: false,
    demo: true,
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    translation: {
      fr: {
        title: "Concevoir une expérience bilingue FR/EN",
        summary:
          "Langue dans l’URL, parité de libellés testée, contenus éditoriaux par variante : ce qu’une vraie bilinguisme demande au-delà d’un fichier de traduction.",
        content: [
          "La langue appartient à l’URL (/fr, /en) : elle devient partageable, indexable et stable. Le changement de langue préserve la page courante.",
          "Un test de parité compare les arbres de clés FR et EN : une clé manquante est une régression bloquante, pas un détail.",
          "Les contenus éditoriaux (articles, études de cas) portent leurs variantes comme des données, pas comme des traductions générées à la lecture — une variante absente est affichée comme absente, jamais substituée en silence.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Designing a bilingual FR/EN experience",
        summary:
          "Language in the URL, tested label parity, editorial content per variant: what real bilingualism demands beyond a translation file.",
        content: [
          "The language belongs to the URL (/fr, /en): it becomes shareable, indexable and stable. Switching language preserves the current page.",
          "A parity test compares FR and EN key trees: a missing key is a blocking regression, not a detail.",
          "Editorial content (articles, case studies) carries its variants as data, not translations generated at read time — a missing variant is shown as missing, never silently substituted.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
  {
    slug: "resoudre-anomalie-technique",
    category: "method",
    tags: ["debug", "méthode", "post-mortem"],
    featured: false,
    demo: true,
    publishedAt: "2026-05-22",
    updatedAt: "2026-05-22",
    translation: {
      fr: {
        title: "Analyser et résoudre une anomalie technique",
        summary:
          "Reproduire d’abord, hypothèses ensuite, correction enfin : la discipline qui distingue un correctif durable d’un pansement.",
        content: [
          "La première étape d’une anomalie n’est pas le correctif : c’est la reproduction contrôlée. Sans reproduction, on ne sait pas ce qu’on corrige ni quand c’est fini.",
          "Ma séquence : reproduire, isoler la variable fautive, former une hypothèse falsifiable, corriger, puis ajouter le test qui aurait détecté le bug.",
          "Le post-mortem court (cause racine, détection, prévention) vaut plus qu’un correctif rapide sans leçon.",
          "Cet article est un contenu de démonstration : il sera remplacé par un retour d’expérience réel depuis le backoffice.",
        ],
      },
      en: {
        title: "Analysing and resolving a technical defect",
        summary:
          "Reproduce first, hypotheses second, fix last: the discipline that separates a durable fix from a plaster.",
        content: [
          "The first step of a defect is not the fix: it is controlled reproduction. Without reproduction, you don’t know what you are fixing or when you are done.",
          "My sequence: reproduce, isolate the faulty variable, form a falsifiable hypothesis, fix, then add the test that would have caught the bug.",
          "A short post-mortem (root cause, detection, prevention) is worth more than a fast fix with no lesson.",
          "This article is demo content: it will be replaced by a real experience report from the back office.",
        ],
      },
    },
  },
];

export function getAllPosts(): JournalPost[] {
  const sorted = [...P].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  return sorted;
}

export function findPost(slug: string): JournalPost | undefined {
  return P.find((post) => post.slug === slug);
}

export function getFeaturedPosts(count = 3): JournalPost[] {
  return [...P]
    .filter((post) => post.featured)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, count);
}
