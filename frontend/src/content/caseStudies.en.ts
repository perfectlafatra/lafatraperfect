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
      'An academic project completed in 2025, Lalana is a travel booking web application designed to present the Nosy Be offering and organise separate journeys for visitors, customers and management roles.',
    role:
      'Design and integrate the views, structure the public navigation and role-based areas, then connect those screens to the documented Spring Boot and Thymeleaf controller/view flow.',
    implementation:
      'Built the home, services and sign-in views, then organised customer, manager and administration dashboards around the tours, destinations, bookings, flights and users visible in the supplied captures.',
    outcomes:
      'Seven distinct interface states document the outcome: home, services, sign-in, administrator dashboard, manager dashboard, tour management and customer bookings.',
    publishedScope:
      'The published evidence consists of local renders supplied by the owner. There is no public demo, real user data or production availability claim.',
    technicalDecisions:
      'Server-side rendering with Thymeleaf, a documented Spring Boot controller/view flow and navigation differentiated by the represented roles. The Portfolio remains fully static.'
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
