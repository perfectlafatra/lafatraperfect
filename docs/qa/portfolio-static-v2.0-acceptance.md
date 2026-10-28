# Recette d’acceptation — Portfolio statique V2.0

Date : 2026-10-25
Périmètre : `C:\Portfolio\lafatraperfect`  
Décision : `PASS` — portfolio recentré sur le profil candidat, les projets, le parcours, le CV et le contact.

## Résultats locaux

| contrôle | statut | preuve |
|---|---|---|
| TypeScript strict et build Vite | `PASS` | `cd frontend; npm run build` |
| Tests frontend | `PASS` | 12 fichiers, 29 tests Vitest |
| Lint | `PASS` | `npm run lint` |
| Contrat statique sans API/Axios | `PASS` | `src/test/static-contract.test.ts`, API proxy absent |
| FR/EN et parité des clés | `PASS` | `i18n-parity.test.ts`, contrat public |
| Couvertures projet | `PASS` | 4 projets, une couverture, alt et provenance par projet |
| ZINA | `PASS` | une illustration conceptuelle, aucune galerie ni capture privée |
| Routes profondes | `PASS` | 24 documents `dist/**/index.html` + `404.html` ; Journal/Méthode retirés du périmètre public |
| Base projet GitHub Pages | `PASS` | build vérifié avec `VITE_BASE_PATH=/lafatraperfect/` |
| Router et médias sous base projet | `PASS` | `BrowserRouter.basename`, portraits, manifest et assets utilisent `BASE_URL` |
| Métadonnées statiques FR/EN | `PASS` | 24 documents de route générés avec `lang`, title, description et canonical localisés |
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
- Contact et CV : `PASS` — email `mailto:` configuré et CV local publié sous `frontend/public/cv/`.

## Publication externe

| élément | statut | raison |
|---|---|---|
| remote Git | `PASS` | `origin=https://github.com/perfectlafatra/lafatraperfect.git`, branche `master` |
| commit public | `PASS` | `d12f1a8` poussé sur `master` après recette locale |
| push normal | `PASS` | push normal vers `perfectlafatra/lafatraperfect` |
| Source Pages | `CONFIGURED` | GitHub UI confirme `Source: GitHub Actions` le 2026-10-24 |
| Actions GitHub | `PASS` | run `40221030684` du commit `d12f1a8` : build, upload artifact et deploy terminés avec succès |
| URL `.github.io` | `PASS` | `https://perfectlafatra.github.io/lafatraperfect/fr` HTTP 200 vérifié le 2026-10-25 |

Recette publique du 2026-10-25 : `/fr`, `/en`, `/fr/projets`, `/fr/projets/mada-bmp`, `/fr/projets/zina-tsara-volo`, `/fr/parcours`, `/fr/competences`, `/fr/contact`, le CV PDF, `robots.txt` et `sitemap.xml` répondent tous en HTTP 200. Le bundle publié contient « Projets sélectionnés » et « React · Spring Boot · PostgreSQL » ; il ne contient plus les anciens intitulés Journal/Méthode/STAR. `/fr/journal` et `/fr/methode` répondent en HTTP 404 et sont absents du sitemap. Le dépôt Mada-BMP et l’archive P1 n’ont pas été poussés.

## Limites connues

- Le chunk Three.js du hero existant dépasse 500 kB minifié ; le build passe, mais une optimisation ultérieure par import dynamique ou variante sans 3D est recommandée.
- Les URLs Unsplash CDN sont des illustrations conceptuelles ; leur licence/provenance doit être confirmée avant publication finale et peut être remplacée par des SVG locaux originaux.
- Les métadonnées runtime sont complétées par la génération des routes, sans SSR complet.

## Mise à jour Lalana — 2026-10-28

| contrôle | statut | preuve |
|---|---|---|
| Présentation FR/EN | `PASS` | récit recruteur centré sur le rôle, l’architecture Java et les résultats observables |
| Preuves visuelles | `PASS` | accueil, connexion et planche des interfaces servis localement avec provenance et empreintes documentées |
| Honnêteté technique | `PASS` | projet académique, aucune production ni recette E2E revendiquée; limites de sécurité et services incomplets consignés |
| Tests Lalana | `PASS` | 6 tests dédiés; galerie accessible et absence d’impact sur ZINA vérifiées |
| Recette frontend complète | `PASS` | 13 fichiers, 35 tests; lint, TypeScript/Vite, 24 routes, liens et contrats passent avec `VITE_BASE_PATH=/lafatraperfect/` |
| Commits | `PASS` | `5bd16c9` (contenu et preuves) puis `243561a` (contrat média compatible avec la base Pages) |
| GitHub Actions | `PASS` | run `40674600207`, workflow `Deploy static portfolio to GitHub Pages` terminé avec succès |
| Page FR | `PASS` | `https://perfectlafatra.github.io/lafatraperfect/fr/projets/lalana/` HTTP 200 |
| Page EN | `PASS` | `https://perfectlafatra.github.io/lafatraperfect/en/projects/lalana/` HTTP 200 |
| Médias publiés | `PASS` | trois URLs Lalana HTTP 200; tailles publiées identiques aux fichiers inventoriés |

Le bundle public `assets/index-dt0j5CMH.js` contient les nouveaux marqueurs éditoriaux et techniques : `Java 17`, `Spring Data JPA`, `Spring Security`, `Le code source audité` et `Lalana — Nosy Be Travel Agency`.
