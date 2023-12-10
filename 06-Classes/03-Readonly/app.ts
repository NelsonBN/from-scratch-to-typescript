class Order {
    id: number;
    name: string;
    readonly date: Date;

    constructor(id: number, name: string, date: Date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

let order = new Order(123, "Order 123", new Date());
order.id = 456;
order.name = "Order 456";
// order.date = new Date(); // Error: Cannot assign to 'date' because it is a read-only property.
console.log(order.id);

console.log("------------------------");

class User
{
    name: string;

    constructor(readonly id: number, name: string)
    {
        this.name = name;
    }
}
let user = new User(123, "John");
// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(user);

console.log("------------------------");

interface ICustomer
{
    id: number;
    name: string;
}

const customer: Readonly<ICustomer> = { id: 123, name: "John" };
//customer.name = 456; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(customer);