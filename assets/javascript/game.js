var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerGuess= alphabet[Math.floor(Math.random() * alphabet.length)];
var winCounter = 0;
var loseCounter = 0;
var guessLeft= 9;
var guessSoFar;

document.onkeyup = function(event) {  
    var humanGuess = event.key.toLowerCase();
    guessSoFar= humanGuess + ", ";

    if (humanGuess === computerGuess){
        winCounter++;
        document.getElementById("wins").textContent=winCounter;
        guessLeft=9;
        document.getElementById("guesses-left").textContent=guessLeft;    
    }

    else {
        guessLeft--;
        document.getElementById("guesses-left").textContent=guessLeft;
        document.getElementById("guess-so-far").textContent+=guessSoFar;
    }

    if (guessLeft === 0){
        loseCounter++;
        document.getElementById("losses").textContent=loseCounter;
        guessLeft=9;
        document.getElementById("guesses-left").textContent=guessLeft;
    }

    if (guessLeft === 9){
        document.getElementById("guess-so-far").textContent="";
        computerGuess= alphabet[Math.floor(Math.random() * alphabet.length)];
    }

}


