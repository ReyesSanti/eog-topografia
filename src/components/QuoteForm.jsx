import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { ArrowRight, Lock, Paperclip, CheckCircle2, X, Loader2 } from 'lucide-react'
import {
  serviceOptions,
  CONTACT_EMAIL,
  MAX_UPLOAD_MB,
  WEB3FORMS_ACCESS_KEY,
  HCAPTCHA_SITE_KEY,
} from '../data/content.js'

const labelCls = 'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70'
const field =
  'w-full rounded-[3px] border border-white/12 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/35 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

const MAX_BYTES = MAX_UPLOAD_MB * 1024 * 1024
const ACCEPT = '.pdf,.dwg,.dxf,.jpg,.jpeg,.png,.kml,.kmz,.zip,.csv,.xlsx'
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1)

// hCaptcha solo se activa cuando hay una site key real configurada.
const HCAPTCHA_ENABLED = Boolean(HCAPTCHA_SITE_KEY && HCAPTCHA_SITE_KEY.trim())

export default function QuoteForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [files, setFiles] = useState([])
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [captchaToken, setCaptchaToken] = useState('')
  const captchaRef = useRef(null)

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0)

  const addFiles = (fileList) => {
    const merged = [...files]
    for (const f of Array.from(fileList)) {
      if (!merged.some((m) => m.name === f.name && m.size === f.size)) merged.push(f)
    }
    const total = merged.reduce((s, f) => s + f.size, 0)
    if (total > MAX_BYTES) {
      setError(`El total supera ${MAX_UPLOAD_MB} MB. Quita algún archivo e inténtalo de nuevo.`)
      return
    }
    setError('')
    setFiles(merged)
  }

  const removeFile = (index) => {
    setError('')
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (error || sending) return
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    // Honeypot: si el campo trampa viene lleno, es un bot → fingimos éxito sin enviar.
    if ((data.website || '').toString().trim() !== '') {
      setSent(true)
      return
    }

    if (HCAPTCHA_ENABLED && !captchaToken) {
      setError('Completa la verificación anti-bots antes de enviar.')
      return
    }

    const val = (k) => (data[k] || '').toString().trim()
    const subject = `Solicitud de cotización — ${val('servicio') || 'General'} · ${
      val('nombre') || 'Sin nombre'
    }`

    setSending(true)
    setError('')
    try {
      // Payload JSON (UTF-8) con claves ASCII para que los acentos se vean bien
      // en el correo y el encabezado del teléfono no salga como "TelÃ©fono".
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: 'EOG Topografía · Formulario web',
        botcheck: false,
        replyto: val('email'),
        Nombre: val('nombre'),
        Empresa: val('empresa') || '—',
        Correo: val('email'),
        Telefono: val('telefono'),
        'Tipo de servicio': val('servicio'),
        Mensaje: val('mensaje'),
      }
      if (files.length) {
        payload['Archivos del cliente'] = files
          .map((f) => `${f.name} (${mb(f.size)} MB)`)
          .join('\n')
      }
      if (HCAPTCHA_ENABLED && captchaToken) {
        payload['h-captcha-response'] = captchaToken
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setSent(true)
      } else {
        setError(json.message || `No se pudo enviar. Escríbenos a ${CONTACT_EMAIL}.`)
      }
    } catch {
      setError(`Error de conexión. Inténtalo de nuevo o escríbenos a ${CONTACT_EMAIL}.`)
    } finally {
      setSending(false)
      if (HCAPTCHA_ENABLED) {
        setCaptchaToken('')
        captchaRef.current?.resetCaptcha?.()
      }
    }
  }

  return (
    <div className="relative rounded-lg bg-forest p-7 shadow-xl lg:p-9">
      <h3 className="font-display text-2xl font-bold tracking-tight text-white">
        Solicita tu cotización
      </h3>
      <p className="mt-1.5 text-sm text-white/60">
        Completa el formulario y te contactaremos pronto.
      </p>

      {sent ? (
        <div className="mt-8 flex flex-col items-center rounded-md border border-accent/30 bg-accent/10 px-6 py-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-accent-light" />
          <h4 className="mt-4 font-display text-xl font-bold text-white">¡Solicitud enviada!</h4>
          <p className="mt-2 max-w-sm text-sm text-white/65">
            Gracias por contactarnos. Recibimos tu solicitud
            {files.length > 0 ? ' y la lista de tus archivos' : ''} y te responderemos en menos de
            24 horas.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false)
              setFiles([])
            }}
            className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-light hover:text-white"
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          {/* Honeypot anti-bots (invisible para humanos) */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="nombre">
                Nombre completo *
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                maxLength={80}
                className={field}
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="empresa">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                maxLength={80}
                className={field}
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="email">
              Correo electrónico *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={150}
              className={field}
              placeholder="ejemplo@empresa.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="telefono">
                Teléfono *
              </label>
              <input
                id="telefono"
                name="telefono"
                required
                maxLength={25}
                pattern="[0-9+()\-\s]{7,25}"
                title="Ingresa un teléfono válido (7 a 25 dígitos)"
                className={field}
                placeholder="+57 300 123 4567"
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="servicio">
                Tipo de servicio *
              </label>
              <select id="servicio" name="servicio" required defaultValue="" className={`${field} appearance-none`}>
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o} className="bg-forest text-white">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="mensaje">
              Cuéntanos sobre tu proyecto *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              maxLength={2000}
              rows={4}
              className={`${field} resize-none`}
              placeholder="Describe tu proyecto, ubicación, alcance y cualquier detalle que consideres importante."
            />
          </div>

          <div>
            <label className={labelCls}>Adjuntar archivos (opcional)</label>
            <label
              htmlFor="archivo"
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[3px] border border-dashed px-4 py-6 text-center transition-colors ${
                dragOver ? 'border-accent bg-accent/10' : 'border-white/20 bg-black/10 hover:border-accent/60'
              }`}
            >
              <Paperclip className="h-5 w-5 text-white/50" />
              <span className="text-sm text-white/55">Arrastra varios archivos aquí o selecciona</span>
              <span className="text-[11px] text-white/35">
                PDF, DWG/DXF, JPG, PNG, KML/KMZ, ZIP · Máx. {MAX_UPLOAD_MB} MB en total
              </span>
              <input
                id="archivo"
                type="file"
                multiple
                accept={ACCEPT}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.length) addFiles(e.target.files)
                  e.target.value = ''
                }}
              />
            </label>

            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <li
                    key={`${f.name}-${i}`}
                    className="flex items-center justify-between gap-3 rounded-[3px] border border-white/10 bg-black/20 px-3 py-2"
                  >
                    <span className="min-w-0 flex-1 truncate text-[13px] text-white/80">{f.name}</span>
                    <span className="shrink-0 text-[11px] text-white/40">{mb(f.size)} MB</span>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      aria-label={`Quitar ${f.name}`}
                      className="shrink-0 text-white/40 transition-colors hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {(files.length > 0 || error) && (
              <p className={`mt-2 text-[11px] ${error ? 'text-red-300' : 'text-white/40'}`}>
                {error || `${files.length} archivo(s) · ${mb(totalBytes)} MB de ${MAX_UPLOAD_MB} MB`}
              </p>
            )}
          </div>

          {HCAPTCHA_ENABLED && (
            <div className="flex justify-center">
              <HCaptcha
                ref={captchaRef}
                sitekey={HCAPTCHA_SITE_KEY}
                theme="dark"
                onVerify={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken('')}
                onError={() => setCaptchaToken('')}
              />
            </div>
          )}

          <label className="flex items-start gap-2.5 text-[12px] leading-snug text-white/55">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            />
            <span>
              Autorizo el tratamiento de mis datos personales conforme a la{' '}
              <Link to="/privacidad" className="text-accent-light underline hover:text-white">
                Política de Privacidad
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={sending || (HCAPTCHA_ENABLED && !captchaToken)}
            className="flex w-full items-center justify-center gap-2 rounded-[3px] bg-accent px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? (
              <>
                Enviando…
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
              </>
            ) : (
              <>
                Enviar solicitud
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-white/45">
            <Lock className="h-3.5 w-3.5" />
            Tu información está 100% segura con nosotros.
          </p>
        </form>
      )}
    </div>
  )
}
