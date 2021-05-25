"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    L09_Bienenwiese.cloudPositions = [
        [
            [200, 50], [50, 160], [250, 150]
        ]
    ];
    function createPaths() {
        L09_Bienenwiese.beePath = createBeePaths();
        L09_Bienenwiese.cloudPath = createCloudPath();
    }
    L09_Bienenwiese.createPaths = createPaths;
    function createBeePaths() {
        console.log("beeeeeee");
        let path = new Path2D();
        let x = (Math.random() * L09_Bienenwiese.canvas.width - 10);
        let y = (Math.random() * (L09_Bienenwiese.canvas.height));
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.moveTo(x, y);
        L09_Bienenwiese.crc2.translate(x, y);
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
        return path;
    }
    function createCloudPath() {
        console.log("CLOUD");
        let nParticles = 23;
        let radiusParticle = 15;
        let particle = new Path2D();
        let gradient = L09_Bienenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.translate(200, 50);
        L09_Bienenwiese.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Bienenwiese.crc2.save();
            let x = (Math.random() - 0.5) * 100;
            let y = -(Math.random() * 25);
            L09_Bienenwiese.crc2.translate(x, y);
            L09_Bienenwiese.crc2.fill(particle);
            L09_Bienenwiese.crc2.restore();
        }
        L09_Bienenwiese.crc2.restore();
        return particle;
    }
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=paths.js.map