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

// Main Tab Navigation (Tab 1: General Info, Tab 2: Job Hub, etc.)
function switchMainTab(targetTabId, updateHash = true) {
  const tabButtons = document.querySelectorAll('.main-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  let targetExists = false;
  tabPanes.forEach(pane => {
    if (pane.id === targetTabId) {
      pane.classList.remove('hidden');
      pane.classList.add('active');
      targetExists = true;
    } else {
      pane.classList.add('hidden');
      pane.classList.remove('active');
    }
  });

  if (!targetExists && tabPanes.length > 0) {
    tabPanes[0].classList.remove('hidden');
    tabPanes[0].classList.add('active');
    targetTabId = tabPanes[0].id;
  }

  tabButtons.forEach(btn => {
    if (btn.dataset.tab === targetTabId) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  if (updateHash) {
    if (history.pushState) {
      history.pushState(null, null, '#' + targetTabId);
    } else {
      window.location.hash = targetTabId;
    }
  }

  // Scroll to top of main content smoothly
  const mainTop = document.getElementById('top');
  if (mainTop && window.scrollY > mainTop.offsetTop + 50) {
    mainTop.scrollIntoView({ behavior: 'smooth' });
  }
}

// UML Diagram Switcher within Tab 2
function switchUmlDiagram(targetDiagramId) {
  const diagramBtns = document.querySelectorAll('.uml-tab-btn');
  const diagramPanes = document.querySelectorAll('.uml-pane');

  diagramPanes.forEach(pane => {
    if (pane.id === targetDiagramId) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });

  diagramBtns.forEach(btn => {
    if (btn.dataset.diagram === targetDiagramId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Bind Tab Click Handlers
  const tabButtons = document.querySelectorAll('.main-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchMainTab(tabId, true);
    });
  });

  // Bind UML Diagram Tab Handlers
  const diagramBtns = document.querySelectorAll('.uml-tab-btn');
  diagramBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const diagramId = btn.dataset.diagram;
      switchUmlDiagram(diagramId);
    });
  });

  // Check URL Hash for direct link to tab (e.g., #tab-job-hub or #tab-general)
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash === 'tab-job-hub' || initialHash === 'job-hub') {
    switchMainTab('tab-job-hub', false);
  } else if (initialHash === 'tab-general' || initialHash === 'general') {
    switchMainTab('tab-general', false);
  }

  // Listen to hash change (back/forward browser buttons)
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'tab-job-hub' || hash === 'job-hub') {
      switchMainTab('tab-job-hub', false);
    } else if (hash === 'tab-general' || hash === 'general') {
      switchMainTab('tab-general', false);
    }
  });
});
