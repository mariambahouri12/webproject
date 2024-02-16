const liste = document.querySelectorAll('#maListe li');

liste.forEach(item => {
  item.addEventListener('click', function() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //les couleurs sont représentées par une chaîne hexadécimale 
    item.style.color = randomColor; 
  });
});