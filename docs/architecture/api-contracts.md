# Contrats API

Base locale : `http://localhost:8082/api`. JSON UTF-8. Les erreurs contiennent `timestamp`, `status`, `code`, `message`, `correlationId`.

| Méthode | Route | Accès | Résultat |
|---|---|---|---|
| GET | `/health` | public | liveness réduite |
| GET | `/public/projects?locale=fr|en` | public | projets PUBLISHED localisés |
| GET | `/public/projects/{slug}?locale=…` | public | un projet PUBLISHED et ses preuves LIVE vérifiées |
| GET | `/public/editorial?locale=…` | public | sections PUBLISHED |
| POST | `/public/contact` | public | `202 ACCEPTED`; `409` si clé rejouée avec contenu divergent |
| POST | `/admin/auth/login` | public limité | crée une session OWNER; réponse neutre en échec |
| GET/POST | `/admin/**` | OWNER same-origin | CMS, messages, médias et publication |

Le contact fournit dans le corps : `idempotencyKey`, `fullName`, `email`, `subject`, `message`, `locale`, `privacyAccepted`. `ACCEPTED` signifie persistance réussie, jamais livraison SMTP garantie. Les écritures admin exigent `X-XSRF-TOKEN`.
