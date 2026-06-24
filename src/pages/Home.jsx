import Button from '../components/Button.jsx'
import { heroMini, homeBar } from '../data/content.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Foto de fondo */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Equipo de topografía de EOG: GPS RTK, estación total, dron y maletín sobre un valle al atardecer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-forest/30" />
        </div>

        {/* Contenido */}
        <div className="container-x relative flex flex-1 items-center pt-28 pb-44">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent-light">
              EOG Topografía <span className="text-accent-light/60">•</span> Precisión{' '}
              <span className="text-accent-light/60">•</span> Tecnología
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Levantando
              <br />
              futuro<span className="text-accent-light">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Levantamientos topográficos con tecnología de última generación: GPS RTK, estación
              total, drones RTK y GNSS para datos confiables y decisiones seguras.
            </p>

            <div className="mt-8 h-px w-16 bg-accent" />

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              {heroMini.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-accent-light">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold uppercase tracking-wide text-white">
                      {title}
                    </div>
                    <div className="text-[13px] text-white/60">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button to="/servicios" variant="primary" arrow>
                Conoce nuestros servicios
              </Button>
            </div>
          </div>
        </div>

        {/* Barra oscura de features, solapada al pie del hero */}
        <div className="relative z-10 border-t border-white/10 bg-forest/90 backdrop-blur-sm">
          <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {homeBar.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-3.5 py-6 lg:px-7 ${
                  i > 0 ? 'lg:border-l lg:border-white/10' : ''
                }`}
              >
                <span className="mt-0.5 shrink-0 text-accent-light">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                    {title}
                  </div>
                  <div className="mt-1 text-[12.5px] leading-snug text-white/55">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
