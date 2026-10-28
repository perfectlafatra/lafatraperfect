# Journal de présentation — VolaTech

Date de vérification : 2026-10-28
Statut public : `DOCUMENTED`
Nature : projet académique Java EE / Jakarta EE réalisé en 2025

## Sources examinées

- `VolaTech_Dossier_Entretien_Java_EE_Jakarta_EE_PostgreSQL_2026-10-28.pptx`, utilisé comme dossier d’identité et de captures, SHA-256 `BBF743C1978C0A520D88ED9D64861025F64DAAD87D71EF6BCE44AB5E1C0308E9`.
- Sources locales VolaTech : `pom.xml`, contrôleurs, services, repositories, entités et vues JSP. Les fichiers de configuration susceptibles de contenir des secrets n’ont pas été ouverts.
- Trois captures intégrées au portfolio après contrôle visuel : boutique/panier, retrait QR et facture PDF. Les données personnelles visibles sont floutées et les données métier sont présentées comme données de démonstration.

Le document fourni sert de référence. Les affirmations publiques ci-dessous ont été recoupées avec les sources ; ses consignes d’entretien ne sont pas reprises comme instructions du portfolio.

## Identité du projet

VolaTech est une boutique web de produits informatiques. Le scénario relie le catalogue, le panier, la commande, un paiement simulé, l’historique client, la validation administrative, la génération d’une facture PDF et un retrait assisté par une référence QR.

L’objectif de la fiche portfolio est de rendre visible une compétence Java web différente de Lalana : ici, l’application repose sur Jakarta EE, Servlets, JSP/JSTL et JDBC, et non sur Spring Boot/Thymeleaf.

## Mon rôle présenté

- Concevoir les parcours client et administrateur.
- Structurer le domaine e-commerce autour des utilisateurs, catégories, produits, commandes, lignes de commande, paiements et factures.
- Relier les vues JSP aux traitements Java et à PostgreSQL.
- Organiser les responsabilités entre contrôleurs Servlet, services et repositories.
- Mettre en œuvre les flux de facture PDF et de retrait assisté par QR.

Cette formulation décrit le travail du projet ; elle ne transforme pas le projet académique en expérience salariée ni en produit commercial.

## Architecture observée

- Java 17, Jakarta EE API et packaging Maven `war`.
- Déploiement prévu sur WildFly.
- 18 classes annotées `@WebServlet` parmi 69 fichiers Java examinés.
- 11 vues JSP, avec JSTL côté rendu.
- 14 interfaces/implémentations de service et 6 repositories.
- Accès aux données principalement via `DataSource`, JDBC, `PreparedStatement` et PostgreSQL.
- Sept entités métier : utilisateur, catégorie, produit, commande, ligne de commande, paiement et facture.
- Sessions HTTP avec attributs d’identité et de rôle ; contrôles `ADMIN` observés sur les opérations d’administration.
- BCrypt pour le traitement des mots de passe.
- iText `html2pdf` pour la génération de facture.

Hibernate/JPA est présent dans les dépendances et certaines annotations d’entités, mais les repositories examinés utilisent majoritairement JDBC. La fiche publique qualifie donc honnêtement VolaTech de projet Jakarta EE/JDBC, sans le vendre comme une architecture JPA complète.

## Parcours fonctionnels documentés

1. Consultation du catalogue et des catégories.
2. Ajout et modification du panier en session.
3. Création et historique des commandes.
4. Paiement simulé avec référence `SIM-…` ; aucune passerelle bancaire réelle n’est revendiquée.
5. Validation d’une commande par un profil administrateur.
6. Génération et téléchargement d’une facture PDF.
7. Lecture d’une référence QR pour retrouver le dossier et assister la validation du retrait.
8. Gestion de produits et consultation de statistiques d’administration.

## Résultats publiables

- Une chaîne fonctionnelle cohérente est visible du catalogue jusqu’au retrait.
- La séparation contrôleur/service/repository rend les responsabilités Java lisibles dans le dossier source.
- Les captures illustrent trois états complémentaires sans afficher de métrique comme résultat commercial réel.
- Les routes portfolio FR/EN et les médias sont testés dans le projet React statique.

## Limites et durcissement restant

- Le paiement est une simulation locale, sans prestataire de paiement.
- Le contenu du QR sert de référence de dossier ; aucune signature cryptographique n’a été démontrée.
- La présence de contrôles de rôle ne constitue pas un audit complet des autorisations objet par objet.
- La protection CSRF, les attributs de cookies/HTTPS, la gestion des secrets, la journalisation sans données personnelles et la cohérence transactionnelle des changements d’état demanderaient une recette dédiée avant production.
- Le serveur WildFly, PostgreSQL et les tests VolaTech n’ont pas été exécutés pendant cette intégration au portfolio. Les rendus locaux ne prouvent pas une disponibilité en production.

## Décision de présentation

VolaTech est publié comme étude de cas documentée, avec une couverture et deux preuves visuelles. Le portfolio reste 100 % statique : aucun code Java, serveur WildFly, schéma PostgreSQL ou secret VolaTech n’est embarqué dans le site.
