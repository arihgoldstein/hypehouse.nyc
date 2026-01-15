/**
 * Hye House Photo Lightbox
 * Cinematic slideshow for photo galleries
 */

(function() {
  'use strict';

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCurrent = document.getElementById('lightboxCurrent');
  const lightboxTotal = document.getElementById('lightboxTotal');
  const lightboxThumbnails = document.getElementById('lightboxThumbnails');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  
  const photoItems = document.querySelectorAll('.photo-item');
  let photos = [];
  let currentIndex = 0;

  // Collect photo data
  photoItems.forEach((item, index) => {
    photos.push({
      src: item.dataset.src,
      caption: item.dataset.caption || '',
      index: index
    });
  });

  // Update total count
  if (lightboxTotal) {
    lightboxTotal.textContent = photos.length;
  }

  // Build thumbnails
  if (lightboxThumbnails && photos.length > 0) {
    photos.forEach((photo, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'lightbox-thumb';
      thumb.innerHTML = `<img src="${photo.src}" alt="" loading="lazy">`;
      thumb.addEventListener('click', () => goToPhoto(index));
      lightboxThumbnails.appendChild(thumb);
    });
  }

  // Open lightbox
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Go to specific photo
  function goToPhoto(index) {
    currentIndex = index;
    updateLightbox();
  }

  // Navigate photos
  function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightbox();
  }

  function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  }

  // Update lightbox display
  function updateLightbox() {
    const photo = photos[currentIndex];
    if (!photo) return;

    // Fade effect
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.caption;
      lightboxCaption.textContent = photo.caption;
      lightboxCurrent.textContent = currentIndex + 1;
      
      // Update active thumbnail
      const thumbs = lightboxThumbnails.querySelectorAll('.lightbox-thumb');
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
      });
      
      // Scroll thumbnail into view
      const activeThumb = thumbs[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      lightboxImage.style.opacity = '1';
    }, 150);
  }

  // Event listeners
  photoItems.forEach((item) => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index, 10);
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevPhoto);
  nextBtn.addEventListener('click', nextPhoto);

  // Click outside to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        prevPhoto();
        break;
      case 'ArrowRight':
        nextPhoto();
        break;
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextPhoto();
      } else {
        prevPhoto();
      }
    }
  }

  // Preload adjacent images
  function preloadAdjacent() {
    const preloadIndices = [
      (currentIndex + 1) % photos.length,
      (currentIndex - 1 + photos.length) % photos.length
    ];
    
    preloadIndices.forEach(index => {
      const img = new Image();
      img.src = photos[index].src;
    });
  }

  // Call preload on update
  const originalUpdate = updateLightbox;
  updateLightbox = function() {
    originalUpdate();
    preloadAdjacent();
  };

})();
