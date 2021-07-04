// 1. Arrow functions don't bind arguments


// const add = function () {
//     return arguments[0] + arguments[1]
// }

// console.log(add(22, 11, 50, 100));

// const add = () => {
//     return arguments[0] + arguments[1]
// }

// console.log(add(22, 11, 50, 100));


// 2. Arrow functions do not support this inside objects

// const car = {
//     color: 'Red',
//     getSummary: function () {
//         return `This car is ${this.color}`
//     }
// }

// console.log(car.getSummary());

const car = {
    color: 'Red',
    getSummary: () => {
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary());