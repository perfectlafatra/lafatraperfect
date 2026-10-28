/** Contenus des études de cas destinés à une lecture de recrutement. */
export interface CaseStudyContent {
  context: string;
  role: string;
  implementation: string;
  outcomes: string;
  publishedScope: string;
  technicalDecisions: string;
}

export const caseStudiesFr: Record<string, CaseStudyContent> = {
  'react-localstorage': {
    context:
      'Un besoin interne de prototypage rapide : manipuler des listes et préférences côté navigateur, sans backend disponible au départ.',
    role:
      'Construire une application React locale qui persiste l’état entre les sessions et documenter les choix de conception.',
    implementation:
      'Découpage en composants lisibles, sérialisation contrôlée via localStorage, gestion des cas de JSON invalide ou absent, relecture croisée du code.',
    outcomes:
      'Une application locale fonctionnelle et un dossier documentaire qui relie les décisions d’interface aux comportements observés.',
    publishedScope:
      'Application conçue pour un usage local : le code et la documentation constituent le livrable, sans déploiement public.',
    technicalDecisions:
      'Validation du JSON au chargement, état par défaut prévisible et gestion explicite des erreurs de quota ou de format.'
  },
  lalana: {
    context:
      'Projet académique réalisé en 2025, Lalana est une application web de réservation touristique pensée pour présenter l’offre de Nosy Be et organiser des parcours distincts pour les visiteurs, les clients et les profils de gestion.',
    role:
      'Concevoir les parcours, intégrer les vues Thymeleaf et structurer les espaces visiteur, client, gestionnaire et administrateur au sein d’une application Java Spring Boot.',
    implementation:
      'Organisation en couches avec contrôleurs Spring MVC, services métier, repositories Spring Data JPA et modèles persistés dans PostgreSQL. Les vues couvrent l’accueil, les services, la connexion et des espaces de gestion pour les circuits, destinations, réservations, vols et utilisateurs.',
    outcomes:
      'Sept états d’interface distincts documentent le résultat : accueil, services, connexion, dashboard administrateur, dashboard gestionnaire, gestion des circuits et réservations client.',
    publishedScope:
      'Le code source audité et les captures de rendus locaux constituent les preuves présentées. Aucune démonstration publique, donnée réelle ou disponibilité en production n’est revendiquée.',
    technicalDecisions:
      'Rendu serveur avec Thymeleaf, persistance JPA/PostgreSQL et accès différenciés avec Spring Security et BCrypt. La revue du code a aussi identifié le durcissement restant avant production : protection CSRF, restriction des routes de diagnostic et finalisation de certains services de réservation.'
  },
  'zina-tsara-volo': {
    context:
      'Un stage de développement web chez ZINA by Tsara Volo, du 16 juin au 16 septembre 2025, avec des écrans et données client non publiables.',
    role:
      'Présenter le périmètre React/JavaScript côté interface et Spring Boot/PostgreSQL côté services et données : inscription/connexion, espace client, CRM, boutique, diagnostic, rendez-vous et notifications documentés dans le dossier de stage, sans exposer aucune donnée client.',
    implementation:
      'Contribution aux interfaces React/JavaScript, lecture des contrats REST, vérification des parcours CRM/boutique/rendez-vous et rédaction d’un contexte anonymisé à partir du dossier de stage.',
    outcomes:
      'Une plateforme couvrant les principaux parcours client et CRM, présentée ici à travers mon rôle et les technologies utilisées.',
    publishedScope:
      'Aucune identité client, capture ou donnée sensible n’est publiée, par construction.',
    technicalDecisions:
      'Séparation entre composants React, contrats REST Spring Boot et persistance PostgreSQL, avec anonymisation systématique du contenu publiable.'
  },
  'mada-bmp': {
    context:
      'Les indépendants et petites structures gèrent leurs opérations avec des outils dispersés (tableurs, notes, messageries) qui ne dialoguent pas entre eux.',
    role:
      'Concevoir et développer une plateforme de gestion full-stack couvrant le suivi d’activité, les clients et la facturation simple, avec un backend Java et une base PostgreSQL.',
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

