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
/***/ (function(module, exports) {

(function() {
    'use strict';

    // zmienne i stale
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
    cardRight = document.querySelector( '.card-right' );
    /**
     * Opis [description]
     * @param  {event} event Standardowy event
     * @return {void}
     */


        /**
         * @param  {Object} event standardowy event
         * @return {void}
         */
    function onClickLeftCardHandler ( event ) {
        event.preventDefault();
        //wyłączenie przycisku kliknietego i wlaczenie drugiego
        /** @type {Boolean} [description] */
        newAttribute( this, rightUserTurn );
        //dodanie karty na stół
        cardLeft.innerHTML = '<div class="choosen-card"><h1 class="name-choosen-card" id="left-choosen-card"></h1></div>';
        //złapanie elementu karty
        const leftChoosenCard = document.getElementById( 'left-choosen-card' );
        //wylosowanie numeru przez funkcję losującą
        let card = randomCard( deckCards, leftChoosenCard, summaryCardLeft, historyLeft );

        //wpisanie rezultatu
        summary( summaryPointsLeft, card, summaryLeft, 'Zawodnik 1');
        //dodanie karty do historii
        //tura nastepnego gracza
        nextTurn(2);
    }


    function onClickRightCardHandler ( event ) {
        event.preventDefault();
        newAttribute( this, leftUserTurn );
        //wyłączenie przycisku kliknietego i wlaczenie drugiego
        cardRight.innerHTML = '<div class="choosen-card"><h1 class="name-choosen-card" id="right-choosen-card"></h1></div>';

        const rightChoosenCard = document.getElementById( 'right-choosen-card' );

        let card = randomCard( deckCards, rightChoosenCard, summaryCardRight, historyRight );

        summary( summaryPointsRight, card, summaryRight, 'Zawodnik 2' );

        nextTurn(1);
    }

    const newAttribute = ( button, player ) => {
        console.log( button, 'to jest button' );
        button.setAttribute( 'disabled', 'disabled' );
        button.setAttribute( 'autofocus', 'autofocus' );
        player.removeAttribute( 'disabled' );
    }

    const randomNumber= ( length ) => {
        return Math.floor(( Math.random() * length ))
    }

    /**
     *
     * @param  {array} array talica z wartościami liczbowymi
     * @return {string} card z wartością karty
     */
    const randomCard = ( array, choosenCard, summaryCard, history ) => {
        const card = array.pop();

        choosenCard.innerText = card;
        summaryCard.push( card );
        history.innerText = summaryCard;

        return card
    }

    const summary = ( array, card, summary, player ) => {
        const points = cardArray.indexOf(card);
        array.push(points + 1);
        const summaryResult = array.reduce((prev, curr) => prev + curr);
        summary.innerText = summaryResult;

        checkWin( summaryResult, player );

        return summaryResult;
    }

    const nextTurn = ( number ) => {
        turnUser.innerText = number;
    }

    const checkWin = ( result, player ) => {
        if (result > 21) {
            console.log(player, 'wygrał!!!!!')
        }
    }

    const firstTurn = () => {
        let whoFirst = Math.floor(( Math.random() * buttons.length ));
        buttons[whoFirst].removeAttribute('disabled');
        nextTurn(whoFirst + 1);

        randomDeck();
    }

    const randomDeck = () => {
        for (var i = 1; i <= 100; i++) {
            let singleCard = cardArray[randomNumber( cardArray.length )];
            deckCards.push(singleCard);
        }
    }
    firstTurn();

    (function() {
        leftUserTurn.addEventListener( 'click', onClickLeftCardHandler );
        rightUserTurn.addEventListener( 'click', onClickRightCardHandler );
    })();

})();


/***/ })
/******/ ]);