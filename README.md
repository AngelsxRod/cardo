# Cardo

Landing page de **Cardo**, un restaurante-cafetería ficticio de cocina de mercado, construida como proyecto individual para la **Universidad de San Pablo de Guatemala**.

## Contexto académico

Como parte del curso se pidió desarrollar una landing page para un negocio, dejando a criterio de cada estudiante qué tipo de negocio representar y cómo construir su identidad visual. En vez de usar contenido genérico o una plantilla, decidí inventar un negocio concreto — un restaurante-cafetería de cocina de mercado — y diseñarle un sistema visual propio (tipografía, paleta de color, un elemento de marca recurrente) en lugar de apoyarme en componentes prediseñados.

El proyecto es 100% frontend, con contenido estático y sin backend: el objetivo era practicar arquitectura de componentes en Next.js, diseño responsive con Tailwind CSS, y una identidad visual coherente de principio a fin.

## Sobre "Cardo"

Cardo es el nombre del negocio y también el de una planta real (el cardo/alcachofa silvestre) — espinosa, estructural, de mercado. Esa doble lectura del nombre es el eje del diseño: la marca usa una ilustración de línea propia de la planta como firma visual, repetida a lo largo de toda la página (logo, fondo del hero, íconos de sección, marca de agua del footer, pin del mapa de ubicación).

## Stack técnico

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com/) (modo CSS-first, sin `tailwind.config.js`)
- TypeScript
- [pnpm](https://pnpm.io/) como gestor de paquetes
- Fuentes vía `next/font/google`: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display), [Archivo](https://fonts.google.com/specimen/Archivo) (texto), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (precios, horarios, etiquetas)
- Imágenes de [Unsplash](https://unsplash.com/) servidas y optimizadas con `next/image`

Sin librerías de componentes de UI (nada de shadcn ni similares) — todo construido a mano con Tailwind.

## Secciones de la página

1. **Header** — navegación con anclas y botón "Reservar" (abre WhatsApp con un mensaje precargado)
2. **Hero** — imagen de fondo, título y tagline
3. **Sobre nosotros** — cocina de mercado, productores locales, menú rotativo
4. **Menú destacado** — 6 platillos con nombre, precio y descripción
5. **Galería** — grid asimétrico de fotos del ambiente y la comida
6. **Testimonios** — citas de clientes en formato editorial
7. **Ubicación** — dirección, horario y un mapa ilustrado (no es un mapa real, es una pieza de diseño propia)
8. **Footer** — redes sociales, contacto y copyright

## Sistema de diseño

- **Paleta**: blanco y negro/gris muy oscuro como base, con un único acento cálido — terracota (`oklch(0.62 0.16 35)`) — reservado para CTAs y detalles.
- **Tipografía**: Fraunces para títulos (con un tratamiento orgánico, no el serif "elegante" típico), Archivo para texto de cuerpo, y IBM Plex Mono para precios/horarios/etiquetas — buscando una sensación de menú impreso de mercado, no de plantilla genérica.
- **Firma visual**: `ThistleMark`, una ilustración de línea del cardo dibujada a mano en SVG, reutilizada como logo, marca de agua y elemento decorativo en toda la página.

## Cómo correr el proyecto localmente

Requiere [pnpm](https://pnpm.io/installation).

```bash
# Instalar dependencias
pnpm install

# Levantar el servidor de desarrollo
pnpm dev

# Build de producción
pnpm build
pnpm start
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Estructura del proyecto

```
src/
├── app/                  # App Router de Next.js (layout, page, estilos globales)
├── components/
│   ├── sections/         # Un componente por sección de la landing
│   └── ui/                # Piezas reutilizables (Button, Container, SectionHeading, ThistleMark)
└── lib/
    └── data.ts            # Todo el contenido del sitio, tipado con TypeScript
```

## Autor

[AngelsxRod](https://github.com/AngelsxRod)
