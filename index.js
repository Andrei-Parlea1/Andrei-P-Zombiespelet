// js/game.js

// Create player element
const player = document.createElement('div');
player.classList.add('player');

// Position player element
player.style.left = '400px';
player.style.top = '300px';

// Add player element to the game container
const gameContainer = document.querySelector('.game-container');
gameContainer.appendChild(player);

// Create zombie element
const zombie = document.createElement('div');
zombie.classList.add('zombie');

// Position zombie element
zombie.style.left = '200px';
zombie.style.top = '150px';

// Add zombie element to the game container
gameContainer.appendChild(zombie);

// Create power-up element
const powerUp = document.createElement('div');
powerUp.classList.add('power-up');

// Position power-up element
powerUp.style.left = '600px';
powerUp.style.top = '350px';

// Add power-up element to the game container
gameContainer.appendChild(powerUp);

// Add health bar elements to the player and zombie
const addHealthBar = (element) => {
    const healthBar = document.createElement('div');
    healthBar.classList.add('healthbar');

    const healthBarInner = document.createElement('div');
    healthBarInner.classList.add('healthbar-inner');
    healthBarInner.style.width = '100%';

    healthBar.appendChild(healthBarInner);
    element.appendChild(healthBar);
};

addHealthBar(player);
addHealthBar(zombie);

// Add game logic, such as player and zombie movement, collision detection, and updating the score