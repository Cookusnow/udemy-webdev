// function singSong() {
//     console.log("Do");
//     console.log("Re");
//     console.log("Me");
// };

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.!`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result)
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// HIGHER ORDER FUNCTIONS

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }

// callTwice(rollDie())

// RETURNING FUNCTIONS

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Poggers")
            console.log("Omega Yeet")
        }
    } else {
        return function () {
            alert("YOU JUST GOT COCONUT MALLED")
            alert("YOU JUST GOT COCONUT MALLED")
            alert("YOU JUST GOT COCONUT MALLED")
            alert("YOU JUST GOT COCONUT MALLED")
            alert("YOU JUST GOT COCONUT MALLED")
            alert("YOU JUST GOT COCONUT MALLED")
        }
    }
}