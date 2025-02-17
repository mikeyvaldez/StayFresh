// const createPrinter = () => () => console.log('Hello functional programming!');

function createPrinter(){
    return function() {
        console.log('Hello functional programming!');
    }
}


const printer = createPrinter(); // () => console.log('Hello functional programming!');

// const double = x => x * 2;
// const triple = x => x * 3;
// const quadruple = x => x * 4;

const createMultiplier = y => x => {
    console.log('Multiplying ' + x + ' by ' + y);
    return x * y
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(10));
console.log(triple(10));
console.log(quadruple(10));



// printer();

// createPrinter()();

