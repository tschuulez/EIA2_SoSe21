namespace L09_Bienenwiese {

    export class Cloud {
        x: number;
        y: number;
        speed: number; // für die move Methode, damit sie fliegen

        // ich glaube hier muss das so :D
        constructor() {
            this.drawCloud();
        }
        
        // Deine Wolke
        drawCloud(): void {
            console.log("CLOUD");
        
            let nParticles: number = 23;
            let radiusParticle: number = 15;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
        
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.fillStyle = gradient;
        
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.x;
                let y: number = - (Math.random() * this.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

        // Hier dann move Forward glaube ich
        // moveForward(): void {
        //     this.x += this.speed * (+0.5) ; // - nach links und + nach rechts           
        // }

    }
}