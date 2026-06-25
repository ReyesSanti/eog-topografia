import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Crosshair } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import ContourBackground from '../components/ContourBackground.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { services, statsEquipo, CheckIcon } from '../data/content.js'

function ListCard({ title, items, dark = false }) {
  return (
    <div
      className={`rounded-lg border p-6 ${
        dark ? 'border-forest-600 bg-forest text-white' : 'border-line bg-white'
      }`}
    >
      <h3
        className={`font-display text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li
            key={it}
            className={`flex items-start gap-3 text-[15px] ${dark ? 'text-white/85' : 'text-ink'}`}
          >
            <CheckIcon
              className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-accent-light' : 'text-accent'}`}
              strokeWidth={1.8}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicioDetalle() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/servicios" replace />

  const { Icon, title, tagline, intro, precision, applications, equipment, deliverables, image } =
    service
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <Seo
        title={`${title} — Servicio de topografía | EOG Topografía SAS`}
        description={`${tagline}. ${intro}`.slice(0, 160)}
        path={`/servicios/${slug}`}
      />

      {/* Cabecera */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-16">
        <ContourBackground
          className="pointer-events-none absolute inset-0 h-full w-full text-[#b3aa8c]"
          opacity={0.55}
        />
        <div className="container-x relative">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-white">
                <Icon className="h-8 w-8" />
              </span>
              <div className="mt-5">
                <Eyebrow line>Servicio</Eyebrow>
              </div>
              <SectionHeading className="mt-4">{title}</SectionHeading>
              <p className="mt-3 text-lg font-medium text-accent-dark">{tagline}</p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{intro}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {precision && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-dark">
                    <Crosshair className="h-4 w-4" />
                    Precisión {precision}
                  </span>
                )}
                <Button to="/contacto" variant="primary" arrow>
                  Solicitar cotización
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={image} alt={title} className="h-72 w-full object-cover lg:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Detalle: aplicaciones / equipos / formatos de entrega */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <ListCard title="Aplicaciones" items={applications} />
          <ListCard title="Equipos y tecnología" items={equipment} />
          <ListCard title="Formatos de entrega" items={deliverables} dark />
        </div>
        <p className="container-x mt-6 text-[13px] text-muted">
          Los entregables se adaptan a tu proyecto y a los formatos que requiera tu equipo de
          ingeniería o diseño.
        </p>
      </section>

      {/* Otros servicios */}
      <section className="bg-cream py-14">
        <div className="container-x">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/servicios/${o.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <o.Icon className="h-6 w-6" />
                </span>
                <span className="flex-1 font-display text-sm font-bold tracking-tight text-ink">
                  {o.title}
                </span>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream pb-16">
        <div className="container-x">
          <CtaBanner
            title="¿Listo para tu próximo levantamiento?"
            subtitle="Cuéntanos sobre tu proyecto y recibe una propuesta a la medida."
            stats={statsEquipo}
          />
        </div>
      </section>
    </>
  )
}
