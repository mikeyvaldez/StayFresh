const divide = (num1, num2) => num1 / num2

const secondArgZeroCheck = func => (...args) => {
    if(args[1] === 0) {
        console.log('Error! Second arg cannot be zero');
        return;
    }

    return divide(10, 2);
}

const divideSafe = secondArgZeroCheck(divide);

console.log(divideSafe(10, 2));
console.log(divideSafe(10, 0));
