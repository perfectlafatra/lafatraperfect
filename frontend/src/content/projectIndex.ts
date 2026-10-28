export type ProjectSlug = 'react-localstorage' | 'lalana' | 'volatech' | 'zina-tsara-volo' | 'mada-bmp';
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

export interface ProjectResources {
  pdf: string;
  pptx: string;
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
  resources?: ProjectResources;
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
    ],
    resources: {
      pdf: portfolioAsset('documents/projects/lalana/Lalana_Etude_de_Cas_Publique_FINAL_SIGNEE.pdf'),
      pptx: portfolioAsset('documents/projects/lalana/Lalana_Etude_de_Cas_Publique_FINAL_SIGNEE.pptx')
    }
  },
  {
    slug: 'volatech',
    title: {
      fr: 'VolaTech — vente et retrait de produits',
      en: 'VolaTech — product sales and pickup'
    },
    kind: { fr: 'Projet académique Jakarta EE', en: 'Academic Jakarta EE project' },
    summary: {
      fr: 'Boutique de produits informatiques en Java 17 et Jakarta EE, du catalogue au retrait assisté par facture PDF et référence QR.',
      en: 'An IT product store built with Java 17 and Jakarta EE, from catalogue browsing to pickup supported by a PDF invoice and QR reference.'
    },
    technologies: ['Java 17', 'Jakarta EE', 'JSP / Servlets', 'JDBC', 'PostgreSQL'],
    proofStatus: 'documented',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: portfolioAsset('media/projects/volatech/01-boutique-panier.png'),
      alt: {
        fr: 'Catalogue de produits informatiques VolaTech avec le panier latéral ouvert',
        en: 'VolaTech IT product catalogue with the side cart open'
      },
      type: 'SCREENSHOT_REAL',
      provenance: 'Capture locale issue du dossier VolaTech fourni et autorisé par le propriétaire le 2026-10-28 ; données de démonstration.'
    },
    evidence: [
      {
        src: portfolioAsset('media/projects/volatech/02-retrait-qr.png'),
        alt: {
          fr: 'Écran de retrait assisté par QR dans l’administration VolaTech',
          en: 'QR-assisted pickup screen in the VolaTech administration area'
        },
        caption: {
          fr: 'Validation du retrait côté administration à partir de la référence portée par le QR ; les données visibles sont fictives ou floutées.',
          en: 'Administrator-side pickup validation using the reference carried by the QR; visible data is fictitious or blurred.'
        },
        width: 1902,
        height: 915,
        type: 'SCREENSHOT_REAL',
        provenance: 'Capture locale issue du dossier VolaTech fourni et autorisé par le propriétaire le 2026-10-28 ; données de démonstration floutées.'
      },
      {
        src: portfolioAsset('media/projects/volatech/03-facture-pdf.png'),
        alt: {
          fr: 'Facture PDF VolaTech avec référence QR et informations personnelles floutées',
          en: 'VolaTech PDF invoice with a QR reference and blurred personal information'
        },
        caption: {
          fr: 'Facture générée en PDF après la commande, avec référence QR pour retrouver le dossier lors du retrait.',
          en: 'PDF invoice generated after the order, with a QR reference used to retrieve the record at pickup.'
        },
        width: 736,
        height: 844,
        type: 'SCREENSHOT_REAL',
        provenance: 'Capture locale issue du dossier VolaTech fourni et autorisé par le propriétaire le 2026-10-28 ; données personnelles floutées.'
      }
    ],
    resources: {
      pdf: portfolioAsset('documents/projects/volatech/VolaTech_Etude_de_Cas_Publique_FINAL_SIGNEE.pdf'),
      pptx: portfolioAsset('documents/projects/volatech/VolaTech_Etude_de_Cas_Publique_FINAL_SIGNEE.pptx')
    }
  },
  {
    slug: 'zina-tsara-volo',
    title: {
      fr: 'ZINA by Tsara Volo — plateforme Web Full-Stack',
      en: 'ZINA by Tsara Volo — Full-Stack Web platform'
    },
    kind: { fr: 'Stage · projet Full-Stack', en: 'Internship · Full-Stack project' },
    summary: {
      fr: 'Projet de fin de Licence réalisé en stage en 2025 : commerce, services et relation client articulés avec React, Spring Boot et PostgreSQL.',
      en: 'Final Licence project completed during a 2025 internship: commerce, services and customer relations connected through React, Spring Boot and PostgreSQL.'
    },
    technologies: ['React', 'JavaScript', 'Spring Boot', 'PostgreSQL'],
    proofStatus: 'documented',
    demoVerified: false,
    demoUrl: null,
    cover: {
      src: portfolioAsset('media/projects/zina/01-accueil-zina.jpg'),
      alt: {
        fr: 'Page d’accueil publique de la plateforme ZINA by Tsara Volo',
        en: 'Public home page of the ZINA by Tsara Volo platform'
      },
      type: 'SCREENSHOT_REAL',
      provenance: 'Capture originale publiée dans l’étude de cas ZINA signée et autorisée par le propriétaire le 2026-10-28.'
    },
    evidence: [
      {
        src: portfolioAsset('media/projects/zina/02-services-zina.jpg'),
        alt: {
          fr: 'Catalogue public des services capillaires de ZINA',
          en: 'ZINA public hair-care services catalogue'
        },
        caption: {
          fr: 'Catalogue des services : présentation des prestations et accès aux parcours associés.',
          en: 'Services catalogue: presentation of treatments and access to related journeys.'
        },
        width: 1907,
        height: 895,
        type: 'SCREENSHOT_REAL',
        provenance: 'Capture originale publiée dans l’étude de cas ZINA signée et autorisée le 2026-10-28.'
      },
      {
        src: portfolioAsset('media/projects/zina/03-diagnostic-zina.jpg'),
        alt: {
          fr: 'Formulaire de diagnostic capillaire de ZINA',
          en: 'ZINA hair diagnosis form'
        },
        caption: {
          fr: 'Interface de diagnostic : collecte du profil capillaire et orientation des recommandations, sans revendiquer un modèle IA entraîné.',
          en: 'Diagnosis interface: hair-profile input and recommendation guidance, with no claim of a trained AI model.'
        },
        width: 1902,
        height: 909,
        type: 'SCREENSHOT_REAL',
        provenance: 'Capture originale publiée dans l’étude de cas ZINA signée et autorisée le 2026-10-28.'
      }
    ],
    resources: {
      pdf: portfolioAsset('documents/projects/zina/ZINA_Etude_de_Cas_Publique_FINAL_SIGNEE.pdf'),
      pptx: portfolioAsset('documents/projects/zina/ZINA_Etude_de_Cas_Publique_FINAL_SIGNEE.pptx')
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

const projectPriority: ProjectSlug[] = ['mada-bmp', 'zina-tsara-volo', 'lalana', 'volatech', 'react-localstorage'];

export const projects = [...projectEntries].sort(
  (left, right) => projectPriority.indexOf(left.slug) - projectPriority.indexOf(right.slug),
);

export function findProject(slug: string): ProjectSummary | undefined {
  return projects.find((project) => project.slug === slug);
}

