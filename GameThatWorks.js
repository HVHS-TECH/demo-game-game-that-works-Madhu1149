function setup() {
    cnv = new Canvas(windowWidth, windowHeight);
    
    // Create player sprite (square)
    player = new Sprite(2, 50, 30, 30, 'd');
    player.color = 'blue';
    player.rotationSpeed = 2;
    
    // Walls surrounding the platforms
    let wallLH = new Sprite(500, 400, 8, 700, 'k'); 
    wallLH.color = 'black';
    
    let wallRH = new Sprite(900, 400, 8, 700, 'k');
    wallRH.color = 'blue';
    
    let wallTop = new Sprite(700, 50, 408, 10, 'k'); 
    wallTop.color = 'purple';
    
    let wallBot = new Sprite(700, 750, 408, 10, 'k'); 
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
    player.moveTowards(mouseX, mouseY, 2);
    
    if (mouse.presses()) {
        player.moveTo(300, 400, 5);
    }
}

function spawnCoin() {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    let newCoin = new Sprite(x, y, 20, 'd');
    newCoin.color = 'gold';
    coinGroup.add(newCoin);
    
    // Set a timeout for the coin to disappear after 5 seconds
    setTimeout(() => {
        if (coinGroup.includes(newCoin)) {
            newCoin.remove();
            noLoop();
        }
    }, 5000);
}

function collectCoin(_player, _collectedCoin) {
    _collectedCoin.remove();
    spawnCoin();
}
