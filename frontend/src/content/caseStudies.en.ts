import type { CaseStudyContent } from './caseStudies.fr';

export const caseStudiesEn: Record<string, CaseStudyContent> = {
  'react-localstorage': {
    context:
      'An internal need for fast prototyping: handling lists and preferences in the browser, with no backend available at first.',
    role:
      'Build a local React application that persists state between sessions and document the design choices.',
    implementation:
      'Readable component decomposition, controlled localStorage serialisation, handling invalid or missing JSON, cross code review.',
    outcomes:
      'A working local application and documentation connecting interface decisions to observed behaviour.',
    publishedScope:
      'Built for local use: the code and documentation are the deliverable, with no public deployment.',
    technicalDecisions:
      'JSON validation on load, a predictable default state and explicit handling of quota or format errors.'
  },
  lalana: {
    context:
      'A historical web project relying on server-side rendering with Spring Boot and Thymeleaf, to be documented retrospectively.',
    role:
      'Present the architecture, data flow and responsibilities without inventing metrics or public availability.',
    implementation:
      'Reviewed the existing code and mapped exchanges between pages, Spring Boot controllers and Thymeleaf views.',
    outcomes:
      'A clear overview of the server-side architecture, data flow and responsibilities across components.',
    publishedScope:
      'Historical project presented without a public URL or client screenshot.',
    technicalDecisions:
      'Thymeleaf server rendering, Spring Boot controllers and a clear split between request, processing and view.'
  },
  'zina-tsara-volo': {
    context:
      'A web development internship at ZINA by Tsara Volo from 16 June to 16 September 2025, with client screens and data that cannot be published.',
    role:
      'Present the React/JavaScript interface scope and Spring Boot/PostgreSQL service and data layers — sign-up/login, client area, CRM, shop, diagnosis, appointments and notifications documented in the internship record — without exposing client data.',
    implementation:
      'Contribution to React/JavaScript interfaces, reading REST contracts, checking CRM/shop/appointment flows and writing anonymised context from the internship record.',
    outcomes:
      'A platform covering the main customer and CRM journeys, presented here through my role and the technologies used.',
    publishedScope:
      'No client identity, screenshot or sensitive data is published, by design.',
    technicalDecisions:
      'Separation between React components, Spring Boot REST contracts and PostgreSQL persistence, with systematic anonymisation of publishable content.'
  },
  'mada-bmp': {
    context:
      'Independent professionals and small organisations manage operations with scattered tools (spreadsheets, notes, messaging) that do not talk to each other.',
    role:
      'Design and develop a full-stack management platform covering activity tracking, clients and simple invoicing, with a Java backend and a PostgreSQL database.',
    implementation:
      'React + Spring Boot + PostgreSQL architecture, structured and validated REST API, versioned migrations, clear frontend/backend responsibility split, technical decision log.',
    outcomes:
      'A platform distinct from this portfolio, still consolidating, with a documented and testable technical foundation.',
    publishedScope:
      'Currently in development; no public usage metrics are displayed at this stage.',
    technicalDecisions:
      'Modular architecture, versioned migrations, validated REST contracts and documented client, service, invoice, payment and receipt flows.'
  }
};
