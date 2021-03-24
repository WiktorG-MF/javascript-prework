var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

var argButtonName, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
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

  function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		  printMessage('Wygrywasz!');
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
	  }else if (argPlayerMove == "kamień" && argComputerMove == "nożyce"){
		  printMessage("Wygrałeś!")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
	  }else if (argPlayerMove == "nożyce" && argComputerMove == "papier"){
		  printMessage("Wygrałeś!")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
	  }else if (argPlayerMove == argComputerMove){
		  printMessage("remis O.o")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
	  }else {
		  printMessage("Przegrałeś")
		  printMessage("zagrałeś " + argPlayerMove + " a ja " + argComputerMove)
	  }
  }
  playerMove = argButtonName
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); }); 