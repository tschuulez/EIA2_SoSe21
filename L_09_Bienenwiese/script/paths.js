"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    L09_Bienenwiese.shapesClouds = [
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
    function createPaths() {
        L09_Bienenwiese.beePath = createBeePaths();
        L09_Bienenwiese.cloudPath = createCloudPath(L09_Bienenwiese.shapesClouds);
    }
    L09_Bienenwiese.createPaths = createPaths;
    function createBeePaths() {
        let paths = [];
        let path = new Path2D();
        // console.group(type);
        // console.log(coordinates);
        // console.groupEnd();
        path.closePath();
        paths.push(path);
        return path;
    }
    function createCloudPath(_shapes) {
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