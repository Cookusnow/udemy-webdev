// FUNCTION EXPRESSION

// const add = function(x, y) {
//     return x + y;
// }

// ARROW FUNCTION

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//IMPLICIT RETURNS

// const rollDie = () => (Math.floor(Math.random() * 6) + 1)

// const add = (a, b) => a + b;

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    }
}