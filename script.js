
function getComputerChoice() {
    let rand = Math.floor((Math.random() * 10 ) / 4);
    let choice;
    if (rand === 0) {choice = "Rock"}
    else if (rand === 1) {choice = "Paper"}
    else if (rand === 2) {choice = "Scissors"}
    return choice;

    
}

function getHumanChoice() { 
    let choice;
    while(true){

        choice = prompt("Enter rock, paper or scissor: ");
        if (choice.localeCompare("rock", 'en', {sensitivity : "base"}) === 0) { choice = "Rock"; break; }
        else if (choice.localeCompare("paper", 'en', {sensitivity : "base"}) === 0) {choice = "Paper"; break; }
        else if (choice.localeCompare("scissors", 'en', {sensitivity : "base"}) === 0) {choice = "Scissors"; break;}
        else {alert("Unrecognized input. Please enter again either rock, paper or scissors")}
     } 

    return choice;
    

}

function playGame(humanChoice, computerChoice) {
    let winner;
    if(humanChoice === computerChoice) {winner = 0;}
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {winner = 1;}
    else if (humanChoice === "Rock" && computerChoice === "Paper") {winner = -1;}
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {winner = -1;}
    else if (humanChoice === "Paper" && computerChoice === "Rock") {winner = 1;}
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {winner = -1;}
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {winner = 1;}



    return winner;
    
}

let wins = 0;
let lost = 0;
let draw = 0;
alert("Welcome to Rock Paper Scissor, let's start!")
mainUI();
alert("Thank you for playing.")


function mainUI() {

    while (true) {
    
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        winner = playGame(humanChoice, computerChoice); 
        if (winner === 1) {alert(`You won! Computer chose ${computerChoice}`); wins++;}
        if (winner === -1) {alert(`You lost! Computer chose ${computerChoice}`); lost++;}
        if (winner === 0) {alert(`This was a draw! Computer chose ${computerChoice}`); draw++;}
        if (!confirm(`Current statistics
            Wins: ${wins}
            Losses: ${lost}
            Draws: ${draw}
            Play again?`)) {break;}
        
        }
    
}

