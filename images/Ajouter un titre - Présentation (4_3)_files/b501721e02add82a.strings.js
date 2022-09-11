(function() {
 const messages = JSON.parse("{\"Lhi2OQ\":\"Veuillez choisir un état/une province/une région\",\"LXfFiQ\":\"Le numéro de carte que vous avez saisi est incomplet.\",\"+W9rbA\":\"Veuillez saisir le code de vérification.\",\"nGqm+A\":\"CPF/CNPJ\",\"29n+nw\":\"Envoyer des invitations\",\"pFqzQg\":\"Code postal\",\"aReQLA\":\"Nom du titulaire de la carte\",\"xT0W7g\":\"Afin d’autoriser votre carte, nous vous prélevons un petit montant qui vous est immédiatement remboursé.\",\"8BhVFw\":\"Le nom du titulaire de la carte n’est pas valide.\",\"yd4Wkw\":\"Veuillez saisir une date d’expiration.\",\"D0SkXg\":\"Numéro de carte\",\"iiyVbg\":\"Nous ne sommes pas en mesure de traiter les paiements par carte bancaire pour le moment. Essayez d’utiliser un autre moyen de paiement ou réessayez dans quelques instants.\",\"l//ZLA\":\"<a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Une erreur est survenue lors du traitement de votre paiement</a>. Réessayez dans quelques instants.\",\"i0yPRQ\":\"Le nom que vous avez saisi dépasse notre limite de {0} caractères\",\"RXsrxA\":\"Cette transaction sera traitée par <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">EBANX</a> selon leurs conditions. En continuant, vous reconnaissez et acceptez ces conditions générales.\",\"4du5tw\":\"Veuillez entrer uniquement des lettres pour votre nom.\",\"XMzT4Q\":\"Document d’identification\",\"WuNeoA\":\"État/Province/Région\",\"b5S1ww\":\"Désolé, mais nous ne pouvons accepter le paiement d’un utilisateur de moins de 16 ans.\",\"Apo85A\":\"L’invitation de {0, plural, one {# membre de plus} other {# membres de plus}} dans votre équipe le(s) fera également passer à {1} :\",\"FAp3pg\":\"L’adresse e-mail saisie n’est pas valide.\",\"9oyRAA\":\"Nous n’avons pas pu joindre votre banque, et votre paiement n’a pas pu être finalisé. Veuillez recharger la page et réessayer.\",\"NCTOJQ\":\"Cette carte a été refusée.\",\"PBlZBg\":\"Le DNI que vous avez saisi n’est pas valide.\",\"MtLoDQ\":\"Veuillez saisir une adresse e-mail valide.\",\"taGscA\":\"Veuillez saisir le nom du titulaire de la carte.\",\"U0rxpw\":\"Le PAN que vous avez saisi n’est pas valide.\",\"zZWFDw\":\"Il vous reste {0, plural, one {# place libre} other {# places libres}} dans votre équipe. Invitez {0, plural, one {# membre d’équipe} other {# membres d’équipe}} sans aucun frais.\",\"/JyCKg\":\"Veuillez sélectionner le pays\",\"O/BcGA\":\"Votre paiement n’a pas pu être finalisé, car nous n’avons pas pu contacter notre prestataire de services de paiement. Veuillez recharger la page et réessayer.\",\"tO1SEg\":\"Le nom du titulaire de la carte est incomplet.\",\"cT4Qlg\":\"Sélectionner\",\"x7F+jw\":\"Sélectionnez un type de document\",\"XObBiw\":\"CUIT\",\"36R0sA\":\"Une erreur est survenue lors de la tentative d’abonnement. Veuillez réessayer dans quelques minutes et <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contacter notre assistance technique</a> si le problème persiste.\",\"6n3nOg\":\"Indicatif téléphonique du pays\",\"lY0SWA\":\"L’année d’expiration que vous avez saisie est déjà passée.\",\"HT5m8Q\":\"Le CVC que vous avez saisi n’est pas valide.\",\"AVuCWQ\":\"Le code de vérification de la carte n’est pas valide.\",\"eOtd7w\":\"Une erreur s’est produite lors du chargement de votre abonnement. Veuillez <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contacter l’assistance</a> si le problème persiste.\",\"FUt8eA\":\"Code de sécurité\",\"Sq3OcA\":\"Le numéro de carte que vous avez saisi est erroné.\",\"JHaB3Q\":\"Numéro de compte permanent (PAN)\",\"5L9LgA\":\"CUIL\",\"XJ2qfw\":\"Le mois d’expiration que vous avez saisi est déjà passé.\",\"F7iqLA\":\"Carte d’identité Vietnam\",\"FggF6g\":\"Payer et envoyer des invitations\",\"fz8rSQ\":\"Veuillez saisir un numéro de carte de crédit.\",\"9xi9RQ\":\"La date d’expiration que vous avez saisie est incomplète.\",\"XAXqpg\":\"Votre carte bancaire a été refusée. Veuillez vérifier les informations, puis réessayez.\",\"Cd311A\":\"CUIT/CUIL/CDI/DNI\",\"2myv/g\":\"MM / AA\",\"89z3Hg\":\"Veuillez saisir un code postal valide.\",\"NeRchQ\":\"Une erreur s’est produite lors du traitement du paiement. Veuillez vérifier les informations, puis réessayez.\",\"gnkn1g\":\"Désolé, nous n’acceptons pas ce type de carte. Veuillez essayer un autre mode de paiement.\",\"7xb+4w\":\"Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer dans quelques minutes et <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contactez notre assistance technique</a> si le problème persiste.\",\"JHafPg\":\"Votre mode de paiement n’a pas suffisamment approvisionné. Veuillez essayer un autre mode de paiement ou ajouter des fonds sur votre compte.\",\"mFl2ug\":\"Une erreur s’est produite lors de la prolongation de votre abonnement. Veuillez <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contacter l’assistance</a> si le problème persiste.\",\"xXwnCQ\":\"Date d’expiration\",\"wVCpsA\":\"Impossible de reconnaître le code postal que vous avez saisi. Veuillez <a href=\\\"{0}\\\" target=\\\"_blank\\\" data-anchor-id=\\\"supportLink\\\" rel=\\\"noopener\\\">contacter l’assistance</a>.\",\"K+4eYg\":\"Le CDI que vous avez saisi n’est pas valide.\",\"XmA+sA\":\"Voici le coût du ou des nouveaux membres de votre équipe pour la période de facturation en cours. Les frais du nouveau membre seront ajoutés à la déduction de l’équipe dès la prochaine période de facturation.\",\"fbgf/g\":\"Le CPF/CNPJ que vous avez saisi n’est pas valide.\",\"xNojOg\":\"Carte d’identité sud-africaine\",\"VHRTXQ\":\"Un erreur est survenue lors du traitement de votre carte bancaire. Veuillez réessayer dans quelques minutes et <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contacter notre assistance technique</a> si le problème persiste.\",\"5vGLiw\":\"Cette carte de crédit n’est pas active. Veuillez contacter votre banque pour activer votre carte de crédit.\",\"J4U6OQ\":\"Le CVC que vous avez saisi est incomplet.\",\"qr9YOg\":\"Saisissez votre code postal avant de poursuivre.\",\"qvldaQ\":\"{0, number}\",\"5TTUIg\":\"Numéro de carte\",\"lNe/Zw\":\"Le numéro d’identification que vous avez saisi n’est pas valide.\",\"gybBpg\":\"Veuillez saisir le code postal\",\"R210Xw\":\"Cryptogramme\",\"V901+g\":\"DNI\",\"65o35w\":\"Veuillez patienter quelques instants pendant le chargement du formulaire.\",\"kd+pEA\":\"Nom complet\",\"L+U/+A\":\"Adresse e-mail\",\"ZmIe+w\":\"CPF\",\"R+BFjQ\":\"Le paiement n’a pas pu aboutir. Veuillez réessayer ou utiliser une autre méthode de paiement.\",\"FhVO+g\":\"Désolé, cette carte de crédit n’est pas prise en charge. Essayez une autre carte.\",\"8hQdwQ\":\"Adresse de paiement virtuelle UPI (VPA)\",\"EftY0A\":\"CDI\",\"+Rew0Q\":\"Adresse e-mail\",\"VRbCZQ\":\"Cette carte a expiré.\",\"BbyNqw\":\"vérifier\",\"UE/XfA\":\"Mettez les membres de votre équipe à niveau vers {0}\",\"7d4k+A\":\"Le code de sécurité que vous avez saisi est incomplet.\",\"BwU/0w\":\"La date d’expiration que vous avez saisie est déjà passée.\",\"AyW5XQ\":\"La date d’expiration que vous avez saisie n’est pas valide.\",\"E0k9Jg\":\"Pays\",\"zfrFPA\":\"Code postal\",\"magdVQ\":\"Saisissez votre adresse de facturation avant de poursuivre.\",\"Bgj3Kg\":\"Les informations que vous avez saisies ne sont pas valides.\",\"RHUVTw\":\"Le CUIT que vous avez saisi n’est pas valide.\",\"o/4VfA\":\"Numéro de sécurité sociale\",\"SU+d+A\":\"Un problème est survenu lors du traitement de votre document. Veuillez vérifier le numéro d’identifiant du document et réessayer.\",\"SL8I6g\":\"Sélectionnez votre pays de facturation avant de poursuivre.\",\"b97IqA\":\"Le CUIL que vous avez saisi n’est pas valide.\",\"qlOn8g\":\"Nom du titulaire de la carte\",\"L+s6vQ\":\"Le numéro de carte que vous avez saisi n’est pas valide.\",\"D0RvIQ\":\"Pays\",\"CdE9Vw\":\"État/Province/Région\",\"EYdPQg\":\"Vous y êtes presque ! Pour plus de sécurité, nous avons besoin que vous vérifiiez ce paiement.\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["fr-FR"] = strings["fr-FR"] ? Object.assign(strings["fr-FR"], messages) : messages;
})();