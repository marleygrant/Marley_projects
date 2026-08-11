// Only remove the no-js fallback once this script actually runs —
// if it fails to load, CSS keeps every panel visible and stacked.
document.documentElement.classList.remove('no-js');

/* ---------- Mobile sidebar toggle ---------- */
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');

if (mobileToggle && sidebar) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  sidebar.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Project case-study tabs ---------- */
document.querySelectorAll('.project-card').forEach(card => {
  const tabs = card.querySelectorAll('.stepper-tab');
  const panels = card.querySelectorAll('.stepper-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-panel');

      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(p => {
        p.classList.toggle('is-active', p.id === targetId);
      });
    });
  });
});

/* ---------- KPI count-up + meter fill, triggered on scroll into view ---------- */
function animateCount(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  if (isNaN(target)) return;

  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

function animateMeter(el) {
  const width = el.getAttribute('data-width');
  if (width) el.style.width = width + '%';
}

const kpiNums = document.querySelectorAll('.kpi-num[data-count]');
const meterFills = document.querySelectorAll('.meter-fill[data-width]');

if ('IntersectionObserver' in window) {
  const kpiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        kpiObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  kpiNums.forEach(el => kpiObserver.observe(el));

  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMeter(entry.target);
        meterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  meterFills.forEach(el => meterObserver.observe(el));
} else {
  // No IntersectionObserver support: just show final values immediately.
  meterFills.forEach(animateMeter);
}

/* ---------- Active sidebar link on scroll ---------- */
const sections = document.querySelectorAll('.panel-section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a');

if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => navObserver.observe(section));
}
