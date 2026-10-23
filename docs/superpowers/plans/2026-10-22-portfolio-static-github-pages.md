# Portfolio statique GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer `frontend/` en vitrine React/Vite/TypeScript autonome, bilingue et publiable sur GitHub Pages, sans dépendance active à Spring, PostgreSQL, API ou administration.

**Architecture:** Le contenu reste local dans `frontend/src/content/`. Les appels Axios/API et le formulaire serveur sont remplacés par des liens de contact statiques et des données éditoriales vérifiables. Le workflow Pages construit uniquement `frontend/dist`, avec une base Vite calculée par le dépôt GitHub réel et une génération des routes profondes connues. Les composants P1 sont inventoriés puis archivés hors du dépôt public, jamais supprimés sans copie et empreintes.

**Tech Stack:** React 18, Vite 5, TypeScript strict, React Router 6, i18next, CSS tokens existants, GitHub Actions Pages, images CDN/versions locales documentées.

**Spec:** `docs/superpowers/specs/2026-10-22-portfolio-static-github-pages-design.md`

## Global Constraints

- Ne jamais toucher au dépôt Mada-BMP.
- Aucun secret, `.env`, identifiant ZINA privé ou donnée client dans le bundle ou l'historique public.
- Aucun backend/API/BDD requis pour `npm ci && npm run verify` dans `frontend/`.
- Natur'Ally/Java Swing et Java EE restent hors de la vitrine ciblée.
- Une seule couverture visuelle par projet, avec statut de preuve et provenance.
- Ne jamais annoncer une URL GitHub Pages ou un statut `LIVE_VERIFIED` sans contrôle réel.
- Ne jamais effectuer `git reset --hard`, `git clean`, `DROP DATABASE`, purge Docker ou réécriture d'historique.

## Review Focus

- Une route profonde GitHub Pages doit fonctionner après rechargement ; test généré pour chaque route publiée.
- Le build statique ne doit importer ni Axios, ni API, ni formulaire serveur ; test de graphe/scan du bundle.
- Les textes FR/EN doivent conserver les faits et statuts de preuve ; test de parité des clés et de contenu.
- Chaque carte projet doit avoir une seule image, un alt conceptuel ou factuel et une provenance inventoriée.
- La suppression P1 doit rester récupérable ; manifeste SHA-256 et comparaison d'archive requis avant déplacement.

---

### Task 1: Préservation P1 et inventaire avant nettoyage

**Files:**
- Create: `docs/architecture/inventory-before-after.md`
- Create: `docs/media/media-inventory.md`
- Create: `docs/decisions/adr-static-github-pages.md`
- Create: `tools/archive-p1.ps1`
- Preserve unchanged: `backend/`, `admin/`, `qa/`, `docker-compose*.yml`, `render.yaml`, `.env.example`

**Interfaces:**
- Produces: manifest d'archive horodaté, SHA-256 et classification `KEEP_P0`, `REMOVE_FROM_ACTIVE_P0`, `ARCHIVE_PRIVATELY`, `UNKNOWN_REVIEW`.
- Consumes: baseline `docs/roadmap/portfolio-static-v2.0-baseline.md`.

- [ ] **Step 1: Write the failing preservation checks**

  Ajouter un test PowerShell/documentaire qui exige que les dossiers P1 existent avant archive et que `.env` ne soit jamais copié dans une archive publique.

- [ ] **Step 2: Run the check before archive**

  Run: `pwsh -File tools/archive-p1.ps1 -WhatIf`
  Expected: liste des sources et destination externe, aucune suppression.

- [ ] **Step 3: Implement the safe archive script**

  Le script accepte une destination explicite hors du dépôt, copie les dossiers sélectionnés, produit `manifest.sha256`, puis ne supprime rien par défaut. Le déplacement/suppression sera une étape manuelle conditionnelle après le build statique.

- [ ] **Step 4: Document before/after classifications**

  Décrire chaque dossier, ses imports/usages et la justification de son exclusion du workflow Pages.

- [ ] **Step 5: Run archive verification**

  Run: `pwsh -File tools/archive-p1.ps1 -Destination <archive-hors-repo>` puis `Get-FileHash`/comparaison du manifeste.
  Expected: copie lisible, aucune modification du workspace P1.

### Task 2: Découplage statique et contenu factuel

