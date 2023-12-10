class Circle {
    static pi: number = 3.14;

    private _area: number;

    constructor(radius: number) {
        this._area = Circle.calculateArea(radius);
    }

    public static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    public get area(): number {
        return this._area;
    }
}

console.log(Circle.pi);
console.log(Circle.calculateArea(5));

let circle = new Circle(2);
console.log(circle.area);