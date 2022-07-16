CANVAS_WIDTH = 400;
CANVAS_HEIGHT = 400;

SQUARE_SIZE = 20;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const SNAKE = {
    segments: []
};

function Segment(x, y) {
    this.x = x;
    this.y = y;
};

const BOARD = {
    squares: () => {

    }
};

