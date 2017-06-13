import { turnUser } from './app.js'

const nextTurn = ( button, player, number ) => {
    button.setAttribute( 'disabled', 'disabled' );
    player.removeAttribute( 'disabled' );
    nextPlayer( number );
}

const nextPlayer = ( number ) => {
    turnUser.innerText = number;
}

export { nextTurn, nextPlayer };
