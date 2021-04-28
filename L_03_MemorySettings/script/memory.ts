namespace L_03_MemorySettings {
    window.addEventListener("load", handleLoad);

    let stepper: HTMLElement = document.getElementById("stepper")!;
    let slider: HTMLElement = document.getElementById("slider")!;
    let boardgameColor: HTMLElement = document.getElementById("boardgame-color")!;
    let cardsColor: HTMLElement = document.getElementById("color-of-cards")!;
    let fontColor: HTMLElement = document.getElementById("font-color")!;

    function handleLoad(_event: Event): void {
        console.log("Start");
    
        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        
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

        }
    }

   
}