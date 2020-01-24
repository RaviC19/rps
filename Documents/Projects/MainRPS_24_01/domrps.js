let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let gameHistory = [];

// function handleUserName() {}

// var usernameBtn = document.getElementById("username-btn");
// usernameBtn.addEventListener("click", handleUsername);

function userName() {
  var input = document.getElementById("username-input");
  var display = document.getElementById("username-display");

  if (input.value) {
    display.innerText = "Hi " + input.value + "!";
  } else {
    display.innerText = "Hi, who is this?";
  }

  // display.innerText = input.value;
}

const userNameBtn = document.getElementById("username-btn");
userNameBtn.addEventListener("click", userName);

function randomNumber() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function showResult(message) {
  var resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + message;
}

function showCPUMove(x) {
  var moveCPU = document.getElementById("cpumove");
  moveCPU.innerText = "Computer move: " + x;
}

function playGame(playerMove) {
  var cpuMove = randomNumber();
  showCPUMove(cpuMove);

  if (playerMove === "rock") {
    if (cpuMove === "rock") {
      showResult("draw!");
      drawScore++;
    } else if (cpuMove === "paper") {
      showResult("computer wins");
      computerScore++;
    } else if (cpuMove === "scissors") {
      showResult("player wins");
      playerScore++;
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "paper") {
      showResult("draw!");
      drawScore++;
    } else if (cpuMove === "scissors") {
      showResult("computer wins");
      computerScore++;
    } else if (cpuMove === "rock") {
      showResult("player wins");
      playerScore++;
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "scissors") {
      showResult("draw!");
      drawScore++;
    } else if (cpuMove === "rock") {
      showResult("computer wins");
      computerScore++;
    } else if (cpuMove === "paper") {
      showResult("player wins");
      playerScore++;
    }
  }

  // document.getElementById("playerscore").innerText =
  //   "Player score " + playerScore;
  // document.getElementById("cpuscore").innerText =
  //   "Computer score " + computerScore;
  // document.getElementById("drawscore").innerText = "Draw score " + drawScore;

  let gameChoices = {
    playerMove,
    cpuMove
  };

  gameHistory.push(gameChoices);
  drawHistory();
  document.getElementById("wins").innerText = "Player wins " + playerScore;
  document.getElementById("losses").innerText =
    "Computer Wins " + computerScore;
  document.getElementById("draws").innerText = "Draws " + drawScore;

  function drawHistory() {
    let historyElement = document.getElementById("history");
    let displayString = "";
    for (let i = 0; i < gameHistory.length; i++) {
      displayString +=
        "<li>" +
        gameHistory[i].playerMove +
        " vs " +
        gameHistory[i].cpuMove +
        "</li>";
    }
    historyElement.innerHTML = "Game History" + displayString;
  }
}

function playRock() {
  playGame("rock");
}
function playPaper() {
  playGame("paper");
}
function playScissors() {
  playGame("scissors");
}

const rock = document.getElementById("rock");
rock.addEventListener("click", playRock);

const paper = document.getElementById("paper");
paper.addEventListener("click", playPaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", playScissors);

// function to print username - done
// function to record histories - done
// function to print history
