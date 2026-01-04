function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function() {
        return width * height
    }
}

//example run
const myRectangle = new Rectangle(5, 4)
console.log(myRectangle.area()); // 20
