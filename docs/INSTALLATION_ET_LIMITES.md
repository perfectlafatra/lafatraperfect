# Portfolio — Réparation unifiée v3 (15 octobre 2026)

## Que corrige ce paquet ?

Fusion des deux archives précédentes :
- `Portfolio_Frontend_Correctifs_Partiels_15-10-2026.zip`
- `Portfolio_Reparation_Build_15-10-2026.zip`

La capture `acceptable.png` montre un effet de *double exposition* : les deux
portraits de poses différentes sont mélangés presque tout le temps. Un crossfade
de 0 à 100 % sur toute la durée entre poses **n'est pas une interpolation de la
géométrie faciale** et provoque le flou observé.

Cette v3, mise à jour dans le Portfolio le 29 octobre 2026 :
1. Corrige le ghosting prolongé. Deux vues ne se chevauchent que durant les **12 % finaux** d'une transition courte.
2. Utilise cinq angles latéraux cohérents (`R2`, `R3`, `R`, `R1`, `R5`) dans un parcours qui commence face caméra, visite les deux profils et revient au visage frontal. Les poses verticales incompatibles sont conservées dans les sources mais exclues de l'animation.
3. Emploie un parcours **aller-retour (`pingpong`)** par défaut. Les photographies ne contiennent pas les vues arrière requises pour un 360° fidèle ; on évite le faux raccord `R7 -> R`.
4. Ne repose pas sur l'augmentation artificielle de `rotateY` d'une image 2D.
5. Précharge et décode les images, suspend hors viewport/onglet et respecte `prefers-reduced-motion`.
6. Préserve le chargement facultatif d'un véritable GLB ainsi que les corrections de compilation (`FeaturedCases`, `ProofShowcase`).
7. Admet une **séquence dense de vrais frames intermédiaires** via manifeste JSON pour une qualité ultérieure bien supérieure.
8. Ne rétrograde aucun paquet npm et ne touche pas à PostgreSQL/Backend.

## Limite essentielle et recommandation

**La v3 ne fabrique pas des images intermédiaires photoréalistes à partir des portraits : elles ne sont pas jointes au dépôt.** Une rotation très fluide comme une vidéo nécessite de nombreux angles continus. Le crossfade rapide élimine la longue superposition floue, mais avec cinq angles uniques il subsiste un mouvement volontairement posé. Pour un mouvement encore plus dense :

- **Meilleure solution** : reconstruire un modèle facial 3D crédible avec les références originales, le valider, puis exporter par rendu hors ligne une séquence d'angles continus (`frame_0000.webp`, ...). Utiliser ensuite la séquence d'images dans React ; **pas de vidéo**. Les régions non photographiées restent estimées.
- **Solution alternative** : prendre de vraies photos de tout le tour de la tête avec éclairage/cadrage constants (y compris l'arrière), ou générer et vérifier des nouvelles vues cohérentes par synthèse 3D.
- Prévoir une séquence dense adaptée au poids réseau et à la mémoire mobile. Pour une qualité « comme une vidéo », le **nombre de poses uniques par seconde** importe autant que les FPS de rendu ; 8 poses ne suffisent pas.
- Ne pas simplement augmenter la durée du fondu entre des faces prises de biais : cela recrée le ghosting visible dans la capture.

## Installation Windows PowerShell (depuis la racine frontend)

1. Faire une sauvegarde du dépôt (ou commit). Vérifier `git status --short`.
2. Extraire l'archive dans un dossier temporaire, **pas directement dans le dépôt**.
3. Depuis le dossier temporaire, lancer :

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\INSTALLER-PORTFOLIO.ps1 -FrontendRoot 'C:\Portfolio\lafatraperfect\frontend'
```

Le script sauvegarde les fichiers qu'il va écraser dans un répertoire `_sauvegardes_portfolio_v3/` situé dans le répertoire **d'extraction**, puis copie le contenu sous `src/` dans le frontend. Les sources originales R...R7 et les secrets `.env` ne sont pas modifiés.

4. Dans un terminal au dossier frontend :

```powershell
Remove-Item -Recurse -Force .\dist -ErrorAction SilentlyContinue
npm run build
```

5. **Seulement si le build termine avec code 0 :**

```powershell
npm run dev -- --host 127.0.0.1 --port 3002
```

6. Visiter `http://127.0.0.1:3002/` : tester /fr et /en, mobile, thème clair/sombre, scroll descendant/montant, retour après changement d'onglet.
7. Exécuter les tests selon les scripts réellement disponibles dans `package.json` (ex. `npm test`, `npm run test`, etc.).

## Comment utiliser plus tard les frames reconstruites

1. Placer les images intermédiaires réelles, **alignées sur un canevas de dimensions identiques**, dans `public/media/hero/turntable/`, nommées `frame_0000.webp`, `frame_0001.webp`, ... sans trou ni pose incohérente.
2. Lancer `python tools/build_turntable_manifest.py` depuis le dossier frontend **après avoir placé le script sous `tools/`**. Il génère un `manifest.json` *en mode pingpong non vérifié*.
3. Examiner visuellement le raccord premier/dernier. N'utiliser `"loopMode": "wrap"`, `"verifiedFull360": true` **que si** la séquence inclut réellement l'arrière de la tête et forme une révolution sans saut.
4. Activer `manifestUrl: '/media/hero/turntable/manifest.json'` dans `src/config/portraitSequence.ts`.
5. Ajuster `cycleSeconds` et `transitionFraction` pour le nouveau jeu d'images. Les séquences denses peuvent supporter des fondus un peu plus longs, mais évitez les poses très différentes superposées.
6. Adapter les dimensions/poids à Android/iPhone. Tester les requêtes réseau et l'utilisation mémoire. Le lecteur met en cache un voisinage limité sur les séquences longues.

## Préconditions manquantes pour une validation complète

Cette archive ne contient PAS : `package.json`, `package-lock.json`, `tsconfig`, `vite.config`, le routeur, les vrais fichiers `heroAsset.ts`, les styles généraux ou les huit photographies. Sans dépôt complet nous ne pouvons pas affirmer que le build, l'intégration graphique ou le rendu mobile passent. Les corrections du lecteur et des utilitaires ont été vérifiées en syntaxe et la logique de boucle a été exécutée dans Node 22. La validation navigateur doit être faite sur le poste.

## Checklist

- [x] Le build `tsc -b && vite build` passe réellement sur le dépôt (recette du 2026-10-29).
- [ ] `FeaturedCases.tsx` et `ProofShowcase.tsx` existent dans `src/components/home/`.
- [x] `HeroTurntable.tsx` existe et les portraits publics sont présents.
- [x] L'ordre latéral a été corrigé d'après les poses véritables.
- [x] Le fondu reste limité à la fin de chaque changement d'angle.
- [x] Le mouvement réduit affiche le portrait frontal statique.
- [ ] Les différents navigateurs mobiles sont testés.
- [ ] La séquence d'interpolation faciale dense est réellement produite avant d'annoncer un mouvement « comme une vidéo ».
