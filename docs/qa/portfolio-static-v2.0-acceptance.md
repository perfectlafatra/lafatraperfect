# Recette d’acceptation — Portfolio statique V2.0

Date : 2026-10-24
Périmètre : `C:\Portfolio\lafatraperfect`  
Décision : `PASS` — contenu éditorial complété, vérification locale et publication Pages opérationnelles.

## Résultats locaux

| contrôle | statut | preuve |
|---|---|---|
| TypeScript strict et build Vite | `PASS` | `cd frontend; npm run build` |
| Tests frontend | `PASS` | 11 fichiers, 26 tests Vitest |
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
- Contact et CV : `PASS` — email `mailto:` configuré et CV local publié sous `frontend/public/cv/`.

## Publication externe

| élément | statut | raison |
|---|---|---|
| remote Git | `PASS` | `origin=https://github.com/perfectlafatra/lafatraperfect.git`, branche `master` |
| commit public | `PASS` | mise à jour éditoriale poussée sur `master` après recette locale |
| push normal | `PASS` | push normal vers `perfectlafatra/lafatraperfect` |
| Source Pages | `CONFIGURED` | GitHub UI confirme `Source: GitHub Actions` le 2026-10-24 |
| Actions GitHub | `PASS` | run `40092228767` : build, upload artifact et deploy terminés avec succès |
| URL `.github.io` | `PASS` | `https://perfectlafatra.github.io/lafatraperfect/fr` HTTP 200 vérifié le 2026-10-24 |

Routes publiques vérifiées : `/fr`, `/en`, `/fr/journal`, `/fr/journal/api-rest-spring-boot`, `/fr/projets/mada-bmp`, `/fr/projets/zina-tsara-volo`, `/fr/contact`, le CV PDF, `robots.txt` et `sitemap.xml` répondent HTTP 200. Le bundle publié ne contient plus les anciens avertissements de journal. Ne pas pousser le dépôt Mada-BMP ni l’archive P1.

## Limites connues

- Le chunk Three.js du hero existant dépasse 500 kB minifié ; le build passe, mais une optimisation ultérieure par import dynamique ou variante sans 3D est recommandée.
- Les URLs Unsplash CDN sont des illustrations conceptuelles ; leur licence/provenance doit être confirmée avant publication finale et peut être remplacée par des SVG locaux originaux.
- Les métadonnées runtime sont complétées par la génération des routes, sans SSR complet.
