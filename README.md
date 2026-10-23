# LAFATRAPERFECT — portfolio statique

Portfolio professionnel bilingue FR/EN, construit avec React, Vite, TypeScript strict et Tailwind CSS. Le périmètre public est une vitrine statique : aucun backend, PostgreSQL, formulaire serveur ou espace administrateur n’est requis pour la consulter.

## Développement

Depuis `frontend/` :

```powershell
npm ci
npm run dev
```

Vitrine : `http://localhost:3002/fr`

## Vérification locale

```powershell
cd frontend
npm ci
npm run verify
```

`npm run verify` teste le contenu FR/EN, les couvertures, les routes profondes, les liens publics et le build autonome dans `frontend/dist`.

## Édition et publication

- Les contenus éditoriaux sont dans `frontend/src/content/`.
- Les coordonnées restent absentes tant qu’une adresse professionnelle vérifiée et un CV publiable ne sont pas ajoutés dans `frontend/src/config/site.ts`.
- Le workflow `.github/workflows/deploy.yml` construit uniquement `frontend/dist` et déploie GitHub Pages. Il calcule `VITE_BASE_PATH` à partir du dépôt réel ; aucun nom de compte n’est supposé.
- Le dépôt n’a pas encore de remote GitHub identifié dans l’environnement audité : la publication est donc `NOT_RUN` jusqu’à ajout/validation de ce remote et des droits Pages.

## Archive P1

Les anciens dossiers `backend/`, `admin/`, `qa/` et les fichiers Docker sont conservés hors de la chaîne P0. `tools/archive-p1.ps1` crée une copie externe avec manifeste SHA-256, sans suppression de la source. Cette archive ne doit jamais être publiée avec le site statique.

