# Architecture

La vitrine P0 est autonome et statique. Le backend P1, la base PostgreSQL et le backoffice historique sont conservés comme archives de contexte, mais ne sont ni importés ni construits par GitHub Pages. Mada-BMP est uniquement présenté comme réalisation ; aucune dépendance technique ne relie les deux projets.

- [ADR — Portfolio statique GitHub Pages](../decisions/adr-static-github-pages.md)
- [Inventaire avant/après](inventory-before-after.md)
- [Baseline de sécurité](../roadmap/portfolio-static-v2.0-baseline.md)

Les anciens contrats API et ADR Spring restent documentaires et hors du périmètre P0 ; ils ne décrivent pas les routes du site public actuel.

