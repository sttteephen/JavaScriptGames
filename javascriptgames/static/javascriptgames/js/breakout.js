CANVAS_WIDTH = 400;
CANVAS_HEIGHT = 650;

PADDLE_WIDTH = 100;
PADDLE_HEIGHT = 20;

BALL_WIDTH = 10;
BALL_HEIGHT = 10;
BALL_SPEED = 10;
BALL_INIT_X = (CANVAS_WIDTH / 2) - (BALL_WIDTH / 2);
BALL_INIT_Y = CANVAS_HEIGHT - 300;
ballColor = '#CC5755'

SQUARE_SIZE = 40;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colors = [
    '#CB5652',
    '#C7793F',
    '#BB8435',
    '#ADAB29',
    '#5CA853',
    '#5056CF'
]

let score = 0;

let squares = []

function Square(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

PADDLE = {
    x: (CANVAS_WIDTH / 2) - (PADDLE_WIDTH / 2),
    y: CANVAS_HEIGHT - 50
}

BALL = {
    x: BALL_INIT_X,
    y: BALL_INIT_Y,
    movementX: BALL_SPEED,
    movementY: BALL_SPEED,
    midX: () => {
        return BALL.x + BALL_WIDTH / 2;
    },
    midY: () => {
        return BALL.y + BALL_HEIGHT / 2;
    }
}

function reset() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    squares = [];
    score = 0;
    updateScore();

    // loop over the colors list for each layer of squares
    let y = 0;
    for (let c = 0; c < colors.length; c++) {
        // loop over each square in one layer
        for (let x = 0; x < CANVAS_WIDTH; x += SQUARE_SIZE) {
            squares.push(new Square(x, y, colors[c]));  // create new square and add to list
        }
        y += 40;
    }
    for (let i in squares) {
        //console.log(squares[i].y)
    }

    drawSquares();

    // draw the paddle and ball
    drawPaddle()
    BALL.x = BALL_INIT_X;
    BALL.y = BALL_INIT_Y;
    ctx.fillRect(BALL.x, BALL.y, BALL_WIDTH, BALL_HEIGHT)
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

function drawPaddle(x = PADDLE.x) {
    let half_paddle = PADDLE_WIDTH / 2;
    ctx.clearRect(PADDLE.x, PADDLE.y, PADDLE_WIDTH, PADDLE_HEIGHT);

    PADDLE.x = x - half_paddle;
    ctx.fillStyle = ballColor;
    ctx.fillRect(PADDLE.x, PADDLE.y, PADDLE_WIDTH, PADDLE_HEIGHT)
    ctx.fillStyle = 'green';
    ctx.fillRect((PADDLE.x + (PADDLE_WIDTH / 2) - 10), PADDLE.y, 20, PADDLE_HEIGHT);
    ctx.fillRect(PADDLE.x, PADDLE.y, 10, PADDLE_HEIGHT);
    ctx.fillRect((PADDLE.x + PADDLE_WIDTH - 10), PADDLE.y, 10, PADDLE_HEIGHT);
}

function moveBall() {
    ctx.clearRect(BALL.x - 1, BALL.y - 1, BALL_WIDTH + 2, BALL_HEIGHT + 2)
    BALL.x += BALL.movementX;
    BALL.y += BALL.movementY;
    ctx.fillStyle = ballColor
    ctx.fillRect(BALL.x, BALL.y, BALL_WIDTH, BALL_HEIGHT)
    ctx.fillStyle = 'white';
    ctx.fillRect(BALL.midX(), BALL.midY(), 1, 1)

    let ballMidX = BALL.x + BALL_WIDTH / 2;
    let ballLowY = BALL.y + BALL_HEIGHT;

    if (BALL.x <= 0) {  // left wall collision
        BALL.movementX = BALL_SPEED;
    }
    else if (BALL.x + BALL_WIDTH >= CANVAS_WIDTH) {  // right wall collision
        BALL.movementX = -BALL_SPEED;
    }
    else if (BALL.y <= 0) {  // top wall collision
        BALL.movementY = BALL_SPEED;
    }
    else if (ballLowY >= CANVAS_HEIGHT) { // bottom wall collision
        endGame();
    }

    // paddle collision
    // first check ball has collided with paddle
    if (ballLowY >= (PADDLE.y) && ballLowY <= (PADDLE.y + PADDLE_HEIGHT) &&
        ballMidX >= (PADDLE.x) && ballMidX <= (PADDLE.x + PADDLE_WIDTH)) {

        BALL.movementY = -BALL_SPEED;   // change y directon of ball

        // check if ball hit left end of paddle when coming from left
        if ((ballMidX < PADDLE.x + 10) && (BALL.movementX > 0)) {
            BALL.movementX = -BALL_SPEED; // change x direction
        }
        // check if ball hit right end of paddle when coming from right
        else if ((ballMidX > PADDLE.x + PADDLE_HEIGHT) && (BALL.movementX < 0)) {
            BALL.movementX = BALL_SPEED;
        }
        // check if ball hit middle of paddle
        else if (ballMidX > PADDLE.x + (PADDLE_WIDTH / 2) - 40 && ballMidX < PADDLE.x + (PADDLE_WIDTH / 2) + 40) {
            BALL.movementX = BALL.movementX / 2;
        }
    }

    // squares collison
    for (let j = 0; j < squares.length; j++) {
        if (squareBottomCollision(squares[j])) {

            BALL.movementY = BALL_SPEED;
            ctx.clearRect(squares[j].x, squares[j].y, SQUARE_SIZE, SQUARE_SIZE);
            ballColor = squares[j].color;
            squares.splice(j, 1);

            score += 10;
            updateScore();
            drawSquares();
        }

    }
}

// check top of ball has collided with bottom of square
function squareBottomCollision(square) {
    if ((BALL.y >= square.y) && (BALL.y <= square.y + SQUARE_SIZE)) {

        if ((BALL.x >= square.x) && (BALL.x <= square.x + SQUARE_SIZE) ||
            (BALL.x + BALL_WIDTH) >= (square.x) &&
            (BALL.x + BALL_WIDTH) <= (square.x + SQUARE_SIZE)) {

            return true;
        }
    }
    return false;
}

// check left side of ball has collided with right side of square
function squareRightCollision(square) {
    collided = false;
    midSquare = square.x + SQUARE_SIZE / 2;
    endSquare = square.x + SQUARE_SIZE;

    if ((BALL.x >= midSquare) && (BALL.x <= endSquare)) {

    }
    else if ((BALL.x >= midSquare) && (BALL.x <= endSquare)) {

    }
    else if ((BALL.x >= midSquare) && (BALL.x <= endSquare)) {

    }
}

function drawSquares() {
    for (let i = 0; i < squares.length; i++) {
        ctx.fillStyle = squares[i].color;
        ctx.fillRect(squares[i].x, squares[i].y, SQUARE_SIZE, SQUARE_SIZE);
    }
}

function nextFrame() {
    moveBall();
}

let started = false;
let gameInterval;
function startGame() {
    if (!started) {
        reset();
        gameInterval = setInterval(nextFrame, 30);
        started = true;
    }

}

function endGame() {
    clearInterval(gameInterval);
    started = false;
}


// move the paddle with the mouse
canvas.addEventListener('mousemove', e => {
    let half_paddle = PADDLE_WIDTH / 2;
    if (e.offsetX > half_paddle && e.offsetX < CANVAS_WIDTH - half_paddle) {
        drawPaddle(e.offsetX);
    }
})

canvas.addEventListener('mousedown', startGame);

reset();