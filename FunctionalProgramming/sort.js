const numbers = [10, 4, 5, 2, 9, 7, 8, 1];

const numbericalAscending = (a, b) => a - b;

const numbericalDescending = (a, b) => b - a;

const sortedNumbers = numbers.slice().sort(numbericalAscending);
const sortedNumbersTwo = numbers.slice().sort(numbericalDescending);

console.log(sortedNumbers);
console.log(sortedNumbersTwo);