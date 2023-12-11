export {};

function printDetails(customer: string | number) {
    if(typeof customer == 'string')
    {
        console.log(`Customer Name: ${customer}`);
    }
    else if(typeof customer == 'number')
    {
        console.log(`Customer Id: ${customer}`);
    }
}

printDetails("John");
printDetails(4512);

console.log("--------------------------------------------------");

function formatDate(date: Date | string) {
    if(date instanceof Date)
    {
        console.log(`Date: ${date.toDateString()}`);
    }
    else if(typeof date == 'string')
    {
        console.log(`Date: ${new Date(date).toDateString()}`);
    }
}

formatDate(new Date());
formatDate("2020-03-14");
