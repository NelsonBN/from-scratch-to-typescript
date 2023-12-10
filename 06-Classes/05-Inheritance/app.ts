class Person
{
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string, private age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public getName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}


class Employee extends Person
{
    private _salary: number;

    constructor(firstName: string, lastName: string, age: number, salary: number) {
        super(firstName, lastName, age);
        this._salary = salary;
    }

    public getSalary(): string {
        return `${this._salary} €`;
    }

    public printInfo(): void {
        console.log(`${super.getName()} -> ${this.getSalary()}`);
    }
}

let employee = new Employee("Max", "Mustermann", 29, 5000);
console.log(employee.getSalary());
employee.printInfo();