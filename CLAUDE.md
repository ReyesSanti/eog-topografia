# CLAUDE.md — Guía del proyecto (léeme antes de tocar nada)

> Este archivo es el mapa del proyecto para Claude. Está al día. **Léelo primero**
> para no re-leer archivos y evitar conflictos. Si cambias estructura/arquitectura,
> **actualiza este archivo**.

---

## 1. Qué es
Sitio web de **EOG Topografía SAS** (empresa de topografía/levantamientos en Colombia).
Eslogan: **"Levantando futuro"**. Todo el contenido es en **español (es-CO)**.

- **Producción:** https://eogtopografia.com (Vercel, dominio activo con HTTPS).
- **Repo:** GitHub `ReyesSanti/eog-topografia`, rama `main`. **Push a `main` = auto-deploy en Vercel.**
- **Correo destino de contacto:** santiagodariog@gmail.com.

## 2. Stack
- **Vite 8** + **React 19** (¡usa metadata nativa de React 19!) + **React Router 7** (SPA).
- **Tailwind CSS 4** vía `@tailwindcss/vite` (config de tema en `src/index.css`, NO hay `tailwind.config.js`).
- **lucide-react** (iconos) + iconos SVG propios en `src/components/icons.jsx`.
- Fuentes **auto-hospedadas**: `@fontsource-variable/inter` + `@fontsource-variable/manrope` (sin CDN de Google).
- Captcha: `@hcaptcha/react-hcaptcha`.
- Backend: **Vercel Serverless Function** `api/contact.js` (no hay otro backend).

## 3. Comandos
```bash
npm install
npm run dev      # Vite dev en http://localhost:5173  (¡OJO: NO ejecuta api/ serverless!)
npm run build    # genera dist/
npm run preview  # sirve el build
```
> ⚠️ **El formulario NO funciona en `npm run dev`** (las funciones `api/` solo corren en Vercel
> o con `vercel dev`). Para probar el formulario, usa la URL desplegada.

---

## 4. Mapa de archivos (dónde está cada cosa)
```
raíz/
  index.html            ← <head>: title home, OG/Twitter (estáticos para previews), JSON-LD, preload hero
  vite.config.js        ← Vite (plugins react + tailwind). Mínimo.
  vercel.json           ← Cabeceras de seguridad (CSP, HSTS…), rewrite SPA, cache de assets
  package.json          ← deps/scripts
  .env.example          ← documenta las variables de entorno de Vercel
  .gitignore            ← ignora node_modules, dist, .env, .vercel, .claude/
  README.md             ← guía de despliegue (Vercel) + config de servicios
  IMAGENES.md           ← qué imagen va en cada slot de public/images (para reemplazar fotos)
  CLAUDE.md             ← este archivo

  api/
    contact.js          ← SERVERLESS: honeypot + verifica hCaptcha + envía correo branded (Resend)

  public/               ← se sirve tal cual en la raíz del dominio
    favicon.svg
    robots.txt          ← permite todo + apunta al sitemap
    sitemap.xml         ← 6 URLs con lastmod/changefreq
    email-logo.png      ← logo blanco para el ENCABEZADO del correo (lo usa api/contact.js)
    .well-known/security.txt
    images/             ← TODAS las fotos del sitio (reemplazables; ver IMAGENES.md)
        hero.jpg, contacto.jpg, equipo.jpg
        service-gpsrtk.jpg, service-drones.jpg, service-gnss.jpg, service-procesamiento.jpg
        project-road.jpg, project-mining.jpg, project-urban.jpg, project-terrain.jpg
        more-rural.jpg, more-river.jpg, more-construction.jpg, more-power.jpg, more-road.jpg, more-terrain.jpg

  src/
    main.jsx            ← entry: importa fuentes + index.css, monta <BrowserRouter><App/>
    App.jsx             ← layout + <Routes> (ver §5). Incluye Navbar, Footer, WhatsAppFloat, ScrollToTop
    index.css           ← @theme de Tailwind (COLORES y FUENTES, ver §8) + utilidades .eyebrow/.container-x
    data/content.js     ← ⭐ TODO el contenido/datos + constantes de config (ver §6)
    components/         ← componentes compartidos (ver §7)
    pages/              ← una por ruta: Home, Servicios, Proyectos, Equipo, Contacto, Privacidad

  marca/                ← KIT DE MARCA (NO se publica en el sitio; solo assets). Ver marca/README.md
    logo/eog-isotipo.svg, eog-logo-horizontal.svg, eog-logo-horizontal-blanco.svg
    logo/png/...        ← PNG del logo
    estampados/...      ← 3 diseños de camiseta (print-*.png + camiseta-*.png)
    README.md           ← guía de marca (colores, tipografía, uso)
```
> Archivo basura conocido: `marca/logo/eog-logo-horizontal.jp2.svg` (artefacto, se puede borrar).
> El **plan de trabajo** vive en `~/.claude/plans/neceito-hacer-una-landing-deep-island.md`.

