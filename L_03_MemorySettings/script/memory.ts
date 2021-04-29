namespace L_03_MemorySettings {
    window.addEventListener("load", handleLoad);

    let stepper: HTMLElement = document.getElementById("stepper")!;
    let slider: HTMLElement = document.getElementById("slider")!;
    let boardgameColor: HTMLElement = document.getElementById("boardgame-color")!;
    let cardsColor: HTMLElement = document.getElementById("color-of-cards")!;
    let fontColor: HTMLElement = document.getElementById("font-color")!;
    let fonts: HTMLElement = document.getElementById("fonts")!;

    let startbutton: HTMLElement = document.getElementById("startbutton")!;

    function handleLoad(_event: Event): void {
        console.log("Start");

        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        fonts.addEventListener("change", handleChange);

        startbutton.addEventListener("click", createGame);
    }

    function handleChange(_event: Event): void {

        let data: FormData = new FormData(document.forms[0]);

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


    interface Card {
        back: string;
        text: string;
    }

    let cards: Card[] = [
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
        }];

    let cardsTemp: Card[] = [];
    let cardsOnField: Card[] = [];
    let flipped: Card[] = [];

    function createGame(): void {

        let form: HTMLElement = document.querySelector("form")!;

        form.style.visibility = "hidden";

        //const start: new ; 
        //const time1: start.getMinutes();
        let memoryboard: HTMLDivElement = document.createElement("div")!;
        memoryboard.id = "memoryboard";
        document.querySelector("body")!.appendChild(memoryboard);
        

        let data: FormData = new FormData(document.forms[0]);
        let pairs: number = 0;
        let sizeOfCards: number;
        let boardgameColorValue: string;
        let colorOfCardsValue: string; 
        let fontColorValue: string; 
        let fontValue: string;

        for (let entry of data) {
            console.log(entry);
            console.log(data.get("stepper"));
            pairs =  <number><unknown>data.get("stepper")!;

            console.log(data.get("slider"));
            sizeOfCards = <number><unknown>data.get("slider")!;

            console.log(data.get("boardgame-color"));
            boardgameColorValue = <string><unknown>data.get("boardgame-color")!;
           // boardgameColorValue.toString();

            console.log(data.get("color-of-cards"));
            colorOfCardsValue = <string><unknown>data.get("color-of-cards")!;
           // colorOfCardsValue.toString();

            console.log(data.get("font-color"));
            fontColorValue = <string><unknown>data.get("font-color")!;
            //fontColorValue.toString();

            console.log(data.get("fonts"));
            fontValue = <string><unknown>data.get("fonts")!;
            //fontValue.toString();
        }
        
        for (let i: number = 0; i < pairs * 2; i++) {
            cardsTemp.push(cards[i]);
        }

        for (let n: number = 0; n < cardsTemp.length; n++) {
            let partner1: Card = cards[n];
            let partner2: Card = cards[n];

            cardsOnField.push(partner1, partner2);
            cardsTemp.splice(partner1, 1);
        }


        for (let i: number = cardsOnField.length - 1; i > 0; i--) {
            let randomNumber: number = Math.floor(Math.random() * (i + 1));   // randomNUmber sucht uns einen random Wert aus unserem Array
            let temporary = cardsOnField[i];    // und temporay hat die Funktion die die Stellen zu swappen
            cardsOnField[i] = cardsOnField[randomNumber];
            cardsOnField[randomNumber] = temporary;

        }
        
        for (let m: number = 0; m < cardsOnField.length; m++) {
            createCard(cardsOnField[m], sizeOfCards, boardgameColorValue, colorOfCardsValue, fontColorValue, fontValue);
        }
    }

    function createCard(card: Card, _sizeValue: string, _colorOfBoardgame: string, _colorOfCards: string, _colorOfFont: string, _fontValue: string): void {

        let board: HTMLElement = document.getElementById("memoryboard")!;
        board.style.backgroundColor = _colorOfBoardgame;

        
        

        let aCard: HTMLDivElement = document.createElement("div");
        aCard.style.backgroundColor = "#ffffff"; 
        aCard.style.height = _sizeValue;
        aCard.style.width = _sizeValue;
         
        

        let textOfCard: HTMLLabelElement = document.createElement("label");
        textOfCard.innerHTML = card.text;
        textOfCard.style.color = _colorOfFont;
        textOfCard.style.fontFamily = _fontValue;

        let backOfCard: HTMLDivElement = document.createElement("div");
        backOfCard.style.backgroundColor = _colorOfCards;
       
        backOfCard.style.height = _sizeValue;
        backOfCard.style.width = _sizeValue;

        
        board.appendChild(aCard);
        aCard.appendChild(textOfCard);
        aCard.appendChild(backOfCard);

        aCard.addEventListener("click", flipCard);
        //aCard.addEventListener("touch", flipCard);

    }

    function flipCard(_event: MouseEvent): void {

        let clickedCard: HTMLDivElement = <HTMLDivElement>_event.target;

        clickedCard.style.visibility = "hidden";

        flipped.push(clickedCard);
        
        if (flipped.length == 2) {
            checkForMatch(flipped[0], flipped[1]);
        }
        else {
            return;
        }


    }

    function checkForMatch(_firstCard: Card, _secondCard: Card): void {

        //block user interaction 
        if (_firstCard.text === _secondCard.text) {

            setTimeout(function (): void {
                _firstCard.style.visibility = "hidden";
                _secondCard.style.visibility = "hidden";

                cardsOnField.splice(_firstCard, 1);
                cardsOnField.splice(_secondCard, 1);
            },         2000);
        }
        else {

            setTimeout(function (): void {
                _firstCard.style.back.visibility = "visible";
                _secondCard.style.back.visibility = "visible";
            },         2000);

        }


    }


}
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