function double(n /* : number */) { // wow... if only there was a way to declare types, like... a type script!!!
    return n * 2;
}

function square(n) {
    return n * n;
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}

function multiply(a, b) {
    return a * b;
}

// I have needed this in the past for... things. I'm pretty sure this one's wrong, though.
function floorMod(a, n) {
    return ((a % n) + n) % n;
}
