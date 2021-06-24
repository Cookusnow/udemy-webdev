function singSong() {
    console.log("Do");
    console.log("Re");
    console.log("Me");
};

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.!`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}