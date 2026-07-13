const canvas = document.getElementById('ash-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const PARTICLE_COUNT = 80;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class AshParticle {
    constructor() {
        this.reset();
        this.y = Math.random() * height; 
    }

    reset() {
        this.x = Math.random() * width;
        this.y = -10;
        
        this.size = Math.random() * 1.5 + 0.5;
        
        this.vy = Math.random() * 0.8 + 0.2;
        
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = Math.random() * 0.02 + 0.005;
        this.amplitude = Math.random() * 1.5;

        const shade = Math.floor(Math.random() * 55) + 150; 
        this.color = `rgba(${shade}, ${shade}, ${shade + 10}, ${Math.random() * 0.5 + 0.1})`;
    }

    update() {
        this.angle += this.angularSpeed;
        this.x += Math.sin(this.angle) * this.amplitude;
        
        this.y += this.vy;

        if (this.y > height + 10) {
            this.reset();
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size); 
        ctx.fill();
    }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new AshParticle());
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    requestAnimationFrame(animate);
}

animate();