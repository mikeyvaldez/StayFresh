const countDown = x => {
    if(x === 0){ // stopping point
        console.log('Blastoff!');
    } else {
        console.log(x);
        countDown(x - 1);  // change!
    }
}


countDown(10)

const fib = n => {
    if(n <= 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(10))