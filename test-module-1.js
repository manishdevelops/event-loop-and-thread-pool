// class Calculator {
//     add(a, b) {
//         return a + b;
//     }

//     multiply(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }

// module.exports = Calculator;

/////

// immediately assigning the value 
module.exports = class {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}