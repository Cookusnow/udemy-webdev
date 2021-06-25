// FUNCTION SCOPE

// function collectEggs() {
//     let totalEggs = 6;
// }

// collectEggs();
// console.log(totalEggs)

// let bird = "Scarlet Macaw";
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }

// birdWatch()

// BLOCK SCOPE

// let radius = 8;
// if (radius > 0) {
//     const Pi = 3.141592653589
//     let msg = "Hello There";
// }

// console.log(radius);
// console.log(msg);

// for (let i = 0; i < 5; i++) {
//     let msg = "OwO";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// LEXICAL SCOPE

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Moon Knight'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase}`)
            }
        }
        inner();
    }
    cryForHelp();
}