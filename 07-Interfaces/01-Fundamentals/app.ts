interface IEmployee {
    name: string;
    age: number;
    rule: string;
}

function printEmployeeInfo(employee: IEmployee) {
    console.log(`Name: ${employee.name}, Age: ${employee.age}, Rule: ${employee.rule}`);
}

const employee = {
    name: "Max",
    age: 26,
    rule: "Super Admin"
};
console.log(employee);
console.log(typeof employee);
printEmployeeInfo(employee);

console.log("--------------------------------------------------");

interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

function printBookInfo(book: IBook) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.published}, Pages: ${book.pages}`);
}

const book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien"
}
printBookInfo(book);