/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDeck", function() { return randomDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardArray", function() { return cardArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerWin", function() { return playerWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overSection", function() { return overSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckCards", function() { return deckCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnUser", function() { return turnUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firstTurn_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nextTurn_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__randomCard_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_js__ = __webpack_require__(5);






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
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__firstTurn_js__["a" /* firstTurn */])( buttons );

/**
 * [funkcja odpowiada za event wykonany na przycisku zawodnika 1]
 * @param  {event} [click]
 */
const onClickLeftCardHandler = ( event ) => {
    event.preventDefault();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nextTurn_js__["a" /* nextTurn */])( event.currentTarget, rightUserTurn, 2 );

    cardLeft.hasChildNodes() ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createCard_js__["a" /* createCard */])(cardLeft, 'left-choosen-card');

    const leftChoosenCard = document.getElementById( 'left-choosen-card' );

    const card = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__randomCard_js__["a" /* randomCard */])( deckCards, leftChoosenCard, summaryCardLeft, historyLeft );

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__summary_js__["a" /* summary */])( summaryPointsLeft, card, summaryLeft, 1);
}
/**
 * [funkcja odpowiada za event wykonany na przycisku zawodnika 2]
 * @param  {event} [click]
 */
const onClickRightCardHandler = ( event ) => {
    event.preventDefault();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nextTurn_js__["a" /* nextTurn */])( event.currentTarget, leftUserTurn, 1 );

    cardRight.hasChildNodes() ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createCard_js__["a" /* createCard */])(cardRight, 'right-choosen-card');

    const rightChoosenCard = document.getElementById( 'right-choosen-card' );

    const card = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__randomCard_js__["a" /* randomCard */])( deckCards, rightChoosenCard, summaryCardRight, historyRight );

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__summary_js__["a" /* summary */])( summaryPointsRight, card, summaryRight, 2 );
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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nextTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nextPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(0);

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
    __WEBPACK_IMPORTED_MODULE_0__app_js__["turnUser"].innerText = number;
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCard; });
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




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstTurn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextTurn_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__randomNumber_js__ = __webpack_require__(6);




/**
 * [funkcja losująca pierwszego gracza]
 * @param  {[array]} buttons [tablica z buttonami]
 */
const firstTurn = ( buttons ) => {
    const whoFirst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__randomNumber_js__["a" /* randomNumber */])( buttons.length )
    buttons[whoFirst].removeAttribute('disabled');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__nextTurn_js__["b" /* nextPlayer */])(whoFirst + 1);

    randomDeck();
}
/**
 * [funkcja losująca talię kart]
 */
const randomDeck = () => {
    for (let i = 1; i <= 100; i++) {
        const singleCard = __WEBPACK_IMPORTED_MODULE_1__app_js__["cardArray"][__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__randomNumber_js__["a" /* randomNumber */])( __WEBPACK_IMPORTED_MODULE_1__app_js__["cardArray"].length )];
        __WEBPACK_IMPORTED_MODULE_1__app_js__["deckCards"].push(singleCard);
    }
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return randomCard; });
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




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return summary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(0);


/**
 * [funkcja zliczająca punkty i wypisująca rezultat]
 * @param  {[array]} array   [tablica z punktami konkretnego zawodnika]
 * @param  {[string]} card    [wybrana karta z talii]
 * @param  {[number]} summary [zliczenie punktów konkretnego zawodnika]
 * @param  {[number]} player  [numer gracz]
 */
const summary = ( array, card, summary, player ) => {
    const points = __WEBPACK_IMPORTED_MODULE_0__app_js__["cardArray"].indexOf(card);
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
        __WEBPACK_IMPORTED_MODULE_0__app_js__["overSection"].style.display =  'block';
        __WEBPACK_IMPORTED_MODULE_0__app_js__["playerWin"].innerText = "Zawodnik " + player + " wygrał";
    }
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return randomNumber; });
/**
 * [funkcja losująca numer z podanej tablicy]
 * @param  {[number]} length [długość tablicy do losowania]
 * @return {[number]}        [zwraca wylosowany numer]
 */
const randomNumber= ( length ) => {
    return Math.floor(( Math.random() * length ))
}




/***/ })
/******/ ]);