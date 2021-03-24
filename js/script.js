const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let  playerScore = 0, computerScore = 0;

function addPoints(playerScore, computerScore){
	printMessage("Wynik: P" + playerScore + "- K" + computerScore)
}

function buttonClicked(argButtonName) {
	let argMoveId;
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveId == 1) {
	  return 'kamień';
	} else if (argMoveId == 2){
	  return 'papier';
	}else if (argMoveId == 3){
	  return 'nożyce';
	}else {
		printMessage("nieznany ruch")
	}
  }

  let argPlayerMove, argComputerMove;
  function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		  printMessage('Wygrywasz!');
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
		  playerScore = playerScore + 1;
		  addPoints(playerScore,computerScore);
		  return playerScore;
	  }else if (argPlayerMove == "kamień" && argComputerMove == "nożyce"){
		  printMessage("Wygrałeś!")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
		  playerScore = playerScore + 1;
		  addPoints(playerScore,computerScore);
		  return playerScore;
	  }else if (argPlayerMove == "nożyce" && argComputerMove == "papier"){
		  printMessage("Wygrałeś!")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
		  playerScore = playerScore + 1;
		  addPoints(playerScore,computerScore);
		  return playerScore;
	  }else if (argPlayerMove == argComputerMove){
		  printMessage("remis O.o")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
		  playerScore = playerScore + 1;
		  addPoints(playerScore,computerScore);
		  return playerScore;
	  }else {
		  printMessage("Przegrałeś")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
		  computerScore = computerScore + 1;
		  addPoints(playerScore,computerScore);
		  return computerScore;
	  }
	  
	  
  }
  const playerMove = argButtonName
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); }); 