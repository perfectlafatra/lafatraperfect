# ADR — Portfolio P0 statique sur GitHub Pages

- **Statut :** accepté
- **Date :** 2026-10-22
- **Décideur :** propriétaire du portfolio

## Contexte

Le portfolio sert une candidature de développeur Web Full-Stack. Il doit présenter des preuves et études de cas lisibles comme une vitrine publicitaire professionnelle. Le dépôt actuel contient aussi une ancienne chaîne P1 avec Spring Boot, PostgreSQL, Flyway, administration, Docker et scénarios E2E.

## Décision

Le périmètre P0 est une application React/Vite/TypeScript statique, bilingue FR/EN, publiée par GitHub Pages. Les contenus sont édités dans Git. Aucune API, base SQL, authentification ou page d’administration n’est requise pour visiter le portfolio. `backend/`, `admin/` et `qa/` sont préservés hors du build public dans une archive contrôlée avant tout déplacement éventuel.

Le contact est un lien `mailto:` ou professionnel vérifié. Il n’y a pas de faux formulaire qui prétend stocker ou transmettre un message.

## Conséquences

### Bénéfices

- `npm ci && npm run build` fonctionne sans serveur ou base de données.
- Hébergement simple, CDN/cache et déploiement reproductible sur GitHub Pages.
- Surface publique réduite : aucune route admin, aucun secret serveur, aucune donnée client.
- Les études de cas peuvent rester honnêtes sur leur statut : `DOCUMENTED`, `DEMO_SIMULATED`, `LIVE_VERIFIED` ou `IN_PROGRESS`.

### Compromis assumés

- L’édition se fait par commit/revue Git, pas depuis un CMS navigateur.
- Un contact dynamique, une authentification ou une collecte de données nécessiterait une décision future distincte (privacy, consentement, service tiers).
- GitHub Pages ne fournit pas de rewrite serveur dynamique. Les routes profondes connues sont générées dans `dist/`; les limites de SEO runtime et de fallback sont testées et documentées.
- Les illustrations CDN sont des médias livrés par CDN, pas des preuves d’interface réelle. Une provenance, une licence et un texte `alt` sont exigés pour chaque couverture.

## Non-décisions

Cette ADR ne supprime ni ne modifie la base Mada-BMP. Elle ne valide pas la publication de captures ZINA, de secrets présents dans l’historique ou d’une URL GitHub non observée. Elle ne déclare pas le portfolio « live » avant un contrôle public réel.

