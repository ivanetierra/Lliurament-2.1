//Bloc 1.1
//Exercici 1

let a = 1;
let b = 5;

const add = (a, b) => a + b;
console.log(add(a, b));

//Exercici 2

const randomNumber = () => Math.floor(Math.random()*100);
console.log(randomNumber());

//Exercici 3

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);
}

let person1 = new Person('ivan');
person1.greet();

//Exercici 4

let miArrayNumbers = [1, 2, 3, 4, 5];

const printNumbers = (miArrayNumbers) => {
    miArrayNumbers.forEach(number => console.log(number));
}

printNumbers(miArrayNumbers);

//Exercici 5

const printTextWithDelay = (text, delay) => {
    setTimeout(() => console.log(text), delay);
}

printTextWithDelay('Texto con 3s de Delay', 3000);

//Bloc 1.2
//Exercici 1

const potConduir = (edat) => (edat >= 18) ? 'Pots conduir' : 'No pots conduir';
console.log(potConduir(20));

//Exercici 2

const comparador = (a, b) => (a > b) ? a+' es més gran' : b+' es més gran';
console.log(comparador(5, 10));

//Exercici 3

const typeofNumber = (num) => num ? (num % 2 === 0) ? 'El número es parell' : 'El número es senar' : 'El número es 0';
console.log(typeofNumber(2));

const trobarMaxim = (a, b, c) => (a>b && a>c) ? a : (b>a && b>c) ? b : c;
console.log(trobarMaxim(1, 2, 3));

//Exercici 4

const parOimpar = (miArray) => {
    for (let numIndex = 0; numIndex < miArray.length; numIndex++) {
         (miArray[numIndex] % 2 === 0) ? console.log(miArray[numIndex]+' es parell') : console.log(miArray[numIndex]+' es senar') 
        }
    };

parOimpar([0, 1, 2]);

//Bloc 1.3 CALLBACKS
//Exercici 1

const processar = (num, callback) => {
    return callback(num);
}

console.log(processar(1, (num) => "El número es "+num));

//Exercici 2

const calculadora = (num1, num2, callback) => {
    return callback ((num1, num2))
}

console.log(calculadora(1, 2, (num1,num2) => num1 + num2));

//Exercici 3

const esperarIsaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
      }, 
    )
}

esperarIsaludar("Ivan", (nom) => console.log("Espera dos segons: "+nom));  


//Exercici 4

const processarElements = (miArray, callback) => {
    miArray.forEach(element => {
        callback(element);
    });
}   

processarElements([1, 2, 3], (element) => console.log("numero: "+ element));

//Exercici 5

const processarCadena = (cadena, callback) => {
    let cadenaMajusculas = cadena.toUpperCase();
    return callback(cadenaMajusculas);
}

console.log(processarCadena("Hola", (cadena) => "Tot en majuscules: "+cadena)); //duda

//Bloc 1.4 REST & SPREAD OPERATORS
//Exercici 1

let array1 = ["gos", "gat"];
let array2 = ["conill"]
let sumaArrays = [...array1, ...array2];
console.log(sumaArrays);

//Exercici 2

function suma (...theArgs) {
    let total = 0;
    theArgs.forEach(element => {
        total += element;
    });
    return total;
}

console.log(suma(1, 2, 3, 4, 5));

//Exercici 3

const objecte1 = {
    nom: "Ivan",
    edat: 30
};

const objecte2 = {...objecte1};

objecte2.nom = "Manel";

console.log(objecte1);
console.log(objecte2);

//Exercici 4

const array = [1, 2, 3, 4, 5, 6];
const [primer, segon, ...resta] = array;

console.log(primer); 
console.log(segon); 
console.log(resta); 

//Exercici 5

const myFunction = (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
}

const myArray = ["a", "b", "c"];

myFunction(...myArray);


//Exercici 6

const obj1 = {
    nom:  "Ivan",
    edat: 30
}

const obj2 = {
    color: "blau"
}

obj3 = {...obj1, ...obj2}

console.log(obj3);


//Bloc 1.5 ARRAY TRANSFORMATIONS
//Exercici 1

const miArray = [1,2,3,4];
const miArray2 = miArray.map (num => num*num);

console.log(miArray2)

//Exercici 2

const miArrayParell = miArray.filter(num => num % 2 === 0)

console.log(miArrayParell)

//Exercici 3

const arrayNumeros = [1, 10, 8, 11, 12];
const primerMajorDe10 = arrayNumeros.find(num => num>10)
console.log(primerMajorDe10);

//Exercici 4

const arrayNumeros2 = [13, 7, 8, 21];
const sumaArrayNumeros2 = arrayNumeros2.reduce((total, num) => total +num, 0);
console.log(sumaArrayNumeros2);

//Exercici 5

const numeros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const 




