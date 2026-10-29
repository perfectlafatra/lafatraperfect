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
| ZINA | `PASS` | couverture et deux preuves issues de l’étude publique finale signée ; aucune donnée client réelle |
| Routes profondes | `PASS` | 24 documents `dist/**/index.html` + `404.html` ; Journal/Méthode retirés du périmètre public |
| Base projet GitHub Pages | `PASS` | build vérifié avec `VITE_BASE_PATH=/lafatraperfect/` |
| Router et médias sous base projet | `PASS` | `BrowserRouter.basename`, portraits, manifest et assets utilisent `BASE_URL` |
| Métadonnées statiques FR/EN | `PASS` | 24 documents de route générés avec `lang`, title, description et canonical localisés |
| Workflow Pages | `PASS` | `tools/check-pages-workflow.mjs` |
| Archive P1 | `PASS` | 194 fichiers, SHA-256 : 0 mismatch avant déplacement ; copie externe restaurable |
| Secret scan P0 | `PASS` | aucun secret, URL fictive ou asset ZINA privé dans le périmètre public |
| Droits CDN | `PARTIAL` | aucune capture privée utilisée ; la licence de chaque URL Unsplash doit être confirmée avant publication finale |

## Contenu et honnêteté

- Positionnement visible : Développeur Java junior | Full-Stack.
- React, TypeScript et JavaScript sont déclarés depuis 2024 ; MySQL est décrit comme manipulé pendant un an à partir de 2024 ; PostgreSQL est réservé aux projets web concrets.
- Mada-BMP reste une étude de cas distincte et ne reçoit pas de statut production ou live sans preuve publique.
- ZINA utilise uniquement les captures autorisées de l’étude publique finale signée ; les emails, commandes, coordonnées et autres écrans internes restent exclus.
- Natur’Ally/Java Swing reste hors de l’index public. VolaTech y présente désormais Java EE/Jakarta EE comme projet académique documenté, sans le confondre avec une expérience salariée ou un service en production.
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

- Le hero public utilise désormais un portrait statique et ne charge plus de canvas 3D ; les anciens composants 3D restent hors du graphe de build actif.
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

## Mise à jour VolaTech — 2026-10-28

| contrôle | statut | preuve |
|---|---|---|
| Portée des changements | `PASS` | seuls le dépôt Portfolio, ses tests, ses médias et sa documentation ont été modifiés ; aucune compilation ni écriture dans le projet VolaTech |
| Présentation FR/EN | `PASS` | VolaTech ajouté comme projet académique Jakarta EE, distinct d’une expérience salariée ou d’un service en production |
| Exactitude technique | `PASS` | Java 17, WAR Maven/WildFly, Servlets/JSP, services, repositories JDBC/DataSource et PostgreSQL recoupés avec les sources |
| Honnêteté fonctionnelle | `PASS` | paiement déclaré simulé, QR décrit comme référence de dossier, aucun paiement réel ni preuve cryptographique revendiqué |
| Preuves visuelles | `PASS` | couverture boutique/panier, retrait QR et facture PDF issus du dossier fourni ; données personnelles floutées |
| Tests VolaTech | `PASS` | 4 tests dédiés FR/EN, contrat des médias et galerie accessible |
| Recette frontend complète | `PASS` | 14 fichiers, 39 tests ; lint, TypeScript/Vite, 26 routes, liens et contrats passent avec `VITE_BASE_PATH=/lafatraperfect/` |
| Build VolaTech externe | `NOT_RUN` | volontairement hors périmètre ; l’application VolaTech n’a pas été compilée, lancée ou modifiée |
| Publication GitHub Pages | `PASS` | commit `a825910`, run Pages `40726539552` réussi ; pages VolaTech FR/EN et ressources publiques contrôlées en HTTP 200 |

## Finalisation recruteur et dossiers publics signés — 2026-10-28

| contrôle | statut | preuve |
|---|---|---|
| Identité candidat | `PASS` | nom complet, positionnement Java junior / Full-Stack, Master 1 M2I et stack principale visibles dans le hero |
| Dossiers Lalana, VolaTech, ZINA | `PASS` | PDF consultables/téléchargeables et PPTX téléchargeables, fichiers et SHA-256 inventoriés |
| Confidentialité Mada-BMP | `PASS` | aucun manuel ou support interne Mada-BMP sous `frontend/public` |
| UI/UX | `PASS` | hero statique, grille éditoriale existante conservée, actions 44 px, focus et responsive maintenus |
| Recette frontend complète | `PASS` | `npm run verify` : lint, 15 fichiers / 44 tests, TypeScript strict, build 268,57 kB (gzip 85,68 kB), liens, contrat public et 26 routes + 404 passent |
| Publication GitHub Pages | `PASS` | commit `a825910` poussé sur `master` ; run Pages `40726539552` terminé avec succès |

