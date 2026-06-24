import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks } from '../data/content.js'

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Texto/fondo: sobre el hero (home) es transparente con texto blanco;
  // al hacer scroll o en páginas internas pasa a fondo sólido.
  const overHero = transparent && !scrolled
  const light = overHero // texto claro

  const headerBg = overHero
    ? 'bg-transparent'
    : transparent
      ? 'bg-forest/95 backdrop-blur shadow-sm'
      : 'bg-cream/95 backdrop-blur border-b border-line'

  const linkColor = light
    ? 'text-white/85 hover:text-white'
    : 'text-ink/80 hover:text-accent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo light={light || transparent} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${linkColor} ${
                  isActive ? (light ? 'text-white' : 'text-accent') : ''
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className={`inline-flex items-center gap-2 rounded-[3px] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
              light
                ? 'border border-white/45 text-white hover:bg-white/10'
                : 'border border-accent text-accent hover:bg-accent hover:text-white'
            }`}
          >
            Solicitar cotización
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${light ? 'text-white' : 'text-ink'}`}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-white/10 bg-forest lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-[0.1em] text-white/85"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-[3px] bg-accent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white"
            >
              Solicitar cotización
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
