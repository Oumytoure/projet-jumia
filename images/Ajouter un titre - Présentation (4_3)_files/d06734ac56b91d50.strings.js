(function() {
 const messages = JSON.parse("{\"c28xhw\":\"Durée moyenne de visionnage\",\"uc3mOQ\":\"Clics\",\"BiTiag\":\"Instagram professionnel\",\"r+TBGQ\":\"Client potentiel\",\"LTK1OA\":\"Commentaires\",\"KQqETw\":\"Mentions « J’aime »\",\"8mvmuA\":\"Découvrez combien de commentaires ont été ajoutés par des collaborateurs sur ce document.\",\"gBJspw\":\"Réactions\",\"RDc3FA\":\"Activez les autorisations supplémentaires {0} pour activer les informations.\",\"x7GpyA\":\"Atteindre\",\"OHsbrQ\":\"Mentions « J’aime »\",\"LXe3zA\":\"Options du lien\",\"fDYsmA\":\"Clics\",\"BbwHNA\":\"Commentaires\",\"DOk0Dw\":\"Commentaires\",\"TuWa1Q\":\"Un problème est survenu lors de la création de vos liens traçables\",\"G7SOdQ\":\"Impressions\",\"ovxTww\":\"En savoir plus sur la durée des sessions\",\"Gs57JQ\":\"{0, number, percent} ont aimé votre page\",\"u48Ndg\":\"Twitter\",\"wYAohw\":\"Mentions « J’aime »\",\"jTxdAg\":\"Liens vers votre design\",\"8ssM/w\":\"Afficher dans {0}\",\"hbcK4A\":\"Un problème est survenu lors du chargement de vos liens traçables\",\"zdhe3w\":\"Supprimer « {0} »\",\"gdJuHQ\":\"Vues\",\"27Xqzw\":\"Fils résolus\",\"ib0EMw\":\"{0, number, percent}\",\"8DJ+Dg\":\"Liens suggérés\",\"5F4Q/w\":\"Partages\",\"0H5pkQ\":\"Collaboration\",\"E+1/cw\":\"Clics sur les liens\",\"td0JFQ\":\"Vues de la vidéo\",\"uwnk0A\":\"Réponses\",\"cAaJRQ\":\"Vues de la vidéo\",\"Eim2sw\":\"des visiteurs\",\"x3EN7Q\":\"Nombre total de vues\",\"plWPsQ\":\"Commentateur\",\"sb5A5w\":\"Durée totale de visionnage\",\"VP3dqQ\":\"Nombre total de fils de commentaires\",\"E5ApKw\":\"Personnes ayant regardé la vidéo\",\"f8gUQg\":\"Voulez-vous vraiment retirer le lien unique « {0} » ? Toutes les données précédemment collectées seront supprimées et cette modification ne pourra pas être annulée.\",\"T5L8Cw\":\"Enregistrements\",\"ejnFFg\":\"Dernière publication\",\"rQ6HGg\":\"Créer le lien\",\"vXvvEQ\":\"Voyez combien de temps les gens ont passé à regarder et à collaborer sur votre design.\",\"aIY5Uw\":\"Facebook\",\"lzmYxQ\":\"Nous rencontrons des difficultés pour nous connecter à votre compte. Veuillez réessayer.\",\"inL/iw\":\"Impressions\",\"M6sgkA\":\"Visiteur\",\"NYKbhA\":\"Durée moyenne de visionnage\",\"pWDb1g\":\"Sans titre\",\"leh1wg\":\"{0, number} visiteurs payants\",\"k607wg\":\"{0, number, percent} ont regardé jusqu’au bout\",\"JOMRfw\":\"Personnes ayant regardé la vidéo\",\"gVOk4A\":\"Nom\",\"PjuNBA\":\"Durée de la session\",\"M1wRLg\":\"Impressions\",\"Wj4VHQ\":\"Réseau social\",\"Sg2BDA\":\"Annuler\",\"1iQ72w\":\"Durée totale de visionnage\",\"2oPT+w\":\"E-mail marketing\",\"jigNZQ\":\"Modifier les autorisations {0}\",\"K9ysqg\":\"Vue d’ensemble\",\"/fgK4A\":\"Un problème est survenu lors de la mise à jour de vos liens traçables\",\"+d25DQ\":\"Clics\",\"zuIr/g\":\"Intérêt\",\"IoP7Xw\":\"Publié sur <span class={0}>{1}</span>\",\"y7NrUA\":\"Nom du lien\",\"Do1ntQ\":\"Engagements\",\"DgcWlw\":\"Partages\",\"j9imNg\":\"Vues de la vidéo\",\"QhE3gg\":\"Nombre total de commentaires\",\"w8XIyg\":\"Consultations\",\"z69Gmg\":\"Vues uniques quotidiennes\",\"3o1sjg\":\"Afficher moins\",\"Uy2ZpQ\":\"Caractères espaces non compris\",\"ZETgXQ\":\"Un problème est survenu lors de la suppression de vos liens traçables\",\"/FC98Q\":\"Liens uniques\",\"lJaWKw\":\"{0, plural, one {# jour} other {# jours}}\",\"fRsN0A\":\"Commentaires\",\"cpMOBQ\":\"Article de blog\",\"cE/gWA\":\"Dernière consultation\",\"r543Qw\":\"Voir tous les commentaires\",\"xZZT+A\":\"Durée moyenne de visionnage\",\"srdnQg\":\"Tweets cités\",\"0xj7YQ\":\"Retweets\",\"0hfo2A\":\"LinkedIn\",\"J+C8Aw\":\"Consultations\",\"STbdPg\":\"Vues\",\"oAocOA\":\"Partagez votre design sur l’un de ces canaux pour découvrir ses statistiques\",\"7A+sLQ\":\"Impressions\",\"qmqq9w\":\"Les statistiques concernant vos réseaux sociaux ne peuvent pas être affichées, car un compte différent de celui utilisé pour partager cette publication est connecté à Canva. Veuillez reconnecter le compte concerné pour afficher les statistiques.\",\"IAChYg\":\"{0, number, integer}\",\"3AHYjg\":\"Copié !\",\"dlyxMg\":\"Durée totale de visionnage\",\"mm9PmA\":\"Nom\",\"u3a/uQ\":\"Enregistrements\",\"iibUVw\":\"Effacer\",\"1QrHSg\":\"En savoir plus\",\"foYn6Q\":\"Votre design a été publié récemment. Veuillez attendre quelques minutes et réessayer.\",\"75ukYg\":\"Copier le lien\",\"N7XLqA\":\"Mentions « J’aime »\",\"hf/n3Q\":\"Les statistiques ne sont pas disponibles pour cette publication, car celle-ci a été supprimée, sa connexion avec Canva a été interrompue ou elle est trop ancienne. Veuillez directement consulter la plateforme ou le réseau social pour afficher les données.\",\"gZ1Thg\":\"Planifié pour <span class={0}>{1}</span>\",\"Fsy1Zg\":\"Publier la cible\",\"0Y3low\":\"Voir les Statistiques de toutes les publications dans le Planificateur\",\"Ng32lQ\":\"Éditeur\",\"KZ5hhQ\":\"Commentaires\",\"4NaQDQ\":\"Impressions\",\"uYx74A\":\"Durée moyenne de visionnage\",\"U2VYXw\":\"Vues de la vidéo\",\"uH90KQ\":\"Affichages plein écran\",\"5ZcAcw\":\"Publication masquée et désabonnements\",\"2/pbXw\":\"Mots\",\"m7+aGQ\":\"Caractères\",\"Z1JG3A\":\"Temps de lecture\",\"qv/yxg\":\"Depuis toujours\",\"qEtGNQ\":\"Créez des liens uniques pour partager avec d’autres personnes sur les réseaux sociaux, ou par e-mail pour compter les vues de ce design. Quiconque ayant un lien peut afficher ce design.\",\"F+5MtQ\":\"Depuis la création\",\"jiNLOQ\":\"Clics\",\"PWVmJw\":\"Visiteur anonyme\",\"K5+FqA\":\"Les Statistiques peuvent mettre jusqu’à 24 heures avant d’apparaitre\",\"Jz6yLg\":\"Clics\",\"39dGMQ\":\"{0, number} visiteurs naturels\",\"HOWVAw\":\"En savoir plus\",\"WZeZog\":\"Afficher plus\",\"a8+z4w\":\"Intérêt\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["fr-FR"] = strings["fr-FR"] ? Object.assign(strings["fr-FR"], messages) : messages;
})();