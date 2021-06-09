let board = $('#snakeBoard')[0];
let canvas = board.getContext("2d")

if (canvas) {
    console.log("Canvas supported");
} else {
    console.log("Canvas not supported");
}
// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;
//clearCanvas();
let snake = [{x: 100, y: 100}, {x: 90, y: 100}, {x: 80, y: 100},
    {x: 70, y: 100}, {x: 60, y: 100},];
$(document).keypress(function () {
    main();
})

function main() {
    setTimeout(function start() {
        clearCanvas();
        move_snake();
        drawSnake();
        if (!collided()) {
            main();
        }else{
            drawSnake();
        }
    }, 100);
}

function collided() {
    let crash = false;
    if (snake[0].x === board.width) {
        $("audio#pop")[0].muted = false;
        $("audio#pop")[0].play();
        return true;
    }
    return crash;
}

function clearCanvas() {
    canvas.fillStyle = "white";
    canvas.strokestyle = "black";
    canvas.fillRect(0, 0, board.width, board.height);
    canvas.strokeRect(0, 0, board.width, board.height);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
    console.log(snake)
}

function drawSnakePart(snakePart) {
    console.log(snakePart)
    canvas.fillStyle = 'blue';
    canvas.strokestyle = 'darkblue';
    canvas.fillRect(snakePart.x, snakePart.y, 10, 10);
}

function move_snake() {
    console.log("In move " + snake[0].x + " " + snake[0].y)
    // Create the new Snake's head
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    snake.pop();
    console.log(snake)
}

function changeDirection(event) {

}