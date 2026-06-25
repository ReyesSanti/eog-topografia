import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Tarjeta de servicio (clickeable): icono + título + descripción + foto.
// Enlaza a la página de detalle /servicios/:slug.
export default function ServiceCard({ Icon, title, desc, image, slug }) {
  return (
    <Link
      to={`/servicios/${slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">{title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
          Ver detalle
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
        </span>
      </div>
      <div className="px-3 pb-3">
        <div className="overflow-hidden rounded">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  )
}
