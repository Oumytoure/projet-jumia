(function() {
 const messages = JSON.parse("{\"NkZ/8g\":\"Appliquer la correction automatique\",\"YbJnnA\":\"Page {0}\",\"i0c1sQ\":\"Publier maintenant\",\"ljGnoQ\":\"Ajuster les bords pour l’impression\",\"clmMUw\":\"Corrigez les problèmes dans vos designs avant leur impression 🎉\",\"Dywepw\":\"Tout est en ordre👌\",\"o6uJ3w\":\"Précédent\",\"qvAJaw\":\"{0} images de faible qualité\",\"1Ho/5A\":\"Acheter des crédits\",\"eZxj6A\":\"YouTube\",\"JBcKtw\":\"Connecter un nouveau compte\",\"PCs/Kg\":\"Déplacer les éléments hors de la zone de danger\",\"nKmU3g\":\"PayPal est désormais accepté\",\"uswP+A\":\"{0} crédits restants\",\"ieyZSw\":\"J’ai compris\",\"GKfUlA\":\"Nous avons rencontré un problème. Veuillez réessayer.\",\"jwws+g\":\"Parfait ! Nous avons ajusté la position de votre élément afin qu’il ne soit pas coupé\",\"CsoXiQ\":\"Voir plus ({0})\",\"9UYVwA\":\"Découvrir le fonctionnement\",\"fGp+NQ\":\"Voir moins\",\"WLLrVw\":\"Les arrière-plans sont étirés jusqu’à la zone de fond perdu pour éviter les bordures blanches ou vides.\",\"Gz3dMw\":\"Ajoutez une légende…\",\"va6+Fw\":\"All pages\",\"i6lVsA\":\"Sélectionner un canal\",\"n8AcNA\":\"Éloignez tout texte ou élément graphique important des bords du design.\",\"e8vL4w\":\"Vous pouvez également ajuster votre design dans l’éditeur.\",\"XelQVA\":\"Tout élément trop proche d’un bord est déplacé pour éviter qu’il ne soit coupé.\",\"wpZZFw\":\"Les éléments se trouvant dans la zone de danger\",\"RJm2yQ\":\"Retirez les textes ou graphiques importants qui risqueraient d’être coupés lors de l’impression.\",\"wVvx5g\":\"Nous n’avons pas pu publier la publication programmée sur ce compte. Essayez de vous reconnecter ou de la programmer sur un autre compte.\",\"lzmYxQ\":\"Désolés, nous n’avons pas pu vous connecter à votre compte. Veuillez réessayer.\",\"mQOAlw\":\"Acheter et publier\",\"j1fRcA\":\"Paiement avec la carte {0}•{1}.\",\"dijkgQ\":\"<strong>Aucun problème détecté</strong>. Tout est en ordre 👌.\",\"ob1TSw\":\"Emplacement de publication introuvable. Connectez-vous à votre compte pour vérifier vos autorisations.\",\"S2sIng\":\"En savoir plus\",\"HLiH2Q\":\"Payer avec la carte {0}•{1}\",\"RS5bVA\":\"Payer et planifier\",\"WxF3CA\":\"Procédez à une dernière vérification\",\"q2ccpg\":\"Se connecter\",\"4YPt4w\":\"image de faible qualité\",\"WLclRg\":\"Traitement\",\"/dQQAA\":\"Retour\",\"wOb52A\":\"Félicitations ! Nous avons ajusté votre élément pour éviter les bords blancs\",\"09VqIg\":\"Désolés, nous n’avons pas pu vous connecter à votre compte. Veuillez réessayer.\",\"fKs0vw\":\"-{0}\",\"B06CsA\":\"Canva peut corriger automatiquement :\",\"BijgSA\":\"Paiement avec PayPal.\",\"YwYK6A\":\"Résoudre automatiquement {0, plural, one {} other {tous les problèmes}}<strong>{0, plural, one {# problème} other {# problèmes}}</strong>\",\"Fq3cAA\":\"Gagnez du temps : planifiez la publication de ce design sur vos réseaux sociaux. <span class=\\\"{0}\\\">Planifier maintenant</span>.\",\"Ge9w2g\":\"Acheter des crédits d’image et économiser sur notre bibliothèque d’images premium \",\"gZDeug\":\"Nous avons rencontré un problème. Veuillez réessayer.\",\"24fO3g\":\"Suivant\",\"TzaIvQ\":\"Étendez votre arrière-plan au-delà des lignes pointillées du fond perdu.\",\"M/hqBg\":\"Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer dans quelques minutes et <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contactez notre assistance technique</a> si le problème persiste.\",\"vKePEQ\":\"Téléchargez un PDF pour effectuer une dernière vérification et voir ce à quoi ressemblera votre design une fois imprimé.\",\"RJ5Nmw\":\"Votre image pourrait apparaître floue à l’impression. Ajoutez des images de plus haute résolution, ou diminuez la taille de celles dans votre design.\",\"x4vfhA\":\"Comment régler le problème manuellement :\",\"rqdC7A\":\"Télécharger le PDF\",\"FWbhRQ\":\"<strong>Cette fonctionnalité est toute neuve.</strong> Nous ajoutons encore quelques touches finales et il se peut qu’elle ne détecte pas tous les problèmes dans votre design.\",\"l8dOlg\":\"Sélectionner un canal\",\"NBZs4w\":\"Page {0}\",\"n92FRw\":\"Problème de fond perdu\",\"mFxg/Q\":\"Planifier\",\"CXhv0Q\":\"Paiement avec la carte ci-dessus.\",\"XnR6dQ\":\"Bêta\",\"Iy5dFw\":\"{0}\",\"JE9dcw\":\"J’ai compris\",\"HkE19w\":\"Votre arrière-plan sera étiré pour éviter les bords blancs ou non imprimés\",\"w0Ku3A\":\"Les contenus premium sont désormais disponibles exclusivement sur {0} ! En d’autres termes, les licences d’utilisation liées à un design ne sont plus disponibles à l’achat.\",\"DZEhPw\":\"<strong>Désactivez</strong> l’option pour revenir sur la correction apportée.\",\"TQ1+5g\":\"<strong>Activez</strong> l’option pour corriger un problème détecté.\",\"KY6JSA\":\"Une erreur est survenue. Veuillez réessayer.\",\"HhGS2g\":\"Nous avons rencontré un problème.\",\"fZ03zQ\":\"Ajoutez une image de meilleure qualité\",\"p1Vwaw\":\"Pour éviter les réclamations de droits d’auteur sur la musique, connectez vos comptes de réseaux sociaux afin que nous puissions effacer votre vidéo sur les plateformes suivantes :\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["fr-FR"] = strings["fr-FR"] ? Object.assign(strings["fr-FR"], messages) : messages;
})();