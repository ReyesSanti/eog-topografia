import { useState } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'
import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import StatCard from '../components/StatCard.jsx'
import { projects, projectBadges, stats, moreProjects } from '../data/content.js'

export default function Proyectos() {
  const [showMore, setShowMore] = useState(false)

  const handleToggle = () => {
    const next = !showMore
    setShowMore(next)
    if (next) {
      requestAnimationFrame(() => {
        document.getElementById('mas-proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  return (
    <>
      <section className="bg-white pt-32 pb-16">
        <div className="container-x">
          <header className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow line>Proyectos realizados</Eyebrow>
              <SectionHeading className="mt-5">
                Experiencia que
                <br />
                garantiza resultados.
              </SectionHeading>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Hemos participado en proyectos de diferentes escalas y complejidades, entregando
                información precisa para la toma de decisiones.
              </p>
            </div>

            <div className="flex gap-8 lg:justify-end">
              {projectBadges.map(({ Icon, label }) => (
                <div key={label} className="flex w-24 flex-col items-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-cream text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="mt-2.5 text-[12px] font-medium leading-tight text-ink">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={showMore}
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-accent px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-accent-dark"
            >
              {showMore ? 'Ver menos proyectos' : 'Ver más proyectos'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Apartado: más proyectos */}
      {showMore && (
        <section id="mas-proyectos" className="scroll-mt-24 bg-cream py-16">
          <div className="container-x">
            <header className="mb-10 max-w-2xl">
              <Eyebrow line>Más proyectos</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Otros trabajos realizados
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Una muestra de proyectos en distintos sectores donde aplicamos nuestra tecnología.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((p) => (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-md border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <span className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {p.location}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Estadísticas */}
      <section className="bg-cream py-14">
        <div className="container-x grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex justify-center lg:justify-start lg:px-10 ${
                i > 0 ? 'lg:border-l lg:border-line' : ''
              }`}
            >
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