---

## 5. Rutas (`src/App.jsx`)
| Ruta | Página | Notas |
|---|---|---|
| `/` | `Home.jsx` | Hero con foto de fondo; Navbar **transparente** solo aquí |
| `/servicios` | `Servicios.jsx` | Tarjetas + sección Tecnología (`#tecnologia`) + proceso + CTA |
| `/proyectos` | `Proyectos.jsx` | Botón "Ver más proyectos" despliega galería (`useState`) |
| `/equipo` | `Equipo.jsx` | ¿Por qué elegirnos? + CtaBanner |
| `/contacto` | `Contacto.jsx` | Info + `<QuoteForm/>` |
| `/privacidad` | `Privacidad.jsx` | Política de datos (Ley 1581/2012) |

Layout fijo en `App.jsx`: `<ScrollToTop/>` (resetea scroll al cambiar ruta), `<Navbar transparent={isHome}/>`,
`<main>` con `<Routes>`, `<Footer/>`, `<WhatsAppFloat/>`.
> Para **agregar una página**: crea `src/pages/X.jsx` (con `<Seo/>`), añade `<Route>` en `App.jsx`,
> entrada en `navLinks` (content.js) y en `public/sitemap.xml`.

---

## 6. Capa de datos — `src/data/content.js` (⭐ casi todo el contenido vive aquí)
Exporta arrays/objetos que alimentan las páginas. Edita aquí para cambiar textos/servicios/proyectos.

| Export | Usado en | Qué es |
|---|---|---|
| `navLinks` | Navbar/Footer | enlaces del menú |
| `heroMini`, `homeBar` | Home | mini-features del hero / barra inferior |
| `services`, `servicesStripLead`, `servicesStripItems` | Servicios | 4 tarjetas + tira |
| `techDetails`, `processSteps`, `specificServices`, `CheckIcon` | Servicios | sección Tecnología/proceso |
| `projects`, `moreProjects`, `projectBadges`, `stats` | Proyectos | proyectos + galería + stats |
| `equipoFeatures`, `statsEquipo` | Equipo | features + stats |
| `contactInfo`, `contactStrip`, `contactDetails` | Contacto/Footer | teléfono, correo, ubicación |
| `serviceOptions` | QuoteForm | opciones del `<select>` "Tipo de servicio" |
| `BRAND` | varios | `{ name:'EOG Topografía', slogan:'Levantando futuro' }` |
| `CONTACT_EMAIL` | QuoteForm/Privacidad/Footer | correo mostrado (santiagodariog@gmail.com) |
| `MAX_UPLOAD_MB` | QuoteForm | tope de adjuntos (25) |
| `HCAPTCHA_SITE_KEY` | QuoteForm | **site key PÚBLICA** de hCaptcha (ver §9) |
| `WHATSAPP` | WhatsAppFloat | `{ number:'573227217150', display, message }` |
| `FileCheck2` | re-export de lucide | icono |

> **Teléfono actual:** +57 322 721 7150 · está en `contactInfo`, `contactDetails`, `WHATSAPP`
> y en el JSON-LD de `index.html`. Si cambia, actualiza los 4 sitios.

---

