

const loadingEl = document.getElementById("loading");
let counter = 0;
const maxWidth = Math.ceil(window.innerWidth / 30);
function loop() {
    counter ++;
    counter %= maxWidth;

    loadingEl.textContent = `[${"=".repeat(counter)}>${"\u00A0".repeat(maxWidth - counter)}]`;

    setTimeout(() => {
        requestAnimationFrame(loop);       
    }, 200);
}


document.body.onload = function() {
    requestAnimationFrame(loop);
}