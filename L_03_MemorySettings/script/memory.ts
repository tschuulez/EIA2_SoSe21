namespace L_03_MemorySettings {
    window.addEventListener("load", handleLoad);

    let stepper: HTMLElement = document.getElementById("stepper")!;
    let slider: HTMLElement = document.getElementById("slider")!;
    let boardgameColor: HTMLElement = document.getElementById("boardgame-color")!;
    let cardsColor: HTMLElement = document.getElementById("color-of-cards")!;
    let fontColor: HTMLElement = document.getElementById("font-color")!;

    let startbutton: HTMLDivElement = document.querySelector("startbutton")!;

    function handleLoad(_event: Event): void {
        console.log("Start");

        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);

        startbutton.addEventListener("click", createGame);



    }

    /** function handleChange(_event: Event): void {
 
         let data: FormData = new FormData(document.forms[0]);
 
         for (let entry of data) {
             console.log(entry);
             console.log(data.get("stepper"));
             console.log(data.get("slider"));
             console.log(data.get("boardgame-color"));
             console.log(data.get("color-of-cards"));
             console.log(data.get("font-color"));
         }
     }
     **/

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

    function createGame(_event: MouseEvent): void {

        let form: HTMLElement = document.querySelector("form")!;

        form.style.visibility = "hidden";

        //const start: new ; 
        //const time1: start.getMinutes();

        let data: FormData = new FormData(document.forms[0]);

        for (let entry of data) {
            console.log(entry);
            console.log(data.get("stepper"));
            const pairs: FormDataEntryValue = data.get("stepper")!;

            console.log(data.get("slider"));
            const sizeOfCards: FormDataEntryValue = data.get("slider")!;

            console.log(data.get("boardgame-color"));
            const boardgameColorValue: FormDataEntryValue = data.get("boardgame-color")!;
            boardgameColorValue.toString();

            console.log(data.get("color-of-cards"));
            const colorOfCardsValue: FormDataEntryValue = data.get("color-of-cards")!;
            colorOfCardsValue.toString();

            console.log(data.get("font-color"));
            const fontColorValue: FormDataEntryValue = data.get("font-color")!;
            fontColorValue.toString();

            console.log(data.get("fonts"));
            const fontValue: FormDataEntryValue = data.get("fonts")!;
            fontColorValue.toString();
        }
    }

    function createCard(card: Card, _sizeValue: string, _colorOfBoardgame: string, _colorOfCards: string, _colorOfFont: string, _fontValue: string): void {

        document.querySelector("body")!.style.backgroundColor = _colorOfBoardgame;
       
        let aCard: HTMLDivElement = document.createElement("div");
        aCard.style.height = _sizeValue;
        aCard.style.width = _sizeValue;

        let textOfCard: HTMLLabelElement = document.createElement("label");
        textOfCard.innerHTML = card.text;
        textOfCard.style.color = _colorOfFont;
        textOfCard.style.fontFamily = _fontValue;

        let backOfCard: HTMLDivElement = document.createElement("div");
        backOfCard.style.backgroundColor = _colorOfCards;

        document.querySelector("body")!.appendChild(aCard);
        aCard.appendChild(textOfCard);
        aCard.appendChild(backOfCard);

        aCard.addEventListener("click", flipCard);
        //aCard.addEventListener("touch", flipCard);

    }

    function flipCard(_event: MouseEvent): void {

        let clickedCard = _event.target;
        

        clickedCard.back.style.visibility = "hidden"; 

    
    }




}