//We will use a variable to stop and restart the game
let gameOn = true;

let playerScore = 0;
let computerScore = 0;

let yourScore = document.querySelector('#your-score');
let compScore = document.querySelector('#comp-score');

let youPlayed = document.querySelector("#you-played");
let compPlayed = document.querySelector("#comp-played");

let midSection = document.querySelector('.mid-section');

//Add event listeners for the three buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(bttn){
    bttn.addEventListener('click', playGame);
})

//Create a function that calls for a playRound, then prints the result
//in the HTML.

let roundWonBy; 

function playGame(e){
    if(gameOn) {
    let computerChoice = computerPlay();
    let playerChoice = e.target.id;
    console.log(playerChoice);
    console.log(computerChoice);
    let roundWinner= playRound(playerChoice, computerChoice);
    youPlayed.textContent = playerChoice + ".";
    compPlayed.textContent = computerChoice + ".";
    roundWonBy = document.querySelector('#round-won-by');
    if (!roundWonBy){
        roundWonBy = document.createElement("p");
        roundWonBy.setAttribute('id', 'round-won-by');
    }
    roundWonBy.textContent = roundWinner;
    midSection.appendChild(roundWonBy);
    addScore(roundWinner);
    }
}

function addScore(roundWinner) {
    if (roundWinner.includes("lose")) {
        ++computerScore;
        console.log(computerScore + "-" + playerScore);
    } else if (roundWinner.includes("win")) {
        ++playerScore;
        console.log(computerScore + "-" + playerScore);
    } else if (roundWinner.includes("tie")) {
        console.log(computerScore + "-" + playerScore);
    }
    
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
    finishGame();
    }
}

let restartButton;
let finishText;
const finishContainer = document.querySelector("#finish-container");

function finishGame(){
    finishText = document.createElement('h3');
    finishText.textContent = "You ";
    const finishTextWinner = document.createElement('b');
    if (playerScore === 5) {
        finishTextWinner.textContent = "WON. CONGRATULATIONS!"
    } else { finishTextWinner.textContent = "LOST. SORRY, TRY AGAIN!"
    }
    restartButton = document.createElement('button');
    restartButton.textContent = "RESTART";
    gameOn = false;
    finishText.appendChild(finishTextWinner);
    finishContainer.appendChild(finishText);
    finishContainer.appendChild(restartButton);

    restartButton.addEventListener('click', restartGame);
}

function restartGame(){

    finishContainer.removeChild(finishText);
    finishContainer.removeChild(restartButton);
    midSection.removeChild(roundWonBy);
    playerScore = 0;
    computerScore = 0;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;
    gameOn = true;

}

//We create a function to randomnly return rock/paper/scissors
function computerPlay(){
    computerSelector = Math.floor(Math.random() * 3) + 1;
    if (computerSelector === 1) {
        return "Rock";
    } else if (computerSelector === 2) {
        return "Paper";
    } else if (computerSelector === 3) {
        return "Scissors";
    }
}

function playRound (playerChoice, computerChoice) {

    if (playerChoice.toLowerCase() === "rock") {
        switch (computerChoice) {
            case "Rock":
                return "Rock and Rock! It's a tie!";
                break;
            case "Paper":
                return "Rock against Paper! You lose!";
                break;
            case "Scissors":
                return "Rock against Scissors! You win!";
        }
    }

    else if (playerChoice.toLowerCase() === "paper") {
        switch (computerChoice) {
            case "Rock":
                return "Paper against Rock! You win!";
                break;
            case "Paper":
                return "Paper and Paper! It's a tie!";
                break;
            case "Scissors":
                return "Paper against Scissors! You lose!";            
        }
    }

    else if (playerChoice.toLowerCase() === "scissors") {
        switch (computerChoice) {
            case "Rock":
                return "Scissors against Rock! You lose!";
                break;
            case "Paper":
                return "Scissors and Paper! You win!";
                break;
            case "Scissors":
                return "Scissors and Scissors! It's a tie!";            
        }
    }
}