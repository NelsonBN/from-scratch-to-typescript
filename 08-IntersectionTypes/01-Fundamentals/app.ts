export {};

interface IName {
    name: string;
}

interface IAddress {
    city: string;
    country: string;
}

interface IBankAccount {
    IBAN: string;
    SWIFT: string;
}

type ICustomer = IName & IAddress & IBankAccount;

let customer: ICustomer = {
    name: "Max",
    city: "Boston",
    country: "USA",
    IBAN: "US123456789",
    SWIFT: "ICICUSBN"
};
console.log(customer);
console.log(typeof customer);