import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FeatureItem from '../components/FeatureItem.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import ContourBackground from '../components/ContourBackground.jsx'
import Seo from '../components/Seo.jsx'
import { equipoFeatures, statsEquipo } from '../data/content.js'

export default function Equipo() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20">
      <Seo
        title="Nosotros — equipo de topografía | EOG Topografía SAS"
        description="Conoce a EOG Topografía SAS: precisión, tecnología y compromiso en cada levantamiento topográfico en Colombia."
        path="/equipo"
      />
      <ContourBackground
        className="pointer-events-none absolute inset-0 h-full w-full text-[#b3aa8c]"
        opacity={0.45}
      />

      <div className="container-x relative">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Texto + features */}
          <div className="lg:col-span-7">
            <Eyebrow line>¿Por qué elegirnos?</Eyebrow>
            <SectionHeading className="mt-5">
              Precisión, tecnología y compromiso en cada proyecto.
            </SectionHeading>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Combinamos experiencia, innovación y enfoque técnico para brindar soluciones
              confiables que superan las expectativas de nuestros clientes.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {equipoFeatures.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/equipo.jpg"
                alt="Equipo de topógrafos en campo con dron y GPS"
                className="h-[300px] w-full object-cover lg:h-[460px]"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <CtaBanner
            title="¿Tienes un proyecto en mente?"
            subtitle="Estamos listos para ayudarte a hacerlo realidad."
            stats={statsEquipo}
          />
        </div>
      </div>
    </section>
  )
}
