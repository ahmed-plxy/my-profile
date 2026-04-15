const buttons = document.querySelectorAll('.social-btn');
const toast = document.getElementById('toast');

let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const link = button.dataset.link?.trim();

    if (!link) {
      showToast(' لينكاتي✨');
      button.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-4px)' },
          { transform: 'translateX(4px)' },
          { transform: 'translateX(0)' }
        ],
        { duration: 220, iterations: 1 }
      );
      return;
    }

    window.open(link, '_blank', 'noopener,noreferrer');
  });
});


const card = document.querySelector('.profile-card');
let rafId = null;

document.addEventListener('mousemove', (e) => {
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  if (x < 0 || x > 1 || y < 0 || y > 1) {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    return;
  }

  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const rotateY = (x - 0.5) * 6;
    const rotateX = (0.5 - y) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
