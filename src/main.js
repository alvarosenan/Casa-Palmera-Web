// Casa Palmera — interacciones de la web

// Nav: fondo al hacer scroll + menú móvil
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click', () => {
  burger.classList.toggle('activo');
  navLinks.classList.toggle('abierto');
});
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    burger.classList.remove('activo');
    navLinks.classList.remove('abierto');
  })
);

// Animación de aparición al hacer scroll
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observador.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observador.observe(el));

// Carrusel del hero: transición suave entre varias fotos reales de la casa
const heroSlidesEl = document.getElementById('heroSlides');
const fotosHero = [
  '/images/hero.jpg',
  '/images/galeria/salon-2.jpg',
  '/images/galeria/terraza-1.jpg',
  '/images/galeria/cocina-1.jpg',
  '/images/galeria/exterior-3.jpg',
];
if (heroSlidesEl) {
  heroSlidesEl.innerHTML = fotosHero
    .map((src, i) => `<img class="hero-slide${i === 0 ? ' activo' : ''}" src="${src}" alt="Casa Palmera">`)
    .join('');
  const slides = heroSlidesEl.querySelectorAll('.hero-slide');
  let indiceActual = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[indiceActual].classList.remove('activo');
      indiceActual = (indiceActual + 1) % slides.length;
      slides[indiceActual].classList.add('activo');
    }, 4500);
  }
}

// Mosaico de galería: fotografías reales de la casa, sin etiquetas de estancia
// (se omiten los textos por estancia para no etiquetar una foto con la
// categoría equivocada)
const fotosMosaico = [
  { src: '/images/galeria/terraza-1.jpg', alt: 'Casa Palmera — terraza', clase: 'm-g1' },
  { src: '/images/galeria/salon-2.jpg', alt: 'Casa Palmera — salón', clase: 'm-g2' },
  { src: '/images/galeria/cocina-1.jpg', alt: 'Casa Palmera — cocina', clase: 'm-g3' },
  { src: '/images/galeria/habitaciones-1.jpg', alt: 'Casa Palmera — habitación', clase: 'm-g4' },
  { src: '/images/galeria/playa-2.jpg', alt: 'Playa cercana a Casa Palmera', clase: 'm-g5' },
  { src: '/images/galeria/exterior-1.jpg', alt: 'Casa Palmera — exterior', clase: 'm-g6' },
  { src: '/images/galeria/banos-2.jpg', alt: 'Casa Palmera — baño', clase: 'm-g7' },
  { src: '/images/galeria/atardeceres-2.jpg', alt: 'Atardecer cerca de Casa Palmera', clase: 'm-g8' },
  { src: '/images/galeria/habitaciones-3.jpg', alt: 'Casa Palmera — habitación', clase: 'm-g9' },
  { src: '/images/galeria/cocina-3.jpg', alt: 'Casa Palmera — cocina' },
  { src: '/images/galeria/terraza-3.jpg', alt: 'Casa Palmera — terraza' },
  { src: '/images/galeria/playa-4.jpg', alt: 'Playa cercana a Casa Palmera' },
  { src: '/images/galeria/salon-4.jpg', alt: 'Casa Palmera — salón' },
  { src: '/images/galeria/exterior-3.jpg', alt: 'Casa Palmera — exterior' },
  { src: '/images/galeria/atardeceres-4.jpg', alt: 'Atardecer cerca de Casa Palmera' },
  { src: '/images/galeria/banos-4.jpg', alt: 'Casa Palmera — baño' },
];

const mosaico = document.getElementById('mosaico');
if (mosaico) {
  mosaico.innerHTML = fotosMosaico
    .map(
      (f) => `
    <div class="foto ${f.clase || ''}">
      <img src="${f.src}" alt="${f.alt}" loading="lazy">
    </div>`
    )
    .join('');
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.addEventListener('click', (e) => {
  const foto = e.target.closest('.mosaico .foto');
  if (foto) {
    const img = foto.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('activo');
  }
});
document.getElementById('lightboxCerrar')?.addEventListener('click', () => lightbox.classList.remove('activo'));
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('activo');
});

// FAQ acordeón
document.querySelectorAll('.faq-p').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const respuesta = item.querySelector('.faq-r');
    const yaAbierto = item.classList.contains('abierto');
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('abierto');
      i.querySelector('.faq-r').style.maxHeight = null;
    });
    if (!yaAbierto) {
      item.classList.add('abierto');
      respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
    }
  });
});
