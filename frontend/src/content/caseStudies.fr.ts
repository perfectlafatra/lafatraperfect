/**
 * Études de cas — méthode STAR (Situation, Tâches, Actions, Résultats),
 * enrichie des limites et enseignements. Version française.
 *
 * Les projets historiques restent présentés sans donnée client ni
 * affirmation non vérifiable, conformément à la politique du dépôt.
 */
export interface StarCaseStudy {
  situation: string;
  tasks: string;
  actions: string;
  results: string;
  limits: string;
  lessons: string;
}

export const caseStudiesFr: Record<string, StarCaseStudy> = {
  'react-localstorage': {
    situation:
      'Un besoin interne de prototypage rapide : manipuler des listes et préférences côté navigateur, sans backend disponible au départ.',
    tasks:
      'Construire une application React locale qui persiste l’état entre les sessions et documenter les choix de conception.',
    actions:
      'Découpage en composants lisibles, sérialisation contrôlée via localStorage, gestion des cas de JSON invalide ou absent, relecture croisée du code.',
    results:
      'Une application locale fonctionnelle et un dossier documentaire qui relie les décisions d’interface aux comportements observés.',
    limits:
      'Le statut reste DOCUMENTED : la preuve disponible est le code et sa documentation, sans URL publique annoncée.',
    lessons:
      'La persistance navigateur est puissante mais silencieuse : les erreurs de quota ou de format doivent être traitées explicitement, jamais supposées impossibles.'
  },
  lalana: {
    situation:
      'Un projet web historique reposant sur un rendu serveur Spring Boot et Thymeleaf, à documenter rétroactivement.',
    tasks:
      'Présenter l’architecture, le flux de données et les responsabilités sans inventer de métrique ni de disponibilité publique.',
    actions:
      'Relecture du code existant, schématisation des requêtes page/contrôleur/vue, identification des points à confirmer par des preuves autorisées.',
    results:
      'Une étude de cas structurée qui distingue le fonctionnement observé, le rôle tenu et les éléments non publiables.',
    limits:
      'Aucune URL publique ni capture client n’est publiée ; le statut DOCUMENTED reflète une expérience historique décrite par le code et les notes disponibles.',
    lessons:
      'Documenter après coup impose une discipline de traçabilité : chaque affirmation technique doit pouvoir être rattachée à un élément vérifiable.'
  },
  'zina-tsara-volo': {
    situation:
      'Un stage de développement web chez ZINA by Tsara Volo, du 16 juin au 16 septembre 2025, avec des écrans et données client non publiables.',
    tasks:
      'Présenter le périmètre React/JavaScript côté interface et Spring Boot/PostgreSQL côté services et données : inscription/connexion, espace client, CRM, boutique, diagnostic, rendez-vous et notifications documentés dans le dossier de stage, sans exposer aucune donnée client.',
    actions:
      'Contribution aux interfaces React/JavaScript, lecture des contrats REST, vérification des parcours CRM/boutique/rendez-vous et rédaction d’un contexte anonymisé à partir du dossier de stage.',
    results:
      'Un retour d’expérience publiable qui documente le rôle et les choix techniques sans prétendre publier une preuve client.',
    limits:
      'Aucune identité client, capture ou donnée sensible n’est publiée, par construction.',
    lessons:
      'La confidentialité n’empêche pas la preuve de compétence : la rigueur du processus raconte autant que le livrable.'
  },
  'mada-bmp': {
    situation:
      'Les indépendants et petites structures gèrent leurs opérations avec des outils dispersés (tableurs, notes, messageries) qui ne dialoguent pas entre eux.',
    tasks:
      'Concevoir et développer une plateforme de gestion full-stack couvrant le suivi d’activité, les clients et la facturation simple, avec un backend Java et une base PostgreSQL.',
    actions:
      'Architecture React + Spring Boot + PostgreSQL, API REST structurée et validée, migrations versionnées, séparation claire des responsabilités frontend/backend, journal de décisions techniques.',
    results:
      'Une plateforme distincte de ce portfolio, en cours de consolidation, avec un socle technique documenté et testable.',
    limits:
      'Le produit évolue encore : les métriques d’usage publiques ne sont pas revendiquées tant que les preuves ne sont pas consolidées.',
    lessons:
      'Un projet produit impose des arbitrages permanents : le périmètre, la dette technique assumée et la documentation suivent le même rythme que les fonctionnalités.'
  }
};

