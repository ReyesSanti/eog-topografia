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
El formulario se envía a la función serverless `api/contact.js`, que verifica el captcha y manda
un **correo HTML con la marca** vía **Resend**.

**Variables de entorno en Vercel** (Project → Settings → Environment Variables; ver `.env.example`):
- `RESEND_API_KEY` — clave de Resend (https://resend.com/api-keys).
- `HCAPTCHA_SECRET` — secret de hCaptcha (panel de hCaptcha). Solo en el servidor, nunca en el cliente.
- `CONTACT_TO_EMAIL` (opcional) — correo destino; por defecto `eogtopografiasas@gmail.com`.
- `MAIL_FROM` (opcional) — remitente; por defecto `onboarding@resend.dev`. Para usar
  `contacto@eogtopografia.com`, verifica el dominio en Resend.

- **hCaptcha** (`HCAPTCHA_SITE_KEY` en `src/data/content.js`): site key PÚBLICA. Añade tus
  hostnames (tu dominio + `*.vercel.app`) en el panel de hCaptcha.
- **El correo** (logo, colores, estructura) se edita en `api/contact.js`; el logo del encabezado
  está en `public/email-logo.png`.
- **WhatsApp** (`WHATSAPP` en `src/data/content.js`): número del botón flotante.

## Imágenes
Para cambiar fotos, reemplaza los archivos en `public/images/` con el mismo nombre. Ver
[IMAGENES.md](IMAGENES.md).

## Seguridad
- Cabeceras (CSP, HSTS, X-Frame-Options, etc.) en `vercel.json`.
- Formulario: honeypot + hCaptcha + validación + consentimiento de datos (Ley 1581/2012).
- Tras desplegar, escanea en `securityheaders.com` y `observatory.mozilla.org`.
