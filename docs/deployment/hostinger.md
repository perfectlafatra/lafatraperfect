# Déploiement Hostinger — API P1

Préconditions : VPS Linux, Docker, domaine HTTPS vérifié, sauvegarde testée et secrets fournis hors Git.

1. Copier le dépôt et le fichier d'environnement privé; conserver `portfolio_db` distinct de toute base Mada-BMP.
2. Construire le backend et l'admin, puis démarrer PostgreSQL/API sur le réseau privé.
3. Installer `infra/nginx/portfolio-api.conf`, adapter uniquement le domaine et les chemins documentés, puis valider `nginx -t`.
4. Appliquer V1–V5 avec l'utilisateur de migration, vérifier les 16 tables et un health check.
5. Créer l'OWNER avec un hash BCrypt hors SQL en clair.
6. Activer mail puis SMS séparément après essais supervisés; conserver SMS désactivé par défaut.
