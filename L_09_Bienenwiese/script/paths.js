"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    //export let cloudPath: Path2D;
    /**
    export let shapesBees: number[][][] = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43], [8, 20]
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55], [14, 14]
        ],
        [
            [39, 0], [57, 26], [68, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 91], [28, 76], [2, 56], [15, 19]
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39]
        ]
    ];
    **/
    function createPaths() {
        L09_Bienenwiese.beePath = createBeePaths();
        cloudPath = createCloudPath();
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
        let particle = new Path2D();
        for (let type of _shapes) {
            let first = true;
            let nParticles = 23;
            let radiusParticle = 15;
            let gradient = L09_Bienenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            for (let coordinates of type) {
                if (first)
                    particle.moveTo(coordinates[0], coordinates[1]);
                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
                gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
                particle.moveTo(coordinates[0], coordinates[1]);
                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
                gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
                first = false;
                L09_Bienenwiese.crc2.save();
                L09_Bienenwiese.crc2.translate(_position.x, _position.y);
                L09_Bienenwiese.crc2.fillStyle = gradient;
                for (let drawn = 0; drawn < nParticles; drawn++) {
                    L09_Bienenwiese.crc2.save();
                    let x = (Math.random() - 0.5) * _size.x;
                    let y = -(Math.random() * _size.y);
                    L09_Bienenwiese.crc2.translate(x, y);
                    L09_Bienenwiese.crc2.fill(particle);
                    L09_Bienenwiese.crc2.restore();
                }
                L09_Bienenwiese.crc2.restore();
            }
            return particle;
        }
    }
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=paths.js.map