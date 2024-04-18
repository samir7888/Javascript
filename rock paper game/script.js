let scores = JSON.parse(localStorage.getItem("score"));
function pickcomputerMove (){
    let randomNumber = Math.random();
    let pickcomputerMove='';
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        pickcomputerMove = "rock";
    }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        pickcomputerMove = "paper";
    } else {
        pickcomputerMove = "scissor";
    }
    
    return pickcomputerMove;
}


if (scores === null) {
    scores = {
      wins: 0,
      loses: 0,
      ties: 0,
    };
  }


  

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
    playGame("rock");
    

})
document.querySelector('.js-paper-button').addEventListener('click', ()=>{
    playGame("paper");

})
document.querySelector('.js-scissor-button').addEventListener('click', ()=>{
    playGame("scissor");

})

function playGame(playerMove){
    const computerMove = pickcomputerMove();
    let res='';

    if (playerMove === "rock") {

        if (computerMove === "rock") {
            res = "tie";
            

        }else if (computerMove === "paper") {
        res = "you lose";
        

        }
        else if (computerMove === "scissor") {
            res = "you win";
            

        }
    }
    else if (playerMove === "paper") {

        if (computerMove === "paper") {
            res = "tie";
        }else if (computerMove === "scissor") {
        res = "you lose";
        }
        else if (computerMove === "rock") {
            res = "you win";
        }
    }
    else if (playerMove === "scissor") {

        if (computerMove === "scissor") {
            res = "tie";
        }else if (computerMove === "rock") {
        res = "you lose";
        }
        else if (computerMove === "paper") {
            res = "you win";
        }
    }



    if (res === "you win") {
        scores.wins += 1;
      } else if (res === "you lose") {
        scores.loses += 1;
      } else if (res === "tie") {
        scores.ties += 1;
      }

      localStorage.setItem("score", JSON.stringify(scores));

      updateScoreElement();
    
   
    let result = document.querySelector(".result");
    result.innerHTML =`${res}`;

    if (res === "you lose") {
       result.classList.add("lose");
       result.classList.remove("win");
       result.classList.remove("tie");

    }
    else if (res === "you win") {
        result.classList.add("win");
        result.classList.remove("lose");
        result.classList.remove("tie");
    }
    else if (res === "tie") {
        result.classList.add("tie");
        result.classList.remove("win");
        result.classList.remove("lose");
    }

}


function updateScoreElement() {
    document.querySelector(
      ".user-score"
    ).innerHTML = `${scores.wins}`;
    document.querySelector(
      ".comp-score"
    ).innerHTML = `${scores.loses}`;
  }