console.log('Bloc 1.1 - ARRAY FUNCTIONS');

console.log('Exercici 1');
let a = 1;
let b = 5;

const add = (a, b) => a + b;
console.log(add(a, b));

console.log('Exercici 2');
const randomNumber = () => Math.floor(Math.random()*100);
console.log(randomNumber());

console.log('Exercici 3');
class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);
}

let person1 = new Person('ivan');
person1.greet();

console.log('Exercici 4');
let miArrayNumbers = [1, 2, 3, 4, 5];

const printNumbers = (miArrayNumbers) => {
    miArrayNumbers.forEach(number => console.log(number));
}

printNumbers(miArrayNumbers);

//----

const printTextWithDelay = (text, delay) => {
    setTimeout(() => console.log(text), delay);
    
}

printTextWithDelay('bloc 1.1 - Exericici 5 - Texto con 6s de delay', 6000);

console.log('bloc 1.2 - OPERADOR TERNARI');

console.log('Exercici 1');
const potConduir = (edat) => (edat >= 18) ? 'Pots conduir' : 'No pots conduir';
console.log(potConduir(20));

console.log('Exercici 2');
const comparador = (a, b) => (a > b) ? a+' es més gran' : b+' es més gran';
console.log(comparador(5, 10));

console.log('Exercici 3');
const typeofNumber = (num) => num ? (num % 2 === 0) ? 'El número es parell' : 'El número es senar' : 'El número es 0';
console.log(typeofNumber(2));

const trobarMaxim = (a, b, c) => (a>b && a>c) ? a : (b>a && b>c) ? b : c;
console.log(trobarMaxim(1, 2, 3));

console.log('Exercici 4');
const parOimpar = (miArray) => {
    for (let numIndex = 0; numIndex < miArray.length; numIndex++) {
         (miArray[numIndex] % 2 === 0) ? console.log(miArray[numIndex]+' es parell') : console.log(miArray[numIndex]+' es senar') 
        }
    };

parOimpar([0, 1, 2]);


console.log('Bloc 1.3 - CALLBACKS');

console.log('Exercici 1');
const processar = (num, callback) => {
    return callback(num);
}

console.log(processar(1, (num) => "El número es "+num));

console.log('Exercici 2');
const calculadora = (num1, num2, callback) => {
    return callback ((num1, num2))
}

console.log(calculadora(1, 2, (num1,num2) => num1 + num2));

console.log('Exercici 3');
const esperarIsaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 7000);
}
esperarIsaludar("Ivan", (nom) => console.log("Bloc 1.3 - Exercici 3 - Espera set segons: "+nom));  


console.log('Exercici 4');
const processarElements = (miArray, callback) => {
    miArray.forEach(element => {
        callback(element);
    });
}   
processarElements([1, 2, 3], (element) => console.log("numero: "+ element));

console.log('Exercici 5');
function procesarCadena (cadena, miCallback) {
    var cadenaMajusculas = cadena.toUpperCase();
    miCallback(cadenaMajusculas);
}

procesarCadena('text en majuscules', nom => console.log(nom));


console.log('Bloc 1.4 - REST & SPREAD OPERATORS');


console.log('Exercici 1');
let array1 = ["gos", "gat"];
let array2 = ["conill"]
let sumaArrays = [...array1, ...array2];
console.log(sumaArrays);


console.log('Exercici 2');
function suma (...theArgs) {
    let total = 0;
    theArgs.forEach(element => {
        total += element;
    });
    return total;
}
console.log(suma(1, 2, 3, 4, 5));


console.log('Exercici 3');
const objecte1 = {
    nom: "Ivan",
    edat: 30
};

const objecte2 = {...objecte1};

objecte2.nom = "Manel";

console.log(objecte1);
console.log(objecte2);


console.log('Exercici 4');
const array = [1, 2, 3, 4, 5, 6];
const [primer, segon, ...resta] = array;

console.log(primer); 
console.log(segon); 
console.log(resta); 

console.log('Exercici 5');
const myFunction = (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
}

const myArray = ["a", "b", "c"];

myFunction(...myArray);


console.log('Exercici 6');
const obj1 = {
    nom:  "Ivan",
    edat: 30
}

const obj2 = {
    color: "blau"
}

let obj3 = {...obj1, ...obj2}

console.log(obj3);


console.log('Bloc 1.5 - ARRAY TRANSFORMATIONS');
console.log('Exercici 1');

const miArray = [1,2,3,4];
const miArray2 = miArray.map (num => num*num);

console.log(miArray2)

console.log('Exercici 2');
const miArrayParell = miArray.filter(num => num % 2 === 0)

console.log(miArrayParell)

console.log('Exercici 3');
const arrayNumeros = [1, 10, 8, 11, 12];
const primerMajorDe10 = arrayNumeros.find(num => num>10)
console.log(primerMajorDe10);

console.log('Exercici 4');
const arrayNumeros2 = [13, 7, 8, 21];
const sumaArrayNumeros2 = arrayNumeros2.reduce((total, num) => total +num, 0);
console.log(sumaArrayNumeros2);

console.log('Exercici 5');
const numeros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const miSuma =  numeros.filter(num => num>10).map(num=>num*2).reduce((total, num) => total +num, 0);
console.log(miSuma);

console.log('Exercici 6');
const misNumeros = [11, 12, 13, 14];
const majorDe10 = num => num > 10;
console.log("Tots major de 10?: "+misNumeros.every(majorDe10));
console.log("Algun major de 10?: "+misNumeros.some(majorDe10));


console.log('Bloc 1.6 - ITERATIONS');

let noms = ['Anna', 'Bernat', 'Clara'];
let numbers = [1, 2, 3, 4, 5, 6];

console.log('Exercici 1');
noms.forEach(nom => console.log(nom));

console.log('Exercici 2');
for(let nom in noms) {
    console.log(nom);
}

console.log('Exercici 3');
const arrayParell = numbers.filter(num => num % 2 == 0);
console.log(arrayParell);

console.log('Exercici 4');
let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
};

for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

console.log('Exercici 5');
for(let num in numbers) {
    if (num === 5) {
        break;
    }
    console.log(num);
}

console.log('Exercici 6');
for (let [index, nom] of noms.entries()){
    console.log(nom + " posicio: " + index);
}


console.log('Bloc 1.7 - PROMISES & ASYNC/AWAIT');

console.log('Exercici 1');
let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

console.log('exercici 2');
promise.then(console.log);

console.log('Exercici 3');
let input = 'Hola'; 

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === 'Hola') {
            resolve('Exercici - 3 Input is correct');
        } else {
            reject('Exercici -3 Input is incorrect');
        }
    }, 2000);
});

promise2
    .then(console.log) 
    .catch(console.error); 

console.log('Exercici 4 i 5');
async function printResult() {
    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
printResult();

console.log('Exercici 6');
let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);
});

Promise.all([promesa1, promesa2])
    .then(values => console.log(values));