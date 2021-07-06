// const userAge = 19

// const message = userAge >= 18 ? 'You can vote' : 'You cannot vote'

// // let message
// // message = userAge >= 18 ? 'You can vote' : 'You cannot vote'

// // if (userAge >= 18) {
// //     message = 'You can vote'
// // } else {
// //     message = 'You cannot vote'
// // }

// console.log(message);


// const userAge = 16

// const showPage = () => {
//     console.log('Showing the page');
// }

// const showErrorPage = () => {
//     console.log('Showing the error page');
// }

// userAge >= 18 ? showPage() : showErrorPage()


const userAge = 16

const showPage = () => 'Showing the page';

const showErrorPage = () => 'Showing the error page';


const message = userAge >= 18 ? showPage() : showErrorPage()
console.log(message);

const team = ['Tyler', 'Porter', 'Jack', 'Elvis', 'Bryan']

const okay = () => `Team size: ${team.length}`
const notOKay = () => 'Too many people on your team'

const newm = team.length <= 4 ? okay() : notOKay()

console.log(newm);

// Print "Team size: 3" if less than or equal to 4
// Print "Too many people on your team" otherwise