## 7. Componentes — `src/components/`
| Archivo | Qué hace |
|---|---|
| `Navbar.jsx` | barra superior; `transparent` sobre el hero, sólida en internas; menú hamburguesa móvil |
| `Footer.jsx` | footer oscuro; logo con "EOG TOPOGRAFÍA SAS" + enlace a Privacidad |
| `Logo.jsx` | **logo del header** (isotipo SVG + "EOG TOPOGRAFÍA SAS" + "Levantando futuro") |
| `Seo.jsx` | **meta por página**: `<title>`, `<meta description>`, `<link canonical>` (ver §10) |
| `QuoteForm.jsx` | **formulario de cotización** → POST a `/api/contact` (ver §9) |
| `WhatsAppFloat.jsx` | botón flotante de WhatsApp (abajo der.), usa `WHATSAPP` |
| `ContourBackground.jsx` | patrón SVG de curvas de nivel (fondos); props `className`/`opacity`/`fade` |
| `icons.jsx` | iconos SVG propios: `IconTripod`, `IconDrone`, `IconGnss`, `IconProcessing` + redes |
| `Button.jsx` | botón con variantes (primary/outline) y flecha; soporta `to` (Link) o `href` |
| `Eyebrow.jsx`, `SectionHeading.jsx` | rótulo en mayúsculas + título de sección |
| `ServiceCard.jsx`, `ProjectCard.jsx`, `StatCard.jsx`, `FeatureItem.jsx`, `CtaBanner.jsx` | tarjetas/bloques reutilizables |
| `ScrollToTop.jsx` | resetea scroll al cambiar de ruta |

---

## 8. Sistema de diseño — `src/index.css` (`@theme`)
**Colores** (clases Tailwind: `bg-forest`, `text-accent`, etc.):
`forest #2b3227` · `accent #6f8f2f` · `accent-dark #5c7726` · `accent-light #8fae4d` ·
`cream #f4f1e8` · `cream-dark #ece7da` · `ink #262a24` · `muted #6c7065` · `line #e4e0d4`.
**Fuentes:** `--font-display` = **Manrope Variable** (títulos, `font-display`); `--font-sans` = **Inter Variable** (cuerpo).
**Utilidades:** `.eyebrow` (rótulo mayúsculas verde) · `.container-x` (contenedor centrado `max-w-[1240px]`).
> No hay `tailwind.config.js`: el tema se define en `@theme` dentro de `index.css`.

---

## 9. Formulario de contacto + correo (la integración importante)
**Flujo:** `QuoteForm.jsx` (cliente) → `POST /api/contact` (serverless) → verifica captcha → envía correo con **Resend**.

- **`QuoteForm.jsx`** envía JSON: `{ nombre, empresa, email, telefono, servicio, mensaje, archivos, website, captcha }`.
  - `website` = **honeypot** (campo trampa invisible; si viene lleno → bot).
  - `archivos` = **lista de NOMBRES** de archivos (no se suben los binarios; el `<input file>` solo lista nombres).
  - `captcha` = token de hCaptcha (widget activo solo si `HCAPTCHA_SITE_KEY` no está vacío).
  - También: checkbox de consentimiento obligatorio, validación `maxLength`/`pattern`.
- **`api/contact.js`**: honeypot → campos requeridos → **verifica hCaptcha** (`HCAPTCHA_SECRET`) →
  **envía correo** con `renderEmail()` (HTML branded) vía **Resend** (`RESEND_API_KEY`). Escapa los inputs (anti-inyección).
  - **El diseño del correo se edita en `renderEmail()` dentro de `api/contact.js`.** Logo del correo: `public/email-logo.png`.

### Variables de entorno (Vercel → Settings → Environment Variables; ver `.env.example`)
| Var | Qué |
|---|---|
| `RESEND_API_KEY` | clave de Resend (envío del correo) |
| `HCAPTCHA_SECRET` | secret de hCaptcha (verificación servidor) |
| `CONTACT_TO_EMAIL` | destino (default santiagodariog@gmail.com) |
| `MAIL_FROM` | remitente (default `onboarding@resend.dev`) |

