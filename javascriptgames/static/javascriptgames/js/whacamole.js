// Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License)
const faceSvgs = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM94.6 168.9l34.9-5 15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6 34.9 5c6.2 1 8.9 8.6 4.3 13.2l-25.4 24.6 6 34.9c1 6.2-5.3 11-11 7.9L152 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9-25.4-24.6c-4.6-4.7-1.9-12.3 4.3-13.3zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm157.7-249.9l-25.4 24.6 6 34.9c1 6.2-5.3 11-11 7.9L344 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9-25.4-24.6c-4.5-4.6-1.9-12.2 4.3-13.2l34.9-5 15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6 34.9 5c6.3.9 9 8.5 4.4 13.1z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm168 25l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.6 11-11.5 18.2-20 10.8zm-243.1 87.8C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6 20.7 17.9-9.2 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3c-2-11.9 9.3-21.6 20.7-17.9z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm112 208c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm80-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 152c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm88 272h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18-8.9 71-69.5 126-142.9 126z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M344 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40 94-35.3 161-125.7 161-232C496 119 385 8 248 8zm-56 225l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L112 233c-8.5 7.4-21.6.3-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c1.6 11.1-11.6 18.2-20 10.8zm152 39c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-50.9 102.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9 35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 224c0-24.3 13.7-45.2 33.6-56-.7 2.6-1.6 5.2-1.6 8 0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8 19.9 10.8 33.6 31.7 33.6 56 0 35.3-28.7 64-64 64s-64-28.7-64-64zm224 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-112c-35.3 0-64-28.7-64-64 0-24.3 13.7-45.2 33.6-56-.7 2.6-1.6 5.2-1.6 8 0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8 19.9 10.8 33.6 31.7 33.6 56 0 35.3-28.7 64-64 64z"/></svg>'
]

const fillColours = [
    "#F6CA5B",
    "#408558",
    "#316CF4",
    "#5CC7EC",
    "#CA444A"
]

const holes = {
    hole1: {
        div: document.getElementById("hole1")
    },
    hole2: {
        div: document.getElementById("hole2")
    },
    hole3: {
        div: document.getElementById("hole3")
    },
    hole4: {
        div: document.getElementById("hole4")
    },
    hole5: {
        div: document.getElementById("hole5")
    },
    hole6: {
        div: document.getElementById("hole6")
    },
    hole7: {
        div: document.getElementById("hole7")
    },
    hole8: {
        div: document.getElementById("hole8")
    },
    hole9: {
        div: document.getElementById("hole9")
    }
}

const initialTime = 15;
let score;
let timeRemaining = initialTime;
let counting = false;

countDown();
setInterval(countDown, 1000);

// set the games score and grid to initial values 
function resetHoles() {
    score = 0;
    updateScore();

    timeRemaining = initialTime;
    counting = false;


    let holeKeys = Object.keys(holes);
    for (let i = 0; i < holeKeys.length; i++) {

        let face = faceSvgs[Math.floor(Math.random() * faceSvgs.length)];   // get random face
        // put face inside span element and make span invisible
        let holeDiv = holes[holeKeys[i]]["div"];
        holeDiv.innerHTML = '<span>X</span>'
        holeDiv.childNodes[0].innerHTML = face;
        holeDiv.childNodes[0].classList = ("invisible");

        // make face a random color from list
        let color = fillColours[Math.floor(Math.random() * fillColours.length)];
        holeDiv.childNodes[0].childNodes[0].setAttribute("fill", color);
    }

    // make middle face visible so game can be started 
    holes.hole5.div.childNodes[0].classList.toggle("invisible");
}

function whacHole(elem) {
    const elemSpan = elem.childNodes[0];
    if (!elemSpan.classList.contains("invisible")) {
        score++;
        updateScore();
        elemSpan.classList.toggle("invisible");

        counting = true;

        let nextHole = elem;
        let keys = Object.keys(holes);
        while (nextHole == elem) {
            nextHole = holes[keys[keys.length * Math.random() << 0]].div;
            console.log(nextHole.childNodes[0]);
        }

        nextHole.childNodes[0].classList.toggle("invisible");
    }
}

function countDown() {

    if (counting) {
        timeRemaining--;
    }

    if (timeRemaining == 0) {
        endGame();
    }
    document.getElementById("time").textContent = `${timeRemaining} seconds`
}

function endGame() {
    counting = false;

    let holeKeys = Object.keys(holes);
    for (let i in holeKeys) {
        holes[holeKeys[i]].div.childNodes[0].classList = "visible";
    }

    holes.hole5.div.innerHTML = `<span class="invisible"></span><span class="fs-2">Score: ${score}</span>`;
    enableForm(score);
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

resetHoles();