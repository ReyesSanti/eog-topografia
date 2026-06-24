// Patrón de curvas de nivel topográficas (orgánicas, anidadas) con degradado.
// Reproduce el fondo del mockup: líneas concentradas arriba a la derecha que
// se desvanecen hacia abajo/izquierda. Hereda color vía currentColor.
//
// Props:
//   className  clases del <svg> (incluye el color, p.ej. "text-[#b3a98c]")
//   opacity    opacidad global de las líneas
//   fade       'right' (default) desvanece hacia abajo-izquierda; 'soft' centra

const W = 1200
const H = 900
const N = 72 // puntos por anillo

// pseudo-aleatorio determinista
const rnd = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

// Perfil radial suave (suma de armónicos) -> forma orgánica cerrada.
function makeProfile(seed) {
  const a1 = 0.16 + rnd(seed) * 0.08
  const a2 = 0.1 + rnd(seed + 1) * 0.06
  const a3 = 0.06 + rnd(seed + 2) * 0.05
  const p1 = rnd(seed + 3) * Math.PI * 2
  const p2 = rnd(seed + 4) * Math.PI * 2
  const p3 = rnd(seed + 5) * Math.PI * 2
  return (a) => 1 + a1 * Math.sin(a + p1) + a2 * Math.sin(2 * a + p2) + a3 * Math.sin(3 * a + p3)
}

// Curva cerrada suave a partir de puntos (esquema cuadrático por puntos medios).
function smoothClosedPath(pts) {
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 1; i <= pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i % pts.length]
    const mx = (p0[0] + p1[0]) / 2
    const my = (p0[1] + p1[1]) / 2
    d += ` Q ${p0[0].toFixed(1)} ${p0[1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`
  }
  return d + ' Z'
}

// Centros de "elevación" (montañas) con sus anillos anidados.
const CENTERS = [
  { cx: 1000, cy: 250, base: 34, gap: 27, rings: 17, ry: 0.82, drift: 5, seed: 2 },
  { cx: 1170, cy: 600, base: 26, gap: 24, rings: 12, ry: 0.8, drift: -4, seed: 9 },
  { cx: 760, cy: 120, base: 20, gap: 26, rings: 7, ry: 0.86, drift: 3, seed: 15 },
]

function buildPaths() {
  const paths = []
  for (const c of CENTERS) {
    const prof = makeProfile(c.seed)
    for (let r = 0; r < c.rings; r++) {
      const radius = c.base + r * c.gap
      const cx = c.cx + r * c.drift
      const cy = c.cy + r * c.drift * 0.4
      const pts = []
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        const rr = radius * prof(a)
        pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * c.ry])
      }
      paths.push(smoothClosedPath(pts))
    }
  }
  return paths
}

const PATHS = buildPaths()

export default function ContourBackground({ className = '', opacity = 0.55, fade = 'right' }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="contourFade" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset={fade === 'soft' ? '0.7' : '0.5'} stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="contourMask">
          <rect width={W} height={H} fill="url(#contourFade)" />
        </mask>
      </defs>
      <g
        mask="url(#contourMask)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        style={{ opacity }}
      >
        {PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
        {/* marca topográfica (benchmark) */}
        <path d="M812 470h22M823 459v22" strokeWidth="1.1" />
      </g>
    </svg>
  )
}
