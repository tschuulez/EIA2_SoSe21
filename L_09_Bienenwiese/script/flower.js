"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    class Flower {
        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomStyle();
            this.draw();
        }
        draw() {
            if (this.style == 1) {
                this.drawDaisy();
            }
            else {
                this.drawTulip();
            }
        }
        // damit draw funktioniert, random Style vergeben zwischen 1 und 2 - geht bestimmt auch anders aber keine Ahnung wie :D meine Methode hat nicht geklappt
        setRandomStyle() {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }
        setRandomPosition() {
            this.x = (Math.random() * (880)) + 200;
            this.y = (Math.random() * (700 - 255)) + 230; // damit sie nur auf der Wiese bleiben - 255
        }
        drawDaisy() {
            //console.log("FLOWERS");
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.moveTo(this.x, this.y);
            L09_Bienenwiese.crc2.translate(this.x, this.y);
            L09_Bienenwiese.crc2.quadraticCurveTo(10, 5, 10, 30);
            L09_Bienenwiese.crc2.strokeStyle = "#358443";
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.beginPath();
            moveTo(10, 20);
            L09_Bienenwiese.crc2.arc(0, 0, 6, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fillStyle = "#CED54A";
            L09_Bienenwiese.crc2.strokeStyle = "#CED54A";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.closePath();
            for (let blossoms = 80; blossoms > 8; blossoms -= 8) {
                L09_Bienenwiese.crc2.beginPath();
                moveTo(10, 20);
                L09_Bienenwiese.crc2.rotate(45 * Math.PI / 20);
                L09_Bienenwiese.crc2.arc(10, 0, 5, 0, 2 * Math.PI);
                L09_Bienenwiese.crc2.fillStyle = "#ffffff";
                L09_Bienenwiese.crc2.strokeStyle = "#ffffff";
                L09_Bienenwiese.crc2.fill();
                L09_Bienenwiese.crc2.stroke();
            }
            L09_Bienenwiese.crc2.restore();
        }
        drawTulip() {
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.moveTo(this.x, this.y);
            L09_Bienenwiese.crc2.translate(this.x, this.y);
            L09_Bienenwiese.crc2.lineTo(0, 30);
            L09_Bienenwiese.crc2.strokeStyle = "#358443";
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.beginPath();
            moveTo(10, 20);
            L09_Bienenwiese.crc2.arc(0, 0, 9, 0, 1 * Math.PI);
            L09_Bienenwiese.crc2.fillStyle = "#AD407D";
            L09_Bienenwiese.crc2.strokeStyle = "#AD407D";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
            moveTo(0, 20);
            L09_Bienenwiese.crc2.lineTo(-10, -10);
            L09_Bienenwiese.crc2.lineTo(-3, 2);
            L09_Bienenwiese.crc2.lineTo(1, -10);
            L09_Bienenwiese.crc2.lineTo(4, 2);
            L09_Bienenwiese.crc2.lineTo(9, -10);
            L09_Bienenwiese.crc2.lineTo(9, 3);
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.fillStyle = "#AD407D";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.restore();
        }
        // Für beide :) 
        drawFlowers() {
            for (let i = 0; i < 30; i++) {
                this.drawDaisy();
            }
            for (let i = 0; i < 20; i++) {
                this.drawTulip();
            }
        }
    }
    L09_Bienenwiese.Flower = Flower;
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=flower.js.map