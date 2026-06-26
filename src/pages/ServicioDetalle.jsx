import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Crosshair, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ContourBackground from '../components/ContourBackground.jsx'
import { services, CheckIcon } from '../data/content.js'

function ListCard({ title, items, dark = false }) {
  return (
    <div
      className={`rounded-lg border p-6 ${
        dark ? 'border-forest-600 bg-forest text-white' : 'border-line bg-white'
      }`}
    >
      <h3 className={`font-display text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
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
  const [openFaq, setOpenFaq] = useState(0)
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/servicios" replace />

  const {
    Icon,
    title,
    tagline,
    intro,
    precision,
    applications,
    equipment,
    deliverables,
    howItWorks,
    benefits,
    process,
    faq,
    image,
  } = service
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

              {precision && (
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-dark">
                    <Crosshair className="h-4 w-4" />
                    Precisión {precision}
                  </span>
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={image} alt={title} className="h-72 w-full object-cover lg:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? + beneficios */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow line>¿Cómo funciona?</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink lg:text-3xl">
              Así trabajamos este servicio
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{howItWorks}</p>
          </div>
          <div className="rounded-lg border border-line bg-cream p-7">
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">Beneficios</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.8} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Aplicaciones / equipos / formatos de entrega */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-x">
          <Eyebrow line>En detalle</Eyebrow>
          <SectionHeading className="mt-4">Qué cubre y qué recibes</SectionHeading>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ListCard title="Aplicaciones" items={applications} />
            <ListCard title="Equipos y tecnología" items={equipment} />
            <ListCard title="Formatos de entrega" items={deliverables} dark />
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Los entregables se adaptan a tu proyecto y a los formatos que requiera tu equipo de
            ingeniería o diseño.
          </p>
        </div>
      </section>

      {/* Nuestro proceso */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <Eyebrow line>Nuestro proceso</Eyebrow>
          <SectionHeading className="mt-4">Cómo lo entregamos</SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-lg border border-line bg-cream p-6">
                <span className="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-extrabold text-accent/15">
                  {s.n}
                </span>
                <h3 className="relative font-display text-base font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-x max-w-3xl">
          <Eyebrow line>Preguntas frecuentes</Eyebrow>
          <SectionHeading className="mt-4">Resolvemos tus dudas</SectionHeading>
          <div className="mt-8 space-y-3">
            {faq.map((item, i) => {
              const open = openFaq === i
              return (
                <div key={item.q} className="overflow-hidden rounded-lg border border-line bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-[15px] font-bold text-ink">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="bg-white py-14">
        <div className="container-x">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/servicios/${o.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-line bg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
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
    </>
  )
}
