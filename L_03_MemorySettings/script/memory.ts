namespace L_03_MemorySettings {
    window.addEventListener("load", handleLoad);

    let startbutton: HTMLElement = document.getElementById("startbutton")!;

    function handleLoad(_event: Event): void {
        console.log("Start");


        startbutton.addEventListener("click", createGame);
    }

    let cards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

    let cardsOnField: HTMLElement[] = [];
    let flipped: HTMLElement[] = [];

    let data: FormData;

    let pairs: number;
    let sizeOfCards: number;
    let boardgameColorValue: FormDataEntryValue | null;
    let colorOfCardsValue: FormDataEntryValue | null;
    let fontColorValue: FormDataEntryValue | null;
    let fontValue: FormDataEntryValue | null;

    function createGame(): void {

        let form: HTMLElement = document.querySelector("form")!;

        form.style.visibility = "hidden";

        //const start: new Date() ; 
        //const time1: start.getMinutes();

        let memoryboard: HTMLDivElement = document.createElement("div")!;
        memoryboard.id = "memoryboard";
        document.querySelector("body")!.appendChild(memoryboard);

        data = new FormData(document.forms[0]); // weist der Variablen formData alle fieldsets zu
        console.log(data);


        sizeOfCards = Number(data.get("slider"));
        boardgameColorValue = data.get("boardgame-color");
        colorOfCardsValue = data.get("color-of-cards");
        fontColorValue = data.get("font-color");
        fontValue = data.get("fonts");

        let totalPairs: FormDataEntryValue | null = data.get("stepper");
        if (totalPairs) {
            pairs = Number(totalPairs);
        }

        for (let i: number = 0; i < pairs; i++) {
            createCard(cards[i]);
            createCard(cards[i]);
        }

        //shuffle cards
        for (let i: number = cardsOnField.length - 1; i > 0; i--) {
            let randomNumber: number = Math.floor(Math.random() * (i + 1));   // randomNUmber sucht uns einen random Wert aus unserem Array
            let temporary = cardsOnField[i];    // und temporay hat die Funktion die die Stellen zu swappen
            cardsOnField[i] = cardsOnField[randomNumber];
            cardsOnField[randomNumber] = temporary;

        }

        for (let i: number = 0; i < cardsOnField.length; i++) {
            memoryboard.appendChild(cardsOnField[i]);
        }

    }

    function createCard(_cards: string): void {

        let board: HTMLElement = document.getElementById("memoryboard")!;

        if (boardgameColorValue) {
            board.style.backgroundColor = boardgameColorValue.toString();
        }

        let aCard: HTMLDivElement = document.createElement("div");
        aCard.classList.add("cardDiv");
        aCard.classList.add("isHidden");

        aCard.addEventListener("click", flipCard);
        //aCard.addEventListener("touch", flipCard);

        if (colorOfCardsValue) {
            aCard.style.backgroundColor = colorOfCardsValue.toString();
        }
        aCard.style.height = sizeOfCards + "px";
        aCard.style.width = sizeOfCards + "px";
        aCard.style.borderRadius = "6px";

        aCard.innerHTML = "<p>" + _cards + "<p>";
        if (fontValue) {
            aCard.style.fontFamily = fontValue.toString();
        }
        if (fontColorValue) {
            aCard.style.color = fontColorValue.toString();
        }

        cardsOnField.push(aCard);





    }

    function flipCard(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(_event.target);
        if (target.classList.contains("cardDiv")) {
            console.log();
            if (target.classList.contains("isHidden") && !(flipped.length > 2) && target != flipped[0]) {
                target.classList.remove("isHidden");
                target.classList.add("open");
            }
            
            flipped.push(target);
        }
        console.log(flipped.length);
        
        if (flipped.length == 2) {
            setTimeout (checkForMatch, 2000); 
        }
        
    }

    function checkForMatch(): void {

        if (flipped[0].innerHTML === flipped[1].innerHTML) {
            
            flipped[0].style.visibility = "hidden";
            flipped[1].style.visibility = "hidden";

            cardsOnField.splice(0, 2);
        }
        else {
            
            
            flipped[0].classList.contains("open");
            flipped[0].classList.add("isHidden");

            flipped[1].classList.contains("open");
            flipped[1].classList.add("isHidden");
        }

        flipped = [];

        if (cardsOnField.length == 0) {

            alert("COOOOOONGRAAAAATS");
        }

    }
}





/*
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