//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;   // Private property for width
        this._height = height; // Private property for height
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate the area
    getArea() {
        return this.width * this.height;
    }
}

// Square class definition
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Call the parent constructor with equal width and height
    }

    // Method to calculate the perimeter
    getPerimeter() {
        return 4 * this.width; // Since width and height are the same
    }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
