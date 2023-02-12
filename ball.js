export default class Ball {
    constructor(BallElm){
        this.BallElm = BallElm
    }
    get x() {
        return parseFloat(getComputedStyle(this.BallElm).getPropertyValue('--x'));
    }
    set x(value) {
        this.BallElm.style.setPropriety("--x", value)
    }
    update(delta) {
        this.x = 5
    }
}