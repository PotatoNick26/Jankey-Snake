let easyButton = document.getElementById('easyButton');
let normalButton = document.getElementById('normalButton');
let hardButton = document.getElementById('hardButton');
let impossibleButton = document.getElementById('impossibleButton');
let sameSpeedButton = document.getElementById('sameSpeedButton');
let trueImpossibleButton = document.getElementById('trueImpossibleButton');

function setting() {
    if (settings.snake.style.normal) {
        tileSize = canvas.width/tileCount;
        style = `settings.snake.style.normal`
    } else if (settings.snake.style.tiled) {
        tileSize = canvas.width/tileCount - 2;
        style = `settings.snake.style.tiled`;
    } else if (settings.snake.style.pixel) {
        tileSize = canvas.width/tileCount - 19;
        style = `settings.snake.style.pixel`
    }
    
    if (settings.mode.easy) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;

        speed = 7;
        speedBoost = 0.5;
        boostChange = false;
    } else if (settings.mode.normal) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;

        speed = 7;
        speedBoost = 1;
        boostChange = false;
    } else if (settings.mode.hard) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;

        speed = 7;
        speedBoost = 3;
        boostChange = false;
    } else if (settings.mode.impossible) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;

        speed = 16;
        speedBoost = 10;
        boostChange = true;
    } else if (settings.mode.trueImpossible) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;

        speed = 5;
        speedBoost = 30;
        boostChange = true;
    } else if (settings.mode.sameSpeed) {
        snakeParts.splice(0, snakeParts.length);    
        tailLength = 0;
        headX = 10;
        headY = 10;
        xVelocity = 0;
        yVelocity = 0;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        score = 0;
        gameOver = false;
        
        speed = 16;
        speedBoost = 0;
        boostChange = false;
    }

    tailLength = settings.snake.startLength
}

easyButton.addEventListener('click', function() {
    settings.mode.easy = true;
    settings.mode.normal = false;
    settings.mode.hard = false;
    settings.mode.impossible = false;
    settings.mode.trueImpossible = false;
    settings.mode.sameSpeed = false;
    settings.mode.custom = false;

    setting();
})

normalButton.addEventListener('click', function() {
    settings.mode.easy = false;
    settings.mode.normal = true;
    settings.mode.hard = false;
    settings.mode.impossible = false;
    settings.mode.trueImpossible = false;
    settings.mode.sameSpeed = false;
    settings.mode.custom = false;

    setting();
})

hardButton.addEventListener('click', function() {
    settings.mode.easy = false;
    settings.mode.normal = false;
    settings.mode.hard = true;
    settings.mode.impossible = false;
    settings.mode.trueImpossible = false;
    settings.mode.sameSpeed = false;
    settings.mode.custom = false;

    setting();
})

impossibleButton.addEventListener('click', function() {
    settings.mode.easy = false;
    settings.mode.normal = false;
    settings.mode.hard = false;
    settings.mode.impossible = true;
    settings.mode.trueImpossible = false;
    settings.mode.sameSpeed = false;
    settings.mode.custom = false;

    setting();
})

sameSpeedButton.addEventListener('click', function() {
    settings.mode.easy = false;
    settings.mode.normal = false;
    settings.mode.hard = false;
    settings.mode.impossible = false;
    settings.mode.trueImpossible = false;
    settings.mode.sameSpeed = true;
    settings.mode.custom = false;

    setting();
})

trueImpossibleButton.addEventListener('click', function() {
    if(canUseTrueImpossible) {
        settings.mode.easy = false;
        settings.mode.normal = false;
        settings.mode.hard = false;
        settings.mode.impossible = false;
        settings.mode.trueImpossible = true;
        settings.mode.sameSpeed = false;
        settings.mode.custom = false;
    
        setting();
    } else if (!shakeRunning){
        shakeRunning = true;
        trueImpossibleButton.style.animation = 'shake .3s 3'
        //animation: shake .3s 3;
        setTimeout(function() {
            trueImpossibleButton.style.animation = 'none'
            shakeRunning = false;
            console.log('e')
        }, 1000)
    }
});

function checkForChange() {
    if (`settings.snake.style.normal` != style && settings.snake.style.normal) {
        setting()
    }
    if (`settings.snake.style.tiled` != style && settings.snake.style.tiled) {
        setting()
    }
    if (`settings.snake.style.pixel` != style && settings.snake.style.pixel) {
        setting()
    }
}