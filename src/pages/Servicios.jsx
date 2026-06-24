import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ContourBackground from '../components/ContourBackground.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FeatureItem from '../components/FeatureItem.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Button from '../components/Button.jsx'
import {
  services,
  servicesStripLead,
  servicesStripItems,
  techDetails,
  processSteps,
  specificServices,
  CheckIcon,
  statsEquipo,
} from '../data/content.js'

export default function Servicios() {
  return (
    <>
      {/* Cabecera + tarjetas + tira (fondo crema con curvas de nivel) */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-20">
        <ContourBackground
          className="pointer-events-none absolute inset-0 h-full w-full text-[#b3aa8c]"
          opacity={0.75}
        />

        <div className="container-x relative">
          <header className="max-w-3xl">
            <Eyebrow line>Nuestros servicios</Eyebrow>
            <SectionHeading className="mt-5">
              Tecnología avanzada,
              <br />
              resultados precisos.
            </SectionHeading>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              Combinamos tecnología de última generación con experiencia técnica para entregar
              información geoespacial confiable y de alta precisión.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>

          {/* Tira de confianza */}
          <div className="mt-16 grid items-start gap-10 border-t border-line pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <FeatureItem
                Icon={servicesStripLead.Icon}
                title={servicesStripLead.title}
                desc={servicesStripLead.desc}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:col-span-8">
              {servicesStripItems.map((it) => (
                <FeatureItem key={it.title} {...it} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología en detalle */}
      <section id="tecnologia" className="scroll-mt-24 bg-white py-20 lg:py-24">
        <div className="container-x">
          <header className="max-w-2xl">
            <Eyebrow line>Tecnología</Eyebrow>
            <SectionHeading className="mt-5">
              Equipos y software de última generación
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Cada proyecto combina instrumentación geodésica, aeronaves no tripuladas y software
              profesional para garantizar precisión en campo y confiabilidad en gabinete.
            </p>
          </header>

          <div className="mt-14 space-y-16 lg:space-y-24">
            {techDetails.map((t, i) => (
              <div key={t.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={t.image}
                      alt={t.title}
                      loading="lazy"
                      className="h-64 w-full object-cover lg:h-80"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <t.Icon className="h-7 w-7" />
                  </span>
                  <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {t.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink lg:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{t.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.8} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="relative overflow-hidden bg-cream py-20 lg:py-24">
        <ContourBackground
          className="pointer-events-none absolute inset-0 h-full w-full text-[#b3aa8c]"
          opacity={0.5}
          fade="soft"
        />
        <div className="container-x relative">
          <header className="max-w-2xl">
            <Eyebrow line>Cómo trabajamos</Eyebrow>
            <SectionHeading className="mt-5">Un proceso claro en cada proyecto</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Una metodología ordenada que asegura precisión, trazabilidad y entregas a tiempo.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-lg border border-line bg-white p-6"
              >
                <span className="pointer-events-none absolute -right-1 -top-2 font-display text-6xl font-extrabold text-cream-dark">
                  {s.n}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <s.Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios específicos */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow line>Servicios</Eyebrow>
            <SectionHeading className="mt-5">Todo lo que tu proyecto necesita</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Desde el levantamiento inicial hasta los entregables finales, cubrimos cada etapa con
              soluciones a la medida de obras civiles, minería, urbanismo e ingeniería.
            </p>
            <div className="mt-8">
              <Button to="/contacto" variant="primary" arrow>
                Solicitar cotización
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {specificServices.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.8} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
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
