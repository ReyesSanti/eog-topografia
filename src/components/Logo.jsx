import { Link } from 'react-router-dom'

// Logo de la marca: marca de montaña en capas + wordmark "EOG TOPOGRAFÍA"
// con la bajada "Levantando futuro".
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="EOG Topografía — inicio">
      <svg className="h-9 w-9 shrink-0" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 6 L34 32 H6 Z" fill="#6f8f2f" />
        <path d="M12.5 18 L24 32 H3 Z" fill="#8fae4d" />
        <path d="M20 6 L24.5 14.5 L20 14.5 L15.5 22 Z" fill="#5c7726" opacity="0.65" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          <span className="text-accent">EOG</span> TOPOGRAFÍA
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? 'text-white/60' : 'text-muted'
          }`}
        >
          Levantando futuro
        </span>
      </span>
    </Link>
  )
}
