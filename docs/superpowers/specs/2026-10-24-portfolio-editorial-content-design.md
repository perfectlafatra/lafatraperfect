# Design — Contenu éditorial recruteur du portfolio

Date : 2026-10-24

## Intention

Remplacer les textes de remplissage et les avertissements hérités du prototype par des notes techniques et des pages légales réellement publiables dans la vitrine statique FR/EN. Le contenu doit convaincre un recruteur par des faits, des décisions et des livrables observables, sans inventer de métriques ni de production.

## Approches considérées

1. Conserver les avertissements et attendre un futur backoffice : rejeté, car le site public est volontairement statique et ces messages affaiblissent la candidature.
2. Supprimer les articles : rejeté, car le journal montre le raisonnement technique attendu d’un profil full-stack.
3. Refaire les articles comme notes techniques versionnées, compléter la chronologie, le contact, le CV et les pages légales : retenu. Cette approche conserve les preuves disponibles et respecte l’architecture GitHub Pages.

## Périmètre retenu

- supprimer le champ `demo` et les encarts « contenu de démonstration » du journal ;
- réécrire les paragraphes de clôture comme décisions ou enseignements techniques ;
- ajouter des dates factuelles dans le parcours (React/TypeScript/JavaScript depuis 2024, stage ZINA du 16 juin au 16 septembre 2025, Mada-BMP en construction depuis 2026) ;
- publier le contact professionnel fourni par le propriétaire et le CV fourni localement ;
- remplacer les formulations « à compléter », « en cours de validation » et « futur formulaire » par des informations actuelles ;
- conserver les limites de confidentialité et de preuve dans les études de cas, sans les présenter comme des erreurs du site.

## Non-objectifs

- ne pas créer de backoffice, API ou base de données pour le portfolio ;
- ne pas transformer une illustration conceptuelle en capture réelle ;
- ne pas publier de données client ZINA, de transaction ou de secret.

## Vérification

Tests de contenu FR/EN, absence des avertissements supprimés, présence du contact/CV, lint, tests Vitest, build et routes statiques avant publication.
