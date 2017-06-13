/**
 * [funkcja losująca kartę]
 * @param  {[array]} array       [tablica z całą talią kart]
 * @param  {[object]} choosenCard [wskazanie miejsca podmiany karty (lewa/prawa)]
 * @param  {[array]} summaryCard [suma punktów]
 * @param  {[object]} history     [miejsce wpisania karty do historii]
 * @return {[string]}             [zwraca kartę z talii]
 */
const randomCard = ( array, choosenCard, summaryCard, history ) => {
    const card = array.pop();

    choosenCard.innerText = card;
    history.innerText = summaryCard.length === 0 ? 'Historia' : summaryCard;
    summaryCard.push( card );

    return card
}

export {randomCard};
