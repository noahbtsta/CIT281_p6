class Shape {
    constructor(sides = []) {
      this.sides = sides;


    }
    perimeter = () => this.sides.length > 1  ? (this.sides.reduce((sides, current) => sides + current, 0)) :0
  
}
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        const ss = (this.sideA + this.sideB + this.sideC)/2;
        return Math.sqrt((ss*(ss-this.sideA)*(ss-this.sideB)*(ss-this.sideC)));
    }
}

function determineShapes(arr) {
    for (item of arr) {
        switch(item.length) {
            case 2:
                length = item[0]
                width = item[1]
                if (length === width) {
                    console.log(`Square with sides ${length}, ${width} has perimeter of ${new Rectangle(length, width).perimeter()} and area of ${new Rectangle(length, width).area()}`)
                } else {
                    console.log(`Rectangle with sides ${length}, ${width} has perimeter of ${new Rectangle(length, width).perimeter()} and area of ${new Rectangle(length, width).area()}`)
                }
                
                break;
            case 3:
                sideA = item[0]
                sideB = item[1]
                sideC = item[2]
                console.log(`Triangle with sides ${sideA}, ${sideB}, ${sideC} has perimeter of ${new Triangle(sideA, sideB, sideC).perimeter()} and area of ${new Triangle(sideA, sideB, sideC).area()}`)
                break;
            case 1:
                console.log("Shape with 1 side unsupported")
                break;
            case 0:
                console.log("Shape with 0 sides unsupported")
                break;
            default:
                console.log("Shapes can only have inputs of 2, or 3 sides")
        }
       
    }
}

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
console.log(determineShapes(data));
