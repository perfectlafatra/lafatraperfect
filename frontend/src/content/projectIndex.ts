export type ProjectSlug = 'react-localstorage' | 'lalana' | 'zina-tsara-volo' | 'mada-bmp';
export type EvidenceStatus = 'documented' | 'demo-simulated' | 'live-verified' | 'in-progress';
export type MediaEvidenceType = 'SCREENSHOT_REAL' | 'ILLUSTRATION_ORIGINAL' | 'ILLUSTRATION_AI' | 'THIRD_PARTY';

export interface CoverAsset {
  src: string;
  alt: { fr: string; en: string };
  type: MediaEvidenceType;
  provenance: string;
}

export interface ProjectEvidenceAsset extends CoverAsset {
  caption: { fr: string; en: string };
  width: number;
  height: number;
}

export interface ProjectSummary {
  slug: ProjectSlug;
  title: { fr: string; en: string };
  kind: { fr: string; en: string };
  summary: { fr: string; en: string };
  technologies: string[];
  proofStatus: EvidenceStatus;
  demoVerified: boolean;
  demoUrl: string | null;
  cover: CoverAsset;
  evidence?: ProjectEvidenceAsset[];
}

const portfolioAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const projectEntries: ProjectSummary[] = [
  {
    slug: 'react-localstorage',
    title: { fr: 'React localStorage', en: 'React localStorage' },
    kind: { fr: 'Projet Frontend', en: 'Frontend project' },
    summary: {
      fr: 'Application React locale documentée autour de la persistance navigateur.',
      en: 'A documented local React application centred on browser persistence.'
    },
    technologies: ['React', 'JavaScript', 'localStorage'],
    proofStatus: 'documented',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
      alt: { fr: 'Illustration conceptuelle d’une interface React avec état local', en: 'Conceptual illustration of a React interface with local state' },
      type: 'THIRD_PARTY',
      provenance: 'Unsplash CDN — illustration conceptuelle, non capture du projet; licence à vérifier avant publication.'
    }
  },
  {
    slug: 'lalana',
    title: { fr: 'Lalana — Nosy Be Travel Agency', en: 'Lalana — Nosy Be Travel Agency' },
    kind: { fr: 'Projet académique Java', en: 'Academic Java project' },
    summary: {
      fr: 'Application de réservation touristique documentée à travers ses parcours publics, son authentification et ses interfaces de gestion par rôles.',
      en: 'A travel booking application documented through its public journeys, authentication and role-based management interfaces.'
    },
    technologies: ['Java 17', 'Spring Boot 3.4', 'Thymeleaf', 'Spring Data JPA', 'PostgreSQL'],
    proofStatus: 'documented',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: portfolioAsset('media/projects/lalana/01-accueil-desktop.png'),
      alt: {
        fr: 'Page d’accueil desktop de Lalana — Nosy Be Travel Agency',
        en: 'Desktop home page of Lalana — Nosy Be Travel Agency'
      },
      type: 'SCREENSHOT_REAL',
      provenance: 'Capture locale fournie et autorisée par le propriétaire le 2026-10-28.'
    },
    evidence: [
      {
        src: portfolioAsset('media/projects/lalana/04-connexion.png'),
        alt: {
          fr: 'Écran de connexion Lalana avec email, mot de passe et liens de récupération et inscription',
          en: 'Lalana sign-in screen with email, password, recovery and registration links'
        },
        caption: {
          fr: 'Parcours d’authentification : connexion, récupération du mot de passe et accès à l’inscription.',
          en: 'Authentication journey: sign-in, password recovery and access to registration.'
        },
        width: 1440,
        height: 920,
        type: 'SCREENSHOT_REAL',
        provenance: 'Capture locale fournie et autorisée par le propriétaire le 2026-10-28.'
      },
      {
        src: portfolioAsset('media/projects/lalana/apercu-interfaces.jpg'),
        alt: {
          fr: 'Planche des interfaces publiques, client, gestionnaire et administration de Lalana',
          en: 'Overview board of Lalana public, customer, manager and administration interfaces'
        },
        caption: {
          fr: 'Étendue des interfaces documentées : accueil, services, connexion, dashboards, circuits et réservations.',
          en: 'Documented interface coverage: home, services, sign-in, dashboards, tours and bookings.'
        },
        width: 1320,
        height: 1760,
        type: 'SCREENSHOT_REAL',
        provenance: 'Planche locale fournie et autorisée par le propriétaire le 2026-10-28.'
      }
    ]
  },
  {
    slug: 'zina-tsara-volo',
    title: { fr: 'Zina by Tsara Volo', en: 'Zina by Tsara Volo' },
    kind: { fr: 'Stage · projet Full-Stack', en: 'Internship · Full-Stack project' },
    summary: {
      fr: 'Stage du 16 juin au 16 septembre 2025 : plateforme web ZINA documentée côté React/JavaScript et Spring Boot/PostgreSQL, sans donnée client publiée.',
      en: 'Internship from 16 June to 16 September 2025: ZINA web platform documented with React/JavaScript and Spring Boot/PostgreSQL, with no client data published.'
    },
    technologies: ['React', 'JavaScript', 'Spring Boot', 'PostgreSQL'],
    proofStatus: 'documented',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      alt: { fr: 'Illustration conceptuelle d’une plateforme web de soins capillaires', en: 'Conceptual illustration of a hair-care web platform' },
      type: 'THIRD_PARTY',
      provenance: 'Unsplash CDN — illustration conceptuelle remplaçant toute capture ZINA non autorisée; licence à vérifier avant publication.'
    }
  },
  {
    slug: 'mada-bmp',
    title: { fr: 'Mada-BMP', en: 'Mada-BMP' },
    kind: { fr: 'Projet Full-Stack', en: 'Full-Stack project' },
    summary: {
      fr: 'Plateforme de gestion pour indépendants et petites structures, indépendante de ce portfolio.',
      en: 'A management platform for independent professionals and small organisations, separate from this portfolio.'
    },
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    proofStatus: 'in-progress',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      alt: { fr: 'Illustration conceptuelle d’un flux de gestion pour une application full-stack', en: 'Conceptual illustration of a management flow for a full-stack application' },
      type: 'THIRD_PARTY',
      provenance: 'Unsplash CDN — illustration conceptuelle, pas une preuve de production; licence à vérifier avant publication.'
    }
  }
];

const projectPriority: ProjectSlug[] = ['mada-bmp', 'zina-tsara-volo', 'react-localstorage', 'lalana'];

export const projects = [...projectEntries].sort(
  (left, right) => projectPriority.indexOf(left.slug) - projectPriority.indexOf(right.slug),
);

export function findProject(slug: string): ProjectSummary | undefined {
  return projects.find((project) => project.slug === slug);
}

