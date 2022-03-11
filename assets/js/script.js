let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let AceValue = {'0':[1, 11,]};
let JQKValue = {'11': 10, '12': 10, '13':10};

let you = {
    'score' : 0,
}

let dealer = {
    'score' : 0,
}

/**Show random card 
 * by pressing button 'hit'*/

function showCard() {
    number = Math.floor(Math.random()* 13) + 1;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('you-main').appendChild(image);
    cardValue();
}

//Cards over 10 value = 10
function cardValue() {
  
        if(this.number > 10) {
            number = 10;
        }

    showScore();
}
//Show players score

function showScore() {
    you.score += this.number;
    let score = you.score;
    document.getElementById('you-score').textContent = score;
    winnerLoser()
}

/**Button 'Stand' changes active players from 'you' to 'dealer'*/
function buttonStand () {
    number = Math.floor(Math.random()* 13);
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('dealer-main').appendChild(image);
    document.getElementById('stand').disabled = true;
    
    dealerCardValue();
}

//Cards over 10 value = 10
function dealerCardValue() {
  
    if(this.number > 10) {
        number = 10;
    }

    dealercards() 
}
//Show dealers score

function dealercards() {
    

    dealer.score += this.number;
    let score = dealer.score;
        if(17 > score ) {
        buttonStand ()
    }else {
        document.getElementById('dealer-score').textContent = score;
    }
    
    winnerLoser();
}

//Decide who is the Winner

function winnerLoser() {

if(document.getElementById('stand').disabled){

    if(you.score >= 21) {
        document.getElementById('you-score').textContent = 'BUST!';
        document.getElementById('you-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU LOST!!!";
    } else if (dealer.score >= 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
    } else if (you.score > dealer.score) {
        document.getElementById('message').textContent = "YOU WON!!!";
    } else if (you.score < dealer.score) {
        document.getElementById('message').textContent = "YOU LOST!!!";
    } else {
        document.getElementById('message').textContent = "IT`S A DRAW!";
    };
  };
}
 /**Start over */

function buttonDeal() {

    document.getElementById('stand').disabled = false;

    you.score = 0;
    let score = you.score;
    document.getElementById('you-score').textContent = score;

    dealer.score = 0;
    let score1 = dealer.score;
    document.getElementById('dealer-score').textContent = score1;

    document.getElementById('message').textContent = "GOOD LUCK!!!";

    let images = document.getElementById('main').querySelectorAll('img');
        for(let i=0; i<= images.length; i++) {
            images[i].remove();
        }

    
}



document.getElementById('hit').addEventListener('click', showCard);
document.getElementById('stand').addEventListener('click', buttonStand);
document.getElementById('deal').addEventListener('click', buttonDeal);