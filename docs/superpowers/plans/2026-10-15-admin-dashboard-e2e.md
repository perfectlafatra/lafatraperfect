# Plan d'implémentation — Dashboard administrateur et E2E fictif

## Objectif

Permettre à un OWNER unique de gérer tous les contenus depuis `/admin`, sans exiger d'e-mail réel aujourd'hui, tout en prouvant les parcours futurs sur PostgreSQL réel avec un compte fictif limité au profil `e2e`.

## Garde-fous

- aucune inscription publique ; aucun compte par défaut en `dev` ou `prod` ;
- compte `owner@example.test` créé uniquement avec le profil Spring `e2e` et mot de passe injecté ;
- migrations V1–V5 immuables ; extension uniquement par V6 ;
- contenus de démonstration marqués `is_demo=true` et laissés en DRAFT ;
- médias validés côté serveur, nom technique généré et stockage hors build frontend ;
- toutes les routes `/api/admin/**` restent session + CSRF + rôle OWNER.

## Étapes

1. Ajouter un test Flyway rouge exigeant V6, puis créer les tables articles/traductions/liaisons médias et les extensions sûres de `media_assets`.
2. Ajouter les DTO/services JDBC transactionnels et les contrôleurs pour dashboard, projets, éditorial, articles, médias, Hero, paramètres et audit.
3. Ajouter le profil E2E et son seeder conditionnel, sans chemin d'inscription public.
4. Refaire l'interface admin en tableau de bord responsive avec formulaires CRUD, états loading/empty/error/success et prévisualisation des données.
5. Ajouter un environnement Compose E2E éphémère et des tests Playwright couvrant connexion, création/modification/publication/archivage, réglage Hero, paramètre e-mail vide puis fictif, upload et protection anonyme/CSRF.
6. Exécuter build admin, `mvn clean verify`, migrations PostgreSQL 18 et Playwright ; documenter seulement les résultats observés.
