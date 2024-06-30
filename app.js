let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScores = document.querySelector("#userScore");
const compScorecs =document.querySelector("#comScore");
const genCompChoice=()=>
{
    const options= ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner = (userWin,userChoice,comChoice) =>
{
        if(userWin)
        {
            console.log("You Win!");
            msg.innerText =`You win ! your  ${userChoice} beats ${comChoice}`;
            userScore++;
            userScores.innerText=userScore;
            msg.style.backgroundColor="green";
        }
        else
        {
            console.log("You Lose");
            msg.innerText =`You Lose.   ${comChoice} beats your ${userChoice}`;
            compScore++;
            compScorecs.innerText=compScore;
            msg.style.backgroundColor="red";
        }
}
const palyGame = (userChoice) =>
{
    console.log("user chooice = ",userChoice );
    const comChoice=genCompChoice();
    console.log("comp choice = ",comChoice);

    if(userChoice === comChoice)
    {
        console.log("Game was Draw");
        msg.innerText ="Game was Draw. Try again ";
        msg.style.backgroundColor="#6e5d9b";
    }
    else
    {
        let userWin = true;
        if(userChoice === rock)
        {
            // papper ,scissors
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === paper)
        {
            // rock,scissors
            userWin= comChoice === "scissors" ? false :true;
        }
        else{
            // rock ,papre 
            userWin = comChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    })
});
