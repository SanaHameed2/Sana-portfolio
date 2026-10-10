/* ============================================
   Sana Hameed — Marketing Site Scripts
   Vanilla JS: fade-in, nav toggle, cookie banner
   ============================================ */

(function () {
  'use strict';

  // ---------- FADE IN ON SCROLL ----------
  const fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add('visible'));
  }

  // ---------- MOBILE NAV TOGGLE ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---------- COOKIE CONSENT BANNER ----------
  const COOKIE_KEY = 'sana_marketing_cookie_consent';
  const banner = document.getElementById('cookie-banner');

  if (banner) {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setTimeout(() => banner.classList.add('show'), 800);
    }

    const acceptBtn = banner.querySelector('[data-cookie="accept"]');
    const rejectBtn = banner.querySelector('[data-cookie="reject"]');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        banner.classList.remove('show');
        // Google AdSense personalized ads consent signal
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          });
        }
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, 'rejected');
        banner.classList.remove('show');
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
        }
      });
    }
  }

  // ---------- SMOOTH SCROLL FALLBACK ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();