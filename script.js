  const audio = document.querySelector('audio');
  const btnMusica = document.getElementById('btnMusica');

  btnMusica.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btnMusica.innerText = '🎵 Pausar Música';
    } else {
      audio.pause();
      btnMusica.innerText = '🎵 Tocar Música';
    }
  });

const heart = document.querySelector('#heart');
heart.addEventListener('click', () => {
  // Acelera o coração
  heart.style.animation = 'frenetico infinite alternate 0.30s';
  
  // Volta ao normal após 2 segundos
  setTimeout(() => {
    heart.style.animation = 'pulsar infinite alternate-reverse 0.5s';
  }, 4000);
});