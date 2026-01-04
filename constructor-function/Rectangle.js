function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height
}

//example run
const myRectangle = new Rectangle(5, 4)
console.log(myRectangle.area()); // 20
