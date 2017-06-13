import {cardArray, playerWin, overSection} from './app.js';

/**
 * [funkcja zliczająca punkty i wypisująca rezultat]
 * @param  {[array]} array   [tablica z punktami konkretnego zawodnika]
 * @param  {[string]} card    [wybrana karta z talii]
 * @param  {[number]} summary [zliczenie punktów konkretnego zawodnika]
 * @param  {[number]} player  [numer gracz]
 */
const summary = ( array, card, summary, player ) => {
    const points = cardArray.indexOf(card);
    array.push(points + 1);
    const summaryResult = array.reduce((prev, curr) => prev + curr);
    summary.innerText = summaryResult;

    checkWin( summaryResult, player, over );

}
/**
 * [funkcja sprawdzająca zwyciężcę]
 * @param  {[number]} result [rezultat konkretnego gracza]
 * @param  {[number]} player [numer gracza]
 */
const checkWin = ( result, player ) => {
    if (result > 21) {
        overSection.style.display =  'block';
        playerWin.innerText = "Zawodnik " + player + " wygrał";
    }
}

export {summary};
