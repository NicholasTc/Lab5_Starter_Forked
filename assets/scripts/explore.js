// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // declare variables
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  // store
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    // Clear and repopulate to avoid duplicates
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  // Some browsers load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    const selectedIndex = voiceSelect.value;

    if (text && selectedIndex !== "select") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices[selectedIndex];

      // Swap face to open mouth
      faceImage.src = 'assets/images/smiling-open.png';

      // When finished speaking, swap back to smile
      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      synth.speak(utterance);
    }
  });
}