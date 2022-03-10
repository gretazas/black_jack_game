let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let AceValue = {'0':[1, 11,]};
let JQKValue = {'11': 10, '12': 10, '13':10};

let you = {
    'score' : 0,
}

let dealer = {
    'score' : 0,
}

//Show random card

function showCard() {
    number = Math.floor(Math.random()* 13);
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('you-main').appendChild(image);
    showScore();
}

//Show players score

function showScore() {
    you.score += this.number;
    let score = you.score;
    document.getElementById('you-score').textContent = score;
}


function buttonStand () {
    number = Math.floor(Math.random()* 13);
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('dealer-main').appendChild(image);
    dealercards();
}

function dealercards() {
    dealer.score += this.number;
    let score = dealer.score;
        if(17 > score ) {
        buttonStand ()
    }else {
        document.getElementById('dealer-score').textContent = score;
    }

}

document.getElementById('hit').addEventListener('click', showCard);
document.getElementById('stand').addEventListener('click', buttonStand);