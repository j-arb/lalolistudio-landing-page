// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Gallery data
const galleries = {
  aurora: {
    title: 'Aurora',
    images: [
      'assets/Aurora/WhatsApp Image 2026-07-17 at 7.47.29 PM (6).jpeg',
      'assets/Aurora/WhatsApp Image 2026-07-17 at 7.47.30 PM.jpeg',
      'assets/Aurora/WhatsApp Image 2026-07-17 at 7.47.30 PM (1).jpeg',
    ]
  },
  avellana: {
    title: 'Avellana',
    images: [
      'assets/Avellana/WhatsApp Image 2026-07-17 at 7.47.29 PM (3).jpeg',
      'assets/Avellana/WhatsApp Image 2026-07-17 at 7.47.29 PM (4).jpeg',
      'assets/Avellana/WhatsApp Image 2026-07-17 at 7.47.29 PM (5).jpeg',
    ]
  },
  jardin: {
    title: 'Jardín de Lino',
    images: [
      'assets/JardinDeLino/WhatsApp Image 2026-07-17 at 7.47.29 PM (2).jpeg',
    ]
  }
};

let currentGallery = null;
let currentIndex = 0;

function openGallery(key) {
  currentGallery = galleries[key];
  currentIndex = 0;
  showImage();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  currentGallery = null;
}

function showImage() {
  const img = document.getElementById('lb-img');
  const title = document.getElementById('lb-title');
  img.src = currentGallery.images[currentIndex];
  img.alt = currentGallery.title;
  title.textContent = `${currentGallery.title}  ${currentIndex + 1} / ${currentGallery.images.length}`;

  document.querySelector('.lb-prev').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
  document.querySelector('.lb-next').style.visibility = currentIndex === currentGallery.images.length - 1 ? 'hidden' : 'visible';
}

function prevImage() {
  if (currentIndex > 0) { currentIndex--; showImage(); }
}

function nextImage() {
  if (currentIndex < currentGallery.images.length - 1) { currentIndex++; showImage(); }
}

// Keyboard nav for lightbox
document.addEventListener('keydown', e => {
  if (!currentGallery) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// Close lightbox on backdrop click
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
