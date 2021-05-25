"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    L09_Bienenwiese.canvas = document.querySelector("canvas");
    L09_Bienenwiese.canvas.width = 1000;
    L09_Bienenwiese.canvas.height = 700;
    let bees = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("READY");
        if (!L09_Bienenwiese.canvas)
            return;
        L09_Bienenwiese.crc2 = L09_Bienenwiese.canvas.getContext("2d");
        drawBackground();
        L09_Bienenwiese.createPaths();
        createBees(1);
        console.log(bees.length);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Bienenwiese.crc2.createLinearGradient(0, 0, 0, L09_Bienenwiese.crc2.canvas.height);
        gradient.addColorStop(0, "#467deb");
        gradient.addColorStop(0.4, "lightblue");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "HSL(100, 100%, 28%)");
        L09_Bienenwiese.crc2.fillStyle = gradient;
        L09_Bienenwiese.crc2.fillRect(0, 0, L09_Bienenwiese.crc2.canvas.width, L09_Bienenwiese.crc2.canvas.height);
        let mountainsPosition = { x: 0, y: (L09_Bienenwiese.crc2.canvas.height * 0.5) };
        drawMountains(mountainsPosition, 75, 200, "grey", "white");
        drawMountains(mountainsPosition, 50, 150, "grey", "lightgrey");
        drawSun({ x: 50, y: 50 });
        drawFlowers();
        drawTree({ x: -1000, y: 100 });
    }
    function createBees(_nBees) {
        console.log("Create bees");
        for (let i = 0; i < _nBees; i++) {
            let bee = new L09_Bienenwiese.Bee(1.0);
            bees.push(bee);
        }
    }
    function update() {
        console.log("Update");
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let bee of bees) {
            bee.fly(1 / 50);
            bee.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        //console.log("MOUNTAINS");
        let stepMin = 50;
        let stepMax = 30;
        let x = 0;
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.translate(_position.x, _position.y);
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.moveTo(0, 0);
        L09_Bienenwiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Bienenwiese.crc2.lineTo(x, y);
        } while (x < L09_Bienenwiese.crc2.canvas.width);
        L09_Bienenwiese.crc2.lineTo(x, 0);
        L09_Bienenwiese.crc2.closePath();
        let gradient = L09_Bienenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Bienenwiese.crc2.fillStyle = gradient;
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.restore();
    }
    /**
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("CLOUD");

        let nParticles: number = 23;
        let radiusParticle: number = 15;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    **/
    function drawSun(_position) {
        //console.log("SUN");
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Bienenwiese.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 100%, 0)");
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.translate(_position.x, _position.y);
        L09_Bienenwiese.crc2.fillStyle = gradient;
        L09_Bienenwiese.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.restore();
    }
    //inspired by Gina 
    function drawDaisy() {
        //console.log("FLOWERS");
        let x = (Math.random() * L09_Bienenwiese.canvas.width - 10);
        let y = (Math.random() * (L09_Bienenwiese.canvas.height - L09_Bienenwiese.canvas.height * 0.5) + L09_Bienenwiese.canvas.height * 0.5);
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.moveTo(x, y);
        L09_Bienenwiese.crc2.translate(x, y);
        L09_Bienenwiese.crc2.quadraticCurveTo(10, 5, 10, 30);
        L09_Bienenwiese.crc2.strokeStyle = "#358443";
        L09_Bienenwiese.crc2.stroke();
        L09_Bienenwiese.crc2.beginPath();
        moveTo(10, 20);
        L09_Bienenwiese.crc2.arc(0, 0, 6, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.fillStyle = "#CED54A";
        L09_Bienenwiese.crc2.strokeStyle = "#CED54A";
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.stroke();
        L09_Bienenwiese.crc2.closePath();
        for (let blossoms = 80; blossoms > 8; blossoms -= 8) {
            L09_Bienenwiese.crc2.beginPath();
            moveTo(10, 20);
            L09_Bienenwiese.crc2.rotate(45 * Math.PI / 20);
            L09_Bienenwiese.crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            L09_Bienenwiese.crc2.fillStyle = "#ffffff";
            L09_Bienenwiese.crc2.strokeStyle = "#ffffff";
            L09_Bienenwiese.crc2.fill();
            L09_Bienenwiese.crc2.stroke();
        }
        L09_Bienenwiese.crc2.restore();
    }
    function drawTulip() {
        let x = (Math.random() * L09_Bienenwiese.canvas.width - 10);
        let y = (Math.random() * (L09_Bienenwiese.canvas.height - L09_Bienenwiese.canvas.height * 0.5) + L09_Bienenwiese.canvas.height * 0.5);
        L09_Bienenwiese.crc2.save();
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.moveTo(x, y);
        L09_Bienenwiese.crc2.translate(x, y);
        L09_Bienenwiese.crc2.lineTo(0, 30);
        L09_Bienenwiese.crc2.strokeStyle = "#358443";
        L09_Bienenwiese.crc2.stroke();
        L09_Bienenwiese.crc2.beginPath();
        moveTo(10, 20);
        L09_Bienenwiese.crc2.arc(0, 0, 9, 0, 1 * Math.PI);
        L09_Bienenwiese.crc2.fillStyle = "#AD407D";
        L09_Bienenwiese.crc2.strokeStyle = "#AD407D";
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.stroke();
        moveTo(0, 20);
        L09_Bienenwiese.crc2.lineTo(-10, -10);
        L09_Bienenwiese.crc2.lineTo(-3, 2);
        L09_Bienenwiese.crc2.lineTo(1, -10);
        L09_Bienenwiese.crc2.lineTo(4, 2);
        L09_Bienenwiese.crc2.lineTo(9, -10);
        L09_Bienenwiese.crc2.lineTo(9, 3);
        L09_Bienenwiese.crc2.closePath();
        L09_Bienenwiese.crc2.fillStyle = "#AD407D";
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.stroke();
        L09_Bienenwiese.crc2.closePath();
        L09_Bienenwiese.crc2.restore();
    }
    function drawTree(_position) {
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.fillStyle = "#7C6645";
        L09_Bienenwiese.crc2.fillRect(_position.x + 1090, _position.y + 325, 35, 260);
        L09_Bienenwiese.crc2.fillRect(_position.x + 1100, _position.y + 350, 90, 6);
        L09_Bienenwiese.crc2.closePath();
        L09_Bienenwiese.crc2.beginPath();
        L09_Bienenwiese.crc2.fillStyle = "#2E541A";
        L09_Bienenwiese.crc2.arc(_position.x + 1110, _position.y + 150, 80, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.arc(_position.x + 1160, _position.y + 230, 85, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.arc(_position.x + 1080, _position.y + 285, 65, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.arc(_position.x + 1045, _position.y + 205, 75, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.arc(_position.x + 1035, _position.y + 205, 85, 0, 2 * Math.PI);
        L09_Bienenwiese.crc2.fill();
        L09_Bienenwiese.crc2.closePath();
        //crc2.stroke();
    }
    function drawFlowers() {
        for (let i = 0; i < 30; i++) {
            drawDaisy();
        }
        for (let i = 0; i < 20; i++) {
            drawTulip();
        }
    }
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=main.js.map