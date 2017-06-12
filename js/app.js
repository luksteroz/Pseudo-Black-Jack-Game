import { createCard } from './createCard.js';
import { firstTurn } from './firstTurn.js';
import { nextTurn } from './nextTurn.js';
import { randomCard } from './randomCard.js';
import { summary } from './summary.js';


    // zmienne i stale
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
    overSection = document.getElementById( 'over' );

    firstTurn( buttons );

    function onClickLeftCardHandler ( event ) {
        event.preventDefault();
        //wyłączenie przycisku kliknietego i wlaczenie drugiego
        /** @type {Boolean} [description] */
        nextTurn( this, rightUserTurn, 2 );
        //dodanie karty na stół
        //złapanie elementu karty
        cardLeft.hasChildNodes() ? console.log("później") : createCard(cardLeft, 'left-choosen-card');

        const leftChoosenCard = document.getElementById( 'left-choosen-card' );
        //wylosowanie numeru przez funkcję losującą
        let card = randomCard( deckCards, leftChoosenCard, summaryCardLeft, historyLeft );

        //wpisanie rezultatu
        summary( summaryPointsLeft, card, summaryLeft, 1);
        //dodanie karty do historii
        //tura nastepnego gracza
    }


    function onClickRightCardHandler ( event ) {
        event.preventDefault();
        nextTurn( this, leftUserTurn, 1 );
        cardRight.hasChildNodes() ? console.log("później") : createCard(cardRight, 'right-choosen-card');

        const rightChoosenCard = document.getElementById( 'right-choosen-card' );

        let card = randomCard( deckCards, rightChoosenCard, summaryCardRight, historyRight );

        summary( summaryPointsRight, card, summaryRight, 2 );
    }





    (function() {
        leftUserTurn.addEventListener( 'click', onClickLeftCardHandler );
        rightUserTurn.addEventListener( 'click', onClickRightCardHandler );
    })();


export { randomDeck, cardArray, playerWin, overSection, deckCards, turnUser };
