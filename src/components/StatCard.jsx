// Métrica destacada. `layout='row'` (icono en círculo a la izquierda, sobre
// fondo claro) o `layout='stack'` (icono arriba, centrado, sobre fondo oscuro).
export default function StatCard({ Icon, value, label, layout = 'row' }) {
  if (layout === 'stack') {
    return (
      <div className="text-center">
        <Icon className="mx-auto h-7 w-7 text-accent-light" strokeWidth={1.5} />
        <div className="mt-3 font-display text-3xl font-extrabold text-white">{value}</div>
        <div className="mt-1 text-[13px] leading-tight text-white/60">{label}</div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-white">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <div>
        <div className="font-display text-3xl font-extrabold leading-none text-ink">{value}</div>
        <div className="mt-1.5 text-sm text-muted">{label}</div>
      </div>
    </div>
  )
}
