# EOG Topografía — Landing

Sitio web (SPA) de EOG Topografía. Stack: **Vite + React 19 + Tailwind CSS 4 + React Router**.
Formulario de contacto vía **Web3Forms**, anti-bots con **honeypot + hCaptcha**, fuentes
auto-hospedadas y cabeceras de seguridad para **Vercel**.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build de producción
```

## Despliegue en Vercel
Vercel detecta Vite automáticamente (build `npm run build`, salida `dist`) y aplica
`vercel.json` (cabeceras de seguridad + rewrite SPA).

**Opción A — GitHub + Vercel (recomendado para actualizaciones automáticas):**
1. Sube este repo a GitHub.
2. En vercel.com → *Add New Project* → importa el repo. Deja los valores por defecto → *Deploy*.
3. A partir de ahí, cada `git push` a la rama principal **despliega solo**.

**Opción B — Vercel CLI:**
```bash
npx vercel        # primera vez: enlaza el proyecto (deploy de preview)
npx vercel --prod # despliegue a producción
```

## Configuración (claves y servicios)
- **Web3Forms** (`WEB3FORMS_ACCESS_KEY` en `src/data/content.js`): clave PÚBLICA. En el panel de
  Web3Forms restringe los *dominios permitidos* a tu dominio de producción.
- **hCaptcha** (`HCAPTCHA_SITE_KEY` en `src/data/content.js`): site key PÚBLICA. La *secret key*
  va SOLO en el panel de Web3Forms (Settings → hCaptcha), nunca en el código. Añade tus hostnames
  (dominio + localhost) en el panel de hCaptcha.
- **WhatsApp** (`WHATSAPP` en `src/data/content.js`): número del botón flotante.

## Imágenes
Para cambiar fotos, reemplaza los archivos en `public/images/` con el mismo nombre. Ver
[IMAGENES.md](IMAGENES.md).

## Seguridad
- Cabeceras (CSP, HSTS, X-Frame-Options, etc.) en `vercel.json`.
- Formulario: honeypot + hCaptcha + validación + consentimiento de datos (Ley 1581/2012).
- Tras desplegar, escanea en `securityheaders.com` y `observatory.mozilla.org`.
