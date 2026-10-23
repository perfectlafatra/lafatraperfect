# Public Portfolio UI/UX and Ports Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver the approved premium editorial portfolio redesign and make local development consistently use frontend port 3002 and backend port 8082 with root `.env`-driven configuration.

**Architecture:** Keep the existing React route/content architecture and implement the visual redesign through a tokenized CSS layer plus small semantic JSX improvements. Keep Spring shared properties separate from `application-dev.properties` and `application-prod.properties`; development imports the root `.env`, while production requires injected environment variables.

**Tech Stack:** React 18, TypeScript, Vite 5, Vitest, Spring Boot 4.1.1, Java 17, Maven, Docker Compose.

**Spec:** `docs/superpowers/specs/2026-10-22-public-portfolio-uiux-design.md`

## Global Constraints

- Public routes, bilingual FR/EN content, theme toggle, and API fallback behavior remain compatible.
- Frontend development binds to `3002`; backend development binds to `8082`.
- Root `.env` is never committed and is the only local source for sensitive values.
- Production properties never import the development `.env`.
- No admin UI redesign in this plan.
- No new runtime dependency is required.

## Review Focus

- Vite proxy targets port 8082 in native and Compose development.
- Spring startup from both repository root and `backend/` resolves the same `.env`.
- Production profile fails closed when required deployment variables are missing.
- Mobile navigation and CTA controls remain keyboard accessible and at least 44px tall.
- Reduced-motion users receive no forced hero/card motion.

### Task 1: Environment and profile contract

**Files:**
- Modify: `.env.example`, `frontend/vite.config.ts`, `backend/src/main/resources/application.properties`, `backend/src/main/resources/application-dev.properties`, `backend/src/main/resources/application-prod.properties`, `backend/Dockerfile`, `frontend/nginx.conf`, `docker-compose.yml`, `qa/docker-compose.e2e.yml`, `README.md`, `docs/architecture/api-contracts.md`
- Test: `frontend/src/test/config.test.ts` (create)

- [ ] Add tests/assertions for Vite port/proxy configuration and documented default ports.
- [ ] Update versioned examples and Spring/Vite/Compose wiring to use 8082/3002 consistently.
- [ ] Keep dev `.env` imports optional and production environment-only.
- [ ] Run the focused configuration test and project config validation.

### Task 2: Tokenized visual system

**Files:**
- Modify: `frontend/src/styles/tokens.css`, `frontend/src/styles/base.css`, `frontend/src/styles/motion.css`
- Test: `frontend/src/test/ui-contract.test.tsx` (create)

- [ ] Add failing DOM assertions for the public shell, primary contact action, and required navigation labels.
- [ ] Implement primitive/semantic/component tokens, type scale, surface treatment, focus states, and reduced-motion rules.
- [ ] Run the focused UI contract test and the frontend suite.

### Task 3: Editorial public shell

**Files:**
- Modify: `frontend/src/components/home/Hero.tsx`, `frontend/src/pages/HomePage.tsx`, `frontend/src/components/layout/PublicHeader.tsx`, `frontend/src/components/layout/PublicFooter.tsx`, `frontend/src/styles/components.css`
- Test: extend `frontend/src/test/app.test.tsx` and `frontend/src/test/routes.test.tsx`

- [ ] Add failing assertions for the contact CTA and the redesigned section landmarks.
- [ ] Implement concise hero actions, explicit section labels, stronger proof/case hierarchy, and mobile-safe header/footer layout.
- [ ] Preserve all routes, translations, and CV fallback behavior.
- [ ] Run frontend lint, tests, build, links, and public contract checks.

### Task 4: Environment/runtime verification

**Files:**
- Modify: `frontend/.env.example`, `Makefile`, `README.md` if needed after smoke checks.

- [ ] Validate `docker compose config` for development and production overlays without printing secret values.
- [ ] Run backend Maven verification and frontend `npm run verify`.
- [ ] Start native/Compose services on 8082/3002, smoke `/api/health`, `/fr`, `/en`, and mobile navigation, then stop only owned processes.
- [ ] Run a secret scan and review `git diff` for accidental sensitive values.

