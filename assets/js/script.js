let you = {
    'score': 0,
}

let dealer = {
    'score': 0,
}
/* Change @media screens max-width 950px*/

const mediaQuery = window.matchMedia('(max-width: 950px)');

function handleTabletChange(e) {
    if (e.matches) {
        document.getElementById('buttons').remove();
        document.getElementById('deal').remove();
        document.getElementById('deal-button').innerHTML += `
        <button aria-label="Hit" id="hit" type="button" class="btn btn-success btn-lg" style="background-color:rgb(33, 142, 76)">Hit</button>
        <button aria-label="Stand" id="stand" type="button" class="btn btn-warning btn-lg">Stand</button>
        <button aria-label="Deal" id="deal" type="button" class="btn btn-danger btn-lg">Deal</button>
        `;
        
  }
}

mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)
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
        lossesNum();
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

    if (score >= 21) {
        document.getElementById('you-score').textContent = 'BUST!';
        document.getElementById('you-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU LOST!!!";
        lossesNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else {

        you.score = score;
        document.getElementById('you-score').textContent = score;


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
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else if (score + 10 < 21) {
        score += 10
        dealer.score = score;
        document.getElementById('dealer-score').textContent = score;

        buttonStand(score);

    } else {
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
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else {
        dealer.score = score;
        document.getElementById('dealer-score').textContent = score;

        buttonStand(score);

    }
}


//Decide who is the Winner

function winnerLoser() {
    if (dealer.score >= 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = "YOU WON!!!";
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score > dealer.score) {
        document.getElementById('message').textContent = "YOU WON!!!";
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score < dealer.score) {
        document.getElementById('message').textContent = "YOU LOST!!!";
        lossesNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else {
        document.getElementById('message').textContent = "IT`S A DRAW!";
        drawsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    }

}

// Count wins, losses and draws
let wins = 0;
let losses = 0;
let draws = 0;
let numOfWins = wins;
let numOfLosses = losses;
let numOfDraws = draws;


function winsNum() {
    console.log('WIN');
    const harp = new Audio('assets/sounds/harp .wav');
    harp.play();
    let oldScore = parseInt(document.getElementById('win-score').textContent);
    wins += 1;
    document.getElementById('win-score').textContent = wins;
    drawChart();
}

function lossesNum() {
    console.log('LOSS');
    const glassBreaking = new Audio('assets/sounds/glassbreaking.wav');
    glassBreaking.play();
    let oldScore = parseInt(document.getElementById('loss-score').textContent);
    losses += 1;
    document.getElementById('loss-score').textContent = losses;
    drawChart();
}

function drawsNum() {
    console.log('DRAW');
    let oldScore = parseInt(document.getElementById('draw-score').textContent);
    draws += 1;
    document.getElementById('draw-score').textContent = draws;
    drawChart();
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

/* Google chart */ 

google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Status', 'Amount'],
        ['Wins', wins],
        ['Losses', losses],
        ['Draws', draws]
    ]);

    var options = {
        'legend': {
            position: 'bottom'
        },
        'chartArea': {
            left: 130,
            top: 0,
            width: "50%",
            height: "50%"
        },
        'height': 100,
        'width': 500,
        'backgroundColor': 'rgb(50, 168, 82)',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

