// Etiqueta superior en mayúsculas con tracking ancho (color acento).
// Si `line` es true antepone una pequeña línea horizontal como en los mockups.
export default function Eyebrow({ children, line = false, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      {line && <span className="h-px w-8 bg-accent" />}
      {children}
    </span>
  )
}
