# Baseline — Portfolio statique V2.0

Date de l'audit : 22 octobre 2026  
Répertoire audité : `C:\Portfolio\lafatraperfect`  
Dépôt concerné : portfolio uniquement — aucun accès au dépôt ou aux fichiers Mada-BMP.

## Décision d'architecture active

La consigne prioritaire est désormais un portfolio P0 statique React/Vite/TypeScript, bilingue FR/EN, publié par GitHub Pages. Le portfolio ne doit pas dépendre d'un serveur Spring Boot, d'une API, d'une base PostgreSQL/MySQL, d'un CMS ou d'une authentification.

Les dossiers `backend/`, `admin/`, `qa/` et les configurations Docker sont des acquis P1 à préserver et à retirer du build public. Ils ne seront pas supprimés avant inventaire, contrôle des fichiers non suivis et procédure d'archivage sûre.

## Identité Git et état avant migration

| Élément | Constat | Conséquence |
|---|---|---|
| Chemin | `C:\Portfolio\lafatraperfect` | Dépôt Portfolio confirmé |
| Branche | `master` | Branche locale actuelle |
| Commits | Aucun commit (`No commits yet on master`) | Impossible d'auditer un historique ou de publier sans premier commit contrôlé |
| Remote | Aucun remote configuré | Aucun dépôt GitHub cible identifiable ; push et activation Pages bloqués jusqu'à identification explicite |
| Fichiers suivis | Aucun, tout le workspace est non suivi | Ne rien supprimer ni écraser ; le premier commit devra être filtré |
| Secrets locaux | `.env` présent et ignoré par `.gitignore` | Ne jamais l'ajouter au dépôt public |

## Architecture observée

### Frontend actuel

- `frontend/` : React 18, Vite 5, TypeScript strict, React Router, i18next et Tailwind configuré.
- Contenu déjà local dans `frontend/src/content/` : profil, projets, études STAR, expérience et journal.
- Routes FR/EN existantes pour accueil, à-propos, parcours, compétences, projets, études de cas, journal, contact, mentions et confidentialité.
- Design system déjà amorcé dans `frontend/src/styles/` avec tokens, thème clair/sombre, focus et responsive.
- `BrowserRouter` est utilisé : une stratégie de routes profondes GitHub Pages doit être ajoutée (génération des routes connues et fallback documenté).
- `axios`, `frontend/src/api/` et `ContactForm` restent couplés à l'API P1. Le contact statique cible sera un lien `mailto:`/profil professionnel vérifié, sans stockage serveur.
- `@react-three/*` et la séquence de portraits sont volumineux. Le hero doit rester léger et ne pas charger WebGL/3D par défaut.

### P1 préservé hors build statique

- `backend/` : Spring Boot, JPA, PostgreSQL, Flyway, sécurité admin, contact et contenu éditorial.
- `admin/` : dashboard privé et tests d'administration.
- `qa/` : Compose et scénarios E2E du socle P1.
- `docker-compose*.yml`, `render.yaml`, configurations Maven et `.env.example` : archives de contexte, non nécessaires au déploiement GitHub Pages.

Ces composants ne sont pas importés par le bundle frontend, mais leurs fichiers sont actuellement dans le même workspace non initialisé. Ils seront classés `ARCHIVE_PRIVATELY` ou `REMOVE_FROM_ACTIVE_P0` dans l'inventaire avant toute décision de déplacement/suppression.

## Contenu et preuves disponibles

### Sources fournies et décision éditoriale

