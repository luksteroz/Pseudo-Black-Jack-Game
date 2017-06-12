import {cardArray, playerWin, overSection} from './app.js';

const summary = ( array, card, summary, player ) => {
    const points = cardArray.indexOf(card);
    array.push(points + 1);
    const summaryResult = array.reduce((prev, curr) => prev + curr);
    summary.innerText = summaryResult;

    checkWin( summaryResult, player, over );

    return summaryResult;
}

const checkWin = ( result, player ) => {
    if (result > 21) {
        overSection.style.display =  'block';
        playerWin.innerText = "Zawodnik " + player + " wygrał";
    }
}

export {summary};
