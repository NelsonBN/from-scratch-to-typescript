class Box<T>
{
    private _value: T;

    constructor(value: T)
    {
        this._value = value;
    }

    public get value(): T
    {
        return this._value;
    }

    public set value(value: T)
    {
        this._value = value;
    }
}

const box1 = new Box<string>("Hello");
console.log(box1.value);

const box2 = new Box<number>(123);
console.log(box2.value);