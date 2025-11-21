document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.querySelector('.animation-container');

    // Create dynamic balloons
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('img');
        balloon.src = 'image/balloon.jpeg';
        balloon.alt = 'Balloon';
        balloon.classList.add('balloon');
        // Randomize horizontal position for dynamic balloons
        balloon.style.left = Math.random() * 100 + '%';
        // Randomize animation duration
        balloon.style.animationDuration = (Math.random() * 3 + 3) + 's';
        animationContainer.appendChild(balloon);
    }
});
