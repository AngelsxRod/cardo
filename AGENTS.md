<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cardo

Landing page estática de **Cardo**, un restaurante-cafetería ficticio de cocina de mercado. Proyecto académico individual (Universidad de San Pablo de Guatemala) — sin backend, sin formularios funcionales, contenido 100% fijo.

## Stack

Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 (modo CSS-first, **no existe `tailwind.config.js`** — todo el theme vive en `src/app/globals.css` vía `@theme inline`) · TypeScript · pnpm.

## Reglas de esta base de código

- **Todo el contenido del sitio vive en `src/lib/data.ts`**, tipado con TypeScript (menú, testimonios, galería, nav, contacto). Nunca hardcodear texto/precios/links directamente en un componente de sección — agregar o editar en `data.ts`.
- **`src/components/sections/`** — un componente por sección de la landing (Header, Hero, About, Menu, Gallery, Testimonials, Location, Footer), en ese orden en `src/app/page.tsx`. **`src/components/ui/`** — piezas reutilizables sin conocimiento del contenido (Button, Container, SectionHeading, ThistleMark).
- **Server Components por defecto.** `Header.tsx` es el único Client Component (necesita `useState` para el menú móvil) — antes de agregar `"use client"` a algo, confirmar que de verdad necesita interactividad en el navegador.
- **Sin librerías de UI** (nada de shadcn ni componentes preconstruidos) — todo a mano con Tailwind. Sin librerías de íconos — los SVG (incluyendo `ThistleMark`, la firma visual de la marca) se escriben a mano e inline.
- **Imágenes**: siempre `next/image`, nunca `<img>`. Los remotos permitidos están en `next.config.ts` → `images.remotePatterns` (hoy solo `images.unsplash.com`; si se agrega otro host de imágenes hay que sumarlo ahí o Next las bloquea con 400).
- **Variables de entorno públicas** (usadas en Client Components, como el teléfono de WhatsApp) van con prefijo `NEXT_PUBLIC_`. Documentarlas en `.env.example` — `.env.local` nunca se commitea.

## Sistema de diseño

No romper esta identidad al tocar estilos:

- **Paleta**: blanco/negro-casi-puro como base, con **un único acento cálido** — terracota, `oklch(0.62 0.16 35)` (token `--color-accent` / `accent` en Tailwind). No introducir un segundo color de acento para "detalles"; los tokens neutros (`muted`, `border`, `muted-foreground`) llevan un leve tinte cálido, no gris puro.
- **Tipografía**: `font-display` (Fraunces) para títulos, `font-sans` (Archivo, default del body) para texto, `font-mono` (IBM Plex Mono) para precios/horarios/etiquetas en mayúscula con tracking amplio — ese trío es la identidad tipográfica del sitio, no mezclar con otras fuentes.
- **Firma visual**: `ThistleMark` (`src/components/ui/ThistleMark.tsx`) es una ilustración de línea del cardo (la planta) que se repite a propósito por todo el sitio (logo, marca de agua del hero/footer, eyebrows de sección, pin del mapa). Es el elemento distintivo del diseño — no reemplazarlo por un ícono genérico.
- Bordes casi rectos (`rounded-sm`), no `rounded-full`/`rounded-2xl` salvo en íconos circulares puntuales (redes sociales) — el lenguaje visual es estructural/editorial, no "SaaS burbujeante".

## Convención de commits

Este proyecto sigue la convención de `Proyectos/personal/CLAUDE.md` (Conventional Commits, mensajes en español, un commit por cambio lógico, nunca `Co-Authored-By: Claude`). No la repito aquí en detalle — ese archivo es la fuente de verdad.
