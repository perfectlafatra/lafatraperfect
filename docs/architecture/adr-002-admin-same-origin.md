# ADR-002 — Administration same-origin

Statut : accepté le 14 octobre 2026.

Le futur backoffice et `/api/admin/**` seront servis sur la même origine. Les sessions utilisent un cookie HttpOnly, CSRF, protection contre la fixation et une session simultanée maximum. La vitrine publique ne reçoit jamais le cookie administrateur entre domaines.

