// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.querySelector('.animation-container');

    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        animationContainer.appendChild(balloon);
    }
});
