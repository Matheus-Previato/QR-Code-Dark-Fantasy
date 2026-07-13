/**
 * Sistema de Partículas: Cinzas Prateadas (Silver Ash)
 * Matemátia focada em cinemática com oscilação lateral suave.
 */
const canvas = document.getElementById('ash-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const PARTICLE_COUNT = 80;

// Ajusta o canvas ao tamanho da janela
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class AshParticle {
    constructor() {
        this.reset();
        // Inicializa as partículas em posições aleatórias da tela na primeira vez
        this.y = Math.random() * height; 
    }

    reset() {
        this.x = Math.random() * width;
        this.y = -10; // Nasce acima do viewport
        
        // Tamanhos finos, remetendo a fuligem ou poeira leve
        this.size = Math.random() * 1.5 + 0.5;
        
        // Cinemática
        this.vy = Math.random() * 0.8 + 0.2; // Velocidade de queda
        
        // Fatores da onda (oscilação lateral)
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = Math.random() * 0.02 + 0.005;
        this.amplitude = Math.random() * 1.5;

        // Tonalidade de cinza frio metálico
        const shade = Math.floor(Math.random() * 55) + 150; // RGB entre 150 e 205
        this.color = `rgba(${shade}, ${shade}, ${shade + 10}, ${Math.random() * 0.5 + 0.1})`;
    }

    update() {
        // Equação de oscilação: x(t) = x0 + A * sin(omega * t)
        this.angle += this.angularSpeed;
        this.x += Math.sin(this.angle) * this.amplitude;
        
        // Queda linear: y(t) = y0 + vy * t
        this.y += this.vy;

        // Se passar da tela, respawna no topo
        if (this.y > height + 10) {
            this.reset();
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Desenha quadrados para manter as "bordas afiadas" da diretriz
        ctx.rect(this.x, this.y, this.size, this.size); 
        ctx.fill();
    }
}

// Inicializar partículas
for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new AshParticle());
}

// Loop de animação
function animate() {
    // Apaga o frame anterior mantendo a cor do fundo
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    requestAnimationFrame(animate);
}

// Inicia o motor WebGL/Canvas
animate();