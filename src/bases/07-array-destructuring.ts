// const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [, , trunks] = characterNames;

// console.log({trunks});

// const returnsArrayFn = () =>{
//     return ['ABC', 123] as const;
// }

// const[, numbers] = returnsArrayFn();

// console.log(numbers+100);

// Tarea

const useState = (value:string)=>{
    return[value, (newValue: string)=>{
        console.log(newValue)
    }] as const;
}
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"