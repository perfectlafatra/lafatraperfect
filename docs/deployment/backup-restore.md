# Sauvegarde et restauration

Sauvegarde : `infra/scripts/backup-portfolio-db.sh /chemin/prive`. Le fichier produit est un dump PostgreSQL compressé et ne doit jamais entrer dans Git.

Restauration : créer une base `portfolio_db` vide sur une instance isolée, arrêter les écritures, puis exécuter `infra/scripts/restore-portfolio-db.sh dump`. Après restauration, lancer `flyway validate`, compter les 16 tables applicatives, contrôler les versions et réaliser les smoke tests.

Une sauvegarde n'est considérée valide qu'après restauration périodique sur un environnement jetable et preuve horodatée expurgée.
