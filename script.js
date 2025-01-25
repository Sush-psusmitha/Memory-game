const cardArray = [
    {
        name:'insta',
        icon:'<ion-icon name="logo-instagram"></ion-icon>'
    }, 
    {
        name:'whatsApp',
        icon:'<ion-icon name="logo-whatsapp"></ion-icon>'
    }, 
    {
        name:'twitter',
        icon:'<ion-icon name="logo-twitter"></ion-icon>'
    },
    {
        name:'snapchat',
        icon:'<ion-icon name="logo-snapchat"></ion-icon>'
    },
    {
        name:'tiktok',
        icon:'<ion-icon name="logo-tiktok"></ion-icon>'
    },
    {
        name:'youtube',
        icon:'<ion-icon name="logo-youtube"></ion-icon>'
    },
    {
        name:'insta',
        icon:'<ion-icon name="logo-instagram"></ion-icon>'
    }, 
    {
        name:'whatsApp',
        icon:'<ion-icon name="logo-whatsapp"></ion-icon>'
    }, 
    {
        name:'twitter',
        icon:'<ion-icon name="logo-twitter"></ion-icon>'
    },
    {
        name:'snapchat',
        icon:'<ion-icon name="logo-snapchat"></ion-icon>'
    },
    {
        name:'tiktok',
        icon:'<ion-icon name="logo-tiktok"></ion-icon>'
    },
    {
        name:'youtube',
        icon:'<ion-icon name="logo-youtube"></ion-icon>'
    }
];






let flipedCards = [];  // console.log(flipedCards)
let matchedPairs = 0;
 shuffleCards(); 
 const gameBoard = document.getElementById('gameBoard');
// console.log(cardArray)   this will show the random replacement;
displayCards();

function shuffleCards(){
  for(i=cardArray.length-1; i>=0; i--){
    const randIndex = Math.floor(Math.random()*(i+1)); 
    [cardArray[i],cardArray[randIndex]] = [cardArray[randIndex],cardArray[i]]
  }
}

function displayCards(){
    cardArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div'); 
        card.setAttribute('id', index);
        card.classList.add('cardback');
        card.classList.add('active')
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}
function flipCard(){

    if(flipedCards.length < 2 && this.classList.contains('active')) {
    let cardId = this.getAttribute('id');  //this => refers clicked card, and we get that id 
    // console.log(this) will have all the info about the card
    flipedCards.push(this);
    this.classList.remove('cardback')
    this.innerHTML = cardArray[cardId].icon;

    if(flipedCards.length == 2){
        setTimeout(checkMatch,1000);
    }
 }

}

  function checkMatch(){
      const card1Id = flipedCards[0].getAttribute('id');
      const card2Id = flipedCards[1].getAttribute('id');

      if(cardArray[card1Id].name === cardArray[card2Id].name ){
           flipedCards[0].style.border = 'none';
           flipedCards[0].style.background= '#cd841f' ;
           flipedCards[0].innerHTML = '';
           flipedCards[0].classList.remove('active')
           flipedCards[1].classList.remove('active')
           flipedCards[1].style.border = 'none';
           flipedCards[1].style. background= '#cd841f' ;
           flipedCards[1].innerHTML = '';
           matchedPairs++;
           checkGameOver();
      }

      else{
        flipedCards[0].innerHTML = '';
        flipedCards[0].classList.add('cardback');

        flipedCards[1].innerHTML = '';
        flipedCards[1].classList.add('cardback');
      }

      flipedCards = [];
    }

    function checkGameOver(){
        if(matchedPairs == cardArray.length/2){
            while(gameBoard.firstChild){
                gameBoard.removeChild(gameBoard.firstChild)
            }
            gameBoard.innerHTML = 'You Won!!!'; 
            gameBoard.classList.remove('game'); 
            gameBoard.classList.add('won');
        }
        
    }
