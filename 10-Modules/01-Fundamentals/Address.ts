interface ICountry {
    country: string;
}

interface IAddress extends ICountry {
    street: string;
    city: string;
}


export { IAddress, ICountry };