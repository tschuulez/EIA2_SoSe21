"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    //inspo videos from EIA Inverted
    window.addEventListener("load", init);
    let saveBackgroundData;
    let count = 10; // Bienen die starten
    let bees = [];
    let flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L09_Bienenwiese.crc2 = canvas.getContext("2d");
        console.log(L09_Bienenwiese.crc2);
        //Background
        let b = new L09_Bienenwiese.Background();
        //random flowers
        for (var z = 0; z < 100; z++) {
            let rf = new L09_Bienenwiese.Flower();
            console.log(rf);
        }
        // Canvas Daten werden hier gespeichert
        saveBackgroundData = L09_Bienenwiese.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Blumen:
        for (let i = 0; i < 8; i++) {
            let sf = new L09_Bienenwiese.Flower();
            flowers[i] = sf;
            flowers.push(sf);
            console.log(sf);
        }
        // Startposition wird zum Array hinzugefügt
        for (let i = 0; i < count; i++) {
            var s = new L09_Bienenwiese.Bee(635, 310);
            bees[i] = s;
        }
        window.setTimeout(animate, 50);
    }
    // Alle Funktionen:
    function animate() {
        for (let k = 0; k < flowers.length; k++) {
            let f = flowers[k];
            f.draw();
        }
        // hier wird das Bild wieder geholt
        L09_Bienenwiese.crc2.putImageData(saveBackgroundData, 0, 0);
        // Hier habe ich eigentlich den Aufruf für die Wolken ... keine Ahnung warum das nicht klappt :(
        // drawCloud();
        // Loop um die Bienen in eine zufällige Richtung (nach links) fliegen zu lassen
        for (var i = 0; i < count; i++) {
            var s = bees[i];
            if (s.x < 0) {
                s.x = L09_Bienenwiese.crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = L09_Bienenwiese.crc2.canvas.height;
            }
            if (s.y >= L09_Bienenwiese.crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=main.js.map