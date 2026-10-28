# Lalana Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publier une étude de cas Lalana bilingue et étayée par les trois captures fournies, sans modifier les autres projets ni ajouter de runtime serveur.

**Architecture:** Étendre le catalogue existant avec des preuves média optionnelles et les rendre dans le gabarit partagé. Les médias sont des assets locaux GitHub Pages ; le texte provient du journal vérifié.

**Tech Stack:** React, Vite, TypeScript strict, CSS existant, Vitest, Testing Library.

**Spec:** `docs/superpowers/specs/2026-10-28-lalana-case-study-design.md`

## Global Constraints

- Portfolio statique uniquement ; aucun backend ou appel API.
- Aucun changement de contenu pour Mada-BMP, ZINA ou React localStorage.
- Aucune affirmation de production, de résultat E2E ou de fonctionnalité non vérifiée.
- FR/EN obligatoire.
- Les trois images restent attribuées au propriétaire et documentées dans l’inventaire média.

## Review Focus

- Un `BASE_URL` de dépôt projet doit produire des URLs média valides.
- L’absence de `evidence` ne doit rien ajouter aux autres études de cas.
- Les dimensions et alternatives doivent être présentes sur chaque image.
- La page anglaise doit rendre les mêmes preuves avec un texte localisé.
- Les images ne doivent pas provoquer de débordement à 360 px.

---

### Task 1: Contrat de contenu et de médias Lalana

**Files:**
- Create: `frontend/src/test/lalana-case-study.test.tsx`
- Modify: `frontend/src/content/projectIndex.ts`
- Create: `frontend/public/media/projects/lalana/01-accueil-desktop.png`
- Create: `frontend/public/media/projects/lalana/04-connexion.png`
- Create: `frontend/public/media/projects/lalana/apercu-interfaces.jpg`

**Interfaces:**
- Produces: `ProjectSummary.evidence?: ProjectEvidenceAsset[]`.

- [ ] Écrire un test qui exige le titre complet, la catégorie académique, la stack Java/Spring Boot/Thymeleaf, le statut documenté, la couverture locale et deux preuves complémentaires.
- [ ] Exécuter le test et constater l’échec lié au contenu Lalana actuel.
- [ ] Copier les trois médias puis implémenter les types et données minimaux.
- [ ] Exécuter le test ciblé et constater sa réussite.

### Task 2: Récit bilingue issu du journal

**Files:**
- Modify: `frontend/src/content/caseStudies.fr.ts`
- Modify: `frontend/src/content/caseStudies.en.ts`
- Test: `frontend/src/test/lalana-case-study.test.tsx`

**Interfaces:**
- Consumes: `CaseStudyContent` existant.
- Produces: six sections localisées sans labels STAR visibles.

- [ ] Ajouter au test les résultats observables et les limites de publication attendus en FR et EN.
- [ ] Exécuter le test et constater l’échec sur le texte générique actuel.
- [ ] Remplacer uniquement les deux entrées `lalana` par le récit du journal.
- [ ] Exécuter le test ciblé et constater sa réussite.

### Task 3: Galerie de preuves accessible

**Files:**
- Create: `frontend/src/components/projects/ProjectEvidenceGallery.tsx`
- Modify: `frontend/src/pages/ProjectDetailPage.tsx`
- Modify: `frontend/src/styles/components.css`
- Test: `frontend/src/test/lalana-case-study.test.tsx`

**Interfaces:**
- Consumes: `ProjectSummary.evidence`, locale FR/EN.
- Produces: une région nommée avec figures et légendes ; aucun rendu si la collection est absente.

- [ ] Ajouter un test de rendu FR/EN et un test d’absence sur ZINA.
- [ ] Exécuter le test et constater l’échec car le composant n’existe pas.
- [ ] Implémenter le composant, son intégration conditionnelle et le CSS responsive minimal.
- [ ] Exécuter le test ciblé puis la suite complète.

### Task 4: Documentation, build et publication

**Files:**
- Modify: `docs/media/media-inventory.md`
- Modify: `docs/ux/content-proof-matrix.md`
- Modify: `docs/qa/portfolio-static-v2.0-acceptance.md`

**Interfaces:**
- Consumes: résultats réels de vérification et URL de production.
- Produces: provenance, statut et recette traçables.

- [ ] Documenter les trois médias, leur hash, leur autorisation et leur rôle.
- [ ] Exécuter `npm run verify` dans `frontend` et consigner le résultat réel.
- [ ] Vérifier le diff, les secrets et le périmètre Git.
- [ ] Committer et pousser normalement sur `master` si tout est vert.
- [ ] Attendre GitHub Actions puis vérifier `/fr/projets/lalana` et `/en/projects/lalana` sur GitHub Pages.
