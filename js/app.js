(function() {
    'use strict';



        function domContentLoadedHandler(event) {
            const cardArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
            summaryCardLeft = [],
            summaryCardRight = [],
            summaryPointsLeft = [],
            summaryPointsRight = [],
            leftUserTurn = document.getElementById('left-user-turn'),
            rightUserTurn = document.getElementById('right-user-turn'),
            buttons = document.querySelectorAll('button'),
            turnUser = document.getElementById('turn-user'),
            historyLeft = document.getElementById('history-left'),
            historyRight = document.getElementById('history-right'),
            summaryLeft = document.getElementById('summary-left'),
            summaryRight = document.getElementById('summary-right'),
            cardLeft = document.querySelector('.card-left'),
            cardRight = document.querySelector('.card-right');

            leftUserTurn.addEventListener('click', onClickLeftCardHandler);
            rightUserTurn.addEventListener('click', onClickRightCardHandler);

            function onClickLeftCardHandler (event) {
                event.preventDefault();
                //wyłączenie przycisku kliknietego i wlaczenie drugiego
                newAttribute(this, rightUserTurn);
                //dodanie karty na stół
                cardLeft.innerHTML = "<div class='choosen-card'><h1 class='name-choosen-card' id='left-choosen-card'></h1></div>";
                //złapanie elementu karty
                const leftChoosenCard = document.getElementById('left-choosen-card');
                //wylosowanie numeru przez funkcję losującą
                let card = randomNumber(summaryPointsLeft);
                leftChoosenCard.innerText = card;
                summaryCardLeft.push(card);
                //wpisanie rezultatu
                let result = summary(summaryPointsLeft);
                summaryLeft.innerText = result;
                checkWin(result, 'Zawodnik 1');
                //dodanie karty do historii
                historyLeft.innerText = summaryCardLeft;
                //tura nastepnego gracza
                nextTurn(2);
            }


            function onClickRightCardHandler (event) {
                event.preventDefault();
                console.log(this)
                newAttribute(this, leftUserTurn);
                //wyłączenie przycisku kliknietego i wlaczenie drugiego
                cardRight.innerHTML = "<div class='choosen-card'><h1 class='name-choosen-card' id='right-choosen-card'></h1></div>";

                const rightChoosenCard = document.getElementById('right-choosen-card');

                let card = randomNumber(summaryPointsRight);
                rightChoosenCard.innerText = card;
                summaryCardRight.push(card);

                let result = summary(summaryPointsRight);
                summaryRight.innerText = result;
                checkWin(result, 'Zawodnik 2');

                historyRight.innerText = summaryCardRight;
                nextTurn(1);
            }

        const newAttribute = (button, player) => {
            console.log(button, "to jest button");
            button.setAttribute('disabled', 'disabled');
            player.removeAttribute('disabled');
        }

        const randomCard = () => {
            return Math.floor((Math.random() * 11))
        }

        const randomNumber = (array) => {
            let random = randomCard();
            const card = cardArray[random];

            array.push(random + 1);

            return card
        }

        const summary = (array) => {
             return array.reduce((prev, curr) => prev + curr);
        }

        const nextTurn = number => {
            turnUser.innerText = number;
        }

        const checkWin = (result, player) => {
            if (result > 21) {
                console.log(player, 'wygrał!!!!!')
            }
        }

        const firstTurn = () => {
            let whoFirst = Math.floor((Math.random() * 2));
            console.log(whoFirst + 1, buttons[whoFirst]);
            buttons[whoFirst].removeAttribute('disabled');
            nextTurn(whoFirst + 1);
        }
        firstTurn();

    }
    document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
})();
