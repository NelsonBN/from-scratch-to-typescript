export {}

type Country = CountryCode | Location;

type CountryCode = 'PT' | 'ES' | 'FR';

type Location = {
    lat: number;
    lng: number;
}

type Person = {
    country: Country;
    nationality: Country;
}

const person: Person = {
    country: { lat: 10, lng: 20},
    nationality: 'PT'
} satisfies Person;

console.log(person);


console.log('------------------');

type Connection = {};

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolSize: number
): Connection;

type Configuration = {
    host: string;
    port: number | string;
    tryReconnect: boolean | (() => boolean);
    poolSize?: number;
}

const config = {
    host: 'localhost',
    port: 3306,
    tryReconnect: () => true,
} satisfies Configuration;

function connect() {
    let { host, port, tryReconnect } = config;

    createConnection(host, port.toString(), tryReconnect(), 10);
}