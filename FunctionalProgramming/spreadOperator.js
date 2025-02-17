const person = {
    name: 'John Doe',
    age: 40,
}

const career = {
    title: 'Software Developer',
    salary: 1000000,
}

const personWithCareerData = {
    ...person,
    ...career,
    hairColor: 'brown',
}

console.log(personWithCareerData)

const numbers = [1, 2, 3, 4, 5];

const updatedNumbers = [-1, 0, ...numbers, 6, 7, 8, 9, 10];