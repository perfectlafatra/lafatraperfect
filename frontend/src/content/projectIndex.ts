export type ProjectSlug = 'react-localstorage' | 'lalana' | 'zina-tsara-volo' | 'mada-bmp';
export type EvidenceStatus = 'documented' | 'demo-simulated' | 'live-verified' | 'in-progress';

export interface CoverAsset {
  src: string;
  alt: { fr: string; en: string };
  type: 'ILLUSTRATION_ORIGINAL' | 'ILLUSTRATION_AI' | 'THIRD_PARTY';
  provenance: string;
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
}

export const projects: ProjectSummary[] = [
  {
    slug: 'react-localstorage',
    title: { fr: 'React localStorage', en: 'React localStorage' },
    kind: { fr: 'Étude de cas historique', en: 'Historical case study' },
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
    title: { fr: 'lalana', en: 'lalana' },
    kind: { fr: 'Étude de cas historique', en: 'Historical case study' },
    summary: {
      fr: 'Projet web Spring Boot et Thymeleaf présenté comme étude de cas à compléter par des preuves autorisées.',
      en: 'A Spring Boot and Thymeleaf web project presented as a case study awaiting authorised evidence.'
    },
    technologies: ['Spring Boot', 'Thymeleaf'],
    proofStatus: 'in-progress',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      alt: { fr: 'Illustration conceptuelle d’une architecture web côté serveur', en: 'Conceptual illustration of a server-rendered web architecture' },
      type: 'THIRD_PARTY',
      provenance: 'Unsplash CDN — illustration conceptuelle, aucune capture client; licence à vérifier avant publication.'
    }
  },
  {
    slug: 'zina-tsara-volo',
    title: { fr: 'Zina by Tsara Volo', en: 'Zina by Tsara Volo' },
    kind: { fr: 'Étude de cas historique', en: 'Historical case study' },
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
    kind: { fr: 'Réalisation distincte', en: 'Separate product' },
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

export function findProject(slug: string): ProjectSummary | undefined {
  return projects.find((project) => project.slug === slug);
}

