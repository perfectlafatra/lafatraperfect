# Déploiement Render — vitrine P0

1. Connecter le dépôt et appliquer `render.yaml`.
2. Laisser `VITE_PORTFOLIO_API_ENABLED=false` tant que l'API Hostinger et CORS ne sont pas validés.
3. Après attribution du domaine HTTPS, exécuter `SITE_URL=https://domaine-verifie npm run sitemap`, ajouter la directive absolue au `robots.txt`, reconstruire et tester les rechargements directs `/fr/**` et `/en/**`.
4. Vérifier headers, Open Graph, Lighthouse et absence de secrets dans `dist`.

Aucun déploiement n'a été exécuté depuis ce dépôt local.