**Files:**
- Modify: `frontend/src/config/env.ts`, `frontend/src/vite-env.d.ts`, `frontend/src/api/*`, `frontend/src/components/contact/ContactForm.tsx`, `frontend/src/pages/ContactPage.tsx`, `frontend/package.json`, `frontend/package-lock.json`
- Modify: `frontend/src/content/profile.ts`, `frontend/src/content/projectIndex.ts`, `frontend/src/content/caseStudies.fr.ts`, `frontend/src/content/caseStudies.en.ts`, `frontend/src/content/experience.ts`
- Test: `frontend/src/test/static-contract.test.ts`

**Interfaces:**
- Produces: site sans import Axios/API/contact serveur ; `siteConfig` expose seulement des liens statiques vérifiés ou `null`.
- Consumes: modèle de routes et composants existants.

- [ ] **Step 1: Write failing static contract tests**

  Tester l'absence d'import `axios`, de `/api` dans les composants publics et de `ContactForm` actif ; tester les faits React 2024, MySQL 2024 et PostgreSQL projet.

- [ ] **Step 2: Run tests to verify failure**

  Run: `npm run test:run -- src/test/static-contract.test.ts`
  Expected: FAIL sur les imports/API/formulaire actuels et le contenu placeholder.

- [ ] **Step 3: Replace contact/API flow**

  Supprimer l'appel serveur et rendre `ContactPage` statique : e-mail `mailto:` seulement s'il est fourni, profil professionnel si vérifié, sinon message honnête d'information manquante. Retirer Axios et les modules API devenus inutiles après vérification des imports.

- [ ] **Step 4: Rewrite content from evidence**

  Utiliser un modèle partagé de projet avec stack, couverture, alt, preuve, lien, STAR et limites. Exclure Natur'Ally de `projects`, conserver Mada-BMP comme projet séparé sans prétendre à une mise en production.

- [ ] **Step 5: Run frontend unit and contract tests**

  Run: `npm run test:run` et `npm run lint`.
  Expected: PASS sans backend lancé.

### Task 3: Couvertures, CDN et UI des études de cas

**Files:**
- Modify: `frontend/src/content/projectIndex.ts`
- Modify: `frontend/src/components/projects/ProjectCard.tsx`, `frontend/src/pages/ProjectDetailPage.tsx`, `frontend/src/components/projects/CaseStudySections.tsx`
- Create or modify: `frontend/public/media/projects/*` only for authorized/local optimized copies
- Modify: `docs/media/media-inventory.md`
- Test: `frontend/src/test/project-media.test.tsx`

**Interfaces:**
- Produces: une couverture et un `alt` par projet, statuts `DOCUMENTED`/`DEMO_SIMULATED`/`LIVE_VERIFIED` explicites.
- Consumes: le modèle factuel de Task 2.

- [ ] **Step 1: Write failing media contract tests**

  Vérifier que les quatre projets ont exactement une couverture, un alt non vide, une provenance et qu'aucun projet n'utilise une galerie ZINA.

- [ ] **Step 2: Run tests to verify failure**

  Run: `npm run test:run -- src/test/project-media.test.tsx`
  Expected: FAIL car les cartes utilisent actuellement un monogramme sans média.

- [ ] **Step 3: Add one visual per project**

  Utiliser des URLs CDN d'illustration conceptuelle ou des copies locales contrôlées ; ne jamais présenter une illustration comme capture réelle. Ajouter `loading="lazy"` hors hero et dimensions/aspect ratio.

- [ ] **Step 4: Render evidence labels and STAR details**

  Afficher l'image, l'alt, la provenance, le statut, les limites et les liens uniquement quand ils sont vérifiés.

- [ ] **Step 5: Run media/UI tests and inspect screenshots**

  Run: `npm run test:run -- src/test/project-media.test.tsx src/test/ui-contract.test.tsx` puis captures à 390/1280 px.
  Expected: PASS et aucune image confidentielle.

### Task 4: Routes profondes, base GitHub Pages et SEO statique

**Files:**
- Modify: `frontend/vite.config.ts`, `frontend/src/routes/AppRouter.tsx`, `frontend/src/components/seo/MetaTags.tsx`, `frontend/src/routes/publicRoutes.ts`
- Create: `frontend/tools/generate-static-routes.mjs`
- Modify: `frontend/package.json`, `frontend/public/robots.txt`, `frontend/public/sitemap.xml`
- Test: `frontend/src/test/static-routes.test.ts`, `frontend/tools/check-static-routes.mjs`

