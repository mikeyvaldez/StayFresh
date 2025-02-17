const createPrinter = () => {
    const myFavoriteNumber = 42;
    
    return () => console.log(`My favorite number is ${myFavoriteNumber}`);
}

//closure: the function that was returned from our createPrinter function still has access to the scope it was returned from
const printer = createPrinter(); 
printer();
// console.log(myFavoriteNumber);

const Person = ({ name, age, job }) => {

    let personName = name;
    let personAge = age;
    let personJob = job;


    return {
        getName: () => personName,
        getAge: () => personAge,
        incrementAge: () => personAge += 1,
    };
}

const person = Person({ name: 'Shaun', age: 123, job: 'Developer' });
// console.log(person.getName());
console.log(person.getAge());
person.incrementAge();
console.log(person.getAge())