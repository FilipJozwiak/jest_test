function getEvenNumbers(a, b) {
    let res = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            res++;
        }
    }
    return res;
}

function getOccurencesOfChar(subchar, text) {
    let res = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == subchar) {
            res++;
        }
    }
    return res;
}

function moveVector(x, y, i) {
    return {
        "x": x + i,
        "y": y + i
    }
}

function arrayFunction(x) {
    if (x % 2 == 0) {
        return function () {
            return "Is even";
        }
    } else {
        return function () {
            return "Not even";
        }
    }
}

function switchFunction(param) {
    if (typeof param == 'string') {
        return "str";
    }
    if (typeof param == 'number') {
        return "numb";
    }
    if (typeof param == 'boolean') {
        return "bool";
    }
    if (typeof param == 'function') {
        return param();
    }
    return undefined;
}

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1){
        return 1;
    } 
    else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

function factorialize(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorialize(n - 1);
    }
}

function returnPowerOf(x) {
    return x * x;
}

function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

module.exports = {};
module.exports.getEvenNumbers = getEvenNumbers;
module.exports.getOccurencesOfChar = getOccurencesOfChar;
module.exports.moveVector = moveVector;
module.exports.arrayFunction = arrayFunction;
module.exports.switchFunction = switchFunction;
module.exports.fibonacci = fibonacci;
module.exports.factorialize = factorialize;
module.exports.returnPowerOf = returnPowerOf;
module.exports.convertFtoC = convertFtoC;