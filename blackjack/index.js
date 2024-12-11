let player = {
    name : "vishal",
    chips: 200,
};

let getRandomCard = () => {
    let randomNum = Math.floor(Math.random() * 13) + 1;

    if(randomNum > 10){
        return 10;
    }
    else if(randomNum === 1) {
        return 11;
    }
    else{
        return randomNum;
    }
};


let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;

let isAlive = false;
let hasBlackJack = false;
let msg = "";

let sumEle = document.getElementById("sum"); 

let msgEle = document.getElementById("el-msg");

let cardsEle = document.getElementById("card");

let playerEle = document.getElementById("player-el");

playerEle.textContent = player.name+ ": $" + player.chips;

let startGame = () => {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();

}

let renderGame = () => {
    cardsEle.textContent = "Cards : " 
    for(let i=0; i<cards.length; i++) {
        cardsEle.textContent += cards[i] + " ";
    }
    sumEle.textContent = "sum : " + sum;
    if(sum <= 20){
        msg = "Do you want to draw a new card?";
        
    }
    else if(sum === 21){
        msg="Wohoo! you've got blackjack!";
        hasBlackJack = true;
    }
    else{
        msg="you're out of the game! ";
        isAlive = false;
    }
    msgEle.textContent = msg;
}


let newCard = () => {
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}