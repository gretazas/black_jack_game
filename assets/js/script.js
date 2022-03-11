let you = {
    'score' : 0,
}

let dealer = {
    'score' : 0,
}

/**Show random card 
 * by pressing button 'hit'*/

function showCard() {
    let number = 1;//Math.floor(Math.random()* 13) + 1;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('you-main').appendChild(image);
    let randomNumber = cardValue(number);
}

//Cards over 10 value = 10
function cardValue(randomNumber) {

        if(randomNumber > 10) {
            randomNumber = 10;
            let num = showScore(randomNumber);
        } else {
            let num = showScore(randomNumber);
        }
}
//Show players score

function showScore(num) {
    
    //if(num === 1) {
    you.score += num;
    let score = you.score;

    score += 10;
    
    document.getElementById('you-score').textContent = score;
    
    console.log(score)

        /*    if(score >= 21) {
                score += 0;
                document.getElementById('you-score').textContent = score;
            } else {
                score -= 10;
                document.getElementById('you-score').textContent = score;
            }


    } else {
            if(you.score >= 21) {
                document.getElementById('you-score').textContent = 'BUST!';
                document.getElementById('you-score').style.color = 'red';
                document.getElementById('message').textContent = "YOU LOST!!!";
            } else {
                document.getElementById('you-score').textContent = score;
            }
       }*/
}

/**Button 'Stand' changes active players from 'you' to 'dealer'*/
function buttonStand () {
    let number = Math.floor(Math.random()* 13) +1         ;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('dealer-main').appendChild(image);
    document.getElementById('stand').disabled = true;
    
    let randomNumber = dealerCardValue(number);
    winnerLoser();
}

//Cards over 10 value = 10
function dealerCardValue(randomNumber) {
  
    if(randomNumber > 10) {
        randomNumber = 10;
    }

    let num = dealercards(randomNumber);
}
//Show dealers score

function dealercards(num) {
    

    dealer.score += num;
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

    if (dealer.score >= 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
    } else if (you.score > dealer.score) {
        document.getElementById('message').textContent = "YOU WON!!!";
    } else if (you.score < dealer.score) {
        document.getElementById('message').textContent = "YOU LOST!!!";
    } else {
        document.getElementById('message').textContent = "IT`S A DRAW!";
    }
 
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