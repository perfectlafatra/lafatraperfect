# Portfolio Full-Stack Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a tested static-first bilingual portfolio plus an executable Spring Boot/PostgreSQL/Flyway/Docker foundation.

**Architecture:** React owns the complete public P0 experience with local content and optional typed API integration. Spring Boot provides the isolated P1 foundation and schema, while root configuration and Compose connect native and container workflows without exposing secrets.

**Tech Stack:** React 18, Vite 5, TypeScript strict, Tailwind CSS 3, React Router, Axios, i18next, Vitest/RTL; Spring Boot 4.1.1, Java 17, Maven, Spring Security HttpSession, PostgreSQL 18, Flyway; Docker Compose.

**Spec:** `docs/superpowers/specs/2026-10-14-portfolio-foundation-design.md`

## Global Constraints

- Backend port 8082; frontend port 3002 with strict binding.
- Database is `portfolio_db`; Docker host mapping is `127.0.0.1:5434:5432`.
- Use `application*.properties`; root `.env` is ignored and contains no real secret.
- No Lombok, MapStruct, JWT, WebSocket, Python/FastAPI, production activation, or Mada-BMP mutation.
- No invented experience, date, media, certification, contact detail, URL, or PASS result.
- Every production behavior starts with a test that is observed failing for the expected reason.

## Review Focus

- Locale switching on nested project routes must preserve the logical page and never expose a missing translation key.
- `PORTFOLIO_API_ENABLED=false` must result in zero mandatory backend requests and a useful contact fallback state.
- A missing CV/media/contact URL must produce an honest disabled/fallback state rather than a broken or fictional link.
- Backend health must stay public and sanitized while every future `/api/admin/**` route remains session-protected.
- Native and Docker configuration must resolve different DB hosts without leaking root `.env` values into Vite or image layers.

---

### Task 1: Monorepo configuration and documentation

**Files:** Create root `.gitignore`, `.editorconfig`, `.env`, `.env.example`, `README.md`, `CHANGELOG.md`, `SECURITY.md`, Compose files, and architecture/QA documentation.

**Interfaces:** Produces the environment variable contract consumed by frontend, backend, and Compose.

- [ ] Add configuration files with placeholders and run secret-pattern checks.
- [ ] Render `docker compose config` with a temporary non-secret value and confirm ports/profiles/service names.
- [ ] Record the `.properties` decision and the P0/P1 boundary.

### Task 2: Frontend public contract

**Files:** Create `frontend/package.json`, Vite/TypeScript/Tailwind/ESLint configuration, test setup, route/content/config modules, pages, components, styles, and public metadata.

**Interfaces:** Produces localized routes and `ApiConfig { enabled: boolean; baseUrl: string; timeoutMs: number }` for the Axios layer.

- [ ] Write failing tests for FR/EN route parity, nested-route locale switching, the four factual project entries, disabled API behavior, and missing CV/contact fallbacks.
- [ ] Run targeted tests and confirm expected missing-module/behavior failures.
- [ ] Implement the minimal route/content/design-system behavior required by the tests.
- [ ] Run the targeted tests and full frontend suite; refactor only while green.
- [ ] Run ESLint, TypeScript compilation, and production build.

### Task 3: Backend health and security foundation

**Files:** Create Maven build/wrapper, application class, properties profiles, security config, health controller/response record, and Spring tests.

**Interfaces:** Produces `GET /api/health -> HealthResponse(status)` and protects `/api/admin/**` with HttpSession/CSRF defaults.

- [ ] Write failing MockMvc tests for sanitized public health, anonymous admin denial, and CSRF rejection of an admin mutation probe.
- [ ] Run the tests under JDK 17 and verify they fail because the application/routes/config do not exist.
- [ ] Implement the minimal Boot 4.1.1 application using explicit constructors and records.
- [ ] Run targeted and full Maven tests under JDK 17; refactor only while green.
- [ ] Verify startup on 8082 using a test profile that does not claim PostgreSQL/Flyway success.

### Task 4: PostgreSQL 18 and Flyway V1-V5

**Files:** Create the five immutable migrations exactly from the technical book, test profile, Flyway integration test, and `qa/sql/verification_db.sql`.

**Interfaces:** Produces the documented 16-table schema, eight FKs, five triggers, two functions, and three DRAFT seeds.

- [ ] Write a failing integration/SQL verification test for exact migration versions and schema counts.
- [ ] Start only the project PostgreSQL 18 service and verify the fresh `portfolio_db` target.
- [ ] Run the failing test before adding migrations.
- [ ] Add V1-V5 from Annex H without inventing DDL, then rerun to green.
- [ ] Save sanitized SQL evidence and `flyway_schema_history` output under `qa/results/`.

### Task 5: Docker/native integration and final verification

**Files:** Create Dockerfiles, dockerignore files, Nginx/static configuration as needed, QA result index, and update README.

**Interfaces:** Consumes the shared environment contract and produces native and Compose startup commands.

- [ ] Build frontend/backend images and verify Compose health without activating PROD, SMTP, or SMS.
- [ ] Start the native frontend on 3002 and backend on 8082, check representative HTTP routes, then stop owned processes.
- [ ] Run full frontend and backend verification, Compose config, secret scan, and Git status review.
- [ ] Record each result as VERT, ORANGE, ROUGE, or NON EXÉCUTÉ with the exact command/evidence.
- [ ] Create the first verified Git commit only after confirming `.env`, secrets, build artifacts, and QA-sensitive outputs are excluded.

### Task 6: Complete P1 domain and API tree

**Files:** Create every non-artifact backend path listed by arborescence v1.2: entities, repositories, records, services, controllers, security/configuration, exception handling and focused integration tests.

**Interfaces:** Produces the documented public/admin HTTP contracts over the V1-V5 schema.

- [ ] Add failing tests for contact idempotency, bilingual publication, reset one-use/expiry, outbox retry, quota concurrency and admin session security.
- [ ] Implement each behavior with explicit constructors, manual mappings and transactions.
- [ ] Run targeted RED/GREEN cycles and the complete Maven suite.

### Task 7: Complete same-origin admin tree

**Files:** Create the 16 admin paths from arborescence v1.2 with a buildable React application and typed API boundary.

**Interfaces:** Consumes `/api/admin/**`, session cookie and CSRF token; stores no authentication token in browser storage.

- [ ] Add failing tests for anonymous guard, login error, protected shell and typed API configuration.
- [ ] Implement minimal usable login/dashboard/editor/inbox/security flows.
- [ ] Run admin lint, tests and build.

### Task 8: Complete documentation, infra and QA tree

**Files:** Create every applicable root/docs/infra/qa path from arborescence v1.2; omit only unsupplied real CV/screenshots and record those omissions.

**Interfaces:** Produces reproducible build, smoke, backup/restore, Postman, SQL, E2E and performance contracts without secrets.

- [ ] Validate shell syntax, Nginx configuration text, JSON/CSV formats, Postman collection and local environment.
- [ ] Compare real paths against the 241-path source list and classify every missing target as implemented, intentionally omitted artifact, or documented deviation.
- [ ] Re-run secret scanning and all available builds/tests before the verified first commit.

