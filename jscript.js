function computerPlay(){
    const rps = Math.floor(Math.random() * 3);
    console.log("Computer Choice is " + rps);
    if (rps == 0) {
        return "Rock";
    } else if (rps == 1) {
        return "Paper";
    } else if (rps == 2){
        return "Scissors";
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener('click', function() {
        playRound(button.value);
    })
});

let playerScore = 0;
let computerScore = 0;

function playRound (playerChoice){
    let result = "";
    let computerChoice = computerPlay().toUpperCase();
    playerChoice = playerChoice.toUpperCase();

    if(playerChoice == computerChoice){
        console.log("Draw!");
        result = "It's a draw.<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
    } else if (playerChoice == "ROCK") {
        if (computerChoice == "SCISSORS") {
            playerScore++;
            result = "Fuecoco used Ember on Sprigatito, it's super effective!<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        } else if (computerChoice == "PAPER") {
            computerScore++;
            result = "Fuecoco used Ember on Quaxly, it's not very effective.<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        }
    } else if (playerChoice == "PAPER"){
        if (computerChoice == "ROCK") {
            playerScore++;
            result = "Quaxly used Bubble on Fuecoco, it's super effective!<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        } else if (computerChoice == "SCISSORS") {
            computerScore++;
            result = "Quaxly used Bubble on Sprigatito, it's not very effective.<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        }
    } else if (playerChoice == "SCISSORS") {
        if (computerChoice == "PAPER") {
            playerScore++;
            result = "Sprigatito used Razor Leaf on Quaxly, it's super effective!<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        } else if (computerChoice == "ROCK") {
            computerScore++;
            result = "Sprigatito used Razor Leaf on Fuecoco, it's not very effective.<br><br>Player: " + playerScore + "<br><br>Computer: " + computerScore;
        }
    }

    if(playerScore == 5){
        result = result + "<br><br> YOU WIN!<br><br> Reload to play again"
        buttons.forEach( elem =>{
            elem.disabled = true;
        });
    } else if(computerScore == 5){
        result = result + "<br><br> You lose!<br><br> Reload to play again"
        buttons.forEach(elem =>{
            elem.disabled = true;
        });
   }

    document.getElementById('result').innerHTML = result;
    return;
}


//game();