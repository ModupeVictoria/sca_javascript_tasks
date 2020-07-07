const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player:0,
    computer:0
}

// Play game

function play(e){
    //console.log(e.target.id);
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice()   
    const winner = getWinner(playerChoice,computerChoice);
     showWinner(winner,computerChoice)
    console.log(playerChoice,computerChoice,winner);
}

// Get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock'
    } else
    if(rand <= 0.67){
        return 'paper'
    } else{
        return 'scissors'
    }
}

// Get Game winner
function getWinner(p,c){
    if(p === c){
        return 'draw';
    }else 
    if(p === 'rock'){
        if(c === 'paper'){
            return 'computer'
        }else{
            return 'player';
        }
    }else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        }else{
            return 'player'
        }
    }else if (p === 'scissors'){
        if(c === 'rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}

// show winner
function showWinner(winner,computerChoice){
    if(winner === 'player'){
        // increment player score
        scoreboard.player++;
        // show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i  class=" fa fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
    }else 
    if(winner === 'computer'){
        // increment computer score
        scoreboard.computer++;
        // show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i  class=" fa fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
    }else{
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i  class=" fa fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
    }
    // show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player} </p>
    <p>Computer: ${scoreboard.computer} </p>
    `;

    //show modal
    modal.style.display = 'block';
}

// Restart Game
function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

// Clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display ='none'
    }
}
// Event Listeners

choices.forEach(function(choice){
    choice.addEventListener('click',play)
});
window.addEventListener('click',clearModal);
restart.addEventListener('click', restartGame);

