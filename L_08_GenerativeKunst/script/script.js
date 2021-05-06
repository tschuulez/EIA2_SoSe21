"use strict";
var generativeArt;
(function (generativeArt) {
    function draw() {
        let canvas = document.querySelector("canvas");
        let c = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        c.fillStyle = "#87898c";
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.fillStyle = "#87898c";
        pattern.fillRect(0, 0, innerWidth, innerHeight);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 20);
        pattern.lineTo(20, 30);
        pattern.lineTo(30, 40);
        pattern.lineTo(40, 50);
        pattern.lineTo(50, 60);
        pattern.lineTo(60, 70);
        pattern.lineTo(70, 80);
        pattern.lineTo(80, 90);
        pattern.strokeStyle = "#ff0000";
        pattern.stroke();
        c.fillStyle = c.createPattern(pattern.canvas, "repeat");
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);
        //let x: number = Math.random() * innerWidth;
        //either positive or negative
        //let dx: number = 4;
        let radius = 30;
        //let y: number = Math.random() * innerHeight;
        //let dy: number = 4;
        for (let i = 0; i < 200; i++) {
            let y = Math.random() * innerHeight;
            let x = Math.random() * innerWidth;
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI * 2, false);
            c.fillStyle = "#000000";
            c.strokeStyle = "#000000";
            c.fill();
            c.stroke();
        }
    }
    draw();
    /** bewegender Circle, dachte das sei aber zu wenig für diese Abgabe
    function animate(): void {
        requestAnimationFrame(animate);
        
        c.clearRect( 0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.arc( 200, 200, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "#ffffff";
        c.fillStyle = "#ffffff";
        c.stroke();
    
        if ( x + radius > innerWidth || x - radius < 0 ) {
            dx = -dx;
            
        }
        if ( y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }
        x += dx;
        y += dy;
    
    }
    
    animate();
    **/
})(generativeArt || (generativeArt = {}));
//# sourceMappingURL=script.js.map