let board = $('#snakeBoard')[0];
let canvas = board.getContext("2d")
let d = 1;
let lives = 4;
if (canvas) {
    //console.log("Canvas supported");
} else {
    console.log("Canvas not supported");
}
// Horizontal velocity
let dx = d;
// Vertical velocity
let dy = 0;

let snake = [{x: 100, y: 50}, {x: 90, y: 50}, {x: 80, y: 50},
    {x: 70, y: 50}, {x: 60, y: 50},];


main();


$(document).keydown(function (e) {
    changeDirection(e)
})

function main() {
    if (lives < 0) {
        $("audio#gameOver")[0].muted = false;
        $("audio#gameOver")[0].play();
        alert("Game Over")
        return;
    }
    setTimeout(function start() {
        clearCanvas();
        move_snake();
        drawSnake();
        if (!collided()) {
            main();
        } else {
            drawSnake();
        }
    }, 100);
}

function collided() {
    let crash = false;
    let len = snake.length;
    //console.log("length" + snake.length)
    if (snake[0].x >= board.width || snake[0].x < 0 || snake[0].y < 0 || snake[0].y >= board.height) {
        //console.log("collided  x: " + snake[0].x + " y: " + snake[0].y)
        $("audio#pop")[0].muted = false;
        $("audio#pop")[0].play();
        lives--;
        //console.log("Lives remaining " + lives)
        createPlayAgainButton();
        return true;
    }
    return crash;
}

function createPlayAgainButton() {
    $("#buttonContainer").append(`<button id="playAgain" class="btn">Play Again</button>`)
    $("#playAgain").click(function () {
        location.reload();
    })
}

function clearCanvas() {
    canvas.fillStyle = "white";
    canvas.strokestyle = "black";
    canvas.fillRect(0, 0, board.width, board.height);
    canvas.strokeRect(0, 0, board.width, board.height);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
    //console.log(snake)
}

function drawSnakePart(snakePart) {
    //console.log(snakePart)
    canvas.fillStyle = 'blue';
    canvas.strokestyle = 'darkblue';
    console.log("x "+snakePart.x +" Y:"+snakePart.y)
    canvas.fillRect(snakePart.x, snakePart.y, 10, 10);
}

function move_snake() {
    //console.log("In move " + snake[0].x + " " + snake[0].y)
    // Create the new Snake's head
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    snake.pop();
    //console.log(snake)
}

function changeDirection(event) {
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -d;
    const goingDown = dy === d;
    const goingRight = dx === d;
    const goingLeft = dx === -d;

    if (event.which === UP && !goingDown) {
        dy = dy - d;
        dx = 0;
    } else if (event.which === DOWN && !goingUp) {
        dy = dy + d;
        dx = 0;
    } else if (event.which === RIGHT && !goingLeft) {
        dy = 0;
        dx = dx + d;
    } else if (event.which === LEFT && !goingRight) {
        dy = 0;
        dx = dx - d;
    }
    //console.log(event.which);

}