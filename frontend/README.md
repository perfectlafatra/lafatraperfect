# Frontend LAFATRAPERFECT

Vitrine P0 React 18, Vite 5, TypeScript strict et Tailwind CSS 3. Le contenu FR/EN est versionné dans `src/content` et le site ne dépend d’aucune API ou base SQL.

Depuis ce dossier :

```powershell
npm ci
npm run dev
npm run verify
```

Le serveur Vite écoute sur `3002`. Pour un build GitHub Pages de dépôt projet, définir `VITE_BASE_PATH=/<nom-du-repo>/`; pour un dépôt utilisateur `<login>.github.io`, utiliser `/`. Le script de build génère les documents HTML des routes profondes connues dans `dist/`.

