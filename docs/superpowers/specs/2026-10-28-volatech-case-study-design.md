# VolaTech case study — design note

## Goal

Add VolaTech as a fifth bilingual portfolio case study that demonstrates the owner's Java EE / Jakarta EE skills through verifiable source evidence and supplied screenshots.

## Editorial direction

- Present VolaTech as an academic e-commerce project completed in 2025, not as paid work or a production service.
- Lead with the concrete user flow: browse IT products, manage a cart, place an order, use a simulated payment, obtain a PDF invoice and support in-store pickup with a QR reference.
- Describe the observed architecture accurately: Java 17, Jakarta EE, Servlets/JSP, service and repository layers, JDBC/DataSource and PostgreSQL, packaged as a Maven WAR for WildFly.
- Mention session-based USER/ADMIN access and BCrypt password handling without claiming a complete security audit.
- State that payment is simulated, the QR reference is not presented as cryptographically signed, and the VolaTech runtime/test suite was not executed during this portfolio update.

## Media

- Cover: supplied storefront and cart screenshot.
- Supporting evidence: supplied QR-assisted pickup screen and PDF invoice screenshot.
- All three screenshots come from the owner-supplied presentation. Demonstration data is treated as fictitious and visible personal information is blurred.

## Technical scope

- Extend the existing React/Vite static content model; do not add a backend or runtime dependency to the portfolio.
- Add stable routes `/fr/projets/volatech` and `/en/projects/volatech` to the static route, sitemap and deployment contracts.
- Preserve the existing visual system and generic case-study components.
