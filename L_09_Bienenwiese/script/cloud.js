"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    class Cloud {
        // ich glaube hier muss das so :D
        constructor() {
            this.drawCloud();
        }
        // Deine Wolke
        drawCloud() {
            console.log("CLOUD");
            let nParticles = 23;
            let radiusParticle = 15;
            let particle = new Path2D();
            let gradient = L09_Bienenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.translate(this.x, this.y);
            L09_Bienenwiese.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_Bienenwiese.crc2.save();
                let x = (Math.random() - 0.5) * this.x;
                let y = -(Math.random() * this.y);
                L09_Bienenwiese.crc2.translate(x, y);
                L09_Bienenwiese.crc2.fill(particle);
                L09_Bienenwiese.crc2.restore();
            }
            L09_Bienenwiese.crc2.restore();
        }
    }
    L09_Bienenwiese.Cloud = Cloud;
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=cloud.js.map