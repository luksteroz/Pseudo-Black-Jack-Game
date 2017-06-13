/**
 * [funkcja tworząca kartę na stole do gry]
 * @param  {[object]} card [parent nowego elementu]
 * @param  {[string]} id   [nazwa id nowego elementu]
 * @return {[type]}      [description]
 */
const createCard = (card, id) => {
    const choosenCardDiv = document.createElement( 'div' );
    choosenCardDiv.classList.add( 'choosen-card', 'animated', 'bounce' );
    card.appendChild(choosenCardDiv);

    const nameChoosenCardHeader = document.createElement( 'h1' );
    nameChoosenCardHeader.classList.add( 'name-choosen-card' );
    nameChoosenCardHeader.id = id;
    choosenCardDiv.appendChild(nameChoosenCardHeader);
}

export {createCard};
