function positionCheckers() {
    if (previousXVelocity === 1 && xVelocity === -1) {
        xVelocity = previousXVelocity;
    }

    if (previousXVelocity === -1 && xVelocity === 1) {
        xVelocity = previousXVelocity;
    }

    if (previousYVelocity === -1 && yVelocity === 1) {
        yVelocity = previousYVelocity;
    }

    if (previousYVelocity === 1 && yVelocity === -1) {
        yVelocity = previousYVelocity;
    }

    previousXVelocity = xVelocity;
    previousYVelocity = yVelocity;
}

function isGameOver() {
    if(yVelocity === 0 && xVelocity === 0) {
        return false;
    }

    //walls
    if(headX < 0) {
        gameOver = true;
    }
    else if(headX >= tileCount) {
        gameOver = true;
    }
    else if(headY < 0) {
        gameOver = true;
    }
    else if(headY >= tileCount) {
        gameOver = true;
    }

    snakeParts.forEach(part => {
        if(part.x === headX && part.y === headY) {
            gameOver = true;
        }
    })

    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
}
    return gameOver;
}

function checkForTrueImpossible() {
    if (settings.mode.impossible && score === 20) {
        // document.getElementById("modeSelector").innerHTML = `<button class="modeBoxes" id="easyButton">Easy</button>
        // <button class="modeBoxes" id="normalButton">Normal</button>
        // <button class="modeBoxes" id="hardButton">Hard</button>
        // <button class="modeBoxes" id="impossibleButton">Impossible</button>
        // <button class="modeBoxes" id="sameSpeedButton">Same Speed</button>
        // <button class="modeBoxes" id="trueImpossibleButton">True Impossible</button>`
        document.getElementById('trueImpossibleButton').style.opacity = 100;
        document.getElementById('trueImpossibleButton').innerText = "True Impossible";
        canUseTrueImpossible = true;
    }
}

function drawScore() {
    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana';
    ctx.fillText(`Score ${score}`, canvas.width - 45, 10)
    //document.getElementById("scoreDisplay").innerHTML = `Score: ${score}`;
}

function drawSpeed() {
    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana';
    ctx.fillText(`Speed ${speed - 6}`, 0 + 2 , 10)
}

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width, canvas.height)
}

function drawSnake() {
    ctx.fillStyle= settings.snake.bodyColor;
    snakeParts.forEach(part => {
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
    });

    ctx.fillStyle = settings.snake.headColor;
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

    snakeParts.push(new SnakePart(headX, headY));
    if (snakeParts.length > tailLength) {
        snakeParts.shift();
        }
        
}

function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple() {
    ctx.fillStyle = settings.apple.color;
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}

function checkAppleCollision() {
    if(appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++
        score++
        if (score % scoreTilUp === 0) {
            speed += speedBoost
            console.log(speed)
            speedPlusVisible = true;
            if (boostChange) {
                speedBoostHalf()
            }
        }
    }
}

function drawSpeedPlus() {
    ctx.fillStyle = 'white'
    ctx.font = '20px Verdana';
    ctx.fillText(`Speed Up`, canvas.width/2 - 35 , canvas.height - 35)
    setTimeout(function() {
        speedPlusVisible = false;
    }, 800)
}

function speedBoostHalf() {
    speedBoost /= 2
    console.log(speedBoost)
}

// function truImpEvt() {
//     console.log('sdf')
//     settings.mode.easy = false;
//     settings.mode.normal = false;
//     settings.mode.hard = false;
//     settings.mode.impossible = false;
//     settings.mode.trueImpossible = true;
//     settings.mode.sameSpeed = false;
//     settings.mode.custom = false;

//     setting();
// }

document.addEventListener('keydown', keyDown);

function keyDown(event){
    if(event.keyCode === 87 || event.keyCode === 38) {

        yVelocity = -1;
        xVelocity = 0;
    }
    if(event.keyCode === 83 || event.keyCode === 40) {

        yVelocity = 1;
        xVelocity = 0;
    }
    if(event.keyCode === 65 || event.keyCode === 37) {

        xVelocity = -1;
        yVelocity = 0;
    }
    if(event.keyCode === 68 || event.keyCode === 39) {

        xVelocity = 1;
        yVelocity = 0;
    }
}
