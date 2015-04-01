/**
 * Created by nexusstar on 31.03.15.
 */

function MutablePoint3d(x, y, z) {
    if (!(this instanceof MutablePoint3d)) {
        return new MutablePoint3d(x, y, z);
    }
    this.getX = function () {
        return x;
    };

    this.getY = function () {
        return y;
    };

    this.getZ = function () {
        return z;
    };

    this.move = function (dx, dy, dz) {
        x += dx;
        y += dy;
        z += dz;
    };

}

MutablePoint3d.prototype.toString = function(){
    return "(" + [this.getX(), this.getY(), this.getZ()].join(",") + ")";
};

var p1 = MutablePoint3d(0, 0, 0);

p1.move(0, 0, -1);

console.log(p1);
console.log(p1.getX() == 0); // true
console.log(p1.getY() == 0); // true
console.log(p1.getZ() == -1); // true

