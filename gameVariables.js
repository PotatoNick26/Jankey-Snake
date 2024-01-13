const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

let speed = 7;
let speedBoost = 0.5;

let tileCount = 20;
let tileSize = undefined;
let headX = 10;
let headY = 10;
const snakeParts = []
let tailLength = 2
let boostChange = false;

let appleX = Math.floor(Math.random() * tileCount);
let appleY = Math.floor(Math.random() * tileCount);

let xVelocity = 0;
let yVelocity = 0;

let score = 0;
let scoreTilUp = 5
let previousXVelocity = 0;
let previousYVelocity = 0;

let playerSizeDifference = 0;
let speedPlusVisible = false;

let style = undefined;
let canUseTrueImpossible = false;
let gameOver = false;