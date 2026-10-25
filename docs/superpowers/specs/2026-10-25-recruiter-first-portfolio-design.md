# Design — Portfolio centré candidat

Date : 2026-10-25

## Intention

Transformer la vitrine en parcours de recrutement direct : comprendre le profil, voir les meilleurs projets, vérifier l’expérience et les compétences, télécharger le CV puis contacter le candidat. Le site ne doit ni enseigner une méthode au recruteur, ni ressembler à une documentation de formation.

## Approches considérées

1. Garder Journal et Méthode en navigation : rejeté, car ces sections déplacent l’attention du profil vers une posture d’auteur/formateur.
2. Conserver les pages mais les masquer seulement sur l’accueil : rejeté, car elles resteraient indexées et entretiendraient une architecture éditoriale inutile.
3. Retirer Journal et Méthode du périmètre public, puis recentrer accueil, projets, parcours et études de cas : retenu.

## Structure retenue

- navigation : Projets, Parcours, Compétences, À propos, Contact ;
- accueil : positionnement, projets sélectionnés, stack, parcours synthétique, appel à contact/CV ;
- projets : Mada-BMP en premier, ZINA en deuxième, puis React localStorage et Lalana ;
- études de cas : Contexte, Mon rôle, Travail réalisé, Résultats, Périmètre publié, Décisions techniques ;
- suppression des libellés STAR, Journal, Méthode et des avertissements répétés sous chaque image ;
- conservation des statuts de preuve concis et des limites factuelles dans les pages projet.

## Contraintes

- aucune expérience salariée, métrique ou mise en production inventée ;
- ZINA reste anonymisé et sans capture privée ;
- le portfolio reste statique, bilingue, accessible et compatible GitHub Pages ;
- les anciennes notes restent dans l’historique Git, mais ne sont plus publiées ni indexées.

