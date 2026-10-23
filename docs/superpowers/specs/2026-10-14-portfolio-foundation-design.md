# Portfolio Full-Stack Foundation Design

## Intent and success criteria

Build an independent professional portfolio that gives a recruiter a clear, factual view of LAFATRAPERFECT's full-stack work. The public experience must remain complete when the API is disabled, work in French and English, and make the three historical case studies plus Mada-BMP easy to inspect without inventing claims, links, dates, screenshots, certifications, or client data.

The first delivery is successful when the public frontend builds and tests on port 3002, the Spring Boot 4.1.1 foundation builds for Java 17 on port 8082, PostgreSQL 18 can be started in an isolated Docker service on host port 5434, Flyway owns the documented V1-V5 schema, and configuration works from both the monorepo root and `backend/`. Production deployment, live SMTP/SMS, and a completed private CMS are deliberately outside this foundation.

## Chosen approach

The documents describe two approaches: A is a static-first public site, while B adds the P1 backend. This foundation uses a staged hybrid: complete the useful P0 experience first, but also build and validate the smallest honest P1 platform needed by the direct request—configuration, health, session-security defaults, PostgreSQL/Flyway, and Docker DEV. This preserves the book's static-first risk control while satisfying the request to initialize a real full-stack monorepo now.

The direct request selects `application.properties`, `application-dev.properties`, and `application-prod.properties`. This intentionally differs from the older `.yml` paths in the v1.2 target tree and will be recorded as an architecture decision.

## Architecture

`frontend/` is a React 18, Vite 5, strict TypeScript, Tailwind 3 static application. Local typed content is the source of truth while `PORTFOLIO_API_ENABLED=false`. Routes are canonical under `/fr` and `/en`; the language switch preserves the logical page. Shared layout, project cards, status components, direct-contact fallback, theme handling, error boundaries, and accessible loading/empty/error/offline states form the reusable UI layer.

`backend/` is a Java 17 Spring Boot 4.1.1 application using Boot 4 modules, explicit constructor injection, records for HTTP DTOs, session security, validation, JPA configuration, PostgreSQL, Flyway, and Actuator. The initial public contract is a sanitized health endpoint. The database-backed application refuses invalid configuration; tests that do not need PostgreSQL use explicit test settings rather than weakening DEV validation.

`admin/` is reserved with documentation only in this foundation. Creating empty or deceptive UI components would violate the target-tree rule. The same-origin admin, contact workflow, reset flow, full CMS, mail outbox, and SMS adapter require separate TDD milestones after this foundation.

`infra/`, `qa/`, and `docs/` contain runnable configuration and evidence templates. Docker Compose publishes PostgreSQL only on `127.0.0.1:5434`, connects the backend to service name `db`, and leaves production opt-in. No Mada-BMP resource, database, port, secret, container, or repository is accessed.

## Configuration and trust boundaries

The root `.env` is local-only and contains a placeholder password; `.env.example` is versioned without secrets. Spring imports both `optional:file:../.env[.properties]` and `optional:file:./.env[.properties]` so launches from `backend/` and the monorepo root resolve the same local configuration. Production reads environment variables and does not import a bundled `.env`.

Vite uses the monorepo root as `envDir`, exposes only `VITE_` variables, binds port 3002 with `strictPort`, and proxies `/api` to port 8082 in DEV. The browser never receives database, Spring, SMTP, SMS, or Docker values. Axios uses `/api`, an explicit timeout, `withCredentials`, typed error classification, and no mutation retry; it performs no required call while the API flag is false.

Admin sessions stay same-origin. Public static pages never require an admin cookie. JWT, WebSocket, FastAPI/Python AI, public admin signup, known default credentials, and browser session tokens are excluded.

## Data and migrations

Flyway V1-V5 are reproduced from Annex H of the Portfolio technical book, not invented. They target only a new `portfolio_db`, establish the documented 16 application tables, eight foreign keys, five distinct triggers, two SQL functions, indexes/checks, and three DRAFT case-study seeds. Applied migrations are immutable.

The first validation uses a disposable PostgreSQL 18 Docker volume owned by this project. It never connects to or resets `mada_bmp`. SQL verification records Flyway history, table/FK/function/trigger counts, and seed status. If Docker is unavailable, migration status is reported as NON EXÉCUTÉ rather than inferred from files.

## Public experience

The visual direction is restrained editorial/technical: high-contrast ink and warm neutral surfaces, cobalt primary actions, teal technical accents, large readable typography, subtle grid and code-diagram motifs, and limited motion. It prioritizes credibility and scanning over decorative effects. The home page progresses from identity and value proposition to proof, skills, journey, case studies, method, and contact.

Case studies use neutral placeholders for missing facts and media. Calls to action say “read the case study” unless a real verified URL exists. The CV download remains unavailable with an honest state until a real PDF is provided. Contact always offers a non-API path only when verified contact details are supplied; otherwise it explains that contact information is pending instead of fabricating it.

## Error handling and accessibility

The frontend provides localized 404, error-boundary, offline, empty, and API-unavailable states. Images are lazy except for priority content and have explicit fallbacks. Async controls expose busy/disabled state. Keyboard focus, skip link, one H1 per page, semantic landmarks, persistent labels, `aria-live` feedback, 44 px mobile targets, 320 px layouts, 200% zoom resilience, and reduced-motion behavior are mandatory.

The backend returns a small normalized error body without stack traces or configuration details. Health output reveals status only. Security distinguishes unauthenticated, unauthorized, validation, conflict, rate-limit, and server failures as later endpoints are introduced.

## Testing and evidence

Frontend behavior is developed red-green-refactor with Vitest and React Testing Library: route/locale preservation, i18n parity, project truthfulness, disabled API behavior, and accessible navigation/contact states. TypeScript, ESLint, tests, and the production build are required.

Backend behavior is developed red-green-refactor with Spring Boot test modules: health contract, anonymous/private route rules, CSRF behavior for mutations, configuration binding, and Flyway integration against PostgreSQL 18. Maven Verify is run under JDK 17. Docker Compose configuration is rendered before services are started, and database evidence is saved under `qa/results/` without secrets.

## Expanded full-tree scope

The owner requested the complete v1.2 target tree after foundation work began. The implementation therefore includes the functional P1 modules described by the tree: same-origin admin UI, public project/editorial/contact contracts, session authentication, idempotent contact plus outbox, bilingual publication checks, reset-token lifecycle, media validation, notification adapters kept disabled by default, repositories, entities, tests, infrastructure scripts, Postman/SQL QA assets, and documentation.

“Complete tree” does not authorize fabricated artifacts. A real CV PDF, real project screenshots, personal contact details, provider credentials, public domains, deployment proofs, and PASS evidence remain absent until supplied or executed. Their owning components expose honest unavailable states, and the gap is recorded in the content-proof matrix. Live SMTP, Orange SMS, external hosting, DNS, TLS certificates, Render/Hostinger deployment, and public URLs stay disabled or documented only.

