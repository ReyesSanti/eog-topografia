import {
  Crosshair,
  Layers,
  ShieldCheck,
  Clock,
  Leaf,
  Cpu,
  BadgeCheck,
  Headset,
  Award,
  Briefcase,
  Users,
  Map as MapIcon,
  Target,
  FileCheck2,
  Phone,
  Mail,
  MapPin,
  Share2,
  ClipboardList,
  Compass,
  CheckCircle2,
} from 'lucide-react'
import { IconTripod, IconDrone, IconGnss, IconProcessing } from '../components/icons.jsx'

export const navLinks = [
  { label: 'Servicios', to: '/servicios' },
  { label: 'Tecnología', to: '/servicios#tecnologia' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Contacto', to: '/contacto' },
]

/* ---------- Home ---------- */
export const heroMini = [
  { Icon: IconTripod, title: 'GPS RTK', desc: 'Alta precisión en tiempo real' },
  { Icon: IconDrone, title: 'DRONES', desc: 'Fotogrametría y mapeo 3D' },
  { Icon: IconGnss, title: 'GNSS', desc: 'Posicionamiento global confiable' },
]

export const homeBar = [
  {
    Icon: Crosshair,
    title: 'PRECISIÓN CENTIMÉTRICA',
    desc: 'Equipos de última generación para máxima exactitud.',
  },
  {
    Icon: Layers,
    title: 'TECNOLOGÍA AVANZADA',
    desc: 'GPS RTK, Drones y GNSS integrados en cada proyecto.',
  },
  {
    Icon: ShieldCheck,
    title: 'DATOS CONFIABLES',
    desc: 'Información precisa para decisiones seguras.',
  },
  {
    Icon: Clock,
    title: 'ENTREGA EFICIENTE',
    desc: 'Resultados de calidad en el tiempo comprometido.',
  },
]

/* ---------- Servicios ---------- */
export const services = [
  {
    Icon: IconTripod,
    title: 'GPS RTK',
    desc: 'Levantamientos con alta precisión en tiempo real para proyectos que requieren exactitud milimétrica.',
    image: '/images/service-gpsrtk.jpg',
  },
  {
    Icon: IconDrone,
    title: 'DRONES',
    desc: 'Fotogrametría y mapeo 3D de grandes extensiones con eficiencia y seguridad.',
    image: '/images/service-drones.jpg',
  },
  {
    Icon: IconGnss,
    title: 'GNSS',
    desc: 'Posicionamiento global confiable para control, monitoreo y análisis geoespacial.',
    image: '/images/service-gnss.jpg',
  },
  {
    Icon: IconProcessing,
    title: 'PROCESAMIENTO',
    desc: 'Procesamiento de datos avanzado y generación de planos, modelos y reportes técnicos.',
    image: '/images/service-procesamiento.jpg',
  },
]

export const servicesStripLead = {
  Icon: Leaf,
  title: 'COMPROMISO AMBIENTAL',
  desc: 'Utilizamos tecnología que minimiza el impacto ambiental y promueve prácticas sostenibles en cada proyecto.',
}

export const servicesStripItems = [
  { Icon: Target, title: 'Precisión', desc: 'que reduce reprocesos' },
  { Icon: ShieldCheck, title: 'Información', desc: 'confiable para mejores decisiones' },
  { Icon: Clock, title: 'Entregas', desc: 'puntuales y eficientes' },
  { Icon: Users, title: 'Acompañamiento', desc: 'técnico en cada etapa del proyecto' },
]

/* ---------- Proyectos ---------- */
export const projectBadges = [
  { Icon: Crosshair, label: 'Precisión Milimétrica' },
  { Icon: ShieldCheck, label: 'Compromiso y confianza' },
  { Icon: Clock, label: 'Entrega a tiempo' },
]

export const projects = [
  {
    category: 'INFRAESTRUCTURA',
    title: 'Carretera Interregional',
    location: 'Antioquia, Colombia',
    desc: 'Levantamiento topográfico con GPS RTK para diseño geométrico y control de obra.',
    tech: 'GPS RTK',
    Icon: IconTripod,
    image: '/images/project-road.jpg',
  },
  {
    category: 'MINERÍA',
    title: 'Volumen y control de minas',
    location: 'Boyacá, Colombia',
    desc: 'Cálculo de volúmenes y monitoreo con drones para control de producción.',
    tech: 'Dron + Fotogrametría',
    Icon: IconDrone,
    image: '/images/project-mining.jpg',
  },
  {
    category: 'DESARROLLO URBANO',
    title: 'Loteo y urbanismo',
    location: 'Cundinamarca, Colombia',
    desc: 'Levantamiento y replanteo para proyectos urbanísticos de gran escala.',
    tech: 'GNSS',
    Icon: IconGnss,
    image: '/images/project-urban.jpg',
  },
  {
    category: 'INGENIERÍA',
    title: 'Modelado y procesamiento',
    location: 'Santander, Colombia',
    desc: 'Procesamiento de datos y generación de modelos 3D y curvas de nivel.',
    tech: 'Procesamiento avanzado',
    Icon: IconProcessing,
    image: '/images/project-terrain.jpg',
  },
]

export const moreProjects = [
  {
    category: 'TOPOGRAFÍA RURAL',
    title: 'Catastro rural multipredial',
    location: 'Nariño, Colombia',
    image: '/images/more-rural.jpg',
  },
  {
    category: 'HIDROLOGÍA',
    title: 'Estudio de cuenca hidrográfica',
    location: 'Tolima, Colombia',
    image: '/images/more-river.jpg',
  },
  {
    category: 'CONSTRUCCIÓN',
    title: 'Replanteo de edificación',
    location: 'Antioquia, Colombia',
    image: '/images/more-construction.jpg',
  },
  {
    category: 'ENERGÍA',
    title: 'Línea de transmisión eléctrica',
    location: 'Santander, Colombia',
    image: '/images/more-power.jpg',
  },
  {
    category: 'VÍAS',
    title: 'Inventario y diseño vial',
    location: 'Cauca, Colombia',
    image: '/images/more-road.jpg',
  },
  {
    category: 'AMBIENTAL',
    title: 'Monitoreo de taludes',
    location: 'Caldas, Colombia',
    image: '/images/more-terrain.jpg',
  },
]

export const stats = [
  { Icon: Briefcase, value: '120+', label: 'Proyectos realizados' },
  { Icon: Award, value: '8+', label: 'Años de experiencia' },
  { Icon: Users, value: '95%', label: 'Clientes satisfechos' },
  { Icon: MapIcon, value: '15+', label: 'Departamentos cubiertos' },
]

/* ---------- Equipo / ¿Por qué elegirnos? ---------- */
export const equipoFeatures = [
  {
    Icon: Crosshair,
    title: 'ALTA PRECISIÓN',
    desc: 'Equipos de última generación y personal especializado para resultados milimétricos.',
  },
  {
    Icon: Cpu,
    title: 'TECNOLOGÍA AVANZADA',
    desc: 'Uso de GPS RTK, drones, GNSS y software especializado para máxima eficiencia.',
  },
  {
    Icon: ShieldCheck,
    title: 'CONFIABILIDAD',
    desc: 'Procesos certificados y control de calidad en cada etapa del proyecto.',
  },
  {
    Icon: BadgeCheck,
    title: 'CUMPLIMIENTO',
    desc: 'Entregas puntuales y adaptadas a los requerimientos de cada cliente.',
  },
  {
    Icon: Headset,
    title: 'ASESORÍA TÉCNICA',
    desc: 'Acompañamiento profesional desde la planificación hasta la entrega final.',
  },
  {
    Icon: Leaf,
    title: 'COMPROMISO AMBIENTAL',
    desc: 'Prácticas responsables que minimizan el impacto ambiental en cada operación.',
  },
]

export const statsEquipo = [
  { Icon: Award, value: '8+', label: 'Años de experiencia' },
  { Icon: MapIcon, value: '15+', label: 'Departamentos cubiertos' },
  { Icon: Briefcase, value: '120+', label: 'Proyectos realizados' },
  { Icon: Users, value: '95%', label: 'Clientes satisfechos' },
]

/* ---------- Contacto ---------- */
export const contactInfo = [
  {
    Icon: Phone,
    label: 'Llámanos',
    value: '+57 322 721 7150',
    note: 'Lun - Vie: 8:00 a.m. - 6:00 p.m.',
  },
  {
    Icon: Mail,
    label: 'Escríbenos',
    value: 'santiagodariog@gmail.com',
    note: 'Respondemos en menos de 24 horas.',
  },
  {
    Icon: MapPin,
    label: 'Visítanos',
    value: 'Medellín, Colombia',
    note: 'Atención presencial con cita previa.',
  },
  {
    Icon: Share2,
    label: 'Síguenos',
    value: null,
    note: null,
    social: true,
  },
]

export const contactStrip = [
  {
    Icon: ShieldCheck,
    title: 'Seguridad y confidencialidad',
    desc: 'Protegemos tu información y datos del proyecto.',
  },
  {
    Icon: Clock,
    title: 'Respuesta rápida',
    desc: 'Te contactamos en menos de 24 horas.',
  },
  {
    Icon: Users,
    title: 'Asesoría personalizada',
    desc: 'Soluciones a la medida de tus necesidades.',
  },
  {
    Icon: Leaf,
    title: 'Compromiso ambiental',
    desc: 'Trabajamos con prácticas sostenibles.',
  },
]

/* ---------- Servicios: tecnología en detalle ---------- */
export const techDetails = [
  {
    tag: 'POSICIONAMIENTO',
    title: 'GPS RTK & GNSS',
    desc: 'Equipos geodésicos de doble frecuencia que capturan posiciones con corrección en tiempo real, garantizando exactitud centimétrica en cualquier terreno.',
    bullets: [
      'Precisión centimétrica en tiempo real',
      'Multiconstelación (GPS, GLONASS, Galileo, BeiDou)',
      'Enlace con bases propias y redes CORS',
    ],
    image: '/images/service-gpsrtk.jpg',
    Icon: IconTripod,
  },
  {
    tag: 'AÉREO',
    title: 'Drones y fotogrametría',
    desc: 'Vuelos planificados con RPAS para cubrir grandes extensiones de forma rápida y segura, generando ortomosaicos y nubes de puntos de alta resolución.',
    bullets: [
      'Ortomosaicos y modelos 3D detallados',
      'Cobertura ágil de zonas extensas o de difícil acceso',
      'Cálculo de volúmenes y seguimiento de obra',
    ],
    image: '/images/service-drones.jpg',
    Icon: IconDrone,
  },
  {
    tag: 'GABINETE',
    title: 'Procesamiento y modelado',
    desc: 'Software especializado para depurar, procesar y modelar la información de campo, entregando planos, curvas de nivel y reportes listos para diseño.',
    bullets: [
      'Modelos digitales de terreno (MDT/MDE)',
      'Curvas de nivel, perfiles y secciones',
      'Entregables en CAD, GIS y formatos estándar',
    ],
    image: '/images/service-procesamiento.jpg',
    Icon: IconProcessing,
  },
]

/* ---------- Servicios: proceso de trabajo ---------- */
export const processSteps = [
  {
    n: '01',
    Icon: ClipboardList,
    title: 'Planificación',
    desc: 'Analizamos el alcance, definimos metodología y planificamos el levantamiento según tus objetivos.',
  },
  {
    n: '02',
    Icon: Compass,
    title: 'Levantamiento en campo',
    desc: 'Capturamos datos con GPS RTK, GNSS y drones aplicando controles de calidad en sitio.',
  },
  {
    n: '03',
    Icon: Cpu,
    title: 'Procesamiento',
    desc: 'Depuramos y procesamos la información para generar modelos, planos y cálculos precisos.',
  },
  {
    n: '04',
    Icon: FileCheck2,
    title: 'Entrega y soporte',
    desc: 'Entregamos resultados confiables en los formatos que necesitas, con acompañamiento técnico.',
  },
]

/* ---------- Servicios: listado específico ---------- */
export const specificServices = [
  'Levantamientos planimétricos y altimétricos',
  'Replanteo de obras civiles',
  'Fotogrametría con drones (RPAS)',
  'Modelos digitales de elevación (MDE/MDT)',
  'Cálculo de volúmenes y movimientos de tierra',
  'Curvas de nivel, perfiles y secciones',
  'Georreferenciación y control geodésico',
  'Catastro, linderos y deslindes',
  'Monitoreo y control de deformaciones',
]

export const CheckIcon = CheckCircle2

export const serviceOptions = [
  'Levantamiento topográfico',
  'GPS RTK',
  'Fotogrametría con drones',
  'GNSS / Posicionamiento',
  'Procesamiento de datos',
  'Modelado 3D y curvas de nivel',
  'Otro',
]

export const contactDetails = {
  phone: '+57 322 721 7150',
  email: 'santiagodariog@gmail.com',
  location: 'Medellín, Colombia',
}

/* Marca y destino de las solicitudes del formulario */
export const BRAND = {
  name: 'EOG Topografía',
  slogan: 'Levantando futuro',
}

// Correo que se muestra en la web (las solicitudes llegan vía Web3Forms a la
// dirección asociada a la clave de abajo).
export const CONTACT_EMAIL = 'santiagodariog@gmail.com'

// Tope total de adjuntos (subido respecto al límite anterior de 10MB).
export const MAX_UPLOAD_MB = 25

// Web3Forms: servicio fiable de envío del formulario al correo (verificado).
// La clave está asociada a santiagodariog@gmail.com. Es PÚBLICA por diseño; lo
// que la protege es el allowlist de dominios (panel de Web3Forms) + hCaptcha +
// honeypot. El plan gratuito NO adjunta binarios, por eso enviamos la lista de
// nombres de los archivos.
export const WEB3FORMS_ACCESS_KEY = '21754d3c-1237-4ac8-a720-8205ca5e97f9'

// hCaptcha (anti-bots). En el plan GRATUITO de Web3Forms se usa su SITE KEY
// compartida; Web3Forms verifica el token automáticamente (no hay que configurar
// ninguna secret ni panel). Usar llaves propias de hCaptcha es función Pro.
// Ref: https://docs.web3forms.com → Spam Protection → hCaptcha.
export const HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

// WhatsApp (botón flotante). Número en formato internacional sin "+" ni espacios:
// Colombia +57 + 322 721 7150.
export const WHATSAPP = {
  number: '573227217150',
  display: '+57 322 721 7150',
  message: 'Hola, quiero más información sobre sus servicios de topografía.',
}

export { FileCheck2 }
