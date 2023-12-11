export {};

type Person = {
    name: string;
    age: number;
    address: string;
};

type Company = {
    name: string;
    businessNumber: number;
};

type AddressPerson = {
    city: string;
    country: string;
};

type AddressCompany = {
    location: 'street' | 'avenue' | 'square';
};

type FinalAddress<T> = T extends { address: string } ? AddressPerson : AddressCompany;

const personAddress: FinalAddress<Person> = {
    city: 'Toronto',
    country: 'Canada'
};
console.log(personAddress);

const companyAddress: FinalAddress<Company> = {
    location: 'street'
};
console.log(companyAddress);

console.log('------------------');

type FileTypes = 'jpg' | 'png' | 'svg' | 'gif' | 'mp4' | 'mp3';

type FileMediaType<T> = T extends 'mp4' | 'mp3' ? T : never;

type FileMedia = FileMediaType<FileTypes>;

//const file: FileMedia = 'png'; // Error
const file: FileMedia = 'mp3';
console.log(file);