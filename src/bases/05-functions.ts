function greet(name : string):string{
    return `hola ${name}`
}

//funciones de flecha no cambia a lo que apunta el objeto this
const greet2 =(name: string):string =>`hola ${name}`



const message = greet ('Goku');
const message2 = greet2 ('Vegetta');

console.log(message,message2);

interface User {
        uid: string;
    username: string;
}

function getUser():User{
    return {
        uid: 'ABC-123',
        username: 'pac-1',
    }
}

const getUser2 = () =>({
        uid: 'ABC-123',
        username: 'pac-1',
    });

const user = getUser()
const user2 = getUser2();


// console.log(user, user2)



const myNumbers: number[] =[1,2,3,4,5];

// myNumbers.forEach(function(value){
//     console.log({value});
// })


// myNumbers.forEach((value) => {
//     console.log(value);
// })


// Cuando tenemos una serie de argumentos que lo unico que van a 
// ser usados es para ser mandados 
// de referencia a otra funcion se puede mandar la funcion como referencia 
myNumbers.forEach(console.log);