namespace L09_Bienenwiese {
    export class Bee {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        // Wird bei animate aufgerufen
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * 6 - 3;
        }

        // Deine süße kleine Biene
        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.translate(this.x, this.y);
            crc2.quadraticCurveTo(16, -10, 16, 10);
            crc2.quadraticCurveTo(16, 16, 2, 13);
            crc2.quadraticCurveTo(-8, -1, 2, 0);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.lineTo(0, 8);
            crc2.stroke();
            crc2.moveTo(10, -3);
            crc2.quadraticCurveTo(-1, 14, 13, 13);

            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            moveTo(-13, 5);
            crc2.arc(6, -8, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.strokeStyle = "#000000";
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            moveTo(-13, 5);
            crc2.arc(12, -8, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.strokeStyle = "#000000";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

        }


    }
}