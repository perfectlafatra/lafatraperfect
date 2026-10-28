# Journal de preuve — Lalana · Nosy Be Travel Agency

Date de vérification : 2026-10-28  
Statut éditorial : prêt pour intégration au Portfolio, avec limites de preuve explicites  
Nature : projet web Java documenté comme projet académique dans l’archive historique du Portfolio  
Diffusion : étude de cas statique, sans démonstration publique ni runtime Lalana

## 1. Sources examinées

### Sources directement fournies pour publication

| source | constat vérifiable | usage retenu |
|---|---|---|
| `01_accueil_desktop.png` | capture 1440 × 900, SHA-256 `7E9692E53B736778015104D5F3287A4C46DC2A536FF7F303A4C936FD822052B7` | couverture principale |
| `04_connexion.png` | capture 1440 × 920, SHA-256 `E16D61A93BDED7CE3FF2EB8DC592745830107F4E68201E07592486BB4A0A4F0C` | preuve complémentaire du parcours d’authentification |
| `Apercu_Interfaces_Lalana.jpg` | planche 1320 × 1760, SHA-256 `2AC21C9FEC7A3D56797BD078C1518DC80B3C6CD7973E7D4CD31ADBC8A97BC7FD` | synthèse des vues publiques, client, gestionnaire et administration |
| demande propriétaire du 2026-10-28 | autorise explicitement l’intégration des trois médias au Portfolio Lalana | autorisation de publication dans ce dépôt |

Les captures ne montrent ni identité personnelle, ni email réel, ni transaction, ni secret. L’adresse de connexion affichée est un exemple générique.

### Sources documentaires retrouvées

- L’étude Lalana existante du Portfolio documente `Spring Boot` et `Thymeleaf`.
- L’archive P1 classe Lalana comme projet `ACADEMIC`, année 2025, statut documenté.
- `Plan_Projet_NosyBeVoyage_A4.pdf`, retrouvé localement, mentionne JPA, repositories, services, contrôleurs, sécurité, emails et WebSocket. Ce document est un plan de travail, pas le code source : ces éléments ne sont pas publiés comme résultats vérifiés.
- `Lalana_Dossier_Entretien_Java_SpringBoot_PostgreSQL_2026-10-28.pptx`, 42 diapositives, SHA-256 `414EA6247E97D50002317E63B0F6C61CC3C312440A9C5BEF650E12285B503502`, est un dossier d’identité fourni par le propriétaire. Il déclare avoir été produit après étude de `pom.xml`, des contrôleurs, services, modèles JPA, repositories, templates et d’une sauvegarde PostgreSQL. Il documente Java 17, Spring Boot 3.4.4, Spring MVC, Thymeleaf, Spring Data JPA/Hibernate, PostgreSQL, Spring Security/BCrypt et Chart.js. Il signale lui-même l’absence de recette E2E, de service live et de restauration exhaustive de la base.

### Audit du code source Lalana

Le code source a été retrouvé dans `D:\Projets_a_rendre\Spring-boot\lalana`. La sauvegarde `mada_voyage_dump.backup` a été inventoriée par nom, taille et empreinte sans être restaurée ni publiée. Aucun fichier de secrets n’a été ouvert ou copié dans le Portfolio.

L’inspection statique confirme :

- Java 17 et Spring Boot 3.4.4 dans `pom.xml` ;
- Spring MVC, Thymeleaf, Spring Data JPA/Hibernate, PostgreSQL, Spring Security, mail et WebSocket dans les dépendances et sources ;
- 58 classes Java principales, 10 contrôleurs, 17 services, 9 repositories, 10 modèles et 31 templates Thymeleaf ;
- des espaces ADMIN, GESTIONNAIRE et CLIENT protégés par autorités, avec mots de passe BCrypt ;
- des modèles JPA pour utilisateurs, circuits, destinations, vols, réservations, paiements, activités et messages ;
- des agrégations de réservations et revenus affichées avec Chart.js dans les dashboards.

La revue confirme aussi des limites à ne pas masquer : CSRF est désactivé, des routes de diagnostic/actuator sont publiques, trois méthodes de réservation spécialisées sont encore des squelettes, et le projet ne contient qu’un test de chargement du contexte Spring. Ces éléments empêchent de présenter Lalana comme prêt pour la production ou couvert par une recette E2E.

Conséquence :

- les captures prouvent l’existence des interfaces rendues et le code confirme l’architecture affichée ;
- le Portfolio peut présenter Java/Spring/Thymeleaf/JPA/PostgreSQL et la séparation par rôles comme compétences réellement mobilisées ;
- il ne doit pas affirmer que les réservations, paiements, emails, WebSocket ou statistiques ont fait l’objet d’une recette fonctionnelle complète ;
- aucun résultat E2E, taux de couverture, métrique de performance ou statut de production ne sera affiché.

## 2. Contexte

Lalana — Nosy Be Travel Agency est une application web de réservation touristique conçue pour présenter des circuits et des services de voyage à Nosy Be. Le projet organise plusieurs espaces d’interface autour d’un même domaine : navigation publique, connexion, consultation des services, espace client et écrans de gestion.

Le projet est présenté comme une réalisation académique Java de 2025. Il ne constitue ni une expérience salariée ni une application actuellement accessible en production.

## 3. Problème traité

Une agence de voyage doit rendre son offre compréhensible aux visiteurs tout en séparant les besoins de plusieurs profils :

- le visiteur découvre les circuits et les services ;
- le client accède à ses réservations ;
- le gestionnaire suit clients, circuits, destinations, réservations et vols ;
- l’administrateur dispose d’une vue plus globale des utilisateurs et de l’activité.

