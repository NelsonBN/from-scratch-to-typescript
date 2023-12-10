class Square {
    constructor(private _size: number) {}

    get size(): number {
        return this._size * this._size;
    }

    set size(value: number) {
        this._size = value;
    }
}

const square = new Square(2);
console.log(square.size);

square.size = 10;
console.log(square.size);

console.log("---------------");

class Person {
    private _firstName: string;
    private _lastName: string;

    public set firstName(name: string)
    {
        this._firstName = name;
    }

    public set lastName(name: string)
    {
        this._lastName = name;
    }

    public get name()
    {
        return `${this._firstName} ${this._lastName}`;
    }
}

let person = new Person();
person.firstName = "Max";
person.lastName = "Joh"

console.log(person.name);