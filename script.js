document.addEventListener("DOMContentLoaded", function() {
    // Create falling flowers
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 3}s`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(flower);
    }

    // Create twinkling stars
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(star);
    }
});
