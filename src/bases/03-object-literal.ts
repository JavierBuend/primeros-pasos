interface Person{
    firstName : string;
    lastName : string;
    age : number;
    address: Address
}

interface Address{
        postalCode: string;
        city: string;
}

const ironman : Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 25,
    address: {
        postalCode: 'abc-123',
        city: 'new-york',
    }
}
{}

// const spiderman : Person={
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 22
// }
console.log(ironman);

// const spiderman = structuredClone (ironman);
// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;

// console.log(ironman, spiderman);