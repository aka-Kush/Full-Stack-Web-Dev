let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let inputSpeed = document.getElementById("inputSpeed");

let values = ['😜', '😰', '😘', '🤕', '🤑', '😵', '🤠'];

// Get random emojis from array
function getRandomValue() {
    return values[Math.floor(Math.random() * 7)];
}

let animationId;
function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    }, 1000/newSpeed);
}


// Change speed of animation
inputSpeed.onchange = function (event) {
    //document.documentElement.style => this is :root of css
    //event.target.value is the value currently in input box
    //we will replace speed variable by value 
    document.documentElement.style.setProperty("--speed", event.target.value);
    updateAnimation(event.target.value);
}






