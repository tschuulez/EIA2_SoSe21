"use strict";
var L_03_MemorySettings;
(function (L_03_MemorySettings) {
    window.addEventListener("load", handleLoad);
    let stepper = document.getElementById("stepper");
    let slider = document.getElementById("slider");
    let boardgameColor = document.getElementById("boardgame-color");
    let cardsColor = document.getElementById("color-of-cards");
    let fontColor = document.getElementById("font-color");
    let startbutton = document.querySelector("startbutton");
    function handleLoad(_event) {
        console.log("Start");
        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        startbutton.addEventListener("click", createGame);
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
    function createGame(_event) {
        let form = document.querySelector("form");
        form.style.visibility = "hidden";
        //const start: new ; 
        //const time1: start.getMinutes();
        let data = new FormData(document.forms[0]);
        for (let entry of data) {
            console.log(entry);
            console.log(data.get("stepper"));
            const pairs = data.get("stepper");
            console.log(data.get("slider"));
            const sizeOfCards = data.get("slider");
            console.log(data.get("boardgame-color"));
            const boardgameColorValue = data.get("boardgame-color");
            boardgameColorValue.toString();
            console.log(data.get("color-of-cards"));
            const colorOfCardsValue = data.get("color-of-cards");
            colorOfCardsValue.toString();
            console.log(data.get("font-color"));
            const fontColorValue = data.get("font-color");
            fontColorValue.toString();
            console.log(data.get("fonts"));
            const fontValue = data.get("fonts");
            fontColorValue.toString();
        }
    }
    function createCard(card, _sizeValue, _colorOfBoardgame, _colorOfCards, _colorOfFont, _fontValue) {
        document.querySelector("body").style.backgroundColor = _colorOfBoardgame;
        let aCard = document.createElement("div");
        aCard.style.height = _sizeValue;
        aCard.style.width = _sizeValue;
        let textOfCard = document.createElement("label");
        textOfCard.innerHTML = card.text;
        textOfCard.style.color = _colorOfFont;
        textOfCard.style.fontFamily = _fontValue;
        let backOfCard = document.createElement("div");
        backOfCard.style.backgroundColor = _colorOfCards;
        document.querySelector("body").appendChild(aCard);
        aCard.appendChild(textOfCard);
        aCard.appendChild(backOfCard);
        aCard.addEventListener("click", flipCard);
        //aCard.addEventListener("touch", flipCard);
    }
    function flipCard(_event) {
        let clickedCard = _event.target;
        clickedCard.back.style.visibility = "hidden";
    }
})(L_03_MemorySettings || (L_03_MemorySettings = {}));
//# sourceMappingURL=memory.js.map