
document.addEventListener("DOMContentLoaded", () => {
    let coinCounter = 0;
    const counterElement = document.getElementById("coin-counter");
    const clickButton = document.getElementById("click-button");

    clickButton.addEventListener("click", () => {
        coinCounter++;
        counterElement.textContent = `Coins: ${coinCounter}`;
    });
});
    