import { createCard } from './createCard.js';
import { firstTurn } from './firstTurn.js';
import { nextTurn } from './nextTurn.js';
import { randomCard } from './randomCard.js';
import { summary } from './summary.js';

/**
 * [cardArray z tej tablicy są losowane karty do całej talii]
 * @type {Array}
 */
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
/**
 * wywołanie funkcji rozpoczynającej grę
 */
firstTurn( buttons );

/**
 * [funkcja odpowiada za event wykonany na przycisku zawodnika 1]
 * @param  {event} [click]
 */
const onClickLeftCardHandler = ( event ) => {
    event.preventDefault();

    nextTurn( event.currentTarget, rightUserTurn, 2 );

    cardLeft.hasChildNodes() ? null : createCard(cardLeft, 'left-choosen-card');

    const leftChoosenCard = document.getElementById( 'left-choosen-card' );

    const card = randomCard( deckCards, leftChoosenCard, summaryCardLeft, historyLeft );

    summary( summaryPointsLeft, card, summaryLeft, 1);
}
/**
 * [funkcja odpowiada za event wykonany na przycisku zawodnika 2]
 * @param  {event} [click]
 */
const onClickRightCardHandler = ( event ) => {
    event.preventDefault();

    nextTurn( event.currentTarget, leftUserTurn, 1 );

    cardRight.hasChildNodes() ? null : createCard(cardRight, 'right-choosen-card');

    const rightChoosenCard = document.getElementById( 'right-choosen-card' );

    const card = randomCard( deckCards, rightChoosenCard, summaryCardRight, historyRight );

    summary( summaryPointsRight, card, summaryRight, 2 );
}

/**'
     * [po wcisnieciu przycisku 'try again i przeladowaniu strony]
 * @param  {event}       [click]
 */
const onClickTryAgainHandler = (event) => {
    event.preventDefault();
    location.reload();
}

/**
 * [funkcja z Listenerami]
 */
( () => {
    leftUserTurn.addEventListener( 'click', onClickLeftCardHandler );
    rightUserTurn.addEventListener( 'click', onClickRightCardHandler );
    tryAgain.addEventListener( 'click', onClickTryAgainHandler );
})();

export { randomDeck, cardArray, playerWin, overSection, deckCards, turnUser };
