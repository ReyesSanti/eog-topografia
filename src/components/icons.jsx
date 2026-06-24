// Iconos de línea personalizados que reproducen los del mockup.
// Heredan color vía currentColor y tamaño vía className (w/h).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// GPS RTK: receptor/antena GNSS sobre trípode.
export function IconTripod({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} {...base}>
      <path d="M9.6 6.2q2.4-2 4.8 0" />
      <rect x="6.5" y="6.2" width="11" height="3" rx="1.5" />
      <path d="M12 9.2v3.1" />
      <path d="M10.3 12.3h3.4" />
      <path d="M11.1 12.3 6.6 21M12.9 12.3 17.4 21M12 12.3V21" />
      <path d="M5.7 21h1.8M11.1 21h1.8M16.5 21h1.8" />
    </svg>
  )
}

// Drones: cuadricóptero (vista superior) con rotores, cámara y hélices.
export function IconDrone({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} {...base}>
      <path d="M9.5 9.5 5.8 5.8M14.5 9.5 18.2 5.8M9.5 14.5 5.8 18.2M14.5 14.5 18.2 18.2" />
      <circle cx="4.8" cy="4.8" r="2.2" />
      <circle cx="19.2" cy="4.8" r="2.2" />
      <circle cx="4.8" cy="19.2" r="2.2" />
      <circle cx="19.2" cy="19.2" r="2.2" />
      <path d="M3.6 4.8h2.4M18 4.8h2.4M3.6 19.2h2.4M18 19.2h2.4" />
      <rect x="9.2" y="9.2" width="5.6" height="5.6" rx="1.5" />
      <circle cx="12" cy="12" r="1.1" />
    </svg>
  )
}

// GNSS: satélite con paneles solares, antena y ondas de señal.
export function IconGnss({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} {...base}>
      <rect x="10" y="10" width="4" height="4" rx="0.8" />
      <path d="M10 12H8M14 12h2" />
      <rect x="3.4" y="10.3" width="4.6" height="3.4" rx="0.4" />
      <rect x="16" y="10.3" width="4.6" height="3.4" rx="0.4" />
      <path d="M5.7 10.3v3.4M18.3 10.3v3.4" />
      <path d="M12 10V7.9" />
      <path d="M10.4 8q1.6-1.4 3.2 0" />
      <path d="M15.4 6.6a3.2 3.2 0 0 1 2.3 2.3M16.5 4.9a5.4 5.4 0 0 1 3.6 3.6" />
    </svg>
  )
}

// Procesamiento: monitor mostrando un modelo de curvas de nivel.
export function IconProcessing({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} {...base}>
      <rect x="2.5" y="3.5" width="19" height="13.5" rx="1.6" />
      <path d="M9.5 21h5M12 17v4" />
      <circle cx="12" cy="10.2" r="0.9" />
      <ellipse cx="11.7" cy="10.2" rx="2.4" ry="2" />
      <ellipse cx="11.4" cy="10.3" rx="4" ry="3.3" />
    </svg>
  )
}

/* --- Iconos de marca (lucide v1 ya no los incluye) --- */
export function IconLinkedin({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.34 18.34v-8.4H5.66v8.4h2.68M7 8.76a1.55 1.55 0 1 0 0-3.11 1.55 1.55 0 0 0 0 3.11m11.34 9.58v-4.6c0-2.4-1.28-3.51-2.99-3.51-1.38 0-2 .76-2.34 1.29v-1.1h-2.67v8.42h2.67v-4.7c0-.13.01-.25.05-.34.1-.25.34-.51.74-.51.52 0 .73.4.73.98v4.57h2.81Z" />
    </svg>
  )
}

export function IconInstagram({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.14V9.9H7.5V13h2.76v8h3.24Z" />
    </svg>
  )
}

export function IconYoutube({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.5-.45-5.17a2.6 2.6 0 0 0-1.83-1.84C18.95 4.5 12 4.5 12 4.5s-6.95 0-8.72.49A2.6 2.6 0 0 0 1.45 6.83C1 8.5 1 12 1 12s0 3.5.45 5.17a2.6 2.6 0 0 0 1.83 1.84C5.05 19.5 12 19.5 12 19.5s6.95 0 8.72-.49a2.6 2.6 0 0 0 1.83-1.84C23 15.5 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  )
}
