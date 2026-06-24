import { MapPin } from 'lucide-react'

// Tarjeta de proyecto: foto + categoría + título + ubicación + descripción
// y, al pie, la tecnología utilizada.
export default function ProjectCard({ project }) {
  const { category, title, location, desc, tech, Icon, image } = project
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {category}
        </span>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug tracking-tight text-ink">
          {title}
        </h3>
        <span className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          {location}
        </span>
        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted">{desc}</p>
        <div className="mt-4 border-t border-line pt-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted/70">
            Tecnología utilizada
          </span>
          <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-ink">
            <Icon className="h-4 w-4 text-accent" />
            {tech}
          </div>
        </div>
      </div>
    </article>
  )
}
