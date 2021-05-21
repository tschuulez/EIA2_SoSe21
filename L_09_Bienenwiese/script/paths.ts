namespace L09_Bienenwiese {
    export let beePath: Path2D;
    export let cloudPath: Path2D;
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

    export function createPaths(): void {
        beePath = createBeePaths();
        cloudPath = createCloudPath();
    }

    function createBeePaths(): Path2D {
        console.log("beeeeeee");
        let paths: Path2D[] = [];

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


        // console.groupEnd();
        path.closePath();
        paths.push(path);

        return path;
    }

    function createCloudPath(_shapes: number[][][]): Path2D {
        console.log("CLOUD");

        let particle: Path2D = new Path2D();
        for (let type of _shapes) {
            let first: boolean = true;
            let nParticles: number = 23;
            let radiusParticle: number = 15;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            for (let coordinates of type) {

                if (first)
                    particle.moveTo(coordinates[0], coordinates[1]);
                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
                gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
                else
                particle.moveTo(coordinates[0], coordinates[1]);
                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                gradient.addColorStop(0, "HSLA(0, 50%, 100%, 0.5)");
                gradient.addColorStop(1, "HSLA(0, 60%, 100%, 0)");
                first = false;

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
            return particle;

        }
    }