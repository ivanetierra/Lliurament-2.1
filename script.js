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

let person1 = new Person('Ivan');
person1.greet();

//Exercici 4

let arrayNumbers = [1, 2, 3, 4, 5];

const printNumbers = (arrayNumbers) => {
    arrayNumbers.forEach(number => console.log(number));
}

printNumbers(arrayNumbers);

//Exercici 5

const printTextWithDelay = (text, delay) => {
    setTimeout(() => console.log(text), delay);
}

printTextWithDelay('Texto con 3s de Delay', 3000);


