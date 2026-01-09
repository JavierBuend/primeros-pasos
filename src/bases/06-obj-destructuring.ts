

const person ={
    name :'Tony',
    age: 45,
    key: 'Ironman'
}

const { name: ironmanName, age, key}= person;

console.log(ironmanName, age, key);

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank}: Hero)=>{
    return{
        keyName: key,
        user:{
            name,
            age,
        },
        rank,
    };
};
// 
//caso de desestructuración anidada, desestructuro la property raíz y de ahí extraigo la property que quiero
const {rank, keyName, user }= useContext(person);

const {name} = user;

console.log({rank, keyName, name})