function startGame() {
    var difficulty = prompt("Choose the difficulty level: Easy, Intermediate, or Difficult.").toLowerCase(); 
    var maxNumber;
    var maxAttempts;
    
    switch (difficulty) {
      case "easy":
        maxNumber = 10;
        maxAttempts = 3;
        break;
      case "intermediate":
        maxNumber = 50;
        maxAttempts = 5;
        break;
      case "difficult":
        maxNumber = 100;
        maxAttempts = 7;
        break;
      default:
        alert("Invalid difficulty level. Choose between Easy, Intermediate, or Difficult.");
        startGame();
        return; 
    }
    
    var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    var attempts = 0;
    
    while (attempts < maxAttempts) {
      var guess = parseInt(prompt("Guess the number (between 1 and " + maxNumber + ")"));
      attempts++;
      
      if (guess === randomNumber) {
        alert("Well done! You guessed the number in " + attempts + " attempt(s)!");
        break;
      } else if (guess < randomNumber) {
        alert("The number is higher. You have " + (maxAttempts - attempts) + " attempt(s) left.");
      } else {
        alert("The number is smaller. You have " + (maxAttempts - attempts) + " attempt(s) left.");
      }
    }
    
    if (attempts === maxAttempts) {
      alert("Sorry, you have used up all your attempts. The number was " + randomNumber + ".");
    }
    
    var playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      startGame();
    }
}
