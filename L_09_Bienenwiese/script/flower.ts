namespace L09_Bienenwiese {

    export class Flower {
        x: number;
        y: number;
        style: number;

        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomStyle();
            this.draw();
        }

        draw(): void { // sonst würden sie übereinander gezeichnet werden

            if (this.style == 1) {
                this.drawDaisy();

            } else {
                this.drawTulip();
            }
        }

        // damit draw funktioniert, random Style vergeben zwischen 1 und 2 - geht bestimmt auch anders aber keine Ahnung wie :D meine Methode hat nicht geklappt
        setRandomStyle(): void {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (880)) + 200;
            this.y = (Math.random() * (700 - 255)) + 230; // damit sie nur auf der Wiese bleiben - 255
        }


        drawDaisy(): void {
            //console.log("FLOWERS");
    
            crc2.save();
    
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.translate(this.x, this.y);
            crc2.quadraticCurveTo(10, 5, 10, 30);
            crc2.strokeStyle = "#358443";
    
            crc2.stroke();
    
            crc2.beginPath();
            moveTo(10, 20);
            crc2.arc(0, 0, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#CED54A";
            crc2.strokeStyle = "#CED54A";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
    
            for (let blossoms: number = 80; blossoms > 8; blossoms -= 8) {
    
                crc2.beginPath();
                moveTo(10, 20);
                crc2.rotate(45 * Math.PI / 20);
                crc2.arc(10, 0, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.strokeStyle = "#ffffff";
                crc2.fill();
    
                crc2.stroke();
            }
    
            crc2.restore();
        }
    
        drawTulip(): void {
    
            crc2.save();
    
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.translate(this.x, this.y);
            crc2.lineTo(0, 30);
            crc2.strokeStyle = "#358443";
    
            crc2.stroke();
    
            crc2.beginPath();
            moveTo(10, 20);
            crc2.arc(0, 0, 9, 0, 1 * Math.PI);
    
            crc2.fillStyle = "#AD407D";
            crc2.strokeStyle = "#AD407D";
            crc2.fill();
            crc2.stroke();
            moveTo(0, 20);
            crc2.lineTo(-10, -10);
            crc2.lineTo(-3, 2);
            crc2.lineTo(1, -10);
            crc2.lineTo(4, 2);
            crc2.lineTo(9, -10);
            crc2.lineTo(9, 3);
            crc2.closePath();
            crc2.fillStyle = "#AD407D";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
    
            crc2.restore();
    
        }
    
        // Für beide :) 
        drawFlowers(): void {
    
            for (let i: number = 0; i < 30; i++) {
                this.drawDaisy();
    
            }
    
            for (let i: number = 0; i < 20; i++) {
                this.drawTulip();
    
            }
    
        }
    }
}