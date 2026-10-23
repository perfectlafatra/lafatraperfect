# Dictionnaire de données

La base dédiée `portfolio_db` contient 16 tables créées exclusivement par Flyway.

| Domaine | Tables | Invariant principal |
|---|---|---|
| Identité | `admin_users`, `admin_password_resets` | e-mail unique sans casse, BCrypt, jeton SHA-256 expirant et consommable une fois |
| Configuration/audit | `site_settings`, `audit_events` | JSONB borné par le service; audit append-only |
| Éditorial | `editorial_sections`, `editorial_translations` | statuts DRAFT/PREVIEW/PUBLISHED/ARCHIVED; variantes `fr` et `en` uniques |
| Projets | `projects`, `project_translations`, `project_evidence` | slug unique; publication bilingue; `LIVE_VERIFIED` exige HTTPS et date de contrôle |
| Parcours/médias | `timeline_entries`, `timeline_translations`, `media_assets` | locale unique par parent; taille ≤ 10 MiB; MIME allowlist; SHA-256 |
| Contact | `contact_messages` | UUID d'idempotence unique et empreinte du payload |
| Notifications | `notification_outbox`, `notification_attempts`, `sms_quota_monthly` | livraison durable; historique; réservation sous plafond mensuel de 15 000 Ar |

Les migrations [V1–V5](../../backend/src/main/resources/db/migration) sont la source exécutable. Elles ne doivent jamais être modifiées après application.
