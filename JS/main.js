// Charger le fichier JSON
fetch('JS/enigme.json')
  .then(response => response.json())
  .then(data => {
    const enigmes = data.enigmes;
    let currentEnigme = 0; // Indice de l'énigme en cours

    // Récupérer les éléments HTML
    const enigmInstructionTitle = document.querySelector('.enigmInstructionTitle');
    const enigmInstructionPara = document.querySelector('.enigmInstructionPara');
    const submitButton = document.querySelector('.submit');

    // Générer les éléments dynamiquement
    function afficherEnigme(numeroEnigme) {
      const enigme = enigmes[numeroEnigme];
      enigmInstructionTitle.textContent = enigme.title;
      enigmInstructionPara.textContent = enigme.instruction;
    }

    // Fonction pour afficher le popup
    function afficherPopup(titre, message, boutonTexte, actionBouton) {
      const popup = document.createElement('div');
      popup.classList.add('popup');

      const popupContent = document.createElement('div');
      popupContent.classList.add('popup-content');

      const popupTitle = document.createElement('h3');
      popupTitle.textContent = titre;

      const popupMessage = document.createElement('p');
      popupMessage.textContent = message;

      const popupButton = document.createElement('button');
      popupButton.textContent = boutonTexte;
      popupButton.addEventListener('click', actionBouton);

      popupContent.appendChild(popupTitle);
      popupContent.appendChild(popupMessage);
      popupContent.appendChild(popupButton);

      popup.appendChild(popupContent);

      document.body.appendChild(popup);
    }

    // Action du bouton "Envoyer"
    function envoyerReponse() {
      afficherPopup("Bravo !", "Tu as trouvé la bonne réponse. Es-tu prêt pour l'énigme suivante?", "Question suivante", enigmeSuivante);
    }

    // Action du bouton "Question suivante"
    function enigmeSuivante() {
      if (currentEnigme < enigmes.length - 1) {
        currentEnigme++;
        afficherEnigme(currentEnigme);
        afficherPopup("Bravo !", "Tu as trouvé la bonne réponse. Es-tu prêt pour l'énigme suivante?", "Question suivante", enigmeSuivante);
      } else {
        afficherPopup("Ton initiation est terminée!", "Les Doras Milaje te recontacteront pour être formé au Wakanda ;)", "Revenir à l'accueil", retourAccueil);
      }
    }

    // Action du bouton "Revenir à l'accueil"
    function retourAccueil() {
      const popup = document.querySelector('.popup');
      document.body.removeChild(popup);
      // Rediriger l'utilisateur vers la page d'accueil ou effectuer toute autre action nécessaire
    }

    // Action du bouton "Envoyer" lorsqu'il est clické
    submitButton.addEventListener('click', envoyerReponse);

    // Afficher la première énigme par défaut
    afficherEnigme(0);
  })
  .catch(error => console.error(error));
