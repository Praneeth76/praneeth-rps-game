let score = JSON.parse(localStorage.getItem('score'));
    
    if (score === null) {
      score = {
        Wins : 0,
        Looses : 0,
        Ties : 0
      }
    }
    let picked = '';
    function playGame(picked){
      const computerMove = computerMoves();
      let result = '';

      scoreUpdate();

      if(picked === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You loose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      else if(picked === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You loose.';
        }
      }

      else if(picked === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You loose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }
      }
      if(result === 'You win.') {
        score.Wins += 1;
      }
      else if(result === 'You loose.') {
        score.Looses += 1;
      }
      else if(result === 'Tie.') {
        score.Ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      scoreUpdate();

      document.querySelector('.Result').innerHTML = result;
      document.querySelector('.moves').innerHTML = `you <img src="images/${picked}-emoji.png" class="png">
    computer <img src="images/${computerMove}-emoji.png" class="png">`;
    }
    
    function scoreUpdate() {
       document.querySelector('.score').innerHTML = `Wins : ${score.Wins}, Looses : ${score.Looses}, Ties : ${score.Ties}`;
    }

    function computerMoves () {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >=1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }