let playerWins = 0;
let computerWins = 0;

// decide winner from two choices
function winner(playerChoice, computerChoice) {

    let winner = "Computer";
    if (playerChoice == computerChoice) {
        winner = "Draw";
    } else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)) {
        winner = "You!";
        playerWins++;
    } else {
        computerWins++;
    }

    return winner;
}

// when player chooses and option create computers choice, decide winner and display results
function choose(playerChoice) {

    const shoot = ["Rock", "Paper", "Scissors"]

    const icons = [
        "<i class=\"fas fa-hand-rock rotate-right\"></i>",
        "<i class=\"fas fa-hand-paper rotate-right\"></i>",
        "<i class=\"fas fa-hand-peace rotate-right\"></i>"
    ]

    // display players choice
    document.getElementById("player-choice").innerHTML = `${shoot[playerChoice]} ${icons[playerChoice]}`;

    // get random choice from computer and display it
    computerChoice = Math.floor(Math.random() * shoot.length);
    document.getElementById("computer-choice").innerHTML = `${icons[computerChoice].replace("right", "left")} ${shoot[computerChoice]}`;

    // display winner and update score
    document.getElementById("winner").textContent = winner(playerChoice, computerChoice);
    document.getElementById("player-wins").textContent = playerWins;
    document.getElementById("computer-wins").textContent = computerWins;
}
