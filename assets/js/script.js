// Change @media screens max-width 1560px

function handleTabletChange(mediaQuery) {

     if (mediaQuery.matches) {
         document.getElementById('bot').remove();
         document.getElementById('buttons').remove();
         document.getElementById('deal').remove();
         document.getElementById('deal-button').innerHTML += `
         <button aria-label="Hit" id="hit" type="button" class="btn btn-success btn-lg" style="background-color:rgb(33, 142, 76)">Hit</button>
         <button aria-label="Stand" id="stand" type="button" class="btn btn-warning btn-lg">Stand</button>
         <button aria-label="Deal" id="deal" type="button" class="btn btn-danger btn-lg">Deal</button>
         `;
     }
 }

let  mediaQuery = window.matchMedia('(max-width: 1560px)');
 handleTabletChange(mediaQuery);
 mediaQuery.addEventListener("change", () => {
     this.handleTabletChange();
});

// Google piechart 

document.getElementById('piechart').style.height = "75px";
document.getElementById('piechart').style.width = "450px";
document.getElementById('piechart').style.margin = "30px";

//A variable from script.js, from index.html input

let person = sessionStorage.getItem('name');

let you = {
    'score': 0,
    'div': '#you-main',
}

let dealer = {
    'score': 0,
    'div': '#dealer-main',
}
//Event listeners for buttons

document.getElementById('hit').addEventListener('click', buttonHit);
document.getElementById('stand').addEventListener('click', buttonStand);
document.getElementById('deal').addEventListener('click', buttonDeal);

// by pressing button 'hit'
function buttonHit() {
    showCard(you);
}

//Show random card 

function showCard(activePlayer) {
    const click = new Audio('assets/sounds/click.mp3');
    click.play();
    let number = Math.floor(Math.random() * 13) + 1;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.querySelector(activePlayer['div']).appendChild(image);

    cardValue(number, activePlayer);

}

//Cards over 10.png value = 10

function cardValue(randomNumber, player) {

    if (you === player) {
        if (randomNumber > 10) {
            randomNumber = 10;
            showScore(randomNumber);
        } else {
            showScore(randomNumber);
        }
    } else {
        if (randomNumber > 10) {
            randomNumber = 10;
            dealercards(randomNumber);
        } else {
            dealercards(randomNumber);
        }
    }
}

//Decide players score

function showScore(numScore, you) {

    if (numScore === 1) {
        decideScoreWithAce1(numScore);
    } else {
        decideScore1(numScore);
    }
}



//Decide players score and message along with it

function decideScoreWithAce1(num) {

    let score = you.score + num;

    if (score > 21) {


        document.getElementById('you-score').textContent = 'BUST!';
        document.getElementById('you-score').style.color = 'red';
        document.getElementById('message').textContent = `YOU LOST, ${person}!!!`;
        console.log('107');
        lossesNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else if (score + 10 <= 21) {

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

//Display score or winning/lossing status
function decideScore1(num) {

    let score = you.score + parseInt(`${num}`);

    if (score > 21) {
        document.getElementById('you-score').textContent = 'BUST!';
        document.getElementById('you-score').style.color = 'red';
        document.getElementById('message').textContent = `YOU LOST, ${person}!!!`;
        console.log('136');
        lossesNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else {

        you.score = score;
        document.getElementById('you-score').textContent = score;


    }
}

//Button 'Stand' changes active players from 'you' to 'dealer'

function buttonStand(score) {

    if (score > 17) {
        winnerLoser();
    } else {
        showCard(dealer);
    }
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
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

    if (score > 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = `YOU WON, ${person}!!!"`;
        console.log('184')
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;

    } else if (score + 10 <= 21) {
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
    console.log('mistake');

    if (score > 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = `YOU WON, ${person}!!!`;
        console.log('213');
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
    if (dealer.score > 21) {
        document.getElementById('dealer-score').textContent = 'BUST!';
        document.getElementById('dealer-score').style.color = 'red';
        document.getElementById('message').textContent = `YOU WON, ${person}!!!`;
        console.log('232');
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score > dealer.score) {
        document.getElementById('message').textContent = `YOU WON, ${person}!!!`;
        console.log('237');
        winsNum();
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    } else if (you.score < dealer.score) {
        document.getElementById('message').textContent = `YOU LOST, ${person}!!!`;
        console.log('242');
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
let oldScore;


function winsNum() {
    console.log('WIN');
    const harp = new Audio('assets/sounds/harp .wav');
    harp.play();
    oldScore = parseInt(document.getElementById('win-score').textContent);
    wins += 1;
    document.getElementById('win-score').textContent = wins;
    drawChart();
}

function lossesNum() {
    console.log('LOSS');
    const glassBreaking = new Audio('assets/sounds/glassbreaking.wav');
    glassBreaking.play();
    oldScore = parseInt(document.getElementById('loss-score').textContent);
    losses += 1;
    document.getElementById('loss-score').textContent = losses;
    drawChart();
}

function drawsNum() {
    console.log('DRAW');
    oldScore = parseInt(document.getElementById('draw-score').textContent);
    draws += 1;
    document.getElementById('draw-score').textContent = draws;
    drawChart();
}

//Start over 

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

    document.getElementById('message').textContent = `GOOD LUCK, ${person}!!!`;

    const cardContainers = ['#you-main', '#dealer-main'];
    cardContainers.forEach(container => {
        document.querySelector(container).innerHTML = '';
    });
}

// Google chart 

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

        'height': 100,
        'width': 500,
        'backgroundColor': 'rgb(50, 168, 82)',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


