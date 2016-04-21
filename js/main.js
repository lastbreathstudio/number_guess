// Generate random number onload
$(document).ready(function() {

  function GenerateRandomNumber (){     
      var GenerateRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      randomNumber = GenerateRandom;  
  }
  
  GenerateRandomNumber() ;
 
// Submitting user input
  $('#submit').click(submit);
    $('#playerGuess').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
    console.log(randomNumber);
});  // end of document.ready

// Storing user input 
function submit(guess){
  var guess = document.getElementById("playerGuess").value;
  validation(guess);
  feedback();

 // Reset input after submit   
    $("#playerGuess").val('');
  }

function validation(guess) {
    if (guess === "" || isNaN(guess)){
    temp = "Invalid Guess";
    return;
  }
    else if (guess > 100 || guess <= 0) {
    temp = "Invalid Guess";
    return;
  }
    else 
      addGuesses (guess);
      comparison(guess);
}

  var guesses = [];
  
  function addGuesses (guess){
  
  guesses.push(guess);
  $("#guesses").append("<p>" + guess + "   " + "</p>");
  }

// Compare number guessed back to number generated
function comparison(guess) {

// First guess
function howClose(){
  if (guess < randomNumber) {
    temp = "Too Low";
  }
  if (guess > randomNumber  ) {
    temp = "Too High";
    }
  } 
   howClose();


// Subsequest guesses
function Guess(){
  var lastNum = guesses.length;
  var finalNum = (lastNum - 1);
  //console.log('finalnum = '+ finalnum);

  var nextGuess = (lastNum - 2);

  var guessDifference =  Math.abs(randomNumber-guesses[finalNum]); 

  var previousGuessDifference = Math.abs(randomNumber - guesses[nextGuess] );

  if (guessDifference <= previousGuessDifference) {
    temp = "Getting Hotter";
  }
  else {
    temp = "Getting Colder";
  }
}
  if (guesses.length >= 2) {
    Guess();
  }
  if (randomNumber == guess) {
    if (guesses.length == 1) {
      temp = "WOW, got it first time!";
    }
    else temp = "You did it!!! in " + " " + guesses.length + " " + "tries";

  $('#playerGuess').attr('disabled',true); 

  }
}

// Guess Feedback
function feedback() {
  $("#reply").empty();
  $("#reply").append("<h3>" + temp + "</h3>");
}
