# Portfolio recruiter finalization design

## Objective

Turn the existing static portfolio into a concise recruiter-facing presentation of RANDRIAMANANTENA Fitahiana Lafatra: a junior Java / Full-Stack developer at Bac+4 level, with four evidence-led projects and downloadable public documents.

## Editorial direction

- Lead with identity, target role, Java/Spring Boot strengths and the concrete React/PostgreSQL complement.
- Present Lalana, VolaTech and ZINA as professional case studies. STAR guides the writing internally, but the visible headings stay natural: context, challenge, role, architecture, work delivered, results and limits.
- Present Mada-BMP briefly as an independent work in progress. Its internal manuals and presentations remain private.
- Keep every claim within the supplied signed studies: no production, real payment, E2E or AI claim without evidence.
- Describe VolaTech payment as simulated and its QR as a retrieval reference, not signed proof.
- Describe ZINA demo CRM, appointments and diagnostic screens as scenario interfaces where the signed study says so.

## UI direction

Adapt the useful principles from the supplied UI/UX pack without installing its Claude tooling: a precise editorial grid, strong hierarchy, generous negative space, restrained indigo/cyan accents, warm proof labels, visible focus and 44 px targets. The site keeps its current tokens and components.

The heavy 3D hero is replaced by a static, optimised portrait composition. Project pages gain a compact document panel with clear PDF consultation/download and PowerPoint download actions. Cards remain scan-friendly and use one authentic cover per signed project.

## Content and media contract

- The current signed CV replaces the older public CV while preserving the stable download URL.
- The signed public PDF and PPTX for Lalana, VolaTech and ZINA are copied into project-specific public document folders.
- ZINA uses the authentic public home screenshot embedded in the signed presentation as its cover, plus a small evidence selection from the same public document.
- Existing authorised Lalana and VolaTech screenshots remain valid; their signed documents become the definitive narrative references.
- All public binaries are recorded by source, date and SHA-256 in the media inventory.

## Technical approach

Extend `ProjectSummary` with optional public resources and extend `CaseStudyContent` with objectives, architecture and features. Add one resource component used only by projects with public documents. Keep base-aware URLs so GitHub Pages works below `/lafatraperfect/`.

Automated tests must prove the public files exist, the resources render with safe/download attributes, ZINA uses a local authentic cover, the recruiter identity is current, and no internal Mada-BMP document is exposed.

## Deployment

Run the complete repository verification, scan changed public text and filenames for secrets, commit the portfolio-only changes, push normally to `origin/master`, wait for the Pages workflow and verify the public FR/EN project routes and document URLs.
