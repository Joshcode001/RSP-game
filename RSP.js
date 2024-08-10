let  randomMove = Math.random();
const buttonElem5 = document.getElementById('reset');
const buttonElem1 = document.getElementById('rock');
const buttonElem2 = document.getElementById('paper');
const buttonElem3 = document.getElementById('scissors');
const buttonElem4 = document.getElementById(`userBTN`);
const divElem = document.querySelector('.jsedit1');
const divElem1 = document.querySelector('.jsedit2');
let computerMove = '';
let result = '';
let playerMove = "";
const table = {
  YOU : "",
  COMPUTER : "",
  RESULT : "",
}
let score = {
  Wins:0,
  Losses : 0,
  Ties : 0,
 };


function buttonPressed (e) {
 playerMove = e.target.innerHTML;
 console.log(playerMove);
}
function pickComputerMove () {
  if (randomMove > 0 && randomMove < 0.33) {
    computerMove = "PAPER";
    return computerMove;
  } else if (randomMove > 0.33 && randomMove < 0.66) {
    computerMove = "ROCK";
    return computerMove;
  } else if (randomMove > 0.66 && randomMove < 1) {
    computerMove = "SCISSORS";
    return computerMove;
  }
 };
function resetComputerMove() {
  if (playerMove ==='ROCK') {
    if (computerMove === 'PAPER') {
      randomMove = 0.89
     } else if (computerMove === 'ROCK') {
      randomMove = 0.29
     } else if (computerMove === 'SCISSORS') {
      randomMove = 0.59
     }
  } else if (playerMove === 'PAPER') {
    if (computerMove === 'PAPER') {
      randomMove = 0.49
     } else if (computerMove === 'ROCK') {
      randomMove = 0.79
     } else if (computerMove === 'SCISSORS') {
      randomMove = 0.19
     }
  } else if (playerMove === 'SCISSORS') {
    if (computerMove === 'PAPER') {
      randomMove = 0.49
     } else if (computerMove === 'ROCK') {
      randomMove = 0.79
     } else if (computerMove === 'SCISSORS') {
      randomMove = 0.29
     }
  }
    
};
 function createResult(playerMove) {
  if (playerMove === 'rock') {if (computerMove === 'ROCK') {
    result = 'A TIE.';
    return result;
  } else if (computerMove === 'PAPER') {
    result = 'YOU LOSE.';
    return result;
  } else if (computerMove === 'SCISSORS') {
    result = 'YOU WIN.';
    return result;
  }} else if (playerMove === 'scissors') {if (computerMove === 'ROCK') {
    result = 'YOU WIN.';
    return result;
  } else if (computerMove === 'PAPER') {
    result = 'YOU LOSE.';
    return result;
  } else if (computerMove === 'SCISSORS') {
    result = 'A TIE.';
    return result;
  }} else if (playerMove === 'paper') {if (computerMove === 'ROCK') {
    result = 'YOU WIN.';
    return result;
  } else if (computerMove === 'PAPER') {
    result = 'A TIE.';
    return result;
  } else if (computerMove === 'SCISSORS') {
    result = 'YOU LOSE.';
    return result;
  }};
  };
  function updateAlert() {
    if (playerMove === 'ROCK') {
      table.YOU = 'PICKED ROCK!';
      table.COMPUTER = `PICKED ${computerMove}!!`;
      table.RESULT = `OH! IT'S ${result}`;
      divElem1.innerHTML = `You:  ${table.YOU}  Computer: ${table.COMPUTER}
       Result: ${table.RESULT}`
      
    } else if (playerMove === 'PAPER') {
      table.YOU = 'PICKED PAPER!';
      table.COMPUTER = `PICKED ${computerMove}!!`;
      table.RESULT = `OH! IT'S ${result}`;
     divElem1.innerHTML = `You:  ${table.YOU}  Computer: ${table.COMPUTER} 
      Result: ${table.RESULT}`
    
    } else if (playerMove === 'SCISSORS') {
      table.YOU = 'PICKED SCISSORS!';
      table.COMPUTER = `PICKED ${computerMove}!!`;
      table.RESULT = `OH! IT'S ${result}`;
      divElem1.innerHTML = `You:  ${table.YOU}   Computer: ${table.COMPUTER} 
        Result: ${table.RESULT}`
    }
    console.log(table);
    return playerMove;
  }
  function updateScore() {
    if (result === 'YOU WIN.') {
     score.Wins += 1;
     divElem.innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses}, Ties : ${score.Ties}`
     return score.Wins;
    } else if (result === 'YOU LOSE.') {
    score.Losses += 1;
    divElem.innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses}, Ties : ${score.Ties}`
    return score.Losses;
    } else if (result === 'A TIE.') {
    score.Ties += 1;
    divElem.innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses}, Ties : ${score.Ties}`
    return score.Ties;
    } 
    };

function resetScore () {
  score = {
    Wins:0,
    Losses : 0,
    Ties : 0,
   }
   divElem.innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses}, Ties : ${score.Ties}`
   divElem1.innerHTML = "";
   return score;
};

buttonElem1.addEventListener('click',buttonPressed);
buttonElem1.addEventListener('click', () => {
  console.log(pickComputerMove());
   resetComputerMove();
  console.log(createResult('rock'));
  updateAlert()
  updateScore();
  
})

buttonElem2.addEventListener('click',buttonPressed);
buttonElem2.addEventListener('click', () => {
  console.log(pickComputerMove());
  resetComputerMove();
  console.log(createResult('paper'));
  updateAlert();
  updateScore();
  
})

buttonElem3.addEventListener('click',buttonPressed);
buttonElem3.addEventListener('click', () => {
  console.log(pickComputerMove());
  resetComputerMove();
  console.log(createResult('scissors'));
  updateAlert();
  updateScore();
  
})
buttonElem5.addEventListener('click',resetScore);
