namespace L09_Bienenwiese {

    export class Background {
        constructor() {

            // console.log("Background");
            
            // Himmel
            crc2.fillStyle = "#80b3ff"; // Blau
            crc2.fillRect(0, -200, crc2.canvas.width, crc2.canvas.height);

            //Feld 
            crc2.fillStyle = "#009900"; // Grün
            crc2.fillRect(0, 200, crc2.canvas.width, crc2.canvas.height);

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

        drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x - 80, _y + 80);
            crc2.lineTo(_x, _y - 80);
            crc2.lineTo(_x + 80, _y + 80);
            crc2.closePath();
            crc2.fill();
        }

        
        drawSun(_x: number, _y: number): void {
            //console.log("SUN");

            let r1: number = 30;
            let r2: number = 150;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        drawTree(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "#7C6645";

            crc2.fillRect(_x, _y + 50, 35, 260);
            crc2.fillRect(_x, _y + 50, 90, 6);
            crc2.closePath();


            crc2.beginPath();
            crc2.fillStyle = "#2E541A";


            crc2.arc(_x - 30, _y - 20, 80, 0, 2 * Math.PI);
            crc2.arc(_x + 70, _y - 80, 85, 0, 2 * Math.PI);
            crc2.arc(_x + 30, _y - 30, 85, 0, 2 * Math.PI);
            crc2.arc(_x - 20, _y - 100, 65, 0, 2 * Math.PI);
            crc2.arc(_x + 20, _y - 120, 75, 0, 2 * Math.PI);
            

            crc2.fill();
            crc2.closePath();

        }

        

    }


}