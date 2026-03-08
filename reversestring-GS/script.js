// Reverse String - AI4Devs Ejercicio 01
// Chatbot: Claude Sonnet 4.6 (claude.ai)

const inputEl    = document.getElementById('inputText');
const outputEl   = document.getElementById('outputText');
const outputBox  = document.getElementById('outputBox');
const btnWrap    = document.getElementById('btnWrap');
const btnReverse = document.getElementById('reverseBtn');
const charCount  = document.getElementById('charCount');
const modeToggle = document.getElementById('modeToggle');
const labelBtn   = document.getElementById('labelBtn');
const labelRT    = document.getElementById('labelRT');

let isRealTime = false;

function reverseString(str) {
  return str.split('').reverse().join('');
}

function showResult(value) {
  if (value.length === 0) {
    outputEl.textContent = 'El resultado aparecera aqui...';
    outputEl.classList.add('empty');
    outputBox.classList.remove('has-content');
  } else {
    outputEl.textContent = reverseString(value);
    outputEl.classList.remove('empty');
    outputBox.classList.add('has-content');
  }
}

function updateUI() {
  const value = inputEl.value;
  charCount.textContent = value.length;

  if (isRealTime) {
    btnWrap.classList.remove('visible');
    showResult(value);
  } else {
    if (value.length > 3) {
      btnWrap.classList.add('visible');
    } else {
      btnWrap.classList.remove('visible');
      showResult('');
    }
  }
}

function setMode(realTime) {
  isRealTime = realTime;
  labelBtn.classList.toggle('active', !realTime);
  labelRT.classList.toggle('active',  realTime);
  showResult('');
  updateUI();
}

modeToggle.addEventListener('change', () => setMode(modeToggle.checked));
inputEl.addEventListener('input', updateUI);
btnReverse.addEventListener('click', () => {
  if (inputEl.value) showResult(inputEl.value);
});

setMode(false);
