import { createCard } from './createCard.js';
import { firstTurn } from './firstTurn.js';
import { nextTurn } from './nextTurn.js';
import { randomCard } from './randomCard.js';
import { summary } from './summary.js';


    const cardArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
    deckCards = [],
    summaryCardLeft = [],
    summaryCardRight = [],
    summaryPointsLeft = [],
    summaryPointsRight = [],
    leftUserTurn = document.getElementById( 'left-user-turn' ),
    rightUserTurn = document.getElementById( 'right-user-turn' ),
    buttons = document.querySelectorAll( 'button' ),
    turnUser = document.getElementById( 'turn-user' ),
    historyLeft = document.getElementById( 'history-left' ),
    historyRight = document.getElementById( 'history-right' ),
    summaryLeft = document.getElementById( 'summary-left' ),
    summaryRight = document.getElementById( 'summary-right' ),
    cardLeft = document.querySelector( '.card-left' ),
    cardRight = document.querySelector( '.card-right' ),
    playerWin = document.getElementById( 'player-win' ),
    overSection = document.getElementById( 'over' ),
    tryAgain = document.querySelector( '.try-again' );

    firstTurn( buttons );

    function onClickLeftCardHandler ( event ) {
        event.preventDefault();

        nextTurn( this, rightUserTurn, 2 );

        cardLeft.hasChildNodes() ? null : createCard(cardLeft, 'left-choosen-card');

        const leftChoosenCard = document.getElementById( 'left-choosen-card' );

        const card = randomCard( deckCards, leftChoosenCard, summaryCardLeft, historyLeft );

        summary( summaryPointsLeft, card, summaryLeft, 1);

    }


    function onClickRightCardHandler ( event ) {
        event.preventDefault();

        nextTurn( this, leftUserTurn, 1 );

        cardRight.hasChildNodes() ? null : createCard(cardRight, 'right-choosen-card');

        const rightChoosenCard = document.getElementById( 'right-choosen-card' );

        const card = randomCard( deckCards, rightChoosenCard, summaryCardRight, historyRight );

        summary( summaryPointsRight, card, summaryRight, 2 );
    }

    function onClickTryAgainHandler (event) {
        event.preventDefault();
        location.reload();
    }

(function() {
    leftUserTurn.addEventListener( 'click', onClickLeftCardHandler );
    rightUserTurn.addEventListener( 'click', onClickRightCardHandler );
    tryAgain.addEventListener( 'click', onClickTryAgainHandler );
})();




export { randomDeck, cardArray, playerWin, overSection, deckCards, turnUser };
