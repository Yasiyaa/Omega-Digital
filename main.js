/**
 * Omega Innovation — Interactive Controller
 * Handles floating navigation transitions, responsive mobile drawer,
 * logo dynamic switching between hero & light sections, and contact inquiry submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Navigation Elements & Scroll Behavior
  const navContainer = document.getElementById('nav-container');
  const navbarLogo = document.getElementById('navbar-logo');
  const heroSection = document.getElementById('hero');

  // Logo Sources
  const logoWhite = 'Images/inovation logo/1 logo_Logo concept 1 copy 2.png';
  const logoColor = 'Images/inovation logo/1 logo_Logo concept 1 copy 2.png';

  const updateNavbarState = () => {
    if (!heroSection || !navContainer || !navbarLogo) return;

    const heroBottom = heroSection.getBoundingClientRect().bottom;

    // When scrolled past hero banner threshold
    if (heroBottom <= 100) {
      if (!navContainer.classList.contains('scrolled')) {
        navContainer.classList.add('scrolled');
        navbarLogo.src = logoColor;
      }
    } else {
      if (navContainer.classList.contains('scrolled')) {
        navContainer.classList.remove('scrolled');
        navbarLogo.src = logoWhite;
      }
    }
  };

  window.addEventListener('scroll', updateNavbarState, { passive: true });
  updateNavbarState(); // Initial check

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('active');
      }
    });
  }

  // 4. Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (contactForm && submitBtn && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Inquiry...</span>`;

      // Simulate instantaneous enterprise submission
      setTimeout(() => {
        submitBtn.innerHTML = `<span>Inquiry Received</span> <i data-lucide="check"></i>`;
        formStatus.textContent = 'Thank you. An Omega Innovation partner will reach out within 24 hours.';
        formStatus.className = 'form-status success';
        contactForm.reset();

        if (window.lucide) {
          window.lucide.createIcons();
        }

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }, 5000);
      }, 1000);
    });
  }

  // 5. Video Autoplay Robustness
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.play().catch(err => {
      console.warn('Hero video autoplay was restricted:', err);
    });
  }
});
