/**
 * HYE HOUSE - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuToggle.textContent = mobileMenu.classList.contains('active') ? 'Close' : 'Menu';
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuToggle.textContent = 'Menu';
      });
    });
  }
  
  // CMS Form Handler - Submits all forms to the CMS endpoint
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
      formData.forEach(function(value, key) {
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
          
          if (form.dataset.successRedirect) {
            window.location.href = form.dataset.successRedirect;
          } else {
            alert(successMsg);
          }
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
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
});
