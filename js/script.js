var randomNumber;
var playerMove, playerInput;
var computerMove;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("wpisana odpowiedź to : " + playerInput)
if (playerInput == "1"){
	playerMove = "kamień"
} else if (playerInput == "2"){
	playerMove = "papier";
} else if (playerInput == "3"){
		playerMove = "nożyce";
	}
 else {
	printMessage("błędny wybór")

}
printMessage("Twój ruch to: " + playerMove);

randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage("wylosowana liczba to : " + randomNumber);
if (randomNumber == "1"){
	computerMove = "nożyce"
} else if (randomNumber == "2"){
	computerMove = "papier";
} else {
	computerMove = "kamień"

}
printMessage("Mój ruch to : " + computerMove)
