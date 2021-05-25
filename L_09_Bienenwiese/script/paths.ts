namespace L09_Bienenwiese {
    export let beePath: Path2D;
    export let cloudPath: Path2D ;
    
    export let cloudPositions: number[][][] = [
        [
            [200, 50], [50, 160], [250, 150]
        ]
    ];
    

    export function createPaths(): void {
        beePath = createBeePaths();
        cloudPath = createCloudPath();
    }

    function createBeePaths(): Path2D {
        console.log("beeeeeee");
        
        let path: Path2D = new Path2D();
        
        let x: number = (Math.random() * canvas.width - 10);
        let y: number = (Math.random() * (canvas.height));

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.translate(x, y);
        crc2.quadraticCurveTo(16, -10, 16, 10);
        crc2.quadraticCurveTo(16, 16, 2, 13);
        crc2.quadraticCurveTo(-8, -1, 2 , 0 );
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 2;
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.lineTo(0, 8);
        crc2.stroke();
        crc2.moveTo(10, -3);
        crc2.quadraticCurveTo(-1, 14, 13, 13);
        
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        moveTo(-13, 5);
        crc2.arc(6, -8, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.strokeStyle = "#000000";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        moveTo(-13, 5);
        crc2.arc(12, -8, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.strokeStyle = "#000000";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
        
        return path;
    }
    
    function createCloudPath(): Path2D  {
        console.log("CLOUD");
        let nParticles: number = 23;
        let radiusParticle: number = 15;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");

        crc2.save();
        crc2.translate(200, 50);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * 100;
            let y: number = - (Math.random() * 25);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

        return particle;
        
    }
}