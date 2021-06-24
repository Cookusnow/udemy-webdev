// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const secret = "ChaosControl";

// let guess = prompt("Enter the secret code...");
// while (guess !== secret) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("Ayo poggers, you got the code right")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok, you win")

let max = parseInt(prompt("Enter the maximum number!"));
while (!max) {
    max = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess !== targetNum)) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === 'q') {
    console.log("coward");
} else { console.log(`You got it! It took you ${attempts} guesses`) }

