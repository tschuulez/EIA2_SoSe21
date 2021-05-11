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
        drawBackground();
        drawMountains();
        drawCloud({ x: 200, y: 50 }, { x: 100, y: 25 });
        drawCloud({ x: 50, y: 160 }, { x: 100, y: 25 });
        drawCloud({ x: 250, y: 150 }, { x: 100, y: 25 });
        drawSun({ x: 50, y: 50 });
        drawOneFlower();
        drawFLowers();
        drawBees();
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
    function drawMountains() {
        console.log("MOUNTAINS");
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
    function drawOneFlower() {
        console.log("FLOWERS");
        let nBranches = 50;
        let maxRadius = 3;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "magenta";
        crc2.fillRect(0, 0, 20, -200);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    function drawFLowers(_nFlowers, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        let transform = crc2.getTransform();
        let step = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };
        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);
        do {
            drawOneFlower();
            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        crc2.setTransform(transform);
    }
    function drawBees() {
        console.log("BEES");
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=wiesenskript.js.map