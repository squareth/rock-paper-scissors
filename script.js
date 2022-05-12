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
