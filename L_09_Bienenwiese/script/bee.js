"use strict";
var L09_Bienenwiese;
(function (L09_Bienenwiese) {
    class Bee {
        constructor(_size, _position) {
            console.log("bee constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Bienenwiese.Vector(0, 0);
            this.velocity = new L09_Bienenwiese.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        fly(_timeslice) {
            // console.log("Asteroid move");
            let offset = new L09_Bienenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Bienenwiese.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Bienenwiese.crc2.canvas.height;
            if (this.position.x > L09_Bienenwiese.crc2.canvas.width)
                this.position.x -= L09_Bienenwiese.crc2.canvas.width;
            if (this.position.y > L09_Bienenwiese.crc2.canvas.height)
                this.position.y -= L09_Bienenwiese.crc2.canvas.height;
        }
        draw() {
            console.log("bee draw");
            L09_Bienenwiese.crc2.save();
            L09_Bienenwiese.crc2.translate(this.position.x, this.position.y);
            L09_Bienenwiese.crc2.scale(this.size, this.size);
            L09_Bienenwiese.crc2.translate(-50, -50);
            L09_Bienenwiese.crc2.stroke(L09_Bienenwiese.beePath);
            L09_Bienenwiese.crc2.restore();
        }
    }
    L09_Bienenwiese.Bee = Bee;
})(L09_Bienenwiese || (L09_Bienenwiese = {}));
//# sourceMappingURL=bee.js.map