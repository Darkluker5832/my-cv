// Theme handling (Light / Dark mode)
const btnTheme = document.getElementById('btnTheme');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

// Initial theme detection
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
applyTheme(initialDark);

if (btnTheme) {
  btnTheme.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newDark = !isDark;
    applyTheme(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  });
}

// Print Handler
const btnPrint = document.getElementById('btnPrint');
if (btnPrint) {
  btnPrint.addEventListener('click', () => {
    window.print();
  });
}

// Toast & Copy to Clipboard
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied "${text}" to clipboard`);
    }).catch(() => {
      promptCopy(text);
    });
  } else {
    promptCopy(text);
  }
}

function promptCopy(text) {
  window.prompt("Copy this:", text);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}
