## 📜 O Desafio

Este projeto nasceu como uma solução para o clássico desafio do [Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H), mas escalou rapidamente para um exercício de **engenharia front-end e direção de arte**. 

O objetivo não era apenas centralizar uma div (amém, CSS Grid), mas sim injetar uma estética estrita de *Monochromatic Dark Fantasy*, inspirada em mangás dos anos 2000 (como *Vampire Knight* e *Bleach*) e no movimento Visual Kei, garantindo alta performance na renderização.

## 🎨 A Estética e UI Estrita

- **Alto Contraste:** Uso de "off-blacks" (`#050507`) e cinzas metálicos (`#C5C6C7`) para evitar o sangramento visual (eye strain) do contraste absoluto.
- **Ponto Focal Dramático:** O vermelho arterial (`#FF0033`) é reservado exclusivamente para micro-interações e o estado de `:hover` do QR Code, agindo como um "jump scare" visual elegante.
- **Minimalismo Afiado:** Border-radius cravado em `0px`. Cortes secos e sombras sutis para simular brilho metálico.

## 🛠️ Stack Tecnológica

O projeto foi construído "vanilla", sem frameworks, para garantir controle absoluto sobre o DOM e o pipeline de renderização:

*   **HTML5:** Semântica estruturada com `<main>` e isolamento do motor gráfico.
*   **CSS3:** CSS Grid (One-Hit KO para centralização), CSS Custom Properties (Design Tokens), e CSS Filters para inversão de cor e efeitos de hover agressivos.
*   **JavaScript (ES6+):** Orientação a objetos para gerenciamento de entidades gráficas.
*   **Canvas API:** Motor de renderização customizado para simulação de física de partículas.

## ⚙️ Engenharia de Efeitos Visuais (Under the Hood)

### 1. Sistema de Partículas: Cinzas Prateadas (Silver Ash)
Para criar a atmosfera melancólica, foi desenvolvido um sistema de partículas vetoriais direto no `canvas`. A física por trás das cinzas caindo utiliza uma queda linear combinada com uma oscilação senoidal para simular a resistência do ar e ventos leves:

```javascript
// Cinemática da partícula
this.angle += this.angularSpeed;
this.x += Math.sin(this.angle) * this.amplitude; // Eixo X (Onda)
this.y += this.vy; // Eixo Y (Queda livre com atrito)
