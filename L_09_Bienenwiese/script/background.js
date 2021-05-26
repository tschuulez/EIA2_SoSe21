"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    class Background {
        constructor() {
            // console.log("Background");
            // Himmel
            L09_Bienenwiese.crc2.fillStyle = "#80b3ff"; // Blau
            L09_Bienenwiese.crc2.fillRect(0, -200, L09_Bienenwiese.crc2.canvas.width, L09_Bienenwiese.crc2.canvas.height);
            //Feld 
            L09_Bienenwiese.crc2.fillStyle = "#009900"; // Grün
            L09_Bienenwiese.crc2.fillRect(0, 200, L09_Bienenwiese.crc2.canvas.width, L09_Bienenwiese.crc2.canvas.height);
            // Wahrscheinlich werden die hier meckern ... weil ich mich wiederhole, aber habe das bei mir auch nicht anders hinbekommen
            // Dunkle Berge
            this.drawMountain(30, 120, "#00ff00", "#737373");
            this.drawMountain(250, 110, "#00ff00", "#737373");
            this.drawMountain(520, 90, "#00ff00", "#737373");
            // Helle Berge
            this.drawMountain(70, 135, "#00ff00", "#8c8c8c");
            this.drawMountain(180, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(320, 130, "#00ff00", "#8c8c8c");
            this.drawMountain(470, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(600, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(730, 120, "#00ff00", "#8c8c8c");
            //Baum
            this.drawTree(50, 370);
            // Sonne
            this.drawSun(50, 50);
        }
        drawMountain(_x, _y, _strokeColor, _fillColor) {
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.fillStyle = _fillColor;
            L09_Bienenwiese.crc2.strokeStyle = _strokeColor;
            L09_Bienenwiese.crc2.moveTo(_x - 80, _y + 80);
            L09_Bienenwiese.crc2.lineTo(_x, _y - 80);
            L09_Bienenwiese.crc2.lineTo(_x + 80, _y + 80);
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.fill();
        }
        drawSun(_x, _y) {
            //console.log("SUN");
            let r1 = 30;
            let r2 = 150;
            let gradient = L09_Bienenwiese.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 100%, 0)");
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.translate(_x, _y);
            L09_Bienenwiese.crc2.fillStyle = gradient;
            L09_Bienenwiese.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.restore();
        }
        drawTree(_x, _y) {
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.fillStyle = "#7C6645";
            L09_Bienenwiese.crc2.fillRect(_x, _y + 50, 35, 260);
            L09_Bienenwiese.crc2.fillRect(_x, _y + 50, 90, 6);
            L09_Bienenwiese.crc2.closePath();
            L09_Bienenwiese.crc2.beginPath();
            L09_Bienenwiese.crc2.fillStyle = "#2E541A";
            L09_Bienenwiese.crc2.arc(_x - 30, _y - 20, 80, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.arc(_x + 70, _y - 80, 85, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.arc(_x + 30, _y - 30, 85, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.arc(_x - 20, _y - 100, 65, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.arc(_x + 20, _y - 120, 75, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.closePath();
        }
    }
    L09_Bienenwiese.Background = Background;
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=background.js.map