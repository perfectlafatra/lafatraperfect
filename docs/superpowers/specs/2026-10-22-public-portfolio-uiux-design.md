# Public Portfolio UI/UX Design Specification

## Goal

Make the LAFATRAPERFECT public portfolio feel like a premium, evidence-led editorial site while preserving its existing content, routes, bilingual behavior, theme toggle, API boundary, and honest fallback states.

## Scope

- Public `frontend/` only for visual and interaction changes.
- The private `admin/` dashboard and backend business contracts remain unchanged except for environment/port wiring.
- Preserve all existing public routes and `routePath` behavior.
- Preserve static-first behavior when `VITE_PORTFOLIO_API_ENABLED=false`.

## Design direction

Use a dark-first editorial system with a warm light counterpart. The visual hierarchy is: one clear value proposition, two primary actions, proof strip, selected work, capability groups, process, journal, and one closing contact action. Keep the portrait as a human anchor, but make its frame quieter and more intentional than a decorative orb.

## System rules

- Organize CSS variables as primitive, semantic, and component tokens.
- Limit the type system to the existing display/body pairing (`Sora` + `Inter`) and use a documented scale.
- Use a consistent 4px spacing rhythm, 12px controls, and 20px content surfaces.
- Every interactive control has default, hover, focus-visible, active, disabled, and reduced-motion behavior where applicable.
- Maintain minimum 44px touch targets and WCAG AA text contrast.
- Use responsive layouts at 850px and 520px breakpoints without horizontal overflow.

## Information architecture

1. Header: compact brand, primary navigation, locale/theme controls, mobile disclosure.
2. Hero: eyebrow, outcome-led headline, concise lead, projects CTA and contact CTA; CV remains an honest disabled state until configured.
3. Proof: two short evidence statements with explicit numbering.
4. Skills: three capability groups with short proof captions.
5. Cases: selected projects with status, stack, and next action.
6. Featured project: one larger case-study invitation.
7. Journal and method: supporting credibility without competing with projects.
8. Footer: legal links and a clear closing statement.

## Configuration contract

- Root `.env` is local-only and is the single source for development secrets and ports.
- `.env.example` contains placeholders only.
- `application.properties` contains shared non-secret defaults and activates `dev` by default.
- `application-dev.properties` imports root/working-directory `.env` and binds the backend to `BACKEND_PORT` (8082 by default).
- `application-prod.properties` never imports `.env`; it requires deployment environment variables and validates the schema.
- Vite binds to `VITE_PORT` (3002 by default) and proxies `/api` to `VITE_API_PROXY_TARGET` (8082 by default).
- Docker development publishes frontend 3002 and backend 8082; internal service traffic uses the backend service name and port 8082.

## Verification

- Frontend lint, unit tests, build, link/contract checks.
- Backend Maven tests and package.
- Compose config validation with no secret values printed.
- Static checks proving no tracked file contains the local database password.
- Manual smoke checks for `/fr`, `/en`, mobile navigation, theme toggle, project CTA, contact fallback, and `/api/health` on port 8082.
