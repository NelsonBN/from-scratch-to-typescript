interface IName {
    name: string;
}

interface IAddress {
    city: string;
    address: string;
    country: string;
}

interface IEntity
{
    id: number;
}

interface IEmployee extends IEntity, IName, IAddress {
    name: string;
    rule: string;
}

function printEmployeeInfo(employee: IEmployee) {
    console.log(`Id: ${employee.id} Name: ${employee.name}, City: ${employee.city}, Country: ${employee.country}, address: ${employee.address}, Rule: ${employee.rule}`);
}

const employee = {
    id: 1,
    name: "Max",
    city: "Boston",
    country: "USA",
    address: "Main Street",
    rule: "Super Admin"
};
console.log(employee);
console.log(typeof employee);
printEmployeeInfo(employee);

console.log("--------------------------------------------------");

interface IUser extends Omit<IEntity, 'id'>, IName, Omit<IAddress, 'city'|'address'> {
    id: string;
}

function printUserInfo(user: IUser) {
    console.log(`Id: ${user.id}, Name: ${user.name}, Country: ${user.country}`);
}

const user = {
    id: "U-1",
    name: "Max",
    country: "USA"
};
console.log(user);
console.log(typeof user);
printUserInfo(user);