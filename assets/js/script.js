let you = {
    'score': 0,
}

let dealer = {
    'score': 0,
}

//Style: change button position @media screen max-with 650px

function myFunction(x) {
    if (x.matches) {
    document.body.appendChild(document.getElementById('buttons'));
    document.getElementById('deal-button').remove('button');
    document.getElementById('buttons').innerHTML += `<button id="deal" type="button" class="btn btn-danger btn-lg">Deal</button>`;
    document.getElementById('win-tables').style.bottom= "-20px;"
    } 
  }
  
  var x = window.matchMedia("(max-width: 650px)")
  myFunction(x) 
  x.addEventListener('click', myFunction);

/**Show random card 
 * by pressing button 'hit'*/

function showCard() {
    const click = new Audio('assets/sounds/click.mp3');
    click.play();
    let number = Math.floor(Math.random() * 13) + 1;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('you-main').appendChild(image);

    cardValue(number);
}

//Cards over 10 value = 10

function cardValue(randomNumber) {

    if (randomNumber > 10) {
        randomNumber = 10;
        showScore(randomNumber);
    } else {
        showScore(randomNumber);
    }
}

//Show players score

function showScore(num) {

    if (num === 1) {

        decideScoreWithAce1(num);

    } else {
        decideScore1(num);
    }
}

//Decide players score and message along with it

function decideScoreWithAce1(num) {
    
    let score = you.score + num;

    if (score >= 21) {


        document.getElementById('you-score').textContent = 'BUST!';
        document.getElementById('you-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU LOST!!!";
        losses();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else if (score + 10 < 21) {

        score += 10;
        you.score = score;
        document.getElementById('you-score').textContent = score;
        console.log(score, '+10');
    } else {

        score - 10;
        you.score = score;
        document.getElementById('you-score').textContent = score;
        console.log(score, '-10');
    }

}

function decideScore1(num) {

    let score = you.score + parseInt(`${num}`);
        console.log(score);
        if (score >= 21) {

            console.log(score, '>=21');
            document.getElementById('you-score').textContent = 'BUST!';
            document.getElementById('you-score').style.color = 'red';
            document.getElementById('message').textContent = "YOU LOST!!!";
            losses();
            document.getElementById('hit').disabled = true;
            document.getElementById('stand').disabled = true;

        } else {

            you.score = score;
            document.getElementById('you-score').textContent = score;
            console.log(score, 'score')


        }
}

/**Button 'Stand' changes active players from 'you' to 'dealer'*/

function buttonStand(score) {



    if (score > 17) {

        winnerLoser();

    } else {

        let number = Math.floor(Math.random() * 13) + 1;
        let image = document.createElement('img');
        image.src = 'assets/images/' + `${number}` + '.png';
        document.getElementById('dealer-main').appendChild(image);


        dealerCardValue(number);

    }
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
}

//Cards over 10 value = 10

function dealerCardValue(randomNumber) {

    if (randomNumber > 10) {
        randomNumber = 10;
        dealercards(randomNumber);
    } else {
        dealercards(randomNumber);
    }

}

//Show dealers score                

function dealercards(num) {


    if (num === 1) {

        decideScoreWithAce(num);

    } else {

        decideScore(num);
        
    }

}

//Decide dealers score and message along with it

function decideScoreWithAce(num) {

    let score = dealer.score + num;  

if (score >= 21) {
    console.log(' ACEdealerscore >= 21');
    document.getElementById('dealer-score').textContent = 'BUST!';
    document.getElementById('dealer-score').style.color = 'red';
    document.getElementById('message').textContent = "YOU WON!!!";
    wins();
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;

} else if (score + 10 < 21) {
    console.log('ACEdealerscore += 10');
    score += 10
    dealer.score = score;
    document.getElementById('dealer-score').textContent = score;

    buttonStand(score);

} else {
    console.log('ACEdealerscore - 10;');

    dealer.score += score;
    document.getElementById('dealer-score').textContent = score;

    buttonStand(score);

  }
}

function decideScore(num) {

    let score = dealer.score + parseInt(`${num}`);
    console.log(dealer.score, 'dealer.score');
    console.log(num, 'num');
    console.log(score, 'score');

        if (score >= 21) {

            console.log('dealerscore >= 21')
            document.getElementById('dealer-score').textContent = 'BUST!';
            document.getElementById('dealer-score').style.color = 'red';
            document.getElementById('message').textContent = "YOU WON!!!";
            wins();
            document.getElementById('hit').disabled = true;
            document.getElementById('stand').disabled = true;
        } else {
            console.log('dealerscore')
            dealer.score = score;
            document.getElementById('dealer-score').textContent = score;

            buttonStand(score);

        }
}


//Decide who is the Winner

function winnerLoser() {
    console.log('what?')
    if (dealer.score >= 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
        wins();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score > dealer.score) {
        document.getElementById('message').textContent = "YOU WON!!!";
        console.log(you.score, "you", dealer.score, "dealer");
        wins();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score < dealer.score) {
        document.getElementById('message').textContent = "YOU LOST!!!";
        console.log(you.score, dealer.score);
        losses();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else {
        document.getElementById('message').textContent = "IT`S A DRAW!";
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    }

}

// Count wins and losses 

function wins() {
    console.log('WIN');
    const harp = new Audio('assets/sounds/harp .wav');
    harp.play();
    let oldScore = parseInt(document.getElementById('win-score').textContent);
    document.getElementById('win-score').textContent = ++oldScore;
}

function losses() {
    console.log('LOSS');

    const glassBreaking = new Audio('assets/sounds/glassbreaking.wav');
    glassBreaking.play();
    let oldScore = parseInt(document.getElementById('loss-score').textContent);
    document.getElementById('loss-score').textContent = ++oldScore;
}

/**Start over */

function buttonDeal() {




    document.getElementById('you-score').style.color = 'black';
    document.getElementById('dealer-score').style.color = 'black';
    const gongSound = new Audio('assets/sounds/gong.wav');
    gongSound.play();


    document.getElementById('stand').disabled = false;
    document.getElementById('hit').disabled = false;

    you.score = 0;
    let score = you.score;
    document.getElementById('you-score').textContent = score;

    dealer.score = 0;
    let score1 = dealer.score;
    document.getElementById('dealer-score').textContent = score1;

    document.getElementById('message').textContent = "GOOD LUCK!!!";

    const cardContainers = ['#you-main', '#dealer-main'];
    cardContainers.forEach(container => {
        document.querySelector(container).innerHTML = '';
    });


}

document.getElementById('stand').addEventListener('click', buttonStand);
document.getElementById('deal').addEventListener('click', buttonDeal);
document.getElementById('hit').addEventListener('click', showCard);


