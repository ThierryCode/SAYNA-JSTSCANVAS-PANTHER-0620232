// Charger le fichier JSON
fetch('JS/enigme.json')
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
    
    // Afficher la première énigme par défaut
    afficherEnigme(0);
  })
  .catch(error => console.error(error));
// Les énigmes