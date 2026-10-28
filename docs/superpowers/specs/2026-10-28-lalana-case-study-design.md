# Lalana — étude de cas recrutement Java

## Intention

Transformer la fiche Lalana actuelle, trop générique, en étude de cas concise pour un recruteur Java/Spring Boot. Le récit doit montrer le domaine, les rôles et les interfaces réellement observables sans présenter les captures locales comme une application en production.

Source éditoriale : `docs/projects/lalana-journal.md`.

## Objectifs

- nommer clairement le projet : « Lalana — Nosy Be Travel Agency » ;
- afficher Java 17, Spring Boot, Thymeleaf, JPA et PostgreSQL comme stack documentée par le dossier d’identité ;
- remplacer la couverture conceptuelle Unsplash par la capture d’accueil fournie ;
- ajouter la connexion et la planche d’interfaces comme preuves complémentaires ;
- conserver les titres naturels de l’étude de cas et la parité FR/EN ;
- ne modifier le rendu d’aucun autre projet ;
- conserver un build 100 % statique compatible GitHub Pages.

## Non-objectifs

- remettre en service ou reconstruire Lalana ;
- ajouter un backend au Portfolio ;
- annoncer une démo publique, des tests E2E, une production ou des métriques ;
- publier les fonctions du plan PDF non confirmées par le code source ;
- toucher à Mada-BMP, ZINA ou React localStorage.

## Approches considérées

### 1. Page Lalana entièrement dédiée

Une nouvelle page spécifique donnerait un contrôle total sur la composition, mais dupliquerait le gabarit des études de cas et augmenterait le coût de maintenance.

### 2. Galerie globale pour tous les projets

Ajouter une galerie obligatoire à chaque projet uniformiserait le modèle, mais créerait des médias artificiels ou redondants pour les autres fiches.

### 3. Preuves optionnelles dans le modèle existant — retenue

Étendre `ProjectSummary` avec une collection optionnelle `evidence`, rendue par un composant commun uniquement lorsqu’elle existe. Lalana reçoit deux preuves complémentaires ; sa couverture reste séparée. Cette approche préserve l’architecture, ne change pas les autres projets et reste testable avec les composants actuels.

## Composition retenue

1. Couverture 16:9 : accueil desktop.
2. Titre, catégorie, résumé, statut et stack.
3. Six sections éditoriales existantes, alimentées par le journal.
4. Section « Interfaces documentées » / « Documented interfaces » :
   - écran de connexion ;
   - planche des interfaces publiques et multi-rôles.

Les images utilisent `figure`, `figcaption`, largeur/hauteur réservées, chargement différé sous la couverture et textes alternatifs factuels.

## Données et types

- `CoverAsset.type` accepte `SCREENSHOT_REAL`.
- Nouveau type `ProjectEvidenceAsset` : `src`, `alt`, `caption`, `width`, `height`, `type`, `provenance`.
- `ProjectSummary.evidence` est optionnel et absent des trois autres projets.
- Les chemins locaux sont préfixés par `import.meta.env.BASE_URL` pour fonctionner sous `/lafatraperfect/`.

## Responsive et accessibilité

- deux colonnes au-dessus de 760 px, une colonne en dessous ;
- aucun texte intégré à l’image n’est nécessaire à la compréhension de la page ;
- `alt` décrit l’interface, `figcaption` explique ce qu’elle prouve ;
- pas de lightbox, carrousel ou interaction dépendante du survol ;
- les images conservent leur ratio pour éviter le CLS.

## Preuve et sincérité

La fiche utilise le statut « Projet documenté ». Le texte indique que les captures proviennent de rendus locaux et qu’aucune URL de démonstration n’est publiée. Les fonctionnalités visibles sont décrites comme interfaces documentées, pas comme parcours E2E retestés.

