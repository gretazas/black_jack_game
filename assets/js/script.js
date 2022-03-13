let you = {
    'score' : 0,
}

let dealer = {
    'score' : 0,
}

/**Show random card 
 * by pressing button 'hit'*/

function showCard() {
    let number = Math.floor(Math.random()* 13) + 1;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('you-main').appendChild(image);
    cardValue(number); 
}

//Cards over 10 value = 10

function cardValue(randomNumber) {

        if(randomNumber > 10) {
            randomNumber = 10;
           showScore(randomNumber);
        } else {
            showScore(randomNumber);
        }
}

//Show players score

function showScore(num) { 

    //console.log(num);

        if(num === 1) {

            let score = you.score + num;

                if(score >= 21) {

                                           
                    document.getElementById('you-score').textContent = 'BUST!';
                    document.getElementById('you-score').style.color = 'red';
                    document.getElementById('message').textContent = "YOU LOST!!!";

                } else if (score + 10 < 21) {

                    score += 10
                    you.score += score ;   console.log(score, '+10');  
                    document.getElementById('you-score').textContent = score; 
            
                } else {

                    score - 10;            console.log(score, '-10');
                    you.score += score; 
                    document.getElementById('you-score').textContent = score;
                }            
               
 

        } else {
                let score = you.score + parseInt( `${num}`) ; console.log(score) ;
                if(score >= 21) {

                                              console.log(score,'>=21');

                    //console.log(num); console.log(score);
                    document.getElementById('you-score').textContent = 'BUST!';
                    document.getElementById('you-score').style.color = 'red';
                    document.getElementById('message').textContent = "YOU LOST!!!"; 

                } else {

                you.score += score;    
                document.getElementById('you-score').textContent = score;                            
                                
                
                
                }
        }
}

/**Button 'Stand' changes active players from 'you' to 'dealer'*/

function buttonStand (score) {
    
    document.getElementById('stand').disabled = true;
    
    if (score > 17) {

        winnerLoser();

    } else {

    let number = Math.floor(Math.random()* 13) +1         ;
    let image = document.createElement('img');
    image.src = 'assets/images/' + `${number}` + '.png';
    document.getElementById('dealer-main').appendChild(image);
    

    dealerCardValue(number);
    
    }
}

//Cards over 10 value = 10
function dealerCardValue(randomNumber) {
  
    if(randomNumber > 10) {
        randomNumber = 10;
        dealercards(randomNumber);
    } else {
        dealercards(randomNumber);
    }
    
}
//Show dealers score                

function dealercards(num) {


    if(num === 1) {

        let score = dealer.score + num; 

                if(score >= 21) {
console.log(' ACEdealerscore >= 21');
                    document.getElementById('dealer-score').textContent = 'BUST!';
                    document.getElementById('dealer-score').style.color = 'red';
                    document.getElementById('message').textContent = "YOU WON!!!";

                } else if (score + 10 < 21) {
console.log('ACEdealerscore += 10');
                    score += 10
                    dealer.score = score ;   
                    document.getElementById('dealer-score').textContent = score; 

                    buttonStand (score);
            
                } else {
console.log('ACEdealerscore - 10;');
                          
                    dealer.score += score; 
                    document.getElementById('dealer-score').textContent = score;

                    buttonStand (score);
                            
                }


    } else {
        
        let score = dealer.score + parseInt( `${num}`); console.log(dealer.score, 'dealer.score');console.log(num,'num');console.log(score,'score');
                if(score >= 21) {

console.log('dealerscore >= 21')                   
                    document.getElementById('dealer-score').textContent = 'BUST!';
                    document.getElementById('dealer-score').style.color = 'red';
                    document.getElementById('message').textContent = "YOU WON!!!";

                    buttonStand (score);

                } else {
console.log('dealerscore')
                    dealer.score = score;     
                    document.getElementById('dealer-score').textContent = score;                            
                                    
                    buttonStand (score);
                
                }     
    }
    
}

//Decide who is the Winner

function winnerLoser() {
    console.log('what?')
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

    document.getElementById('you-score').style.color = 'black';
    document.getElementById('dealer-score').style.color = 'black';    
}



document.getElementById('stand').addEventListener('click', buttonStand);
document.getElementById('deal').addEventListener('click', buttonDeal);
document.getElementById('hit').addEventListener('click', showCard); 