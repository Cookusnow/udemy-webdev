const btn = document.querySelector('#v1');

btn.onclick = function () {
    console.log("Za Hando!");
}

function scream() {
    console.log('WRYYYYYYYYYY');
}

btn.onmouseenter = scream;

const btn2 = document.querySelector('#v2');
btn2.addEventListener('mouseup', function () {
    alert("YOU JUST GOT COCONUT MALLED");
})

function chaos() {
    console.log("CHAOS")
}
function control() {
    console.log("CONTROL")
}

const shadowButton = document.querySelector('#shadow');

shadowButton.addEventListener('click', chaos)
shadowButton.addEventListener('click', control)