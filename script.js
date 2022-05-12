/*First we need to create a function called computerPlay that randomnly returns
to us either rock, paper or scissor. For this we're gonna need a randomizer 
between 1 and 3, then we need to assign each number to either rock, paper, or
scissor
*/

function computerPlay(){
    //Create a variable to store the number between 1 and 3
    //Create a randomizer between 1 and 3, assign the value to the variable
    computerChoice = Math.floor(Math.random() * 3) + 1;
    //If the value is 1, return Rock
    if (computerChoice === 1) {
        return "Rock";
        //If the value is 2, return Paper
    } else if (computerChoice === 2) {
        return "Paper";
        //If the value is 3, return Scissors
    } else if (computerChoice === 3) {
        return "Scissors";
    }
}




