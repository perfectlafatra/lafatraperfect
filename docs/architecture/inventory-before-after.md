# Inventaire avant/après — migration Portfolio statique P0

Date d’audit : 2026-10-22  
Dépôt audité : `C:\Portfolio\lafatraperfect`  
Périmètre : le Portfolio uniquement. Le dépôt Mada-BMP est hors périmètre.

## Avant nettoyage

| chemin | observé | imports/usages | statut | action | justification | résultat du test |
|---|---|---|---|---|---|---|
| `frontend/` | React/Vite/TypeScript, contenu public et routes FR/EN | chaîne de build principale | `KEEP_P0` | conserver et découpler des API | cible GitHub Pages | à compléter après `npm run verify` |
| `frontend/src/api/` | clients Axios vers `/api` | imports du formulaire et anciens contrats | `REMOVE_FROM_ACTIVE_P0` | retirer après scan des imports | un site statique ne doit pas requérir de serveur | à tester |
| `backend/` | Spring Boot, JPA, PostgreSQL, Flyway, tests | aucun import depuis Vite | `ARCHIVE_PRIVATELY` | archivé hors dépôt et ignoré par Git | valeur d’archive P1, secrets/config possibles | archive SHA-256 PASS |
| `admin/` | application d’administration Vite | aucun import depuis le frontend public | `ARCHIVE_PRIVATELY` | archivé hors dépôt et ignoré par Git | backoffice explicitement hors P0 | archive SHA-256 PASS |
| `qa/` | scénarios et environnements E2E P1 | compose/backend/admin | `ARCHIVE_PRIVATELY` | archivé hors dépôt et ignoré par Git | utile pour Mada-BMP/P1, inutile à Pages | archive SHA-256 PASS |
| `docker-compose*.yml` | orchestration de services | backend/admin/PostgreSQL | `REMOVE_FROM_ACTIVE_P0` | ignoré par Git, conservé dans l’archive externe | aucune base ni API dans P0 | archive SHA-256 PASS |
| `render.yaml` | déploiement serveur | backend | `REMOVE_FROM_ACTIVE_P0` | ignoré par Git, conservé dans l’archive externe | hébergement incompatible avec P0 | archive SHA-256 PASS |
| `.env*`, logs, `target/`, `node_modules/` | fichiers locaux potentiellement sensibles/générés | aucun usage public autorisé | `UNKNOWN_REVIEW` | ne jamais archiver publiquement | risque de secret ou de volume inutile | contrôle d’exclusion |

## Règles après migration

- Le workflow public ne construit que `frontend/` et son `dist/`.
- `backend/`, `admin/` et `qa/` ont été déplacés hors du dépôt vers `C:\Portfolio\lafatraperfect-p1-archive-2026-10-22\legacy-active` ; ils ne sont pas importés, servis ou copiés dans `frontend/dist`.
- Le script `tools/archive-p1.ps1` est copy-only et produit `manifest.sha256` dans une destination externe explicite. Il n’efface aucun fichier source.
- Toute suppression ou déplacement éventuel est conditionné à : build statique vert, comparaison SHA-256, vérification qu’aucun `.env`, log, dump ou clé n’est publié, et conservation d’une copie restaurable.

Nettoyage effectué le 2026-10-23 : les dossiers P1, les fichiers Docker/Render et les journaux locaux ont été déplacés hors du dépôt après validation de l’archive. Les anciennes archives `.rar` ont également été conservées hors dépôt dans `legacy-backups`.

## Après migration (à compléter par la recette)

| contrôle | résultat | preuve |
|---|---|---|
| `npm ci && npm run verify` depuis `frontend/` | `PASS` | 10 fichiers/24 tests, lint, build et contrats |
| aucun import Axios/API dans le bundle public | `PASS` | `static-contract.test.ts`, proxy absent |
| routes FR/EN profondes générées | `PASS` | 48 documents + `404.html` |
| manifest P1 comparé aux sources | `PASS` | 194 entrées, 0 mismatch |
| secret/media scan | `PASS` | aucun secret dans le périmètre P0, médias inventoriés |

