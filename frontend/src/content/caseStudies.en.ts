import type { CaseStudyContent } from './caseStudies.fr';

export const caseStudiesEn: Record<string, CaseStudyContent> = {
  lalana: {
    context:
      'An academic project completed in 2025, Lalana is a travel booking web application designed to present the Nosy Be offering and organise separate journeys for visitors, customers and management roles.',
    objectives:
      'Centralise discovery of tours, destinations and flights, organise booking and give each profile an interface suited to its responsibilities.',
    role:
      'Design the journeys, integrate the Thymeleaf views and structure visitor, customer, manager and administrator areas within a Java Spring Boot application.',
    architecture:
      'A server-rendered Spring MVC architecture: Thymeleaf views, controllers, Java services, Spring Data JPA repositories and PostgreSQL. Spring Security carries role-based access.',
    features:
      'Travel catalogue, authentication, tour or flight bookings, Customer, Manager and Administrator areas, dashboards and Chart.js indicators.',
    implementation:
      'Layered the application through Spring MVC controllers, business services, Spring Data JPA repositories and PostgreSQL-backed models. The views cover home, services, sign-in and management areas for tours, destinations, bookings, flights and users.',
    outcomes:
      'Seven distinct interface states document the outcome: home, services, sign-in, administrator dashboard, manager dashboard, tour management and customer bookings.',
    publishedScope:
      'The source code review and supplied local renders form the presented evidence. There is no public demo, real user data or production availability claim.',
    technicalDecisions:
      'Server-side rendering with Thymeleaf, JPA/PostgreSQL persistence and role-based access with Spring Security and BCrypt. The code review also identified production hardening still required: CSRF protection, restricted diagnostic routes and completion of selected booking services.'
  },
  volatech: {
    context:
      'An academic project completed in 2025, VolaTech addresses a complete IT product store scenario: browse the catalogue, manage a cart, place an order, review purchases and prepare pickup.',
    objectives:
      'Connect catalogue, cart, order, administrator validation, invoicing and pickup in one coherent and traceable e-commerce journey.',
    role:
      'Design the customer and administrator journeys, structure the e-commerce domain and connect the JSP interfaces to Java processing and PostgreSQL data.',
    architecture:
      'A traditional Java Web application packaged as a WAR: JSP/JSTL views, HTTP Servlets, Java services, JDBC repositories and PostgreSQL through a WildFly DataSource.',
    features:
      'Catalogue and cart, order history, simulated payment with an internal reference, checkout validation, PDF invoice and a QR reference supporting pickup.',
    implementation:
      'A layered architecture using Servlets for HTTP routes, JSP/JSTL for rendering, business services and JDBC repositories backed by a PostgreSQL DataSource. Sessions distinguish USER and ADMIN access; passwords use BCrypt and the observed queries use PreparedStatement.',
    outcomes:
      'The documented journey covers the catalogue, cart, order history, simulated payment, administrator validation, PDF invoice and the QR reference used to support pickup.',
    publishedScope:
      'Evidence comes from the signed public study and supplied local screenshots. Payment is simulated, the QR is not cryptographically signed proof and no production availability is claimed.',
    technicalDecisions:
      'Java 17 and Jakarta EE are packaged as a Maven WAR for WildFly. The persistence actually observed is primarily JDBC, even though Hibernate/JPA is present in the project. The invoice is rendered as PDF with iText html2pdf; the QR carries a record reference and is not presented as cryptographically signed proof.'
  },
  'zina-tsara-volo': {
    context:
      'A final Licence project in Internet/Intranet Applications Development (DA2I), completed during a 2025 internship at ZINA by Tsara Volo and focused on digitising the shop, services and customer relationship.',
    objectives:
      'Connect four domains in one experience: commerce, services and appointments, customer relationship and internal operations, with Public, Customer and ADMIN journeys.',
    role:
      'Design and document the journeys, contribute to the React interfaces and connect their organisation to Spring Boot services and the PostgreSQL model without exposing real customer data.',
    architecture:
      'React/Vite frontend and Spring Boot backend separated by a JSON REST API, with business services, Spring Data JPA and PostgreSQL. Permissions must be enforced by the API.',
    features:
      'Public site, shop, cart, appointments, hair diagnosis, blog, Customer area and ADMIN CRM views. CRM screens and selected statistics use labelled fictitious scenarios.',
    implementation:
      'Structured React interfaces, forms and FR/EN navigation, reviewed REST contracts, organised shop and appointment journeys and presented anonymised CRM views.',
    outcomes:
      'Consistent public and business interfaces cover the main documented journeys. Published screenshots come from the signed case study and contain no real customer data.',
    publishedScope:
      'Customer and CRM views in the public study are demonstrations using fictitious data. No deployment, automated payment, trained AI model or complete E2E validation is claimed.',
    technicalDecisions:
      'Separation between React components, Spring Boot REST contracts and PostgreSQL persistence, with systematic anonymisation of publishable content.'
  },
  'mada-bmp': {
    context:
      'Mada-BMP is an ongoing Master 1 academic project addressing independent professionals and small organisations that still manage operations through scattered spreadsheets, notes and messaging tools.',
    objectives:
      'Unify customer, service, invoice, declared payment and receipt flows, then support analysis without moving business rules or authorisation outside the Java backend.',
    role:
      'Design and develop the full-stack architecture, React journeys, Spring Boot REST contracts, PostgreSQL model and progressive integration of an internal Python/FastAPI analysis service.',
    architecture:
      'Target architecture currently being integrated: React → Spring Boot → FastAPI. React/Vite/TypeScript carries the interface; Spring Boot centralises the API, authorisation, workspace isolation and sensitive operations; PostgreSQL stores the data; FastAPI remains an internal analysis service called by Spring Boot.',
    features:
      'Customer, service, invoice, declared payment, receipt and workspace management. The decision-support scope targets cash-flow forecasts, budget trends, anomalies, reminder prioritisation and analytical summaries.',
    implementation:
      'REST contracts and versioned migrations structure data exchange and persistence. Spring Boot remains the control point for permissions, workspace isolation and sensitive actions; the FastAPI service receives only the data required for the planned analytical processing.',
    outcomes:
      'The project has a documented and testable full-stack foundation separate from this portfolio. Analysis-service integration and functional consolidation remain in progress as part of the Master 1 programme.',
    publishedScope:
      'Project in development: the FastAPI architecture describes an integration target. No trained model, accuracy score, validated predictive result, public deployment or full completion is claimed.',
    technicalDecisions:
      'Keeping Spring Boot as the security boundary avoids exposing the analysis service directly. Authorisation, workspaces and sensitive operations remain controlled in Java, while FastAPI is reserved for internal analytical processing.'
  }
};
