
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

    if (winner === 1) {winMessageDiv.textContent = `You won!`; wins++; winsStatsDiv.textContent = `Wins: ${wins}`;}
    if (winner === -1) {winMessageDiv.textContent = `You lost!`; lost++; lossesStatsDiv.textContent = `Losses: ${lost}`;}
    if (winner === 0) {winMessageDiv.textContent = `This was a draw!`; draw++; drawsStatsDiv.textContent = `Draws: ${draw}`;}
    
}

let wins = 0;
let lost = 0;
let draw = 0;
const playerName = prompt("Welcome to Rock Paper Scissor, what's your name?");
const playerNameElements = document.querySelectorAll("#playerName");
playerNameElements.forEach((item) => { item.textContent = playerName; });
const playerChoiceElement = document.querySelector("#playerChoice");
const computerChoiceElement = document.querySelector("#computerChoice")
const winMessageDiv = document.querySelector("#win-message");
const winsStatsDiv = document.querySelector("#wins");
const drawsStatsDiv = document.querySelector("#draws");
const lossesStatsDiv = document.querySelector("#losses")
let playerChoice = "ciao";

const playerButtonsDiv = document.querySelector("#buttons-div");
playerButtonsDiv.addEventListener('click', onChoice);



//mainUI();

function onChoice(event) {
    playerChoice = event.target.id;
    playerChoiceElement.textContent = playerChoice;
    let computerChoice = getComputerChoice();
    setTimeout(()=> {computerChoiceElement.textContent = ".";}, 500);
    setTimeout(()=> {computerChoiceElement.textContent = "..";}, 1000);
    setTimeout(()=> {computerChoiceElement.textContent = "...";}, 1500);

    setTimeout(()=> {computerChoiceElement.textContent = computerChoice;}, 3000);
    setTimeout( () => { playGame(playerChoice, computerChoice); }, 3200); 



}


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

