let currentlyChoosen = [];
let score = 0;
let icons = [
    '<i class="fas fa-chess-knight"></i>', '<i class="fas fa-coffee"></i>', '<i class="fas fa-dove"></i>', '<i class="fas fa-feather"></i>',
    '<i class="fas fa-fish"></i>', '<i class="fab fa-fort-awesome-alt"></i>', '<i class="fas fa-gamepad"></i>', '<i class="fas fa-ghost"></i>',
    '<i class="fas fa-hamburger"></i>', '<i class="fas fa-hat-cowboy"></i>', '<i class="fas fa-igloo"></i>', '<i class="fas fa-jedi"></i>',
    '<i class="fas fa-kiwi-bird"></i>', '<i class="fas fa-meteor"></i>', '<i class="fas fa-money-bill-wave"></i>', '<i class="fas fa-mountain"></i>',
    '<i class="fas fa-mug-hot"></i>', '<i class="fas fa-otter"></i>', '<i class="fab fa-optin-monster"></i>', '<i class="fab fa-phoenix-squadron"></i>'
]

let board = {
    square1: {
        value: "",
        element: document.getElementById("square1"),
        foundMatch: false
    },
    square2: {
        value: "",
        element: document.getElementById("square2"),
        foundMatch: false
    },
    square3: {
        value: "",
        element: document.getElementById("square3"),
        foundMatch: false
    },
    square4: {
        value: "",
        element: document.getElementById("square4"),
        foundMatch: false
    },
    square5: {
        value: "",
        element: document.getElementById("square5"),
        foundMatch: false
    },
    square6: {
        value: "",
        element: document.getElementById("square6"),
        foundMatch: false
    },
    square7: {
        value: "",
        element: document.getElementById("square7"),
        foundMatch: false
    },
    square8: {
        value: "",
        element: document.getElementById("square8"),
        foundMatch: false
    },
    square9: {
        value: "",
        element: document.getElementById("square9"),
        foundMatch: false
    },
    square10: {
        value: "",
        element: document.getElementById("square10"),
        foundMatch: false
    },
    square11: {
        value: "",
        element: document.getElementById("square11"),
        foundMatch: false
    },
    square12: {
        value: "",
        element: document.getElementById("square12"),
        foundMatch: false
    },
    square13: {
        value: "",
        element: document.getElementById("square13"),
        foundMatch: false
    },
    square14: {
        value: "",
        element: document.getElementById("square14"),
        foundMatch: false
    },
    square15: {
        value: "",
        element: document.getElementById("square15"),
        foundMatch: false
    },
    square16: {
        value: "",
        element: document.getElementById("square16"),
        foundMatch: false
    },
    square17: {
        value: "",
        element: document.getElementById("square17"),
        foundMatch: false
    },
    square18: {
        value: "",
        element: document.getElementById("square18"),
        foundMatch: false
    },
    square19: {
        value: "",
        element: document.getElementById("square19"),
        foundMatch: false
    },
    square20: {
        value: "",
        element: document.getElementById("square20"),
        foundMatch: false
    }
}

// reset the board object to inital values
function resetBoard() {
    const squares = Object.keys(board);
    const boardSize = squares.length;
    const values = [...icons];

    // get a random pair of squares and give them the same value
    for (let i = 0; i < (boardSize / 2); i++) {
        let valueIndex = Math.floor(Math.random() * values.length);
        let value = values.splice(valueIndex, 1);

        let firstSquare = squares.splice(Math.floor(Math.random() * squares.length), 1)[0];
        let secondSquare = squares.splice(Math.floor(Math.random() * squares.length), 1)[0];

        let sqArr = [firstSquare, secondSquare]
        for (let i in sqArr) {

            board[sqArr[i]]["value"] = value;
            board[sqArr[i]]["foundMatch"] = false;
            board[sqArr[i]]["element"].classList = "box col border border-dark";
            board[sqArr[i]]["element"].childNodes[0].innerHTML = value;
            board[sqArr[i]]["element"].childNodes[0].classList = "invisible";
        }
    }

    currentlyChoosen = [];
    document.getElementById("you-won").classList.add("invisible");
    score = 0;
    updateScore();
    console.log("board reset");
}

// reveal the content of a square when its clicked 
function reveal(elem) {
    resetGuesses();

    // get the inner span element and check it is currently invisible
    const elemContent = elem.childNodes[0];
    if (elemContent.classList.contains("invisible")) {

        elemContent.classList.replace("invisible", "visible");

        // add square to currently choosen list and check for a match then a win
        newGuess(board[elem.id]);
        checkMatch();

        if (checkWin()) {
            console.log("won");
            document.getElementById("you-won").classList.toggle("invisible");
            enableForm(score);
        }
    }

    updateScore();
}

function resetGuesses() {
    // if this is a new guess pair hide the last ones
    if (currentlyChoosen.length == 2) {
        currentlyChoosen[0]["element"].childNodes[0].classList = "invisible";
        currentlyChoosen[0]["element"].classList.toggle("bg-warning");
        currentlyChoosen[1]["element"].childNodes[0].classList = "invisible";
        currentlyChoosen[1]["element"].classList.toggle("bg-warning");
        currentlyChoosen = [];  // reset list so next guesses can be added
        score++;
    }
}

// add square to choosen list and change colour of square
function newGuess(square) {
    currentlyChoosen.push(square);
    square["element"].classList.add("bg-warning", "bg-gradient");
}

// check if the currently choosen squares match
function checkMatch() {
    let match = false;

    // check two squares have been choosen and their values match
    if (currentlyChoosen.length == 2) {
        if (currentlyChoosen[0].value == currentlyChoosen[1].value) {

            // mark square object inside board as found, change their colours on screen
            firstMatch = currentlyChoosen[0];
            firstMatch["foundMatch"] = true;
            firstMatch["element"].classList.toggle("bg-warning");
            firstMatch["element"].classList.add("bg-success");

            secondMatch = currentlyChoosen[1];
            secondMatch["foundMatch"] = true;
            secondMatch["element"].classList.toggle("bg-warning");
            secondMatch["element"].classList.add("bg-success");

            currentlyChoosen = [];
            score++;
            match = true;
        }
    }
    return match;
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

// check if the game is over and all squares have been found
function checkWin() {
    let squares = Object.keys(board);

    let won = true;
    for (let i = 0; i < (squares.length); i++) {

        if (board[squares[i]]["foundMatch"] == false) {
            won = false;
            break;
        }
    }

    return won;
}

resetBoard();