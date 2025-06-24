//***********************************************
// ASSIGN P5.JS FUNCTIONS TO THE GLOBAL WINDOW OBJECT
//***********************************************
window.setup = setup;
window.draw = draw;
// window.preload = preload; // You might not use preload

//***********************************************
// IMPORT FIREBASE FUNCTIONS
//***********************************************
import {
  fb_initialise,
  fb_changeAuth,
  fb_readRec,
  fb_writeRec,
  fb_readAll,
  fb_readSortedLimit
} from './fb_io.mjs';

let score = 0;
const MOVEMENTSPEED = 1;

let player;
let coinGroup;

function setup() {
    cnv = new Canvas(windowWidth, windowHeight);

    // Create player sprite (square)
    player = new Sprite(200, 600, 30, 30);
    player.color = 'blue';
    player.rotationSpeed = 0.1;
    player.friction = 0.1;

    // Walls
    let wallLH = new Sprite(10, 450, 8, 800, 'k');
    wallLH.color = 'black';

    let wallRH = new Sprite(1890, 450, 8, 800, 'k');
    wallRH.color = 'blue';

    let wallTop = new Sprite(950, 50, 1890, 10, 'k');
    wallTop.color = 'purple';

    let wallBot = new Sprite(950, 850, 1890, 10, 'k');
    wallBot.color = 'lightgreen';

    // Coin group
    coinGroup = new Group();

    // Register collision callback
    coinGroup.collides(player, collectCoin);

    // Spawn first coin
    spawnCoin();
}

function draw() {
    background('lightgray');

    movePlayer();
    displayScore();
}

function displayScore() {
    fill(0);
    textSize(20);
    text("Score: " + score, 10, 20);
}

function movePlayer() {
    player.moveTowards(mouseX, mouseY, MOVEMENTSPEED * 0.1);
}

function spawnCoin() {
    let x = random(200, 600);
    let y = random(200, 500);
    let newCoin = new Sprite(x, y, 20);
    newCoin.color = 'gold';
    coinGroup.add(newCoin);

    // Remove coin after 3s and stop loop
    setTimeout(() => {
        if (coinGroup.includes(newCoin)) {
            newCoin.remove();
            noLoop(); // kept as you requested
        }
    }, 3000);
}

function collectCoin(collectedCoin, _player) {
    collectedCoin.remove();
    score += 1;
    spawnCoin();
}
