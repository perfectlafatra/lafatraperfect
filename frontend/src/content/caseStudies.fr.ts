/** Contenus des études de cas destinés à une lecture de recrutement. */
export interface CaseStudyContent {
  context: string;
  objectives: string;
  role: string;
  architecture: string;
  features: string;
  implementation: string;
  outcomes: string;
  publishedScope: string;
  technicalDecisions: string;
}

export const caseStudiesFr: Record<string, CaseStudyContent> = {
  lalana: {
    context:
      'Projet académique réalisé en 2025, Lalana est une application web de réservation touristique pensée pour présenter l’offre de Nosy Be et organiser des parcours distincts pour les visiteurs, les clients et les profils de gestion.',
    objectives:
      'Centraliser la découverte des circuits, destinations et vols, organiser la réservation et donner à chaque profil une interface adaptée à ses responsabilités.',
    role:
      'Concevoir les parcours, intégrer les vues Thymeleaf et structurer les espaces visiteur, client, gestionnaire et administrateur au sein d’une application Java Spring Boot.',
    architecture:
      'Architecture Spring MVC rendue côté serveur : vues Thymeleaf, contrôleurs, services Java, repositories Spring Data JPA et PostgreSQL. Spring Security porte les accès par rôle.',
    features:
      'Catalogue touristique, authentification, réservations de circuit ou de vol, espaces Client, Gestionnaire et Administrateur, tableaux de bord et indicateurs Chart.js.',
    implementation:
      'Organisation en couches avec contrôleurs Spring MVC, services métier, repositories Spring Data JPA et modèles persistés dans PostgreSQL. Les vues couvrent l’accueil, les services, la connexion et des espaces de gestion pour les circuits, destinations, réservations, vols et utilisateurs.',
    outcomes:
      'Sept états d’interface distincts documentent le résultat : accueil, services, connexion, dashboard administrateur, dashboard gestionnaire, gestion des circuits et réservations client.',
    publishedScope:
      'Le code source audité et les captures de rendus locaux constituent les preuves présentées. Aucune démonstration publique, donnée réelle ou disponibilité en production n’est revendiquée.',
    technicalDecisions:
      'Rendu serveur avec Thymeleaf, persistance JPA/PostgreSQL et accès différenciés avec Spring Security et BCrypt. La revue du code a aussi identifié le durcissement restant avant production : protection CSRF, restriction des routes de diagnostic et finalisation de certains services de réservation.'
  },
  volatech: {
    context:
      'Projet académique réalisé en 2025, VolaTech répond à un scénario complet de boutique de produits informatiques : consulter le catalogue, gérer un panier, commander, suivre ses achats puis préparer le retrait.',
    objectives:
      'Relier catalogue, panier, commande, validation administrative, facturation et retrait dans un parcours e-commerce cohérent et traçable.',
    role:
      'Concevoir les parcours client et administrateur, structurer le domaine e-commerce et relier les interfaces JSP aux traitements Java et aux données PostgreSQL.',
    architecture:
      'Application Java Web traditionnelle empaquetée en WAR : JSP/JSTL pour les vues, Servlets pour HTTP, services Java, repositories JDBC et PostgreSQL via DataSource WildFly.',
    features:
      'Catalogue et panier, historique de commandes, paiement simulé avec référence interne, validation en caisse, facture PDF et référence QR pour assister le retrait.',
    implementation:
      'Architecture en couches avec Servlets pour les routes HTTP, JSP/JSTL pour le rendu, services métier et repositories JDBC alimentés par un DataSource PostgreSQL. Les sessions distinguent les accès USER et ADMIN ; les mots de passe passent par BCrypt et les requêtes observées utilisent des PreparedStatement.',
    outcomes:
      'Le parcours documenté couvre le catalogue, le panier, l’historique de commandes, le paiement simulé, la validation administrative, la facture PDF et la référence QR utilisée pour assister le retrait.',
    publishedScope:
      'Les preuves reposent sur le dossier public signé et les captures locales fournies. Le paiement est simulé, le QR n’est pas une preuve cryptographique signée et aucune disponibilité en production n’est revendiquée.',
    technicalDecisions:
      'Java 17 et Jakarta EE sont empaquetés en WAR Maven pour WildFly. La persistance réellement observée est principalement JDBC, même si Hibernate/JPA figure dans le projet. La facture est produite en PDF avec iText html2pdf ; le QR transporte une référence de dossier et n’est pas présenté comme une preuve cryptographique signée.'
  },
  'zina-tsara-volo': {
    context:
      'Projet de fin de Licence en Développement d’Applications Internet/Intranet (DA2I), réalisé en stage chez ZINA by Tsara Volo en 2025, autour de la digitalisation de la boutique, des services et de la relation client.',
    objectives:
      'Articuler quatre domaines dans une même expérience : commerce, services et rendez-vous, relation client et pilotage interne, avec des parcours Public, Client et ADMIN.',
    role:
      'Concevoir et documenter les parcours, contribuer aux interfaces React et relier leur organisation aux services Spring Boot et au modèle PostgreSQL, sans exposer de données clients réelles.',
    architecture:
      'Frontend React/Vite et backend Spring Boot séparés par une API REST JSON, avec services métier, Spring Data JPA et PostgreSQL. Les permissions doivent être contrôlées côté API.',
    features:
      'Site public, boutique, panier, rendez-vous, diagnostic capillaire, blog, espace Client et vues CRM ADMIN. Les écrans CRM et certaines statistiques utilisent des scénarios fictifs signalés.',
    implementation:
      'Structuration des interfaces React, formulaires et navigation FR/EN, lecture des contrats REST, organisation des parcours boutique/rendez-vous et présentation anonymisée des vues CRM.',
    outcomes:
      'Des interfaces publiques et métier cohérentes couvrent les principaux parcours documentés. Les captures publiées proviennent de l’étude de cas signée et ne contiennent pas de donnée client réelle.',
    publishedScope:
      'Les vues Client et CRM présentées dans le dossier public sont des démonstrations à données fictives. Aucun déploiement, paiement automatisé, modèle IA entraîné ni recette E2E complète n’est affirmé.',
    technicalDecisions:
      'Séparation entre composants React, contrats REST Spring Boot et persistance PostgreSQL, avec anonymisation systématique du contenu publiable.'
  },
  'mada-bmp': {
    context:
      'Projet académique de Master 1 en cours, Mada-BMP répond aux besoins d’indépendants et de petites structures qui gèrent encore leurs opérations avec des outils dispersés : tableurs, notes et messageries.',
    objectives:
      'Unifier les flux client, prestation, facture, paiement déclaré et justificatif, puis fournir une aide à l’analyse sans déplacer les règles métier ni les autorisations hors du backend Java.',
    role:
      'Concevoir et développer l’architecture full-stack, les parcours React, les contrats REST Spring Boot, le modèle PostgreSQL et l’intégration progressive d’un service interne Python/FastAPI pour l’analyse.',
    architecture:
      'Architecture cible en cours d’intégration : React → Spring Boot → FastAPI. React/Vite/TypeScript porte l’interface ; Spring Boot centralise l’API, les autorisations, l’isolation des espaces de travail et les opérations sensibles ; PostgreSQL persiste les données ; FastAPI reste un service interne d’analyse appelé par Spring Boot.',
    features:
      'Gestion des clients, prestations, factures, paiements déclarés, justificatifs et espaces de travail. Le périmètre d’aide à la décision vise les prévisions de trésorerie, tendances budgétaires, anomalies, priorisation des relances et synthèses analytiques.',
    implementation:
      'Les contrats REST et les migrations versionnées structurent les échanges et la persistance. Spring Boot demeure le point de contrôle des permissions, de l’isolation par workspace et des actions sensibles ; le service FastAPI ne reçoit que les données nécessaires aux traitements analytiques prévus.',
    outcomes:
      'Le projet dispose d’un socle full-stack documenté et testable, distinct de ce portfolio. L’intégration du service d’analyse et la consolidation fonctionnelle restent en cours dans le cadre du Master 1.',
    publishedScope:
      'Projet en développement : l’architecture FastAPI décrit une cible d’intégration. Aucun modèle entraîné, score de précision, résultat prédictif validé, déploiement public ou achèvement complet n’est revendiqué.',
    technicalDecisions:
      'Conserver Spring Boot comme frontière de sécurité évite d’exposer directement le service d’analyse. Les autorisations, workspaces et opérations sensibles restent contrôlés côté Java, tandis que FastAPI est réservé aux traitements analytiques internes.'
  }
};

