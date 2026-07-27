# Casa Palmera — Web

Web oficial de Casa Palmera, alojamiento vacacional en El Mojón (San Pedro del Pinatar, Murcia), entre el Mediterráneo y el Mar Menor.

Proyecto independiente, sin relación con ningún otro repositorio.

## Tecnología

- HTML + CSS + JavaScript vanilla (sin framework de UI)
- [Vite](https://vitejs.dev/) como herramienta de desarrollo y build
- Pensado para desplegarse en [Vercel](https://vercel.com) como sitio estático

## Estructura

```
casa-palmera-web/
├─ index.html          # página única, todo el contenido de la web
├─ src/
│  └─ main.js           # interacciones: galería, menú, FAQ, animaciones
├─ public/
│  ├─ favicon.svg
│  └─ images/
│     ├─ hero.jpg
│     └─ galeria/       # 32 fotos reales de la casa (4 por estancia)
├─ package.json
├─ vite.config.js
├─ .env.example
└─ .gitignore
```

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar. Puedes previsualizarla con:

```bash
npm run preview
```

## Desplegar en Vercel

**Opción A — desde GitHub (recomendado):**
1. Sube este proyecto a un repositorio de GitHub (por ejemplo `casa-palmera-web`).
2. En [vercel.com/new](https://vercel.com/new), importa ese repositorio.
3. Vercel detecta Vite automáticamente (Build Command: `npm run build`, Output Directory: `dist`). No hace falta tocar nada.
4. Pulsa Deploy.

**Opción B — desde la CLI:**
```bash
npm install -g vercel
vercel login
vercel        # despliegue de prueba
vercel --prod # despliegue definitivo
```

## Variables de entorno

Copia `.env.example` como `.env` si vas a conectar Google Maps, Analytics, el formulario de contacto, etc. Ninguna es obligatoria para que la web cargue: sin ellas, esas secciones simplemente muestran su estado de "pendiente de conectar".

## Pendiente de conectar (placeholders)

La web está completa a nivel visual y de contenido, pero estas piezas están dejadas como placeholder a propósito, sin inventar datos:

- **Formulario de contacto** — de ejemplo (muestra una alerta al enviarlo). Conéctalo a tu email, a un servicio como Formspree, o a tu propio backend.
- **WhatsApp** — enlace de ejemplo, falta el número real.
- **Calendario de disponibilidad** — es un calendario visual de ejemplo. Falta conectarlo a Booking / Airbnb / un iCal real.
- **Sistema de reservas** — enlaces de ejemplo a Booking.com y Airbnb.
- **Google Analytics** — no está instalado; añade tu `VITE_GA_MEASUREMENT_ID` y el snippet correspondiente cuando lo tengas.
- **Google Maps** — hay un hueco preparado en la sección "Mapa"; falta una `VITE_GOOGLE_MAPS_API_KEY`.
- **Dominio definitivo** — configúralo desde el panel de Vercel (Settings → Domains) cuando lo tengas.
- **Instagram, teléfono, licencia turística** — con datos de ejemplo en el pie de página; sustitúyelos por los reales.

## Fotos

Las 32 fotos de `public/images/galeria/` son fotos reales de la casa, organizadas por estancia (salón, cocina, habitaciones, baño, terraza, exterior, playa, atardeceres). La portada usa `public/images/hero.jpg`.

Las fotos de la zona (salinas, flamencos, Calblanque...) que se compartieron como referencia visual no están incluidas en el proyecto por ser fotografías de terceros con derechos de autor. Para esa sección, usa fotos propias o imágenes con licencia libre (por ejemplo de [Unsplash](https://unsplash.com) o [Pexels](https://pexels.com)).