> ⚠️ **GOTCHA hCaptcha:** la `HCAPTCHA_SITE_KEY` (en `content.js`, pública) y el `HCAPTCHA_SECRET`
> (en Vercel) **deben ser del MISMO sitio/cuenta de hCaptcha**, o da error `sitekey-secret-mismatch`.
> Site key actual: `400c9070-a342-4d4a-9c46-d2be57d89566`.
> Tras cambiar variables en Vercel hay que **Redeploy** (solo aplican a deploys nuevos).

---

## 10. SEO
- **Meta por página:** componente `Seo.jsx` (`<title>`/`<meta description>`/`<link canonical>`).
  React 19 los eleva al `<head>` y los **deduplica**. Cada `src/pages/*.jsx` renderiza `<Seo title description path/>`.
- **`index.html`** tiene: title de home, OG/Twitter **estáticos** (para previews al compartir),
  **JSON-LD** `ProfessionalService` (negocio, teléfono, áreas), preload del hero.
  - ❌ **NO** pongas `<meta name="description">` ni `<link rel="canonical">` estáticos en `index.html`
    (los gestiona `Seo.jsx`; si los duplicas, Google ignora el canonical).
- `public/robots.txt` + `public/sitemap.xml` (6 URLs).
- Off-page pendiente del dueño: Google Search Console + Perfil de Empresa de Google.

---

## 11. Seguridad — `vercel.json`
Cabeceras: **CSP** (permite `*.hcaptcha.com` para el widget y `'self'` para `/api`), HSTS, X-Frame-Options DENY,
nosniff, Referrer-Policy, Permissions-Policy, COOP. Rewrite SPA (`/((?!.*\\.).*) → /index.html`). Cache de `/assets`.
Form: honeypot + hCaptcha + validación + consentimiento (Ley 1581/2012, página `/privacidad`).
> Si agregas un dominio externo (script/fetch/iframe), **actualiza la CSP** o se bloqueará.

---

## 12. Despliegue
- **Vercel** detecta Vite (build `npm run build`, salida `dist`) y aplica `vercel.json`.
- **Push a `main` → auto-deploy.** Las funciones `api/` se despliegan solas.
- Dominio `eogtopografia.com` activo. El correo del formulario sale (FROM `onboarding@resend.dev`)
  hasta verificar el dominio en Resend para usar `contacto@eogtopografia.com`.

---

## 13. Tareas comunes (a dónde ir)
- **Cambiar textos / servicios / proyectos / stats** → `src/data/content.js`.
- **Cambiar colores o fuentes** → `src/index.css` (`@theme`).
- **Cambiar el logo de la web** → `src/components/Logo.jsx` (header) y `Footer.jsx` (footer).
- **Cambiar el diseño del correo** → `renderEmail()` en `api/contact.js` (+ `public/email-logo.png`).
- **Cambiar teléfono/correo** → `content.js` (`contactInfo`, `contactDetails`, `WHATSAPP`) **y** JSON-LD en `index.html`.
- **Reemplazar fotos** → `public/images/` con el mismo nombre (ver `IMAGENES.md`).
- **Agregar página** → `src/pages/X.jsx` (con `<Seo/>`) + `<Route>` en `App.jsx` + `navLinks` + `sitemap.xml`.
- **Activos de marca (logo SVG/PNG, estampados)** → carpeta `marca/` (ver `marca/README.md`).

## 14. Convenciones / gotchas
- Contenido en **español**; marca **"EOG Topografía SAS"**, eslogan **"Levantando futuro"**.
- El **formulario** solo funciona **desplegado** (serverless). Probarlo en local con `npm run dev` fallará.
- **No** dupliques meta description/canonical en `index.html` (los pone `Seo.jsx`).
- Al cambiar **env vars en Vercel** → **Redeploy**.
- `HCAPTCHA_SITE_KEY` (código) y `HCAPTCHA_SECRET` (Vercel) deben ser **par del mismo sitio** de hCaptcha.
- Hacer **commit + push a `main`** despliega a producción — confírmalo con el usuario si el cambio es sensible.
