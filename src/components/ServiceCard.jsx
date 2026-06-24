// Tarjeta de servicio: icono de línea + título + descripción + foto inferior.
export default function ServiceCard({ Icon, title, desc, image }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">{title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{desc}</p>
      </div>
      <div className="px-3 pb-3">
        <div className="overflow-hidden rounded">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
