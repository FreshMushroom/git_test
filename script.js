
let humanChoice;
let computerChoice;

function getComputerChoice(){
    let output;

    let random = Math.floor(Math.random() * 3 + 1);
    console.log(random);

    switch(random){
        case 1:
            output = "rock";
            break;
        case 2:
            output = "paper";
            break;
        case 3:
            output = "scissors";
            break;
        default:
            return undefined;
        }

        return output;
    }



function getHumanChoice(){
    let input = prompt("Enter your choice:");
    return input.toLowerCase();
}

function playGame(){
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice){

        if(humanChoice === "rock" && computerChoice === "paper"){
            console.log('You lose! Paper beats Rock');
            computerScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log('You win! Paper beats Scissors');
            humanScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "rock"){
            console.log('It is a draw');
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            console.log('You win! Paper beats rock');
            humanScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log('You lose! scissors beats paper');
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "paper"){
            console.log('It is a draw');
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log('You win! scissors beats paper');
            humanScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log('You lose! rock beats scissors');
            computerScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "scissors"){
            console.log('It is a draw');
        }
    
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);

    if(humanScore > computerScore){
        console.log("you are the winner");
    }
    else if(humanScore < computerScore){
        console.log("Computer won");
    }
    else{
        console.log("Nobody won, It is a tie")
    }
}



playGame();