"use strict";
var generativeArt;
(function (generativeArt) {
    let canvas = document.querySelector("canvas");
    let c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.fillStyle = "#87898c";
    c.fillRect(0, 0, c.canvas.width, c.canvas.height);
    let x = Math.random() * innerWidth;
    //either positive or negative
    let dx = 4;
    let radius = 30;
    let y = Math.random() * innerHeight;
    let dy = 4;
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "#ffffff";
        c.stroke();
        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }
        x += dx;
        y += dy;
    }
    animate();
})(generativeArt || (generativeArt = {}));
//# sourceMappingURL=script.js.map