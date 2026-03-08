// ─── Reverse String — AI4Devs Ejercicio 01 ───────────────────────────────────
// Chatbot utilizado: Claude Sonnet 4.6 (claude.ai)

const inputEl    = document.getElementById('inputText');
const outputEl   = document.getElementById('outputText');
const outputBox  = document.getElementById('outputBox');
const btnWrap    = document.getElementById('btnWrap');
const btnReverse = document.getElementById('reverseBtn');
const charCount  = document.getElementById('charCount');
const modeToggle = document.getElementById('modeToggle');
const labelBtn   = document.getElementById('labelBtn');
const labelRT    = document.getElementById('labelRT');

// true = Tiempo Real | false = Botón
let isRealTime = false;

/**
 * Invierte el orden de los caracteres de una cadena.
 * Ejemplo: "AI4Devs" → "sveD4IA"
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/** Muestra el resultado invertido en la caja de output */
function showResult(value) {
  if (value.length === 0) {
    outputEl.textContent = 'El resultado aparecerá aquí…';
    outputEl.classList.add('empty');
    outputBox.classList.remove('has-content');
  } else {
    outputEl.textContent = reverseString(value);
    outputEl.classList.remove('empty');
    outputBox.classList.add('has-content');
  }
}

/** Actualiza la UI completa según el modo activo */
function updateUI() {
  const value = inputEl.value;
  charCount.textContent = value.length;

  if (isRealTime) {
    // ── Modo Tiempo Real ──
    btnWrap.classList.remove('visible');
    showResult(value);
  } else {
    // ── Modo Botón ──
    // Botón visible solo cuando hay más de 3 letras (nivel opcional)
    if (value.length > 3) {
      btnWrap.classList.add('visible');
    } else {
      btnWrap.classList.remove('visible');
      showResult('');
    }
  }
}

/** Cambia el modo activo y actualiza los labels del toggle */
function setMode(realTime) {
  isRealTime = realTime;
  labelBtn.classList.toggle('active', !realTime);
  labelRT.classList.toggle('active',  realTime);
  showResult('');
  updateUI();
}

// ── Listeners ──────────────────────────────────────────────────────────────

modeToggle.addEventListener('change', () => setMode(modeToggle.checked));
inputEl.addEventListener('input', updateUI);
btnReverse.addEventListener('click', () => {
  if (inputEl.value) showResult(inputEl.value);
});

// Estado inicial: modo Botón
setMode(false);
