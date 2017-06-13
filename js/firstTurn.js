import { nextPlayer } from './nextTurn.js'
import { randomDeck, deckCards, cardArray, randomNumber } from './app.js'
import {randomNumber} from './randomNumber.js';

/**
 * [funkcja losująca pierwszego gracza]
 * @param  {[array]} buttons [tablica z buttonami]
 */
const firstTurn = ( buttons ) => {
    const whoFirst = randomNumber( buttons.length )
    buttons[whoFirst].removeAttribute('disabled');
    nextPlayer(whoFirst + 1);

    randomDeck();
}
/**
 * [funkcja losująca talię kart]
 */
const randomDeck = () => {
    for (let i = 1; i <= 100; i++) {
        const singleCard = cardArray[randomNumber( cardArray.length )];
        deckCards.push(singleCard);
    }
}

export {firstTurn};
