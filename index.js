const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

function initGame(elementSelected) {
  const computerRandomNum = choices[Math.floor(Math.random() * 3)];
  console.log("Computer selected:", computerRandomNum);
// THIS WILL BE CHANGED TO A HELPER FUNCTION.
  switch (elementSelected) {
    case 'rock':
      playerChoice.textContent = "PLAYER: 🪨";
      //logic to see who won
      if (computerRandomNum === "rock") {
        computerChoice.textContent = "COMPUTER: 🪨";
        // IF IT IS CURRENTLY THE SAME VALUE
        if (result.textContent == "IT'S A TIE" || result.textContent == "IT'S A TIE AGAIN") { 
          result.textContent = "IT'S A TIE AGAIN";
        } else result.textContent = "IT'S A TIE";
      }
      if (computerRandomNum === "paper") {
        computerChoice.textContent = "COMPUTER: 📄";
        // IF IT IS CURRENTLY THE SAME VALUE
        if (result.textContent == "COMPUTER WINS" || result.textContent == "COMPUTER WINS AGAIN") {
          result.textContent = "COMPUTER WINS AGAIN";
        } else result.textContent = "COMPUTER WINS";
      }
      if (computerRandomNum === "scissors") {
        computerChoice.textContent = "COMPUTER: ✂️";
        // IF IT IS CURRENTLY THE SAME VALUE
        if (result.textContent == "PLAYER WINS" || result.textContent == "PLAYER WINS AGAIN" ) {
          result.textContent = "PLAYER WINS AGAIN";
        } else result.textContent = "PLAYER WINS";
      }
      break;
    case 'paper':
        playerChoice.textContent = "PLAYER: 📄";
        if (computerRandomNum === "paper") {
          computerChoice.textContent = "COMPUTER: 📄";
          if (result.textContent == "IT'S A TIE" || result.textContent == "IT'S A TIE AGAIN") { 
            result.textContent = "IT'S A TIE AGAIN";
          } else result.textContent = "IT'S A TIE";
        }
        if (computerRandomNum === "scissors") {
          computerChoice.textContent = "COMPUTER: ✂️";
          if (result.textContent == "COMPUTER WINS" || result.textContent == "COMPUTER WINS AGAIN") {
            result.textContent = "COMPUTER WINS AGAIN";
          } else result.textContent = "COMPUTER WINS";
        }
        if (computerRandomNum === "rock") {
          computerChoice.textContent = "COMPUTER: 🪨";
          if (result.textContent == "PLAYER WINS" || result.textContent == "PLAYER WINS AGAIN" ) {
            result.textContent = "PLAYER WINS AGAIN";
          } else result.textContent = "PLAYER WINS";
        }
        break;
    case 'scissors':
        playerChoice.textContent = "PLAYER: ✂️";
        if (computerRandomNum === "scissors") {
          computerChoice.textContent = "COMPUTER: ✂️";
          if (result.textContent == "IT'S A TIE" || result.textContent == "IT'S A TIE AGAIN") { 
            result.textContent = "IT'S A TIE AGAIN";
          } else result.textContent = "IT'S A TIE";
        }
        if (computerRandomNum === "rock") {
          computerChoice.textContent = "COMPUTER: 🪨";
          if (result.textContent == "COMPUTER WINS" || result.textContent == "COMPUTER WINS AGAIN") {
            result.textContent = "COMPUTER WINS AGAIN";
          } else result.textContent = "COMPUTER WINS";
        }
        if (computerRandomNum === "paper") {
          computerChoice.textContent = "COMPUTER: 📄";
          if (result.textContent == "PLAYER WINS" || result.textContent == "PLAYER WINS AGAIN" ) {
            result.textContent = "PLAYER WINS AGAIN";
          } else result.textContent = "PLAYER WINS";
        }
        break;
    default:
      break;
  }
}