- `Natur'Ally.pdf` : document académique d'une application Java Swing/MySQL réalisée en 2024. Il confirme un travail de base de données et de gestion, mais le MASTER PROMPT demande explicitement de l'exclure du CV et de la vitrine ciblée. Il reste une archive de parcours, pas un projet public P0.
- `Zina.pdf` : document académique décrivant un stage du 16 juin au 16 septembre 2025, avec frontend React/JavaScript, backend Spring Boot/API REST et PostgreSQL, espace client, boutique, rendez-vous, diagnostic, blog, dashboard admin et CRM interne. Le document contient aussi des identifiants légaux, adresses e-mail et exemples de configuration sensibles : aucune copie du PDF ni de ces valeurs ne doit entrer dans le bundle public.
- `3.Offre_Developpeur_Web_Antananarivo_30-11-2026.pdf` : cible de recrutement. Les signaux à rendre visibles sont React/HTML/CSS/JavaScript, responsive/UX, API REST et authentification côté projets full-stack, MySQL/PostgreSQL/SQL, Git/GitHub, tests, déploiement, analyse et maintenance.

### Positionnement propriétaire à intégrer sans gonfler l'expérience

- React rapide avec TypeScript et JavaScript depuis 2024.
- Manipulation de MySQL pendant environ un an à partir de 2024.
- Projets web concrets réalisés avec PostgreSQL ; la préférence pour PostgreSQL sera expliquée par les points communs SQL avec MySQL, sans prétendre à une expérience salariée supplémentaire.
- Mada-BMP reste une réalisation Full-Stack distincte et doit être affichée avec son statut réel (local/QA/documenté, jamais « production » sans URL vérifiée).

## Médias et droits

Le frontend contient actuellement une couverture OG et neuf PNG de portraits (environ 2 Mo chacun), mais aucune couverture dédiée aux études de cas et aucun CV public identifié. Les captures Zina fournies ne sont pas présumées réutilisables sans autorisation.

La V2.0 utilisera une seule illustration principale par projet. Les illustrations conceptuelles génériques seront servies depuis un CDN image stable ou copiées localement après contrôle, avec `alt` explicite et provenance dans `docs/media/media-inventory.md`. Elles ne seront jamais présentées comme captures réelles, résultats, clients ou dashboards de production.

## Vérifications exécutées avant migration

- Frontend : `npm run verify` déjà exécuté avec lint, 24 tests, build, contrôle des liens et contrat public — PASS.
- Administration : `npm run verify` — PASS (1 fichier de test, 1 test, build Vite).
- Backend : `backend\mvnw.cmd -B verify` — BUILD SUCCESS ; 9 tests, 1 test Testcontainers ignoré faute de Docker Desktop.
- Runtime natif : frontend `3002`, admin `3003`, backend `8082` démarrés ; `/fr`, `/en`, health, projets publics, éditorial et contact fictif testés.
- Compose : configurations dev/prod/e2e validées avec `docker compose config --quiet`. Le runtime Docker n'est pas déclaré PASS tant que le daemon Docker n'est pas disponible.

## Risques et blocages actuels

1. Aucun remote GitHub, propriétaire ou nom de dépôt ne peut être déduit localement : aucun push ni activation Pages ne sera prétendu.
2. Aucun droit de publication Zina n'est démontré par les fichiers présents : une illustration conceptuelle clairement étiquetée est le choix sûr par défaut.
3. Aucun CV PDF, e-mail professionnel ou profil public vérifié n'est configuré dans `frontend/src/config/site.ts`.
4. `frontend.rar` et plusieurs archives `.rar` ne sont pas inspectées dans le bundle public : elles restent hors du premier commit jusqu'à inventaire de confidentialité.
5. Les routes profondes et métadonnées SEO doivent être adaptées à la base GitHub Pages réelle, inconnue tant que le remote n'est pas fourni.

## Garde-fous de migration

- Ne pas toucher au dépôt Mada-BMP.
- Ne pas exécuter de migration, `flyway clean`, `DROP DATABASE`, suppression de volume, purge d'archive ou réécriture Git.
- Ne pas copier `.env`, identifiants Zina, données clients, captures privées ou mots de passe dans `frontend/public`, `dist` ou l'historique.
- Débrancher d'abord l'API et le formulaire serveur du build statique, puis seulement proposer le classement/suppression des P1 après inventaire et vérification.
- Créer l'ADR statique, l'inventaire avant/après et l'inventaire médias avant le premier commit public.
