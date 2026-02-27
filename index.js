/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let drawing = false;
ctx.lineWidth = 0.2;
ctx.globalCompositeOperation = 'exclusion';
ctx.strokeStyle = '#3c5186';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'rgba(0,0,0,0.5)';
class root{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 4 - 2;
            this.maxSize = Math.random() * 15 + 0;
            this.size = Math.random() * 1 + 2;
            this.vs = Math.random() * 2 + 0.05; // change the first number to increase the speed of the growth, change the second number to increase the minimum speed of the growth 
            this.angleX= Math.random() * 6.2;
            this.vax = Math.random() * 0.6 - 0.3; // change the first number to increase the speed of the rotation, change the second number to increase the minimum speed of the rotation  
            this.angleY= Math.random() * 6.2;
            this.vay = Math.random() * 0.6 - 0.3; // change the first number to increase the speed of the rotation, change the second number to increase the minimum speed of the rotation
            this.angle = 0;
            this.va = Math.random() * 0.05 - 0.025; // change the first number to increase the speed of the rotation, change the second number to increase the minimum speed of the rotation
            this.lightness = 10;
        }
        update(){
            this.x += this.speedX + Math.sin(this.angleX);
            this.y += this.speedY + Math.sin(this.angleY);
            this.size += this.vs;
            this.angleX += this.vax;
            this.angleY += this.vay;
            this.angle += this.va;
            if (this.lightness < 70) this.lightness += 0.25;
            if (this.size < this.maxSize){
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angleX);
            ctx.fillStyle = '#8d1d83';
            ctx.fillRect(0, 0, this.size, this.size);
            ctx.strokeStyle = '#3c5186';
            ctx.strokeRect(0, 0, this.size * 2, this.size);
                requestAnimationFrame(this.update.bind(this));
            ctx.restore();
            } 
        }
        

    }
class Flower {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = size; 
        this.vs = Math.random() * 0.3 + 0.2; // change the first number to increase the speed of the growth, change the second number to increase the minimum speed of the growth
        this.MaxFlowersSize = this.size + Math.random() * 180;
        this.image = new Image();
        this.image.src = 'cross.png';
        this.FrameSize = 100;
        this.frameY = Math.floor(Math.random() * 3);;     
        this.frameX = Math.floor(Math.random() * 3);;     
       this.size > 11.5 ? this.willFlower = true : this.willFlower = false; 
       this.angle = 0;
       this.va = Math.random() * 0.05 - 0.025; // change the first number to increase the speed of the rotation, change the second number to increase the minimum speed of the rotation
    };
    grow(){ 
        if (this.size < this.MaxFlowersSize && this.willFlower){
            this.size += this.vs;
            this.angle += this.va;
 
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.FrameSize * this.frameX, this.FrameSize * this.frameY, this.FrameSize, this.FrameSize, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        ctx.restore();
        requestAnimationFrame(this.grow.bind(this));
        }
    } 
}
window.addEventListener('mousemove', function(e){
    if (drawing){
    for (let i = 0; i < 30; i++){
    const root1 = new root(e.x, e.y);
    root1.update();
    }
    }
});     
window.addEventListener('mousedown', function(){
    drawing = true;
});
window.addEventListener('mouseup', function(){
    drawing = false;
});