**Interfaces:**
- Produces: `dist/<route>/index.html` pour chaque route FR/EN publiée, base relative correcte et métadonnées cohérentes.
- Consumes: liste de routes existante et slugs du contenu.

- [ ] **Step 1: Write failing route/base tests**

  Tester `VITE_BASE_PATH`, les routes projet/journal et l'existence des fichiers `dist/fr/index.html`, `dist/en/index.html` et des détails après build.

- [ ] **Step 2: Run tests to verify failure**

  Run: `npm run build` puis `node tools/check-static-routes.mjs`
  Expected: FAIL car les routes profondes ne sont pas générées et la base est `/` fixe.

- [ ] **Step 3: Implement calculated base and route generation**

  Lire `VITE_BASE_PATH` dans Vite ; générer les dossiers de routes connus après le build, sans prétendre à un SSR complet. Documenter le compromis SEO dans l'ADR et injecter au minimum title/description/canonical adaptés dans les documents générés.

- [ ] **Step 4: Update robots/sitemap and direct links**

  Utiliser la base calculée, supprimer les URL localhost/example, tester CV et médias.

- [ ] **Step 5: Run route checks**

  Run: `npm run build && node tools/check-static-routes.mjs`.
  Expected: PASS pour toutes les routes publiques.

### Task 5: GitHub Actions Pages et documentation d'édition

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `README.md`, `frontend/README.md`, `docs/decisions/adr-static-github-pages.md`
- Test: `tools/check-pages-workflow.mjs`

**Interfaces:**
- Produces: workflow qui installe, vérifie, construit `frontend/dist`, uploade l'artefact Pages et déploie avec permissions minimales.
- Consumes: scripts `frontend` de Task 4 ; nom du dépôt fourni par GitHub à l'exécution.

- [ ] **Step 1: Write failing workflow contract test**

  Vérifier `working-directory: frontend`, `npm ci`, `npm run verify`, `path: frontend/dist`, permissions Pages et absence de secrets inline.

- [ ] **Step 2: Run check to verify failure**

  Run: `node tools/check-pages-workflow.mjs`
  Expected: FAIL car aucun workflow `.github/workflows` n'existe.

- [ ] **Step 3: Add workflow and static instructions**

  Configurer `actions/checkout`, `setup-node`, `configure-pages`, `upload-pages-artifact` et `deploy-pages`, déclenchement push/dispatch, et calcul de `VITE_BASE_PATH` à partir de `github.repository`.

- [ ] **Step 4: Run workflow/documentation checks**

  Run: `node tools/check-pages-workflow.mjs`, `npm ci`, `npm run verify`.
  Expected: PASS local ; publication reste `NOT_RUN` tant que le remote et les droits GitHub ne sont pas fournis.

### Task 6: Archive P1 conditionnelle et recette finale

**Files:**
- Modify: `docs/architecture/inventory-before-after.md`, `docs/qa/portfolio-static-v2.0-acceptance.md`, `.gitignore`
- Potentially remove from active tree only after archive verification: `backend/`, `admin/`, `qa/`, `docker-compose*.yml`, `render.yaml`

**Interfaces:**
- Produces: dépôt P0 propre, rapport `PASS/PARTIAL/BLOCKED/NOT_RUN`, et preuve de restauration de l'archive.
- Consumes: manifeste de Task 1 et build statique de Tasks 2–5.

- [ ] **Step 1: Run full static QA before cleanup**

  Run: `cd frontend; npm ci; npm run verify; node tools/check-static-routes.mjs`; run secret/media scans from repo root.
  Expected: PASS sans backend/admin/PostgreSQL.

- [ ] **Step 2: Verify archive integrity**

  Compare every archived file SHA-256 with the source before any move. Confirm `.env`, logs and private files are outside the public archive.

- [ ] **Step 3: Exclude P1 from public active tree**

  Only after checks pass, move explicitly classified P1 directories to a named external archive or leave them outside the first public commit if the remote is not yet known. Never delete the only copy.

- [ ] **Step 4: Write acceptance report**

  Record commands, measured results, screenshots, known limits, remote/branch/HEAD, publication URL or `NOT_RUN`.

- [ ] **Step 5: Prepare first commit only after remote identification**

  Run `git status`, secret scan, inspect staged paths, then commit targeted P0 files. Do not push until the GitHub repository and Pages permissions are confirmed.
