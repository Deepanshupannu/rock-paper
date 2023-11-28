let computerScore=0;
let playerScore=0;
let computerSelection;
let playerSelection;


const head1=document.querySelector("h1");
const head2=document.querySelector("h2");
const head3=document.querySelector("h3");
const head4=document.querySelector("h4");


const hideWeapons1=document.querySelector("#rock-btn");
const hideWeapons2=document.querySelector("#paper-btn");
const hideWeapons3=document.querySelector("#scissors-btn");



// const restartBtn=document.querySelector("#restart");
// restartBtn.addEventListener('click',restartGame)



// These event listeners handle user input for the game



const selectRock=document.querySelector("#rock-btn")
selectRock.addEventListener('click',rock)

const selectPaper=document.querySelector("#paper-btn")
selectPaper.addEventListener('click',paper)

const selectScissors=document.querySelector("#scissors-btn")
selectScissors.addEventListener('click',scissors)





// THese function are used in eventlistener

function rock(){
    playerSelection="Rock";
    game(playerSelection,computerPlay);
}

function paper(){
    playerSelection="Paper";
    game(playerSelection,computerPlay);
}

function scissors(){
    playerSelection="Scissors";
    game(playerSelection,computerPlay);
}



function choice(){
    head4.textContent="you choose  "+ click();
}

choice();


// This Function provides random selection out of an array

function computerPlay(){
    let choices=["Rock","Scissors","Paper"];
    let computerSelect=choices[Math.floor(Math.random()*Math.floor(3))];
    return computerSelect
}    


// this Function runs when user wins the game round


function userVictory(){
    playerScore+=1;
    head1.textContent="you Won the round";
    head2.textContent= playerSelection + " beats " + computerSelection;
}


// This Function runs when computer wins the round

function computerVictory(){
    computerScore+=1;
    head1.textContent="you lose the round";
    head2.textContent=computerSelection + " beats "  + playerSelection;


}

// this Function runs When a round is draw

function draw(){
    head1.textContent="Its a draw";
    head2.textContent="";
}


// This function evaluates the choices and decode the winners

function game(playerSelection,computerSelectFunction){
    computerSelection=computerSelectFunction();
    if(computerSelection===playerSelection){
        draw();
    }
    else if(computerSelection==="Rock"&&playerSelection==="Paper"||
    computerSelection==="Paper"&& playerSelection==="Scissors"||
computerSelection==="Scissors"&&playerSelection==="Rock"){
    userVictory();
}
else if(
    computerSelection==="Paper"&& playerSelection==="Rock"||
    computerSelection==="Scissors"&&playerSelection==="Paper"||
    computerSelection==="Rock"&&playerSelection==="Scissors")
{
    computerVictory();
}
head3.textContent="player Score: "+ playerScore + "|Computer Score:" +computerScore;


}
