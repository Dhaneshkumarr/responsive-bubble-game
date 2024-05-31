var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubbles() {
    var bubbles = " ";
    for (let i = 1; i <= 99; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${rn}</div>`
        bubbles += `<div class="bubble">${rn}</div>`
        bubbles += `<div class="bubble">${rn}</div>`
        document.querySelector("#pbttm").innerHTML = bubbles;
    }
}
function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").innerText = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#pbttm").innerHTML = `
                <div><h1>Game Over...</h1>
                    <div style="height: 1rem;"></div>
                        <h1>Your total score: ${score}</h1></div>`;
        }
    }, 1000);
}
document.querySelector("#pbttm")
    .addEventListener("click", function (details) {
        var clickedNum = Number(details.target.textContent);
        if (clickedNum === hitrn) {
            increaseScore();
            makeBubbles();
            getNewHit();
        }
    })
runTimer();
makeBubbles();
getNewHit();