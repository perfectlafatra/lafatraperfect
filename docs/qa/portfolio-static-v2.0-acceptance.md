# Recette d’acceptation — Portfolio statique V2.0

Date : 2026-10-23  
Périmètre : `C:\Portfolio\lafatraperfect`  
Décision : `PARTIAL` — succès local atteint, publication externe non exécutée.

## Résultats locaux

| contrôle | statut | preuve |
|---|---|---|
| TypeScript strict et build Vite | `PASS` | `cd frontend; npm run build` |
| Tests frontend | `PASS` | 10 fichiers, 24 tests Vitest |
| Lint | `PASS` | `npm run lint` |
| Contrat statique sans API/Axios | `PASS` | `src/test/static-contract.test.ts`, API proxy absent |
| FR/EN et parité des clés | `PASS` | `i18n-parity.test.ts`, contrat public |
| Couvertures projet | `PASS` | 4 projets, une couverture, alt et provenance par projet |
| ZINA | `PASS` | une illustration conceptuelle, aucune galerie ni capture privée |
| Routes profondes | `PASS` | 48 documents `dist/**/index.html` + `404.html` |
| Base projet GitHub Pages | `PASS` | build vérifié avec `VITE_BASE_PATH=/lafatraperfect/` |
| Router et médias sous base projet | `PASS` | `BrowserRouter.basename`, portraits, manifest et assets utilisent `BASE_URL` |
| Métadonnées statiques FR/EN | `PASS` | 48 documents générés avec `lang`, title, description et canonical localisés |
| Workflow Pages | `PASS` | `tools/check-pages-workflow.mjs` |
| Archive P1 | `PASS` | 194 fichiers, SHA-256 : 0 mismatch avant déplacement ; copie externe restaurable |
| Secret scan P0 | `PASS` | aucun secret, URL fictive ou asset ZINA privé dans le périmètre public |
| Droits CDN | `PARTIAL` | aucune capture privée utilisée ; la licence de chaque URL Unsplash doit être confirmée avant publication finale |

## Contenu et honnêteté

- Positionnement visible : Développeur Web Full-Stack — React & Spring Boot.
- React, TypeScript et JavaScript sont déclarés depuis 2024 ; MySQL est décrit comme manipulé pendant un an à partir de 2024 ; PostgreSQL est réservé aux projets web concrets.
- Mada-BMP reste une étude de cas distincte et ne reçoit pas de statut production ou live sans preuve publique.
- ZINA est présenté sous confidentialité, avec une seule illustration conceptuelle et aucun identifiant, email, téléphone, commande ou écran interne repris des documents source.
- Natur’Ally/Java Swing et les éléments Java EE ne sont pas dans l’index public des projets.
- Le contact reste un état honnête tant qu’aucune adresse professionnelle vérifiée et aucun CV publiable ne sont configurés.

## Publication externe

| élément | statut | raison |
|---|---|---|
| remote Git | `BLOCKED` | `git remote -v` ne retourne aucune URL |
| commit public | `NOT_RUN` | aucun dépôt distant confirmé |
| push normal | `NOT_RUN` | identité/branche/permissions GitHub inconnues |
| Actions GitHub | `NOT_RUN` | workflow prêt mais non déclenché |
| URL `.github.io` | `NOT_RUN` | aucune URL réelle à vérifier |

Étape suivante sûre : ajouter le remote du dépôt Portfolio réel, vérifier son propriétaire et sa branche par défaut, puis lancer une revue des fichiers staged avant un commit P0. Ne pas pousser le dépôt Mada-BMP ni l’archive P1.

## Limites connues

- Le chunk Three.js du hero existant dépasse 500 kB minifié ; le build passe, mais une optimisation ultérieure par import dynamique ou variante sans 3D est recommandée.
- Les URLs Unsplash CDN sont des illustrations conceptuelles ; leur licence/provenance doit être confirmée avant publication finale et peut être remplacée par des SVG locaux originaux.
- Les métadonnées runtime sont complétées par la génération des routes, sans SSR complet.
