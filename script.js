// fuction getComputerChoice will randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice () {
    const choices = ['Rock','Paper','Scissors'];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

// keep track of the score
var yourScore = 0;
var compScore = 0;
var ties = 0;


// display the scores
const yourScoreText = document.getElementById("yourScore");
const compScoreText = document.getElementById("compScore");
const tieScore = document.getElementById("ties");


// write a function to play the game and output the result
function playRound (playerChoice) {
    // get computer choice
    const compChoice = getComputerChoice();
    var result = ""
    // compare 
    if (playerChoice == 'Rock') {
        if (compChoice == 'Rock') {
            result = "Tie. Rock vs Rock."
            ties += 1;
        } else if (compChoice == 'Paper') {
            result = 'You lose. Paper beats Rock.'
            compScore += 1;
        } else {
            result = 'You win. Rock beats Scissors.'
            yourScore += 1;
        }
    } else if (playerChoice == "Paper") {
        if (compChoice == 'Paper') {
            result = "Tie. Paper vs Paper. "
            ties +=1;
        } else if (compChoice == 'Scissors') {
            result = 'You lose. Scissors beat Paper.'
            compScore += 1;
        } else {
            result = 'You win. Paper beats Rock.'
            yourScore += 1;
        }
    } else {
        if (compChoice == 'Scissors') {
            result = "Tie. Scissors vs Scissors."
            ties += 1;
        } else if (compChoice == 'Rock') {
            result = 'You lose. Rock beats scissors.'
            compScore += 1;
        } else {
            result = 'You win. Scissors beat Paper'
            yourScore += 1;
        }
    }
    result += '<br />';
    console.log(result)
    output(result);
}


// function to write the output
function output(result) {
    var displayText = document.getElementById("results");
    displayText.innerHTML = result + displayText.innerHTML;
    yourScoreText.innerHTML = `You: ${yourScore}`
    compScoreText.innerHTML = `Computer: ${compScore}`
    tieScore.innerHTML =   `Ties: ${ties}`

}

// add event listener to button press -> call button event handler function
const rockButton = document.getElementById("rockButton");
rockButton.addEventListener('click', function(){playRound('Rock')});
const paperButton = document.getElementById("paperButton");
paperButton.addEventListener('click', function(){playRound('Paper')});
const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener('click', function(){playRound('Scissors')});