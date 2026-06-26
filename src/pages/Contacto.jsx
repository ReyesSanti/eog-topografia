import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import FeatureItem from '../components/FeatureItem.jsx'
import { IconLinkedin, IconInstagram, IconFacebook, IconYoutube } from '../components/icons.jsx'
import Seo from '../components/Seo.jsx'
import { contactInfo, contactStrip } from '../data/content.js'

const socials = [IconLinkedin, IconInstagram, IconFacebook, IconYoutube]

export default function Contacto() {
  return (
    <>
      <Seo
        title="Contacto y cotización | EOG Topografía SAS"
        description="Contáctanos para tu levantamiento topográfico. Cotización rápida — EOG Topografía SAS, Meta y toda Colombia. Tel. +57 322 721 7150."
        path="/contacto"
      />
      <section className="relative overflow-hidden bg-cream pt-32 pb-20">
        {/* Foto del topógrafo a la derecha (detrás del formulario) */}
        <div className="absolute inset-y-0 right-0 hidden w-[36%] lg:block">
          <img
            src="/images/contacto.jpg"
            alt="Topógrafo con equipo GNSS en campo"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/30 to-transparent" />
        </div>

        <div className="container-x relative grid items-start gap-12 lg:grid-cols-2">
          {/* Columna izquierda: info */}
          <div>
            <Eyebrow line>Hablemos de tu proyecto</Eyebrow>
            <SectionHeading className="mt-5">
              Estamos listos
              <br />
              para ayudarte.
            </SectionHeading>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Cuéntanos los detalles de tu proyecto y nuestro equipo de ingenieros te acompañará en
              cada etapa, desde la planificación hasta la entrega final.
            </p>

            <div className="mt-9 space-y-6">
              {contactInfo.map(({ Icon, label, value, note, social }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-accent text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      {label}
                    </div>
                    {social ? (
                      <div className="mt-2 flex gap-2.5">
                        {socials.map((S, i) => (
                          <a
                            key={i}
                            href="#"
                            aria-label="Red social"
                            className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-line bg-white text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                          >
                            <S className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="mt-0.5 text-lg font-semibold text-ink">{value}</div>
                        <div className="text-[13px] text-muted">{note}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="relative z-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Tira de confianza */}
      <section className="border-t border-line bg-white py-12">
        <div className="container-x grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactStrip.map((it) => (
            <FeatureItem key={it.title} {...it} compact />
          ))}
        </div>
      </section>
    </>
  )
}
