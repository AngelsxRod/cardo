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
- **`src/components/sections/`** — un componente por sección de la landing (Header, Hero, About, Menu, Gallery, Testimonials, Location, Contact, Footer), en ese orden en `src/app/page.tsx`. **`src/components/ui/`** — piezas reutilizables sin conocimiento del contenido (Button, Container, SectionHeading, ThistleMark).
- El nav del Header tiene un link "Contacto" (`#contacto`) que apunta a la sección `Contact.tsx` (no al Footer) — si se elimina o renombra esa sección, hay que actualizar `navLinks` en `data.ts` para que no quede un anchor roto.
- **Server Components por defecto.** `Header.tsx` es el único Client Component (necesita `useState` para el menú móvil) — antes de agregar `"use client"` a algo, confirmar que de verdad necesita interactividad en el navegador.
- **Sin librerías de UI** (nada de shadcn ni componentes preconstruidos) — todo a mano con Tailwind. Sin librerías de íconos — los SVG (incluyendo `ThistleMark`, la firma visual de la marca) se escriben a mano e inline.
- **Imágenes**: siempre `next/image`, nunca `<img>`. Los remotos permitidos están en `next.config.ts` → `images.remotePatterns` (hoy solo `images.unsplash.com`; si se agrega otro host de imágenes hay que sumarlo ahí o Next las bloquea con 400).
- **Variables de entorno públicas** (usadas en Client Components, como el teléfono de WhatsApp) van con prefijo `NEXT_PUBLIC_`. Documentarlas en `.env.example` — `.env.local` nunca se commitea.

## Sistema de diseño

No romper esta identidad al tocar estilos:

- **Paleta**: blanco/negro-casi-puro como base, con **un único acento cálido** — rojo ladrillo, `oklch(0.56 0.19 25)` (token `--color-accent` / `accent` en Tailwind). No introducir un segundo color de acento para "detalles"; los tokens neutros (`muted`, `border`, `muted-foreground`) llevan un leve tinte cálido, no gris puro.
- **Tipografía**: `font-display` (Fraunces) para títulos, `font-sans` (Archivo, default del body) para texto, `font-mono` (IBM Plex Mono) para precios/horarios/etiquetas en mayúscula con tracking amplio — ese trío es la identidad tipográfica del sitio, no mezclar con otras fuentes.
- **Firma visual**: `ThistleMark` (`src/components/ui/ThistleMark.tsx`) es una ilustración de línea del cardo (la planta) que se repite a propósito por todo el sitio (logo, marca de agua del hero/footer, eyebrows de sección, pin del mapa). Es el elemento distintivo del diseño — no reemplazarlo por un ícono genérico.
- Bordes casi rectos (`rounded-sm`), no `rounded-full`/`rounded-2xl` salvo en íconos circulares puntuales (redes sociales) — el lenguaje visual es estructural/editorial, no "SaaS burbujeante".

## Convención de commits

Todos los commits de este proyecto siguen [Conventional Commits](https://www.conventionalcommits.org/), con la descripción **en español**:

```
<tipo>: <descripción en imperativo, minúsculas, sin punto final>
```

Tipos permitidos:

| Tipo | Cuándo usarlo |
|---|---|
| `feat` | Se agrega una funcionalidad nueva |
| `fix` | Se corrige un error |
| `docs` | Cambios solo de documentación (README, comentarios) |
| `chore` | Configuración, dependencias, estructura del proyecto — sin cambiar comportamiento |
| `refactor` | Se reorganiza/reescribe código existente sin cambiar su comportamiento |
| `test` | Se agregan o corrigen pruebas |
| `style` | Formato/estilo de código (espacios, nombres) sin cambiar lógica |
| `perf` | Cambios enfocados en rendimiento |

Reglas:

- **Un commit por cambio lógico coherente.** Nunca mezclar capas o funcionalidades no relacionadas en un mismo commit (ej. modelos y formularios van en commits separados).
- **Mensajes siempre en español**, aunque el tipo (`feat`, `fix`, etc.) se deje en inglés por ser el estándar.
- **Al confirmar de una sola vez trabajo que ya está escrito** (por ejemplo, código generado en una sola sesión), ordenar los commits como si el sistema se hubiera construido paso a paso: estructura base del proyecto → capa de dominio/modelos → lógica y persistencia → interfaz → integración final → documentación. Nunca un solo commit con todos los cambios.
- No usar `git add -A`/`git add .` para armar estos commits — encadenar los archivos exactos de cada paso para no arrastrar cambios de otro paso.
- **Nunca agregar el trailer `Co-Authored-By: Claude...`** a los commits — el usuario no quiere que Claude aparezca como colaborador en GitHub. Si algún commit ya existente lo tiene, se reescribe el historial para quitarlo (y se hace force-push si ya estaba subido).

Esta convención se hereda de `Proyectos/personal/CLAUDE.md`, que es la fuente de verdad para todos los repos personales — se documenta completa aquí para que quede visible sin salir de este repositorio.
