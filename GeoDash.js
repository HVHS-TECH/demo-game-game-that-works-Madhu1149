function setup() {
    cnv = new Canvas(windowWidth, windowHeight);
   
    // Create player sprite (square)
    player = new Sprite(200, 600, 30, 30, 'd');
    player.color = 'blue';
    player.rotationSpeed = 0.1;
   
    // Walls surrounding the platforms
    let wallLH = new Sprite(10, 450, 8, 800, 'k');
    wallLH.color = 'black';
   
    let wallRH = new Sprite(1890, 450, 8, 800, 'k');
    wallRH.color = 'blue';
   
    let wallTop = new Sprite(950, 50, 1890, 10, 'k');
    wallTop.color = 'purple';
   
    let wallBot = new Sprite(950, 850, 1890, 10, 'k');
    wallBot.color = 'lightgreen';
   
    // Group for coins
    coinGroup = new Group();
   
    // Register a callback for collision
    coinGroup.collides(player, collectCoin);
   
    // Spawn initial coin
    spawnCoin();
}


function draw() {
    background('lightgray');
   
    // Move player towards mouse
    player.moveTowards(mouseX, mouseY, 1);
   
    if (mouse.presses()) {
        player.moveTo(600, 600, 1);
    }
}


function spawnCoin() {
    let x = random(200, 1800);
    let y = random(200, 800);
    let newCoin = new Sprite(x, y, 20, 'd');
    newCoin.color = 'gold';
    coinGroup.add(newCoin);


    // Set a timeout for the coin to disappear after 5 seconds
    setTimeout(() => {
        if (coinGroup.includes(newCoin)) {
            newCoin.remove();
            noLoop();
        }
    }, 3000);
}


function collectCoin(_collectedCoin, _player) {
    _collectedCoin.remove();
    spawnCoin();
}


