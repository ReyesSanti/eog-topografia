// Titular de sección grande, fiel al peso/altura de línea de los mockups.
export default function SectionHeading({ children, light = false, className = '' }) {
  return (
    <h2
      className={`font-display text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[44px] ${
        light ? 'text-white' : 'text-ink'
      } ${className}`}
    >
      {children}
    </h2>
  )
}
