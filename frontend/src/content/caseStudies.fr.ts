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
      'Projet de fin de Licence DA2I réalisé en stage chez ZINA by Tsara Volo en 2025, autour de la digitalisation de la boutique, des services et de la relation client.',
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
      'Les indépendants et petites structures gèrent leurs opérations avec des outils dispersés (tableurs, notes, messageries) qui ne dialoguent pas entre eux.',
    objectives:
      'Unifier les flux client, prestation, facture, paiement déclaré et justificatif dans une application métier indépendante du portfolio.',
    role:
      'Concevoir et développer une plateforme de gestion full-stack couvrant le suivi d’activité, les clients et la facturation simple, avec un backend Java et une base PostgreSQL.',
    architecture:
      'Frontend React, API Spring Boot et PostgreSQL, avec contrats REST, migrations versionnées et séparation claire entre domaines métier.',
    features:
      'Gestion des clients, prestations, factures, paiements déclarés, justificatifs et espaces de travail selon le périmètre actuellement documenté.',
    implementation:
      'Architecture React + Spring Boot + PostgreSQL, API REST structurée et validée, migrations versionnées, séparation claire des responsabilités frontend/backend, journal de décisions techniques.',
    outcomes:
      'Une plateforme distincte de ce portfolio, en cours de consolidation, avec un socle technique documenté et testable.',
    publishedScope:
      'Version en développement ; aucune métrique d’usage public n’est affichée à ce stade.',
    technicalDecisions:
      'Architecture modulaire, migrations versionnées, contrats REST validés et documentation des flux client, prestation, facture, paiement et justificatif.'
  }
};

