/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - KPI STAT COUNTERS ANIMATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCounters();
});

function initCounters() {
  const counterElements = document.querySelectorAll('.counter-number');
  if (counterElements.length === 0) return;

  let animated = false;

  const animate = () => {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // EaseOutQuart easing formula
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(easeProgress * target);

        // Format numbers with comma if >= 1000
        const formattedVal = currentVal >= 1000 ? currentVal.toLocaleString() : currentVal;
        counter.textContent = `${prefix}${formattedVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = `${prefix}${target >= 1000 ? target.toLocaleString() : target}${suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animate();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('achievements-stats') || document.querySelector('.counter-number')?.parentElement;
  if (statsSection) {
    observer.observe(statsSection);
  }
}
