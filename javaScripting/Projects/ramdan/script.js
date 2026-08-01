// Star Twinkle Effect
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelector(".stars");
    setInterval(() => {
        stars.style.opacity = Math.random() * 0.8 + 0.2;
    }, 1000);
});
