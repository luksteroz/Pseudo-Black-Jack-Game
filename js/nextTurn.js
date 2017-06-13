import { turnUser } from './app.js'
/**
 * [funkcja odpalająca następną turę]
 * @param  {[object]} button [button na ktorym został przekazany event]
 * @param  {[oject]} player [button drugiego przeciwnika]
 * @param  {[number]} number [wskazanie nastepnego gracza]
 */
const nextTurn = ( button, player, number ) => {
    button.setAttribute( 'disabled', 'disabled' );
    player.removeAttribute( 'disabled' );
    nextPlayer( number );
}
/**
 * [funkcja wypisująca nazwę aktywnego gracza]
 * @param  {[number]} number [przekazanie następnego gracza]
 */
const nextPlayer = ( number ) => {
    turnUser.innerText = number;
}

export { nextTurn, nextPlayer };
