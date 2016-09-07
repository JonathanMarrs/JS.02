var userInput = prompt("Give me a starting number, por favor...");
var userInput2 = prompt("And now give me number higher than your original, please.");
var userNumber = parseInt(userInput);
var userNumber2 = parseInt(userInput2);
var finalNum = Math.floor (Math.random() * (userNumber2 - userNumber + 1)) + userNumber;
var message = "<p>" + finalNum + " is a random number between " + userNumber + " and " + userInput2 + ".</p>";
document.write(message);
