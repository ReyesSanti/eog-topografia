// Ítem icono + título + descripción. Se reutiliza en listas de ventajas y
// en las tiras de confianza. `dark` invierte colores para fondos oscuros.
export default function FeatureItem({ Icon, title, desc, dark = false, compact = false }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 shrink-0 text-accent">
        <Icon className={compact ? 'h-5 w-5' : 'h-7 w-7'} strokeWidth={1.5} />
      </span>
      <div>
        <h3
          className={`font-display font-bold tracking-tight ${compact ? 'text-sm' : 'text-base'} ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-1 leading-relaxed ${compact ? 'text-[13px]' : 'text-sm'} ${
            dark ? 'text-white/60' : 'text-muted'
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
