let userScore = 0;
let compScore = 0;

let choises = document.querySelectorAll(".choise");
//console.log(choise);

const winner = document.getElementById("message");
const  userScoreboard = document.getElementById('user-score');
const  compScoreboard = document.getElementById('comp-score');
choises.forEach((choise)=>{
    //console.log(choise)
    choise.addEventListener("click", ()=>{
        const playerChoice = choise.getAttribute("id");
        //console.log("choise was clicked",playerChoice);
        playGame(playerChoice);
    });
});

let genCompChoice =  () => {
    const options = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return  options[randomNumber];
}

const drawgame = () =>{
    console.log("Match was draw");
    winner.innerText = "Match was draw play again";
    winner.style.backgroundColor="#081b31";
};

const showWinner = (userWin,playerChoice,computerChoice) =>{
    if(userWin){
        // console.log("You win");
        userScore++;
        userScoreboard.innerText = userScore;
        userScoreboard.style.color = "magenta";
        winner.innerText = `You Win  ${playerChoice} computer beats ${computerChoice}`;
        winner.style.backgroundColor="green";
    }
    else{
        //console.log("Computer wins");
        compScore++;
        compScoreboard.innerText=compScore;
        compScoreboard.style.color = "purple"
        winner.innerText = `Computer Win  ${computerChoice} beats You ${playerChoice}`;
        winner.style.backgroundColor="red";
    }
};

let  playGame = (playerChoice) =>{
    console.log("user choice" ,playerChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice",computerChoice);
    if(playerChoice === computerChoice){
        drawgame();
    }
    else{
        let userWin = true;
        if(playerChoice === "rock"){
            //scissors,paper
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(playerChoice === "paper") {
            //rock, scissors
            userWin = computerChoice==="rock"?false:true;
        }else{
            //paper rock
        userWin = computerChoice==="rock"?false:true;
        };
        showWinner(userWin,playerChoice,computerChoice);
    };
};



