"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        // Wird bei animate aufgerufen
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * 6 - 3;
        }
        // Deine süße kleine Biene
        draw() {
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.moveTo(this.x, this.y);
            L09_Bienenwiese.crc2.translate(this.x, this.y);
            L09_Bienenwiese.crc2.quadraticCurveTo(16, -10, 16, 10);
            L09_Bienenwiese.crc2.quadraticCurveTo(16, 16, 2, 13);
            L09_Bienenwiese.crc2.quadraticCurveTo(-8, -1, 2, 0);
            L09_Bienenwiese.crc2.strokeStyle = "#000000";
            L09_Bienenwiese.crc2.lineWidth = 2;
            L09_Bienenwiese.crc2.fillStyle = "yellow";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.lineTo(0, 8);
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.moveTo(10, -3);
            L09_Bienenwiese.crc2.quadraticCurveTo(-1, 14, 13, 13);
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.beginPath();
            moveTo(-13, 5);
            L09_Bienenwiese.crc2.arc(6, -8, 6, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fillStyle = "lightblue";
            L09_Bienenwiese.crc2.strokeStyle = "#000000";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.beginPath();
            moveTo(-13, 5);
            L09_Bienenwiese.crc2.arc(12, -8, 6, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fillStyle = "lightblue";
            L09_Bienenwiese.crc2.strokeStyle = "#000000";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.restore();
        }
    }
    L09_Bienenwiese.Bee = Bee;
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=bee.js.map