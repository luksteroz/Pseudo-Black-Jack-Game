

const randomCard = ( array, choosenCard, summaryCard, history ) => {
    const card = array.pop();

    choosenCard.innerText = card;
    history.innerText = summaryCard.length === 0 ? 'Historia' : summaryCard;
    summaryCard.push( card );

    return card
}

export {randomCard};
