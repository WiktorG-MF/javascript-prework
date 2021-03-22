var randomNumber;
var computerMove;
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
