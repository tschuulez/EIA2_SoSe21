"use strict";
var L_03_MemorySettings;
(function (L_03_MemorySettings) {
    window.addEventListener("load", handleLoad);
    let stepper = document.getElementById("stepper");
    let slider = document.getElementById("slider");
    let boardgameColor = document.getElementById("boardgame-color");
    let cardsColor = document.getElementById("color-of-cards");
    let fontColor = document.getElementById("font-color");
    let fonts = document.getElementById("fonts");
    let startbutton = document.getElementById("startbutton");
    function handleLoad(_event) {
        console.log("Start");
        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        fonts.addEventListener("change", handleChange);
        startbutton.addEventListener("click", createGame);
    }
    function handleChange(_event) {
        let data = new FormData(document.forms[0]);
        for (let entry of data) {
            console.log(entry);
            console.log(data.get("stepper"));
            console.log(data.get("slider"));
            console.log(data.get("boardgame-color"));
            console.log(data.get("color-of-cards"));
            console.log(data.get("font-color"));
            console.log(data.get("fonts"));
        }
    }
    let cards = [
        {
            back: "orange",
            text: "A"
        },
        {
            back: "orange",
            text: "B"
        },
        {
            back: "orange",
            text: "C"
        },
        {
            back: "orange",
            text: "D"
        },
        {
            back: "orange",
            text: "E"
        },
        {
            back: "orange",
            text: "F"
        },
        {
            back: "orange",
            text: "G"
        },
        {
            back: "orange",
            text: "H"
        },
        {
            back: "orange",
            text: "I"
        },
        {
            back: "orange",
            text: "J"
        },
        {
            back: "orange",
            text: "K"
        },
        {
            back: "orange",
            text: "L"
        },
        {
            back: "orange",
            text: "M"
        },
        {
            back: "orange",
            text: "N"
        },
        {
            back: "orange",
            text: "O"
        },
        {
            back: "orange",
            text: "P"
        },
        {
            back: "orange",
            text: "Q"
        },
        {
            back: "orange",
            text: "R"
        },
        {
            back: "orange",
            text: "S"
        },
        {
            back: "orange",
            text: "T"
        },
        {
            back: "orange",
            text: "U"
        },
        {
            back: "orange",
            text: "V"
        },
        {
            back: "orange",
            text: "W"
        },
        {
            back: "orange",
            text: "X"
        },
        {
            back: "orange",
            text: "Y"
        }
    ];
    let cardsTemp = [];
    let cardsOnField = [];
    let flipped = [];
    function createGame() {
        let form = document.querySelector("form");
        form.style.visibility = "hidden";
        //const start: new ; 
        //const time1: start.getMinutes();
        let memoryboard = document.createElement("div");
        memoryboard.id = "memoryboard";
        document.querySelector("body").appendChild(memoryboard);
        let data = new FormData(document.forms[0]);
        let pairs = 0;
        let sizeOfCards;
        let boardgameColorValue;
        let colorOfCardsValue;
        let fontColorValue;
        let fontValue;
        for (let entry of data) {
            console.log(entry);
            console.log(data.get("stepper"));
            pairs = data.get("stepper");
            console.log(data.get("slider"));
            sizeOfCards = data.get("slider");
            console.log(data.get("boardgame-color"));
            boardgameColorValue = data.get("boardgame-color");
            // boardgameColorValue.toString();
            console.log(data.get("color-of-cards"));
            colorOfCardsValue = data.get("color-of-cards");
            // colorOfCardsValue.toString();
            console.log(data.get("font-color"));
            fontColorValue = data.get("font-color");
            //fontColorValue.toString();
            console.log(data.get("fonts"));
            fontValue = data.get("fonts");
            //fontValue.toString();
        }
        for (let i = 0; i < pairs * 2; i++) {
            cardsTemp.push(cards[i]);
        }
        for (let n = 0; n < cardsTemp.length; n++) {
            let partner1 = cards[n];
            let partner2 = cards[n];
            cardsOnField.push(partner1, partner2);
            cardsTemp.splice(partner1, 1);
        }
        for (let i = cardsOnField.length - 1; i > 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1)); // randomNUmber sucht uns einen random Wert aus unserem Array
            let temporary = cardsOnField[i]; // und temporay hat die Funktion die die Stellen zu swappen
            cardsOnField[i] = cardsOnField[randomNumber];
            cardsOnField[randomNumber] = temporary;
        }
        for (let m = 0; m < cardsOnField.length; m++) {
            createCard(cardsOnField[m], sizeOfCards, boardgameColorValue, colorOfCardsValue, fontColorValue, fontValue);
        }
    }
    function createCard(card, _sizeValue, _colorOfBoardgame, _colorOfCards, _colorOfFont, _fontValue) {
        let board = document.getElementById("memoryboard");
        board.style.backgroundColor = _colorOfBoardgame;
        let aCard = document.createElement("div");
        aCard.style.backgroundColor = "#ffffff";
        aCard.style.height = _sizeValue;
        aCard.style.width = _sizeValue;
        let textOfCard = document.createElement("label");
        textOfCard.innerHTML = card.text;
        textOfCard.style.color = _colorOfFont;
        textOfCard.style.fontFamily = _fontValue;
        let backOfCard = document.createElement("div");
        backOfCard.style.backgroundColor = _colorOfCards;
        backOfCard.style.height = _sizeValue;
        backOfCard.style.width = _sizeValue;
        board.appendChild(aCard);
        aCard.appendChild(textOfCard);
        aCard.appendChild(backOfCard);
        aCard.addEventListener("click", flipCard);
        //aCard.addEventListener("touch", flipCard);
    }
    function flipCard(_event) {
        let clickedCard = _event.target;
        clickedCard.style.visibility = "hidden";
        flipped.push(clickedCard);
        if (flipped.length == 2) {
            checkForMatch(flipped[0], flipped[1]);
        }
        else {
            return;
        }
    }
    function checkForMatch(_firstCard, _secondCard) {
        //block user interaction 
        if (_firstCard.text === _secondCard.text) {
            setTimeout(function () {
                _firstCard.style.visibility = "hidden";
                _secondCard.style.visibility = "hidden";
                cardsOnField.splice(_firstCard, 1);
                cardsOnField.splice(_secondCard, 1);
            }, 2000);
        }
        else {
            setTimeout(function () {
                _firstCard.style.back.visibility = "visible";
                _secondCard.style.back.visibility = "visible";
            }, 2000);
        }
    }
})(L_03_MemorySettings || (L_03_MemorySettings = {}));
/**
function FlipCard (_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target.classList.contains("card")) {
    cardsOpen++;
    if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
    if (target.classList.contains("hidden")) {
    target.classList.remove("hidden");
    target.classList.add("open");
    cardsOpenArray.push(target);
    }
    } else {
    cardsOpen--;
    }
    if (cardsOpen == 2) {
    setTimeout(compareCards, 2000);
    }
    }
    **/ 
//# sourceMappingURL=memory.js.map