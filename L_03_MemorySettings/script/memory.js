"use strict";
var L_03_MemorySettings;
(function (L_03_MemorySettings) {
    window.addEventListener("load", handleLoad);
    let stepper = document.getElementById("stepper");
    let slider = document.getElementById("slider");
    let boardgameColor = document.getElementById("boardgame-color");
    let cardsColor = document.getElementById("color-of-cards");
    let fontColor = document.getElementById("font-color");
    function handleLoad(_event) {
        console.log("Start");
        stepper.addEventListener("change", handleChange);
        slider.addEventListener("change", handleChange);
        boardgameColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
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
        }
    }
})(L_03_MemorySettings || (L_03_MemorySettings = {}));
//# sourceMappingURL=memory.js.map