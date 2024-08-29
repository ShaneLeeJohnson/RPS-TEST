// Defines the scores starting at 0.
let wins = 0;
let losses = 0;
let ties = 0;

// The core game logic
const rockPaperScissors = function () {
    // Prompts the user to type in their choice
    let userChoice = prompt("Welcome to Rock✊, Paper✋, Scissors✌️! Please enter R, P, or S.");

    // These 3 lines define the computers logic and allow it to randomly select one of the 3 choices
    let choices = ["R", "P", "S"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomChoice];

    // These lines can be uncommented for testing
    // console.log(computerChoice);
    // console.log(`Player chose: ${userChoice}`)

    // These lines of code create an array of Rock, Paper, Scissors emojis that the computer will select from to match the random choice it makes.
    let choiceSymbols = ["✊", "✋", "✌️"];
    let computerSymbol = choiceSymbols[randomChoice];
    // This sets the user symbol to an empty string by default
    let userSymbol = "";

    // Will create the correct player symbol based on the choice that they made at the start
    if (userChoice === "R") {
        userSymbol = "✊";
    } else if (userChoice === "P") {
        userSymbol = "✋";
    } else {
        userSymbol = "✌️";
    }

    // Shows the player their choice and the computer's choice using emojis
    alert(`You chose: ${userSymbol}\nThe computer chose: ${computerSymbol}`);

    // This function runs when the player wins and adds 1 to their total wins as well as giving a victory message and showing them their totals
    const youWin = function () {
        wins += 1
        alert(`You Win!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
    }

    // This function runs when the player loses and adds 1 to their total losses as well as giving a defeat message and showing them their totals
    const youLose = function () {
        losses += 1
        alert(`You Lose!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
    }

    // These lines of code are the core logic that determines if the player ties, wins, or loses.
    if (userChoice === computerChoice) {
        ties += 1;
        alert(`It's a tie!\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
    } else if (userChoice === "R" && computerChoice === "S") {
        youWin();
    } else if (userChoice === "P" && computerChoice === "R") {
        youWin();
    } else if (userChoice === "S" && computerChoice === "P") {
        youWin();
    } else {
        youLose();
    }

    // Prompts the player to play again. If they choose to play again, the entire core function is run again.
    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        rockPaperScissors();
    }
}

// Starts the game
rockPaperScissors();