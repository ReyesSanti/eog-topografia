import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { IconLinkedin, IconInstagram, IconFacebook, IconYoutube } from './icons.jsx'
import { navLinks, contactDetails } from '../data/content.js'

const socials = [IconLinkedin, IconInstagram, IconFacebook, IconYoutube]

export default function Footer() {
  return (
    <footer className="bg-forest text-white/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <svg className="h-9 w-9" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M20 6 L34 32 H6 Z" fill="#6f8f2f" />
              <path d="M12.5 18 L24 32 H3 Z" fill="#8fae4d" />
            </svg>
            <span className="leading-none">
              <span className="block font-display text-lg font-extrabold tracking-tight text-white">
                <span className="text-accent-light">EOG</span> TOPOGRAFÍA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
                Levantando futuro
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Levantamientos topográficos con tecnología de última generación para datos confiables y
            decisiones seguras.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent-light" />
              {contactDetails.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent-light" />
              {contactDetails.email}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent-light" />
              {contactDetails.location}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Síguenos
          </h4>
          <div className="flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                aria-label="Red social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} EOG Topografía. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacidad" className="transition-colors hover:text-white">
              Política de Privacidad
            </Link>
            <span className="text-white/30">·</span>
            <span>Precisión · Tecnología · Confianza</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
