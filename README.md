# Portfolio professionnel — Fitahiana Lafatra

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

- Le profil, le parcours et les études de cas FR/EN sont versionnés dans `frontend/src/content/`.
- La navigation publique est centrée sur le recrutement : projets, parcours, compétences, profil, CV et contact. Les anciennes pages Journal/Méthode ne font plus partie du site publié.
- Le contact direct et le CV sont configurés dans `frontend/src/config/site.ts` ; le CV public est `frontend/public/cv/lafatraramanantena-cv.pdf`.
- Le workflow `.github/workflows/deploy.yml` construit uniquement `frontend/dist` et déploie GitHub Pages. Il calcule `VITE_BASE_PATH` à partir du dépôt réel ; aucun nom de compte n’est supposé.
- Le remote public est `https://github.com/perfectlafatra/lafatraperfect.git` et la vitrine est publiée via GitHub Actions à `https://perfectlafatra.github.io/lafatraperfect/fr`.

## Archive P1

Les anciens dossiers `backend/`, `admin/`, `qa/` et les fichiers Docker sont conservés hors de la chaîne P0. `tools/archive-p1.ps1` crée une copie externe avec manifeste SHA-256, sans suppression de la source. Cette archive ne doit jamais être publiée avec le site statique.

