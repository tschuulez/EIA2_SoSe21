namespace generativeArt {

let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let c: CanvasRenderingContext2D = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height =  window.innerHeight;


c.fillStyle = "#87898c";
c.fillRect(0, 0, c.canvas.width, c.canvas.height);

let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d")!;


pattern.fillStyle = "#87898c";
pattern.fillRect(0, 0, innerWidth, innerHeight);
pattern.moveTo(0, 10);
pattern.lineTo(10, 10);
pattern.lineTo(20, 0);
pattern.lineTo(30, 0);
pattern.lineTo(40, 10);
pattern.lineTo(30, 20);
pattern.lineTo(20, 20);
pattern.lineTo(10, 10);
pattern.stroke();

c.fillStyle = c.createPattern(pattern.canvas, "repeat")!;
c.fillRect(0, 0, c.canvas.width, c.canvas.height);

//let x: number = Math.random() * innerWidth;
//either positive or negative
//let dx: number = 4;
let radius: number = 30;
//let y: number = Math.random() * innerHeight;
//let dy: number = 4;

for ( let i: number = 0; i < 200; i++) { 
    let y: number = Math.random() * innerHeight;
    let x: number = Math.random() * innerWidth;
    c.beginPath();
    c.arc( x, y, radius, 0, Math.PI * 2, false); 
    c.fillStyle = "#ffffff"; 
    c.strokeStyle = "#000000";
    c.fill();
    c.stroke(); 
}

/** 
function animate(): void { 
    requestAnimationFrame(animate); 
    
    c.clearRect( 0, 0, innerWidth, innerHeight); 
    c.beginPath();
    c.arc( x, y, radius, 0, Math.PI * 2, false); 
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
}