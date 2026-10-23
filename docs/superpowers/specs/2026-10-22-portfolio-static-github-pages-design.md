# Portfolio statique GitHub Pages — design V2.0

Date : 22 octobre 2026  
Dépôt local : `C:\Portfolio\lafatraperfect`  
Référence : MASTER PROMPT Portfolio Full-Stack / V2.0 fourni par le propriétaire.

## Intention

Transformer la vitrine existante en un portfolio de recrutement statique, bilingue FR/EN, rapide et crédible. Le site doit montrer le raisonnement, les technologies réellement utilisées et les preuves disponibles, sans formulaire fictif, faux indicateurs, fausse URL de production ou contenu creux.

Le portfolio est distinct de Mada-BMP. Mada-BMP peut être présenté comme une réalisation Full-Stack séparée avec son statut de validation exact, mais son backend n'est pas une dépendance du portfolio.

## Décision d'architecture

### P0 actif

- React 18 + Vite 5 + TypeScript strict.
- Contenu éditorial local dans `frontend/src/content/`, avec un modèle unique de projet et traductions FR/EN.
- React Router conservé pour la navigation locale ; génération des routes connues dans `dist/` pour les rechargements GitHub Pages.
- Base Vite calculée par variable de build : `/` pour un dépôt utilisateur GitHub Pages et `/<nom-du-repo>/` pour un dépôt projet.
- Thème clair/sombre, responsive mobile-first, navigation clavier, focus visible, `prefers-reduced-motion`, métadonnées SEO par langue.
- Contact sans stockage : `mailto:` et liens professionnels uniquement lorsque les coordonnées sont vérifiées.
- Une couverture visuelle par projet. Les illustrations génériques sont déclarées conceptuelles et inventoriées ; les captures ZINA ne sont pas publiées sans autorisation.

### P1 préservé mais hors build public

`backend/`, `admin/`, `qa/`, Docker, Maven, Flyway et les fichiers `.env*` sont retirés du workflow Pages et du bundle. Ils sont d'abord copiés dans une archive locale hors dépôt public avec manifeste et empreintes, puis déplacés ou supprimés du workspace actif uniquement après validation du build statique. Aucun schéma PostgreSQL, volume Docker ou historique Git n'est détruit.

## Positionnement éditorial

Le message principal sera : « Développeur Web Full-Stack — React & Spring Boot ». Il indiquera honnêtement :

- React, TypeScript et JavaScript pratiqués depuis 2024 ;
- première expérience MySQL en 2024, puis PostgreSQL sur les projets web concrets ;
- capacité à relier besoin métier, interface, API, données et validation ;
- aucun décompte d'années salariées non prouvé.

La vitrine visible exclut Natur'Ally/Java Swing et Java EE JSP/Servlets, conformément à la priorité recrutement. Ces documents restent des archives de parcours non publiées.

## Études de cas

1. **Mada-BMP** — projet phare React/Spring Boot/PostgreSQL ; distinguer testé local/QA, documenté et accessible publiquement.
2. **ZINA by Tsara Volo** — stage du 16 juin au 16 septembre 2025 ; React/JavaScript, Spring Boot/API REST, PostgreSQL, espace client, boutique, rendez-vous, diagnostic, blog, dashboard et CRM selon le périmètre fourni. Une seule illustration conceptuelle ou capture autorisée.
3. **React localStorage** — application React autonome, composants, hooks, Context API et persistance navigateur ; limites explicites.
4. **Lalana** — étude secondaire uniquement si la contribution Spring/Thymeleaf est suffisamment démontrée ; pas de sur-promesse React.

Chaque fiche expose Situation, Tâches, Actions, Résultats observables, Limites, Stack, preuve et statut (`DOCUMENTED`, `DEMO_SIMULATED`, `LIVE_VERIFIED`, `IN_PROGRESS`).

## Images et CDN

Les illustrations CDN ne représentent pas des captures de production. Elles sont utilisées pour donner une composition visuelle aux cartes qui n'ont pas de média publiable, avec texte alternatif « Illustration conceptuelle… ». Les URLs de source, crédits, licence, date et chemin de copie locale éventuelle sont enregistrés dans `docs/media/media-inventory.md`. Une copie locale optimisée sera préférée après vérification, sans dépendance à un hotlink instable.

## Flux de publication

Le workflow GitHub Actions sera limité à `frontend/` : installation reproductible, typecheck, lint, tests, build statique et déploiement Pages. Le nom du dépôt et le compte GitHub ne sont pas supposés ; le remote devra être identifié avant le premier push. Aucun secret ou fichier d'environnement n'est utilisé par le bundle.

## Critères d'acceptation

- `npm ci && npm run verify` réussit sans backend, admin, PostgreSQL ou réseau API.
- Les routes `/fr`, `/en`, projets, études, journal, CV et contact sont accessibles directement dans `dist/`.
- Les liens de contact et CV sont vérifiés ou explicitement marqués non disponibles.
- Les quatre projets ont un contenu FR/EN non creux, une seule couverture et un statut de preuve.
- Aucun fichier public ne contient secret, donnée ZINA privée, identifiant client ou `.env`.
- Le workflow Pages cible `frontend/dist` et calcule la base à partir du dépôt réel.
- L'URL publique n'est déclarée que lorsque le remote, l'action GitHub et le retour HTTP ont été vérifiés.

## Hors périmètre

Authentification, dashboard, CRM, formulaire stocké, PostgreSQL, API REST du portfolio, SMTP, SMS, paiement, chatbot, déploiement Mada-BMP et suppression de l'historique Git.
