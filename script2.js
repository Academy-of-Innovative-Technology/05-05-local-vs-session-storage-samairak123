
document.addEventListener('DOMContentLoaded', () => {
  const localInput = document.getElementById('localStorage');
  const sessionInput = document.getElementById('sessionStorage');

  const saveLocalBtn = document.querySelector('.submit');
  const saveSessionBtn = document.querySelector('.submit2');
  const printBtn = document.querySelector('.printContent');

  const localAlert = document.querySelector('.alert');
  const sessionAlert = document.querySelector('.alert2');

  const localContent = document.getElementById('localContent');
  const sessionContent = document.getElementById('sessionContent');


  const LOCAL_KEY = 'part2-local';
  const SESSION_KEY = 'part2-session';

  function flash(el) {
    if (!el) return;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 1200);
  }

  if (saveLocalBtn && localInput) {
    saveLocalBtn.addEventListener('click', () => {
      const val = localInput.value.trim();
      if (!val) return;
      localStorage.setItem(LOCAL_KEY, val);
      flash(localAlert);
    });
  }

  if (saveSessionBtn && sessionInput) {
    saveSessionBtn.addEventListener('click', () => {
      const val = sessionInput.value.trim();
      if (!val) return;
      sessionStorage.setItem(SESSION_KEY, val);
      flash(sessionAlert);
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const localVal = localStorage.getItem(LOCAL_KEY) || 'No localStorage data';
      const sessionVal = sessionStorage.getItem(SESSION_KEY) || 'No sessionStorage data';

      if (localContent) localContent.textContent = localVal;
      if (sessionContent) sessionContent.textContent = sessionVal;
    });
  }
});
