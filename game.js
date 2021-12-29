function round(playerSelection, computerPlay) {
    playerSelections = capitalize(playerSelection);
    if (playerSelections==computerPlay) {
        return('Draw');
    }
    else if ((playerSelections=='Rock')&&(computerPlay=='Scissors')) {
        return('You win! Rock beats Scissors');
    }
    else if ((playerSelections=='Rock')&&(computerPlay=='Paper')) {
        return('You loose! Paper beats Rock');
    }
    else if ((playerSelections=='Paper')&&(computerPlay=='Scissors')) {
        return('You loose! Scissors beats Paper');
    }
    else if ((playerSelections=='Paper')&&(computerPlay=='Rock')) {
        return('You win! Paper beats Rock');
    }
    else if ((playerSelections=='Scissors')&&(computerPlay=='Paper')) {
        return('You win! Scissors beats Paper');
    }
    else if ((playerSelections=='Scissors')&&(computerPlay=='Rock')) {
        return('You loose! Rock beats Scissors');
    }
    else {
        return('BOOBIES');
    }
}

function capitalize(str) {
    let playa = str.toLowerCase()
    let player = playa.charAt(0).toUpperCase() + playa.slice(1)
    return(player)
}

function computerPlay() {
    int = Math.random();
    if (int<=.33) {
        return 'Rock';
    }
    else if ((int<.66)&(int>.33)) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

/*Can't figure out how to show, for example, 'Rock beats Scissors' as a result*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let points = 0; points<5;points++) {
        if (round('Rock', computerPlay())==(('You loose! Paper beats Rock')||('You loose! Scissors beats Paper')||('You loose! Rock beats Scissors'))) {
            computerScore++;
            console.log('Computer Wins!');
        }  
        else if (round('Rock', computerPlay())==(('You win! Rock beats Scissors')||('You win! Paper beats Rock')||('You win! Scissors beats Paper'))) {
            playerScore++;
            console.log('Player Wins!');
        }
        else {
            points--;
        }
    }
    if (computerScore>playerScore) {
        console.log('Computer Wins the Game!')
    }
    else {
        console.log('Player Wins the Game!')
    }
}

const playerSelection = prompt();

game()