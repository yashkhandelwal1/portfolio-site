/* ============================================
   YASH KHANDELWAL | VISUAL EFFECTS
   Progress bar, hero word reveal, cursor glow,
   card spotlight/tilt, magnetic buttons,
   staggered reveals. All off for reduced motion.
   ============================================ */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // --- SCROLL PROGRESS BAR ---
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  var ticking = false;
  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = 'scaleX(' + ratio + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  if (reduceMotion) return;

  // --- HERO HEADLINE: WORD-BY-WORD REVEAL ---
  var headline = document.querySelector('.hero__headline');
  if (headline) {
    var index = 0;
    var wrapWords = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
            } else {
              var w = document.createElement('span');
              w.className = 'word';
              w.style.transitionDelay = (0.25 + index * 0.06) + 's';
              w.textContent = part;
              frag.appendChild(w);
              index++;
            }
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          wrapWords(child);
        }
      });
    };
    wrapWords(headline);
    headline.classList.add('words-ready');
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { headline.classList.add('words-in'); });
    });
  }

  // --- HERO CURSOR GLOW ---
  var hero = document.querySelector('.hero');
  if (hero && finePointer) {
    var glow = document.createElement('div');
    glow.className = 'hero-glow';
    glow.setAttribute('aria-hidden', 'true');
    hero.insertBefore(glow, hero.firstChild);
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      glow.style.setProperty('--gx', (e.clientX - r.left) + 'px');
      glow.style.setProperty('--gy', (e.clientY - r.top) + 'px');
      glow.classList.add('on');
    });
    hero.addEventListener('pointerleave', function () { glow.classList.remove('on'); });
  }

  if (finePointer) {
    // --- CARD SPOTLIGHT (border + soft light follows cursor) ---
    document.querySelectorAll('.work-card, .work-preview-card, .service-card, .result-card').forEach(function (card) {
      card.classList.add('spotlight');
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    // --- SUBTLE TILT on smaller cards ---
    document.querySelectorAll('.work-preview-card, .service-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 5) + 'deg) translateY(-3px)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });

    // --- MAGNETIC BUTTONS ---
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.classList.add('magnetic');
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + (x * 0.18) + 'px,' + (y * 0.25) + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  }

  // --- STAGGERED REVEAL: result cards, gallery frames, tags, steps ---
  var groups = document.querySelectorAll('.results-grid, .work-card__gallery, .work-card__tags, .service-card__tags, .work-card__highlights');
  var staggerObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Array.prototype.forEach.call(entry.target.children, function (child, i) {
        child.style.transitionDelay = (i * 0.08) + 's';
      });
      entry.target.classList.add('stagger-in');
      staggerObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.15 });
  groups.forEach(function (g) {
    g.classList.add('stagger');
    staggerObserver.observe(g);
  });
})();
