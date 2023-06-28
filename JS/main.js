// Charger le fichier JSON
fetch('enigme.json')
  .then(response => response.json())
  .then(data => {
    const enigmes = data.enigmes;
    
    // Récupérer les éléments HTML
    const enigmInstructionTitle = document.querySelector('.enigmInstructionTitle');
    const enigmInstructionPara = document.querySelector('.enigmInstructionPara');
    
    // Générer les éléments dynamiquement
    function afficherEnigme(numeroEnigme) {
      const enigme = enigmes[numeroEnigme];
      enigmInstructionTitle.textContent = enigme.title;
      enigmInstructionPara.textContent = enigme.instruction;
    }
    
    // Appeler la fonction pour afficher la première énigme par défaut
    afficherEnigme(0);
  })
  .catch(error => console.error(error));