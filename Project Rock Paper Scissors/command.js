function computerPlay() {
    let play = Math.floor(Math.random()*3);
    if (play === 0) return 'rock';
    if (play === 1) return 'paper';
    return 'scissors'; }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'You drew';

    if(playerSelection === 'rock') {
        if (computerSelection === 'paper') return 'You Lose';
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return 'You Lose';
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') return 'You Lose';
    }
    return 'You Win'
}

function game() {
    alert('This is a game of rock paper scissors. There are 5 rounds.');
    let scr = 0;
    for (let i = 0; i < 5; i ++) {
        let ans = confirm('Do you wish to continue?');
        if (! ans) break;
        let playerSelection = String(prompt('Input rock paper or scissors')).toLowerCase();
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        console.log(outcome);
        let key = outcome.split(' ')[1];
        let res = key === 'Lose'? `You Lose, ${computerSelection} beats ${playerSelection}`: key === 'drew'? outcome:`You won, ${playerSelection} beats ${computerSelection}`;
        alert(res);
        if (key === 'Win') scr++;
    }
    alert(`Your overall score is ${scr}`);


}
game();
