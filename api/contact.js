// Función serverless de Vercel: recibe el formulario de contacto, verifica el
// captcha (hCaptcha) del lado servidor y envía un correo HTML con la marca vía
// Resend. Las claves secretas viven en variables de entorno de Vercel.
//
// Variables de entorno requeridas (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY     clave de Resend (https://resend.com/api-keys)
//   HCAPTCHA_SECRET    secret de hCaptcha (panel de hCaptcha)
//   CONTACT_TO_EMAIL   (opcional) destino; por defecto santiagodariog@gmail.com
//   MAIL_FROM          (opcional) remitente; por defecto onboarding@resend.dev

const TO = process.env.CONTACT_TO_EMAIL || 'santiagodariog@gmail.com'
const FROM = process.env.MAIL_FROM || 'EOG Topografía <onboarding@resend.dev>'
const LOGO = 'https://eogtopografia.com/email-logo.png'

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

function row(label, valueHtml) {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid #eef0ea;width:150px;vertical-align:top;color:#8a8f80;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:bold;font-family:Arial,Helvetica,sans-serif;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid #eef0ea;color:#262a24;font-size:15px;line-height:1.5;font-family:Arial,Helvetica,sans-serif;">${valueHtml}</td>
  </tr>`
}

function renderEmail(d) {
  const fecha = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  const servicioPill = `<span style="display:inline-block;background:#eef3e2;color:#5c7726;font-weight:bold;font-size:13px;padding:5px 12px;border-radius:5px;">${esc(d.servicio) || '—'}</span>`
  const mensaje = esc(d.mensaje).replace(/\n/g, '<br>')
  const archivos = d.archivos
    ? esc(d.archivos)
        .split('\n')
        .map((f) => `• ${f}`)
        .join('<br>')
    : '<span style="color:#9aa091;">Sin archivos adjuntos</span>'

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f1e8;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1e8;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e4e0d4;">
        <tr><td style="background:#2b3227;padding:30px 36px;">
          <img src="${LOGO}" alt="EOG Topografía SAS" height="46" style="display:block;border:0;height:46px;max-height:46px;">
          <div style="color:#8fae4d;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;margin-top:16px;font-weight:bold;font-family:Arial,Helvetica,sans-serif;">Nueva solicitud de cotización</div>
        </td></tr>
        <tr><td style="padding:30px 36px 6px;">
          <p style="margin:0;color:#262a24;font-size:16px;line-height:1.55;font-family:Arial,Helvetica,sans-serif;">Recibiste una nueva solicitud desde el sitio web. Estos son los datos del cliente:</p>
        </td></tr>
        <tr><td style="padding:14px 36px 26px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${row('Nombre', esc(d.nombre) || '—')}
            ${row('Empresa', esc(d.empresa) || '—')}
            ${row('Correo', `<a href="mailto:${esc(d.email)}" style="color:#5c7726;text-decoration:none;font-weight:bold;">${esc(d.email) || '—'}</a>`)}
            ${row('Teléfono', esc(d.telefono) || '—')}
            ${row('Tipo de servicio', servicioPill)}
            ${row('Mensaje', mensaje || '—')}
            ${row('Archivos', archivos)}
          </table>
        </td></tr>
        <tr><td style="padding:0 36px 30px;">
          <a href="mailto:${esc(d.email)}?subject=${encodeURIComponent('Re: tu solicitud de cotización — EOG Topografía')}" style="display:inline-block;background:#6f8f2f;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:13px 26px;border-radius:7px;font-family:Arial,Helvetica,sans-serif;">Responder al cliente →</a>
        </td></tr>
        <tr><td style="background:#f4f1e8;padding:20px 36px;border-top:1px solid #e4e0d4;">
          <p style="margin:0;color:#6c7065;font-size:12px;line-height:1.7;font-family:Arial,Helvetica,sans-serif;"><strong style="color:#2b3227;">EOG Topografía SAS</strong> · Levantando futuro<br>Enviado desde el formulario de eogtopografia.com · ${fecha}</p>
        </td></tr>
      </table>
      <p style="margin:16px 0 0;color:#a8ad9e;font-size:11px;font-family:Arial,Helvetica,sans-serif;">Este correo se generó automáticamente. Responde directamente para contactar al cliente.</p>
    </td></tr>
  </table>
</body></html>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido.' })
  }

  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const data = {
      nombre: (b.nombre || '').trim(),
      empresa: (b.empresa || '').trim(),
      email: (b.email || '').trim(),
      telefono: (b.telefono || '').trim(),
      servicio: (b.servicio || '').trim(),
      mensaje: (b.mensaje || '').trim(),
      archivos: (b.archivos || '').trim(),
    }

    // Honeypot: si el campo trampa viene lleno, es un bot → fingimos éxito.
    if ((b.website || '').toString().trim() !== '') {
      return res.status(200).json({ success: true })
    }

    if (!data.nombre || !data.email || !data.telefono || !data.servicio || !data.mensaje) {
      return res.status(400).json({ success: false, message: 'Faltan campos obligatorios.' })
    }

    // Verificación de hCaptcha del lado servidor.
    if (!process.env.HCAPTCHA_SECRET) {
      return res.status(500).json({ success: false, message: 'Captcha no configurado en el servidor.' })
    }
    const verify = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET,
        response: (b.captcha || '').toString(),
      }),
    })
    const verifyJson = await verify.json()
    if (!verifyJson.success) {
      const codes = (verifyJson['error-codes'] || []).join(', ')
      console.error('hCaptcha verify failed:', codes || '(sin código)')
      return res.status(400).json({
        success: false,
        message: `Verificación anti-bots fallida${codes ? ` (${codes})` : ''}.`,
      })
    }

    // Envío del correo vía Resend.
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ success: false, message: 'Servicio de correo no configurado.' })
    }
    const subject = `Solicitud de cotización — ${data.servicio || 'General'} · ${data.nombre}`
    const sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: data.email,
        subject,
        html: renderEmail(data),
      }),
    })

    if (!sendRes.ok) {
      const detail = await sendRes.text()
      console.error('Resend error:', sendRes.status, detail)
      return res.status(502).json({ success: false, message: 'No se pudo enviar el correo.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('contact handler error:', err)
    return res.status(500).json({ success: false, message: 'Error del servidor.' })
  }
}