Recette publique du 2026-10-28 : les accueils `/fr/` et `/en/`, les pages Lalana, VolaTech et ZINA dans les deux langues, le CV, ainsi que les six dossiers publics signés PDF/PPTX répondent en HTTP 200. Le bundle publié `assets/index-uvTcCFJc.js` contient l’identité complète du candidat, les trois projets et les actions de consultation des dossiers.

## Harmonisation finale CV, contacts et preuves — 2026-10-29

| contrôle | statut | preuve |
|---|---|---|
| Coordonnées CV | `PASS` | adresse complète, `lafatraperfect@gmail.com`, deux téléphones et WhatsApp `+261 32 60 463 49` présents dans le bundle public |
| Positionnement Java | `PASS` | profil, compétences et chronologie réorganisés autour de Java, Spring Boot et Jakarta EE, sans transformer les projets académiques en expériences salariées |
| Catalogue projets | `PASS` | quatre projets publics : Mada-BMP, Lalana, VolaTech et ZINA ; React localStorage retiré de l’index et du sitemap |
| Ressources publiques | `PASS` | un PDF final par projet, quatre fichiers au total ; anciens doublons PDF/PPTX retirés du HEAD public |
| Images mises à jour | `PASS` | couvertures authentiques Lalana et Mada-BMP intégrées, dimensions conservées, provenance et SHA-256 inventoriés |
| Favicon | `PASS` | monogramme LF recentré, rasterisation locale 64×64 contrôlée et URL Pages `/lafatraperfect/favicon.svg` générée |
| Responsive | `PASS` | contrôle visuel local du hero à 390×844 et 1440×1000, contact à 1440×1100 |
| Recette frontend complète | `PASS` | `VITE_BASE_PATH=/lafatraperfect/ npm run verify` : lint, 15 fichiers / 45 tests, TypeScript strict, build 268,57 kB (gzip 85,74 kB), liens, contrat public et 24 routes + 404 |
| Commit et push | `PASS` | commit `2212ed5` poussé normalement sur `origin/master` |
| GitHub Actions Pages | `PASS` | run `40881833026`, workflow terminé avec succès |
| Recette publique | `PASS` | accueils FR/EN, huit pages projet localisées, contact, CV, quatre PDF, favicon et sitemap contrôlés en HTTP 200 |

Le bundle public `assets/index-Ota7VZET.js` contient les coordonnées exactes et les quatre PDF normalisés. Il ne contient ni l’ancien email, ni le slug `react-localstorage`, ni ressource PPTX. Le sitemap public contient 24 URL et aucune route React localStorage.

## Rotation du portrait et ciblage Java/Web/Data — 2026-10-29

| contrôle | statut | preuve |
|---|---|---|
| Téléphones | `PASS` | principal `+261 32 93 777 81`, secondaire `+261 34 48 109 24` et WhatsApp distinct `+261 32 60 463 49` affichés avec leurs liens exacts |
| Portrait | `PASS` | rotation latérale restaurée à partir de cinq angles existants du propriétaire ; visage frontal au chargement, aucun faux arrière, aucun visage régénéré |
| Performance des portraits | `PASS` | cinq dérivés WebP 1000×1000 de 44 à 59 Ko servis en HTTP 200 ; PNG originaux préservés hors séquence active |
| Mouvement accessible | `PASS` | repli frontal statique avec `prefers-reduced-motion` ou sans `IntersectionObserver`, aucun canvas WebGL chargé |
| Ciblage Java/Web/Data | `PASS` | hero et compétences mettent en avant Java, Spring Boot, HTTP/REST, PostgreSQL/MySQL/SQL, analyse technique, débogage, Windows/Linux et documentation FR/EN |
| Honnêteté ValueIT | `PARTIAL` | adéquation renforcée sur Java, Web, SQL, analyse et environnements ; aucune expérience de crawler à grande échelle, disponibilité 10 h–19 h ou probabilité d’embauche inventée |
| Recette frontend complète | `PASS` | `VITE_BASE_PATH=/lafatraperfect/ npm run verify` : lint, 15 fichiers / 46 tests, TypeScript strict, build JS 273,50 kB (gzip 87,88 kB), liens, contrat public et 24 routes + 404 |
| Contrôle visuel | `PASS` | hero et contact contrôlés localement à 1440 px ; mise en page étroite contrôlée à 500 px, règles fluides actives sous 520 px |
| Commits et push | `PASS` | `e11200d` (rotation, contacts, ciblage) et `4f56397` (WebP) poussés normalement sur `origin/master` |
| GitHub Actions Pages | `PASS` | runs `40906317045` et `40910129084` terminés avec succès |
| Recette publique | `PASS` | `/fr/`, `/en/`, `/fr/contact/`, CV et cinq WebP répondent en HTTP 200 ; bundle `assets/index-CWAfs1FB.js` contient le nouveau téléphone, le WhatsApp, le positionnement Java/Data et la rotation |

URL publique vérifiée : `https://perfectlafatra.github.io/lafatraperfect/fr/`.