Le défi principal est donc de proposer des parcours cohérents sans mélanger les responsabilités ni surcharger l’interface publique.

## 4. Objectifs

1. Construire une page d’accueil claire pour découvrir l’offre de Nosy Be.
2. Proposer un parcours de connexion lisible avec accès à l’inscription et à la récupération de mot de passe.
3. Structurer les écrans selon les rôles représentés dans les captures.
4. Présenter les circuits, vols, destinations et réservations dans des vues de gestion distinctes.
5. Relier les vues serveur documentées à une organisation Spring Boot/Thymeleaf, sans ajouter ce runtime au Portfolio.

## 5. Mon rôle

Le rôle publiable est celui de concepteur et développeur du projet académique : organisation des parcours, intégration des interfaces, structuration des vues et mise en place d’une architecture Spring MVC en couches avec persistance JPA/PostgreSQL.

Le journal ne transforme pas ce projet en mission client et ne revendique pas de résultats de production. Les fonctionnalités incomplètes observées dans les services restent explicitement hors des résultats présentés.

## 6. Actions techniques documentables

- Conception d’une navigation publique vers l’accueil, la présentation, les circuits/services et le contact.
- Création d’une page d’accueil avec hiérarchie visuelle, carrousel et appel à l’action.
- Création d’un écran de connexion avec email, mot de passe, récupération et inscription.
- Déclinaison d’espaces à navigation latérale pour les profils client, gestionnaire et administration.
- Organisation des domaines visibles : utilisateurs/clients, circuits, destinations, réservations et vols.
- Mise en page de tableaux et d’indicateurs d’activité dans les dashboards.
- Architecture documentée en couches : contrôleurs Spring MVC, services Java, repositories Spring Data JPA, modèles relationnels PostgreSQL et vues Thymeleaf.
- Séparation documentée des accès ADMIN, GESTIONNAIRE et CLIENT avec Spring Security et BCrypt.
- Indicateurs de dashboard documentés avec Chart.js à partir d’agrégations de réservations ; ils ne sont pas présentés comme des encaissements réels.

Ces actions décrivent ce qui est visible ou déjà documenté. Elles ne prouvent pas, à elles seules, que chaque bouton ou flux métier reste exécutable aujourd’hui.

## 7. Résultats vérifiables

Les médias fournis montrent sept états d’interface distincts :

1. accueil desktop ;
2. présentation des services ;
3. connexion ;
4. tableau de bord administrateur ;
5. tableau de bord gestionnaire ;
6. gestion des circuits ;
7. réservations client.

Le résultat vérifiable est donc un ensemble cohérent d’interfaces couvrant découverte, authentification et gestion par rôles. Aucune donnée de fréquentation, aucune réservation réelle et aucun déploiement public ne sont revendiqués.

## 8. Difficultés documentées

- Maintenir une navigation compréhensible entre l’espace public et les espaces de gestion.
- Différencier les responsabilités client, gestionnaire et administrateur dans l’interface.
- Garder une identité visuelle cohérente entre pages publiques, formulaire de connexion et dashboards.
- Distinguer l’architecture effectivement présente des parcours qui demanderaient encore une recette fonctionnelle et un durcissement de sécurité.

## 9. Enseignements internes

- Une interface multi-rôle gagne à rendre les responsabilités visibles dès la navigation.
- Les captures d’écran prouvent le rendu ; l’audit du code complète cette preuve sans remplacer des tests fonctionnels.
- Une étude de cas de recrutement doit séparer ce qui a été observé, ce qui est documenté et ce qui reste non vérifiable.
- Un projet serveur peut être valorisé dans un Portfolio statique sans embarquer son backend.

Ces enseignements alimentent la rédaction, mais ils ne deviennent pas une section pédagogique sur le site.

## 10. Trame STAR interne

- **Situation :** projet académique d’agence de voyage avec plusieurs profils et domaines métier.
- **Tâche :** structurer les parcours publics, l’authentification et les espaces de gestion dans une application Java web.
- **Actions :** concevoir les vues, organiser la navigation par rôles et documenter le lien Spring Boot/Thymeleaf.
- **Résultat :** sept états d’interface capturés couvrant accueil, services, connexion, administration, gestionnaire, circuits et réservations client.

Sur le site, cette trame sera reformulée avec des titres naturels : contexte, rôle, travail réalisé, résultats, périmètre publié et décisions techniques.

## 11. Décision média

- `01_accueil_desktop.png` devient la seule couverture dans les cartes et en tête d’étude.
- `04_connexion.png` illustre le parcours d’authentification.
- `Apercu_Interfaces_Lalana.jpg` apporte une preuve non redondante de l’étendue des rôles ; elle est conservée dans une section de preuves, pas utilisée comme seconde couverture.
- Les fichiers sont servis localement par GitHub Pages pour éviter le hotlinking et conserver leur provenance.

## 12. Contenu public validé par ce journal

Titre : **Lalana — Nosy Be Travel Agency**  
Catégorie : **Projet académique Java**  
Stack publiable : **Java 17, Spring Boot 3.4.4, Spring MVC, Thymeleaf, Spring Data JPA/Hibernate, PostgreSQL, Spring Security/BCrypt, Chart.js**  
Statut : **Projet documenté — démonstration non publique**

Le Portfolio peut afficher JPA/PostgreSQL et Spring Security comme éléments vérifiés dans les sources. Il n’affichera pas `WebSocket`, livraison email, paiement réel, OCR, PDF/QR ou tests E2E comme résultats validés, faute de recette fonctionnelle correspondante.
