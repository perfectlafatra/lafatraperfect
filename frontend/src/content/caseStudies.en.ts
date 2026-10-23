/**
 * Case studies — STAR method (Situation, Tasks, Actions, Results),
 * extended with limits and lessons. English version.
 */
import type { StarCaseStudy } from './caseStudies.fr';

export const caseStudiesEn: Record<string, StarCaseStudy> = {
  'react-localstorage': {
    situation:
      'An internal need for fast prototyping: handling lists and preferences in the browser, with no backend available at first.',
    tasks:
      'Build a local React application that persists state between sessions, document the choices and set a realistic demonstration scope.',
    actions:
      'Readable component decomposition, controlled localStorage serialisation, handling invalid or missing JSON, cross code review.',
    results:
      'A working local application and documentation explaining what is demonstrated — and what is not.',
    limits:
      'No public demo or verified screenshot is claimed. The scope is intentionally local.',
    lessons:
      'Browser persistence is powerful but silent: quota or format errors must be handled explicitly, never assumed impossible.'
  },
  lalana: {
    situation:
      'A historical web project relying on server-side rendering with Spring Boot and Thymeleaf, to be documented retrospectively.',
    tasks:
      'Present the architecture, data flow and responsibilities without inventing metrics or public availability.',
    actions:
      'Review of the existing code, page/controller/view request mapping, identification of points to be confirmed by authorised evidence.',
    results:
      'An honest case study distinguishing what is established from what still needs confirmation.',
    limits:
      'Exact dates, screenshots and public URLs still need confirmation before any commercial highlighting.',
    lessons:
      'Retrospective documentation demands traceability discipline: every technical claim must be traceable to a verifiable element.'
  },
  'zina-tsara-volo': {
    situation:
      'A web development internship at ZINA by Tsara Volo from 16 June to 16 September 2025, with client screens and data that cannot be published.',
    tasks:
      'Present the React/JavaScript interface scope and Spring Boot/PostgreSQL service and data layers — sign-up/login, client area, CRM, shop, diagnosis, appointments and notifications documented in the internship record — without exposing client data.',
    actions:
      'Contribution to React/JavaScript interfaces, reading REST contracts, checking CRM/shop/appointment flows and writing anonymised context from the internship record.',
    results:
      'A publishable experience report documenting the role and technical choices without claiming to publish client evidence.',
    limits:
      'No client identity, screenshot or sensitive data is published, by design.',
    lessons:
      'Confidentiality does not prevent proving competence: process rigour tells as much of the story as the deliverable.'
  },
  'mada-bmp': {
    situation:
      'Independent professionals and small organisations manage operations with scattered tools (spreadsheets, notes, messaging) that do not talk to each other.',
    tasks:
      'Design and develop a full-stack management platform covering activity tracking, clients and simple invoicing, with a Java backend and a PostgreSQL database.',
    actions:
      'React + Spring Boot + PostgreSQL architecture, structured and validated REST API, versioned migrations, clear frontend/backend responsibility split, technical decision log.',
    results:
      'A platform distinct from this portfolio, still consolidating, with a documented and testable technical foundation.',
    limits:
      'The product is still evolving: public usage metrics are not claimed until evidence is consolidated.',
    lessons:
      'A product project requires constant trade-offs: scope, accepted technical debt and documentation evolve at the same pace as features.'
  }
};
