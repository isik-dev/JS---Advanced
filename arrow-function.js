const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}
console.log(square(5));


const people = [{
    name: 'Halim',
    age: 31
}, {
    name: 'Naz',
    age: 22
}, {
    name: 'Jacqualine',
    age: 18
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30);


// Challenge area

// Find the person with age 22
// Print that person's name

const person22 = people.find((person) => person.age === 22) 
console.log(person22.name);