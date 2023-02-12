import Ball from "./ball.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));

let lasttime;
function update(time) {
    if (lasttime != null) {
        const delta = time - lasttime
        ball.update(delta)
    }
    lasttime = time;
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)