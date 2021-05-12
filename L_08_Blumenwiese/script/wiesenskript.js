"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.5;
    function handleLoad() {
        console.log("READY");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let mountainsPosition = { x: 0, y: horizon };
        drawBackground();
        drawMountains(mountainsPosition, 75, 200, "grey", "white");
        drawMountains(mountainsPosition, 50, 150, "grey", "lightgrey");
        drawCloud({ x: 200, y: 50 }, { x: 100, y: 25 });
        drawCloud({ x: 50, y: 160 }, { x: 100, y: 25 });
        drawCloud({ x: 250, y: 150 }, { x: 100, y: 25 });
        drawSun({ x: 50, y: 50 });
        drawOneFlower({ x: 57, y: 490 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#467deb");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 100%, 28%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("MOUNTAINS");
        let stepMin = 50;
        let stepMax = 30;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("CLOUD");
        let nParticles = 23;
        let radiusParticle = 15;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("SUN");
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawOneFlower(_position) {
        console.log("FLOWERS");
        crc2.beginPath();
        crc2.arc(50, 500, 4, 0, Math.PI * 2, false);
        crc2.fillStyle = "#ECEF10";
        crc2.strokeStyle = "#ECEF10";
        crc2.translate(_position.x, _position.y);
        crc2.fill();
        crc2.stroke();
        for (let blossoms = 0; blossoms < 5; blossoms++) {
            crc2.save();
            crc2.beginPath();
            crc2.ellipse(0, 0, 5, 7, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#E18912";
            crc2.strokeStyle = "#E18912";
            crc2.stroke();
            let x = (Math.random() * 10);
            let y = -(Math.random() * 10);
            crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
        }
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=wiesenskript.js.map