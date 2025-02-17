const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = [];

// for(const x of numbers){
//     if(x % 2 === 0){
//         evens.push(x);
//     }
// }

// console.log(evens);


// a type of function that takes a single argument and returns either true or false is called
//  a Predicate
const isEven = x => x % 2 === 0;

const evens = numbers.filter(isEven);

