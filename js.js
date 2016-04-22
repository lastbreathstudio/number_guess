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
  }

// Compare number guessed back to number generated
function comparison(guess) {

	var para  = document.createElement('p');
	var guessesDiv = document.getElementById('guesses');
	var rightNunmDiv = document.getElementById('rightGuess');

// Check guess
function howClose(){
	
  if (guess < randomNumber) {
    temp = "Too Low";
    para.className = 'low';
    para.innerHTML = guess;
    guessesDiv.appendChild(para);
  }
  if (guess > randomNumber  ) {
    temp = "Too High";
    para.className = 'high';
    para.innerHTML = guess;
    guessesDiv.appendChild(para);
    }
  }
   howClose();
	
  if (randomNumber == guess) {
  		para.className = 'rightNum animated pulse';
        para.innerHTML = guess;
        guessesDiv.appendChild(para);

    if (guesses.length == 1) {
      temp = "Nice, got it first time!";
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
