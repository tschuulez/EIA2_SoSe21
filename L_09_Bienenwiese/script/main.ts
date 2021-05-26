
namespace L09_Bienenwiese {

    //inspo videos from EIA Inverted
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    let count: number = 10; // Bienen die starten

    let bees: Bee[] = [];
    let flowers: Flower[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        //Background
        let b: Background = new Background();

        //random flowers
        for (var z: number = 0; z < 100; z++) {
            let rf: Flower = new Flower();
            console.log(rf);
            
        }

        // Canvas Daten werden hier gespeichert
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Blumen:
        for (let i: number = 0; i < 8; i++) {
            let sf: Flower = new Flower();
            flowers[i] = sf;
            flowers.push(sf);
            console.log(sf);
        }

        // Startposition wird zum Array hinzugefügt
        for (let i: number = 0; i < count; i++) {
            var s: Bee = new Bee(635, 310);
            bees[i] = s;
        }

        window.setTimeout(animate, 50);
    }

    // Alle Funktionen:
    function animate(): void {

        for (let k: number = 0; k < flowers.length; k++) {
            let f: Flower = flowers[k];
            f.draw();

        }
        // hier wird das Bild wieder geholt
        crc2.putImageData(saveBackgroundData, 0, 0);

        // Hier habe ich eigentlich den Aufruf für die Wolken ... keine Ahnung warum das nicht klappt :(
        // drawCloud();
        
        // Loop um die Bienen in eine zufällige Richtung (nach links) fliegen zu lassen
        for (var i: number = 0; i < count; i++) {
            var s: Bee = bees[i];

            if (s.x < 0) {
                s.x = crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = crc2.canvas.height;
            }
            if (s.y >= crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }

    }
