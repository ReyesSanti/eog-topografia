import { HardHat } from 'lucide-react'
import Button from './Button.jsx'
import StatCard from './StatCard.jsx'
import ContourBackground from './ContourBackground.jsx'

// Banner oscuro de llamado a la acción con estadísticas (usado en Equipo).
export default function CtaBanner({ title, subtitle, stats = [] }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-forest px-8 py-10 lg:px-12 lg:py-12">
      <ContourBackground
        className="pointer-events-none absolute inset-0 h-full w-full text-white"
        opacity={0.08}
      />
      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-light">
              <HardHat className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white lg:text-[28px]">
                {title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">{subtitle}</p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/contacto" variant="primary" arrow>
              Solicitar cotización
            </Button>
            <Button to="/contacto" variant="outlineOnDark">
              Hablar con un ingeniero
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} layout="stack" />
          ))}
        </div>
      </div>
    </div>
  )
}
