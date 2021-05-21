
namespace Blumenwiese {
    //inspo videos from EIA Inverted
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.5;
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    canvas.width = 1000;
    canvas.height = 700;

    function handleLoad(): void {

        console.log("READY");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d")!;

        let horizon: number = crc2.canvas.height * golden;
        let mountainsPosition: Vector = { x: 0, y: horizon };

        drawBackground();
        drawMountains(mountainsPosition, 75, 200, "grey", "white");
        drawMountains(mountainsPosition, 50, 150, "grey", "lightgrey");
        drawCloud({ x: 200, y: 50 }, { x: 100, y: 25 });
        drawCloud({ x: 50, y: 160 }, { x: 100, y: 25 });
        drawCloud({ x: 250, y: 150 }, { x: 100, y: 25 });
        drawSun({ x: 50, y: 50 });

        drawFlowers();
        drawTree({ x: -1000, y: 100 });
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#467deb");
        gradient.addColorStop(0.4, "lightblue");
        gradient.addColorStop(0.5, "lightgreen");
        gradient.addColorStop(1, "HSL(100, 100%, 28%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("MOUNTAINS");

        let stepMin: number = 50;
        let stepMax: number = 30;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

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

    function drawSun(_position: Vector): void {
        console.log("SUN");

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 95%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    //inspired by Gina 
    function drawDaisy(): void {
        console.log("FLOWERS");

        let x: number = (Math.random() * canvas.width - 10);
        let y: number = (Math.random() * (canvas.height - canvas.height * 0.5) + canvas.height * 0.5);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.translate(x, y);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = "#358443";

        crc2.stroke();

        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#CED54A";
        crc2.strokeStyle = "#CED54A";
        crc2.fill();
        crc2.stroke();

        for (let blossoms: number = 80; blossoms > 8; blossoms -= 8) {

            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#ffffff";
            crc2.fill();

            crc2.stroke();
        }

        crc2.restore();
    }

    function drawTulip(): void {

        let x: number = (Math.random() * canvas.width - 10);
        let y: number = (Math.random() * (canvas.height - canvas.height * 0.5) + canvas.height * 0.5);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.translate(x, y);
        crc2.lineTo(0, 30);
        crc2.strokeStyle = "#358443";

        crc2.stroke();

        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 9, 0, 1 * Math.PI);
        
        crc2.fillStyle = "#AD407D";
        crc2.strokeStyle = "#AD407D";
        crc2.fill();
        crc2.stroke();
        moveTo(0, 20);
        crc2.lineTo(-10, -10);
        crc2.lineTo(-3, 2);
        crc2.lineTo(1, -10);
        crc2.lineTo(4, 2);
        crc2.lineTo(9, -10);
        crc2.lineTo(9, 3);
        crc2.closePath();
        crc2.fillStyle = "#AD407D";
        crc2.fill();
        crc2.stroke();

        crc2.restore();
    
    }

    function drawTree(_position: Vector): void {
          
          crc2.beginPath();
          crc2.fillStyle = "#7C6645";
  
          crc2.fillRect(_position.x + 1090, _position.y + 325, 35, 260);
          crc2.fillRect(_position.x + 1100, _position.y + 350, 90, 6);
          crc2.closePath();
         
         
          crc2.beginPath();
          crc2.fillStyle = "#2E541A";
          
  
          crc2.arc(_position.x + 1110, _position.y + 150, 80, 0, 2 * Math.PI);
          crc2.arc(_position.x + 1160, _position.y + 230, 85, 0, 2 * Math.PI);
          crc2.arc(_position.x + 1080, _position.y + 285, 65, 0, 2 * Math.PI);
          crc2.arc(_position.x + 1045, _position.y + 205, 75, 0, 2 * Math.PI);
          crc2.arc(_position.x + 1035, _position.y + 205, 85, 0, 2 * Math.PI);
          

          
  
          crc2.closePath();
          crc2.fill();
          //crc2.stroke();
    }

    function drawFlowers(): void {

        for (let i: number = 0; i < 30; i++) {
            drawDaisy();
            
        }

        for (let i: number = 0; i < 20; i++) {
            drawTulip();
            
        }

    }

}