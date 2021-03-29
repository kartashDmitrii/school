export default class DotsCanvas {
    constructor(payload) {
        this.importElem = payload.importElem;
        this.class = payload.class;
        this.width = payload.width;
        this.height = payload.height;
        this.canvas = document.createElement('CANVAS');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.classList.add(this.class);
        this.importElem.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = 'rgb(255, 201, 25)';
        for (let i = 5.5; i < this.width; i += 32){
            for (let j = 5.5; j < this.height; j += 32){
                this.drawDot(i, j, 5.5);
            }
        }
    }
    drawDot(X, Y, Rad){
        this.ctx.beginPath();
        this.ctx.arc(X, Y, Rad, 0, Math.PI * 2, true);
        this.ctx.fill()
    }
}