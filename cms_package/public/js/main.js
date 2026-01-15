/**
 * Hye House - Main JavaScript
 * Handles navigation, forms, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // Mobile Navigation
  // ========================================
  
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Legacy menu toggle (for other pages)
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // ========================================
  // Form Handler
  // ========================================
  
  document.querySelectorAll('form[data-form-name]').forEach(function(form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formName = form.dataset.formName || 'general';
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // Collect all form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        const response = await fetch('/_forms/' + formName, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // Success - show message or redirect
          form.reset();
          const successMsg = form.dataset.successMessage || 'Thank you! Your submission has been received.';
          
          // Create inline success message
          const successEl = document.createElement('div');
          successEl.className = 'form-success';
          successEl.textContent = successMsg;
          successEl.style.cssText = 'padding: 1rem; background: rgba(255,255,255,0.1); text-align: center; margin-top: 1rem; font-size: 0.875rem;';
          form.appendChild(successEl);
          
          setTimeout(() => {
            successEl.remove();
          }, 5000);
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        alert('Sorry, there was an error. Please try again.');
        console.error('Form submission error:', error);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Lazy Load Images
  // ========================================
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ========================================
  // Header Scroll Behavior
  // ========================================
  
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.site-header') || document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

});
