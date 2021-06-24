// console.log('HELLO THERE');
// let total = 1 + 3;
// console.log('GENERAL KENOBI');

// console.log("Before Conditional")
// if (1 + 1 === 2) {
//     console.log("Math Still Works")
// }
// console.log("After Conditional")

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('Monday? Cringe.')
// } else if (dayOfWeek === 'saturday') {
//     console.log('Saturday? Poggers.')
// } else if (dayOfWeek === 'friday') {
//     console.log('Friday? Nice.')
// } else if (dayOfWeek === 'tuesday') {
//     console.log('Tuesday? Destiny Reset Day.')
// } else {
//     console.log("Get Nae-Nae'd")
// }

// const age = 89;

// if (age < 5) {
//     console.log("You are baby. You get in free.")
// } else if (age < 10) {
//     console.log("Your are child. You pay $10.")
// } else if (age < 65) {
//     console.log("You are adult. You pay $20.")
// } else {
//     console.log("You are senior. You pay $10.")
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password cannot contain spaces")
    }
} else {
    console.log("Password too short; must be 6+ characters")
}