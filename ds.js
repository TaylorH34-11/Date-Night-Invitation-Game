const noBtn = document.getElementById("noBtn");

function moveButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// iPhone & Android
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});