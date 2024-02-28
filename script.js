// Função para tocar o som correspondente à tecla pressionada.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

// Retorna se a tecla não estiver associada a um som.
    if (!audio) return; 
    
// Reinicia a reprodução para permitir tocar o som várias vezes seguidas.
    audio.currentTime = 0; 
    audio.play();

// Adiciona uma classe para efeito visual de tecla pressionada.
    key.classList.add('playing'); 
}

// Remove a classe 'playing' quando a transição CSS termina.
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Ignora se não for a propriedade transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



