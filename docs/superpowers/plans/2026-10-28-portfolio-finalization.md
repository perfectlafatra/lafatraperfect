# Portfolio Recruiter Finalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a concise Java/Full-Stack recruiter portfolio with accurate signed case studies, authentic media and downloadable public documents.

**Architecture:** Extend the existing content-as-code model rather than rebuilding the site. Public binaries remain static base-aware assets; a focused resource component and richer case-study sections consume the new metadata. The hero is simplified to a static visual to reduce runtime weight.

**Tech Stack:** React 18, Vite 5, TypeScript 5 strict, existing CSS tokens, Vitest, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-28-portfolio-finalization-design.md`

## Global Constraints

- Modify only this Portfolio repository; never run or alter Lalana, VolaTech, ZINA or Mada-BMP applications.
- Keep the site static, FR/EN and compatible with the `/lafatraperfect/` GitHub Pages base.
- Publish only the explicitly supplied signed project studies and CV; keep Mada-BMP internal documents private.
- Do not claim production, real payment, complete E2E validation or AI integration without proof.
- Preserve unrelated existing user changes.

## Review Focus

- A project without public documents must render without empty controls.
- Every public URL must retain the Vite base path.
- Download links must use real files and consultation links must be safe external-document links.
- ZINA evidence must be authentic but must not expose private customer information.
- Removing the 3D hero must not remove the accessible hero label or CTA journey.

---

### Task 1: Public document contract

**Files:**
- Modify: `frontend/src/content/projectIndex.ts`
- Create: `frontend/src/components/projects/ProjectResources.tsx`
- Modify: `frontend/src/pages/ProjectDetailPage.tsx`
- Test: `frontend/src/test/portfolio-finalization.test.tsx`
- Create: `frontend/public/documents/projects/**`
- Modify: `frontend/public/cv/lafatraramanantena-cv.pdf`

**Interfaces:**
- Produces: `ProjectResources`, optional `ProjectSummary.resources` with `pdf` and `pptx` base-aware URLs.

- [ ] Write tests for file existence, resource metadata and accessible links.
- [ ] Run the focused test and confirm it fails because resources are absent.
- [ ] Copy only the signed public binaries and current CV.
- [ ] Implement the resource type, component and detail-page integration.
- [ ] Run the focused test and confirm it passes.

### Task 2: Evidence-led case-study content

**Files:**
- Modify: `frontend/src/content/caseStudies.fr.ts`
- Modify: `frontend/src/content/caseStudies.en.ts`
- Modify: `frontend/src/components/projects/CaseStudySections.tsx`
- Modify: `frontend/src/content/projectIndex.ts`
- Create: `frontend/public/media/projects/zina/**`
- Test: `frontend/src/test/portfolio-finalization.test.tsx`
- Modify: `frontend/src/test/project-media.test.tsx`

**Interfaces:**
- Produces: `CaseStudyContent` fields `objectives`, `architecture`, `features` and authentic ZINA evidence metadata.

- [ ] Write assertions for the signed project identities, limits and authentic local ZINA media.
- [ ] Run the focused tests and confirm the missing fields/media fail.
- [ ] Extract and optimise only the authorised screenshots from the signed ZINA presentation.
- [ ] Update FR/EN narratives and section labels from the signed sources.
- [ ] Run focused tests to green.

### Task 3: Recruiter identity and lightweight hero

**Files:**
- Modify: `frontend/src/config/site.ts`
- Modify: `frontend/src/content/profile.ts`
- Modify: `frontend/src/i18n/locales/fr.json`
- Modify: `frontend/src/i18n/locales/en.json`
- Modify: `frontend/src/components/home/Hero.tsx`
- Modify: `frontend/src/styles/components.css`
- Test: `frontend/src/test/portfolio-finalization.test.tsx`
- Test: `frontend/src/test/app.test.tsx`

**Interfaces:**
- Produces: a static accessible hero with the current candidate identity and Java/Full-Stack target.

- [ ] Add identity and no-3D hero assertions.
- [ ] Run tests and verify the old identity/visual fails them.
- [ ] Update site copy and replace the lazy 3D import with the existing static portrait asset.
- [ ] Refine responsive styles using the existing token system.
- [ ] Run focused tests to green.

### Task 4: Provenance, public contract and deployment

**Files:**
- Modify: `docs/media/media-inventory.md`
- Modify: `docs/ux/content-proof-matrix.md`
- Modify: `docs/qa/portfolio-static-v2.0-acceptance.md`
- Modify: `frontend/tools/check-public-contract.mjs`

**Interfaces:**
- Consumes: all public resources and routes from Tasks 1–3.
- Produces: reproducible provenance, QA evidence and a public deployment record.

- [ ] Record source paths, hashes, authorisation and limitations without copying Mada-BMP documents.
- [ ] Extend the public contract checker to require the three signed studies and current CV.
- [ ] Run `npm run verify` and inspect the complete output.
- [ ] Run changed-file secret and privacy checks plus `git diff --check`.
- [ ] Commit only portfolio files, push normally, wait for GitHub Pages and verify FR/EN routes and document URLs.
