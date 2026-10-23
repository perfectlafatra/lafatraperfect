# ADR-003 — Pas de WebSocket ni de Python

Statut : accepté le 14 octobre 2026.

Le portfolio n'a aucun besoin temps réel. Les requêtes publiques utilisent HTTP REST et les notifications sortantes passent par une outbox PostgreSQL reprise par un ordonnanceur borné. Ajouter WebSocket ou un service Python augmenterait la surface d'exploitation sans besoin métier démontré.

Conséquence : le socle comprend React, Spring Boot et PostgreSQL uniquement. Un nouveau runtime exigera un ADR et une preuve de nécessité.
