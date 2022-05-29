
//REVISIT COMMENT: We need to add event listeners for the three buttons. Then,
//when one of the buttons is clicked, we need to play a round where playerChoice
//is the event clicked, and play it against computer. We then assign de value to
//score corresponding. Once one of the two achieves 5 points, the game ends. You
//wont be able to select anything. To play again we'll have to initialize everything
//that was changed with a button.

//Add variables for computerScore and playerScore
let playerScore = 0;
let computerScore = 0;

let youPlayed = document.querySelector("#you-played");
let compPlayed = document.querySelector("#comp-played");

let midSection = document.querySelector('.mid-section');

//Add event listeners for the three buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(bttn){
    bttn.addEventListener('click', playGame)
})

//Create a function that calls for a playRound, then prints the result
//in the HTML.

function playGame(e){

    let computerChoice = computerPlay();
    let playerChoice = e.target.id;
    console.log(playerChoice);
    console.log(computerChoice);
    let roundWinner= playRound(playerChoice, computerChoice);
    youPlayed.textContent = playerChoice + ".";
    compPlayed.textContent = computerChoice + ".";
    let roundWonBy = document.querySelector('#round-won-by');
    if (!roundWonBy){
        roundWonBy = document.createElement("p");
        roundWonBy.setAttribute('id', 'round-won-by');
        console.log(roundWonBy);
    }
    roundWonBy.textContent = roundWinner;
    midSection.appendChild(roundWonBy);


}

/*First we need to create a function called computerPlay that randomnly returns
to us either rock, paper or scissor. For this we're gonna need a randomizer 
between 1 and 3, then we need to assign each number to either rock, paper, or
scissor
*/

function computerPlay(){
    //Create a variable to store the number between 1 and 3
    //Create a randomizer between 1 and 3, assign the value to the variable
    computerSelector = Math.floor(Math.random() * 3) + 1;
    //If the value is 1, return Rock
    if (computerSelector === 1) {
        return "Rock";
        //If the value is 2, return Paper
    } else if (computerSelector === 2) {
        return "Paper";
        //If the value is 3, return Scissors
    } else if (computerSelector === 3) {
        return "Scissors";
    }
}


/*Then we need to create a function that plays a round of rock, paper, scissors.
This function should take two parameters: playerChoice and computerChoice.
Then it should compare the two parameters, see which one wins, and return a string
declaring the winner.*/

function playRound (playerChoice, computerChoice) {
    //If the player chooses Rock, and the computer scissors, the player wins.
    //If the player chooses Rock, and the computer paper, the computer wins.
    //If the player chooses Rock, and the computer rock, it's a tie.
    if (playerChoice === null || undefined){
        return "You cancelled."
    } else if (playerChoice.toLowerCase() === "rock") {
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
    //If the player chooses Paper, and the computer Rock, the player wins.
    //If the player chooses Paper, and the computer scissors, the computer wins.
    //If the player chooses Paper, and the computer paper, it's a tie.

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

    //If the player chooses Scissors, and the computer paper, the player wins.
    //If the player chooses Scissors, and the computer rock, the computer wins.
    //If the player chooses Scissors, and the computer scissors, it's a tie.

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
    //If the parameter isn't valid, we return an "error" message.
    } else {
        return "Please enter a valid option. Either Rock, Paper or Scissors!"
    }

}
/* We need to create a function that plays the actual game. It will be five rounds.
In each round, we will call the playRound function and we'll declare a winner. 
If the player wins 5 rounds in total, he wins. 
If the computer wins 5 rounds in total, the player loses.
The game ends once those 5 wins have been acheived. 
*/

//We create the game function

// function game() {

//     //We create two score variables, computerScore and playerScore.
//     let computerScore = 3;
//     let playerScore = 1;
//     //Inside the game function, we create a loop.
//     //The loop finishes when either the computer score or the player score reaches 5.
//     for (; (playerScore <= 4 && computerScore <= 4); ) {

//         //We call the computerPlay function.   
//         //We call a prompt for the user to enter their choice.
//         let computerChoice = computerPlay();
//         let playerChoice = prompt("Please enter your choice: Rock, Paper or Scissors?", "");
       
//         //We play a round using both values.
//         let roundWinner = playRound(playerChoice, computerChoice);

//         //We print the result
//         //We add a score point to the winner.  
//         console.log(roundWinner);
//         if (roundWinner.includes("lose")) {
//             ++computerScore;
//             console.log("Sorry, you lost this round!");
//         } else if (roundWinner.includes("win")) {
//             ++playerScore;
//             console.log("Congratulations, you won this round!")
//         } else if (roundWinner.includes("tie")) {
//             console.log("The game was a tie!")
//         } else if (roundWinner.includes("cancelled")) {
//             return "Cancelled the game."
//         }
//         console.log("Your score is " + playerScore);
//         console.log("The Machine's score is " + computerScore);
//     }

// //When the loop is done, we return the winner.
//     console.log("We are finished!");
//     if (playerScore === 5) {
//         return "Congratulations! You won this time!";
//     } else if (computerScore === 5) {
//         return "Sorry, you lost this time!";
//     }
// }