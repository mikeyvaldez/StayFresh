const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];

// const doubledNumbers = [];

// for(const x of numbers){
//     const newNumber = x * 2;
//     doubledNumbers.push(newNumber)
// }

// console.log(doubledNumbers);

const double = x => x * 2;

const doubledNumbers = numbers.map(x => x * 2);