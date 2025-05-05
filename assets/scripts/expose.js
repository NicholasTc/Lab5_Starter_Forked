// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // declare variables
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  const jsConfetti = new JSConfetti();

  // Update image and audio when horn selection changes
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    if (horn === 'air-horn' || horn === 'car-horn' || horn === 'party-horn') {
      hornImage.src = `assets/images/${horn}.svg`;
      hornAudio.src = `assets/audio/${horn}.mp3`;
    }
  });

  // Update volume icon and audio volume
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;

    let level = 3;
    if (volume === 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    }

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // Play sound and show confetti if Party Horn
  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}