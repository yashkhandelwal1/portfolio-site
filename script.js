/* ============================================
   YASH KHANDELWAL | PORTFOLIO JS
   ============================================ */

(function () {
  'use strict';

  // --- DOM ELEMENTS ---
  const navHeader = document.getElementById('nav-header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav__link:not(.nav__link--icon)');
  const fadeElements = document.querySelectorAll('.fade-in');
  const sections = document.querySelectorAll('section[id]');

  // --- CREATE OVERLAY ---
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);

  // --- NAVIGATION: SCROLL BACKGROUND ---
  function handleNavScroll() {
    if (window.scrollY > 50) {
      navHeader.classList.add('scrolled');
    } else {
      navHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Run on load

  // --- MOBILE MENU TOGGLE ---
  function openMenu() {
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Close menu on link click
  navLinkItems.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  // --- INTERSECTION OBSERVER: FADE-IN ---
  var fadeObserverOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, fadeObserverOptions);

  fadeElements.forEach(function (el) {
    fadeObserver.observe(el);
  });

  // --- ACTIVE NAV LINK HIGHLIGHTING ---
  var sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinkItems.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // --- HERO ELEMENTS: STAGGERED FADE-IN ---
  var heroFadeElements = document.querySelectorAll('.hero .fade-in');
  heroFadeElements.forEach(function (el, index) {
    setTimeout(function () {
      el.classList.add('visible');
    }, 200 + index * 150);
  });

  // --- THEME TOGGLE ---
  // Initial theme is set synchronously in a head script to avoid a flash; this just wires the click.
  var themeToggle = document.getElementById('theme-toggle');
  var htmlEl = document.documentElement;

  themeToggle.addEventListener('click', function () {
    var currentTheme = htmlEl.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- EXPANDABLE WORK CARD TOGGLES ---
  var expandToggles = document.querySelectorAll('.expand-toggle');
  expandToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var content = this.nextElementSibling;
      var isOpen = this.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- CONTACT FORM SUBMISSION ---
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var formStatus = document.getElementById('form-status');
    var submitBtn = contactForm.querySelector('.form-submit');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: if this hidden field got filled in, silently drop it
      if (contactForm.botcheck.value) {
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            formStatus.textContent = "Thanks! I've got your message and will get back to you soon.";
            formStatus.className = 'form-status form-status--success';
            contactForm.reset();
          } else {
            formStatus.textContent = 'Something went wrong. Please email me directly instead.';
            formStatus.className = 'form-status form-status--error';
          }
        })
        .catch(function () {
          formStatus.textContent = 'Something went wrong. Please email me directly instead.';
          formStatus.className = 'form-status form-status--error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send message';
        });
    });
  }

})();
