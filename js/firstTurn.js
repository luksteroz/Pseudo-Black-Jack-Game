import { nextPlayer } from './nextTurn.js'
import { randomDeck, deckCards, cardArray, randomNumber} from './app.js'
import {randomNumber} from './randomNumber.js';

const firstTurn = ( buttons ) => {
        let whoFirst = randomNumber( buttons.length )
        buttons[whoFirst].removeAttribute('disabled');
        nextPlayer(whoFirst + 1);

        randomDeck();
    }

const randomDeck = () => {
    for (var i = 1; i <= 100; i++) {
        let singleCard = cardArray[randomNumber( cardArray.length )];
        deckCards.push(singleCard);
    }
}

export {firstTurn};
