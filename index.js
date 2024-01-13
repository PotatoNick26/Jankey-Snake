class SnakePart{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

setting()

//game loop
function drawGame() {
    positionCheckers();
    checkForChange();
    changeSnakePosition();
    setTimeout(drawGame, 1000/speed);
    let result = isGameOver();
    if(result) {
        document.removeEventListener('keydown', keyDown);
        return;
    } else {
        document.addEventListener('keydown', keyDown);
    }
    
    checkForTrueImpossible();
    clearScreen();
    checkAppleCollision();
    drawApple();
    drawSnake();
    drawScore();
    drawSpeed();
    if (speedPlusVisible && !settings.mode.sameSpeed) {
    drawSpeedPlus();
    }
}

drawGame();