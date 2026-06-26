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

/* ---------- Servicios ----------
 * Cada servicio tiene datos para la tarjeta (Icon, title, desc, image) y para
 * su página de detalle (/servicios/:slug): tagline, intro, applications,
 * equipment, deliverables (formatos de entrega), precision. */
export const services = [
  {
    Icon: IconTripod,
    slug: 'gps-rtk',
    title: 'GPS RTK',
    desc: 'Levantamientos con alta precisión en tiempo real para proyectos que requieren exactitud centimétrica.',
    image: '/images/service-gpsrtk.jpg',
    tagline: 'Precisión centimétrica en tiempo real',
    intro:
      'El GPS RTK (Real-Time Kinematic) corrige la señal GNSS en tiempo real mediante una base y un rover —o redes CORS/NTRIP—, entregando posiciones con precisión centimétrica al instante en campo. Ideal para proyectos que exigen exactitud y rapidez.',
    precision: '± 1–2 cm',
    applications: [
      'Replanteo de obras civiles',
      'Levantamiento de linderos y predios',
      'Vías y diseño geométrico',
      'Control geodésico y georreferenciación',
      'Urbanismo y loteos',
    ],
    equipment: [
      'Receptores GNSS de doble frecuencia (multiconstelación)',
      'Configuración base + rover o conexión NTRIP/CORS',
      'Colectora con software de campo',
    ],
    deliverables: [
      'Coordenadas de puntos (CSV / TXT: Norte, Este, Cota)',
      'Planos en CAD (DWG / DXF)',
      'Archivos KML / KMZ para Google Earth',
      'Informe técnico (PDF) con metodología',
      'Datos en MAGNA-SIRGAS (origen oficial de Colombia)',
    ],
    howItWorks:
      'El GPS RTK trabaja con dos receptores GNSS en conjunto: una estación base sobre un punto conocido y un rover móvil que recorre el terreno. La base calcula el error de la señal satelital y le envía la corrección al rover en tiempo real (por radio o internet/NTRIP), logrando precisión centimétrica al instante, sin esperar procesamiento posterior. También podemos conectarnos a redes de estaciones permanentes (CORS) para trabajar con un solo equipo.',
    benefits: [
      'Precisión centimétrica en tiempo real',
      'Resultados inmediatos en campo (sin post-proceso)',
      'Mayor rendimiento: más puntos por jornada',
      'Datos georreferenciados a MAGNA-SIRGAS',
      'Menos reprocesos y errores',
    ],
    process: [
      { n: '01', title: 'Planificación', desc: 'Definimos el alcance, el sistema de coordenadas y los puntos de control.' },
      { n: '02', title: 'Toma en campo', desc: 'Medimos con base + rover (o NTRIP) aplicando controles de calidad.' },
      { n: '03', title: 'Verificación', desc: 'Comprobamos cierres y precisiones en sitio.' },
      { n: '04', title: 'Entrega', desc: 'Procesamos y entregamos coordenadas, planos e informe técnico.' },
    ],
    faq: [
      {
        q: '¿Qué precisión real obtengo?',
        a: 'Entre 1 y 2 cm en planimetría y altimetría, según las condiciones (cobertura satelital y distancia a la base).',
      },
      {
        q: '¿Sirve bajo árboles o cerca de edificios?',
        a: 'El RTK necesita ver el cielo. En zonas con obstrucción combinamos con estación total para garantizar la precisión.',
      },
      {
        q: '¿En qué sistema de coordenadas entregan?',
        a: 'Siempre en MAGNA-SIRGAS, que es el oficial del país. Manejamos el origen según la región del proyecto y, si tienes que entregar en otro sistema, lo coordinamos contigo.',
      },
      {
        q: '¿Cuánto se demora?',
        a: 'El trabajo de campo es rápido al ser en tiempo real; los entregables suelen estar listos en pocos días según el tamaño del proyecto.',
      },
    ],
  },
  {
    Icon: IconDrone,
    slug: 'drones',
    title: 'DRONES',
    desc: 'Fotogrametría y mapeo 3D de grandes extensiones con eficiencia y seguridad.',
    image: '/images/service-drones.jpg',
    tagline: 'Cobertura aérea y modelos 3D de alta resolución',
    intro:
      'Con drones (RPAS) y puntos de control en tierra (GCP) capturamos cientos de imágenes que procesamos por fotogrametría para generar ortomosaicos, nubes de puntos y modelos del terreno. Cubrimos grandes extensiones de forma rápida y segura.',
    precision: '2–5 cm con GCP',
    applications: [
      'Levantamiento de grandes áreas',
      'Cálculo de volúmenes (minería, acopios, movimientos de tierra)',
      'Seguimiento y control de avance de obra',
      'Ortomosaicos y catastro',
      'Zonas de difícil acceso',
    ],
    equipment: [
      'Dron con GNSS RTK/PPK',
      'Puntos de control terrestre (GCP) con GNSS',
      'Software fotogramétrico',
    ],
    deliverables: [
      'Ortomosaico georreferenciado (GeoTIFF / JPG)',
      'Nube de puntos (LAS / LAZ)',
      'Modelo digital de superficie y de terreno (MDS / MDT, GeoTIFF)',
      'Curvas de nivel (DWG / DXF)',
      'Modelo 3D (OBJ) y reporte de volúmenes (PDF)',
    ],
    howItWorks:
      'Planificamos un vuelo automático sobre el área con un dron equipado con GNSS RTK/PPK, que captura cientos de fotografías con alto traslape. Colocamos puntos de control (GCP) medidos con GNSS para amarrar el modelo a coordenadas reales. Luego, por fotogrametría, el software reconstruye el terreno en 3D y genera ortomosaicos, nubes de puntos y modelos de elevación. Es la forma más eficiente de levantar grandes superficies.',
    benefits: [
      'Cubre grandes áreas en poco tiempo',
      'Seguro: sin exponer personal en zonas de riesgo',
      'Cálculo preciso de volúmenes',
      'Registro visual del terreno (ortomosaico)',
      'Modelos 3D reutilizables para diseño y seguimiento',
    ],
    process: [
      { n: '01', title: 'Plan de vuelo', desc: 'Definimos área, altura, traslape y ubicación de los GCP.' },
      { n: '02', title: 'Vuelo y control', desc: 'Capturamos las imágenes y medimos los puntos de control.' },
      { n: '03', title: 'Procesamiento', desc: 'Generamos ortomosaico, nube de puntos y MDT/MDS.' },
      { n: '04', title: 'Entrega', desc: 'Curvas de nivel, volúmenes y modelos en los formatos requeridos.' },
    ],
    faq: [
      {
        q: '¿Qué precisión tiene la fotogrametría?',
        a: 'Con puntos de control (GCP) bien distribuidos, entre 2 y 5 cm. Sin GCP, la precisión absoluta baja.',
      },
      {
        q: '¿Pueden calcular volúmenes de material?',
        a: 'Sí. Es uno de los usos más comunes: acopios, movimientos de tierra y minería, con reporte detallado.',
      },
      {
        q: '¿Necesitan permisos para volar?',
        a: 'Operamos siguiendo la normativa de la Aerocivil; en zonas controladas gestionamos los permisos correspondientes.',
      },
      {
        q: '¿Sirve para terrenos con vegetación?',
        a: 'El dron mide la superficie (copa de árboles). Para terreno bajo vegetación densa lo combinamos con levantamiento terrestre.',
      },
    ],
  },
  {
    Icon: IconGnss,
    slug: 'gnss',
    title: 'GNSS',
    desc: 'Posicionamiento global confiable para control, monitoreo y análisis geoespacial.',
    image: '/images/service-gnss.jpg',
    tagline: 'Posicionamiento geodésico confiable',
    intro:
      'El posicionamiento GNSS (estático y post-procesado) establece puntos de control de alta exactitud, georreferencia proyectos y permite monitoreo. Es la base geodésica sobre la que se apoya todo levantamiento.',
    precision: 'Milimétrica a centimétrica (post-proceso)',
    applications: [
      'Redes y puntos de control geodésico',
      'Georreferenciación de proyectos',
      'Deslindes y amojonamiento',
      'Monitoreo de estructuras y deformaciones',
      'Enlace a la red MAGNA-SIRGAS',
    ],
    equipment: [
      'Receptores GNSS de doble/triple frecuencia',
      'Observación estática y post-proceso (PPK)',
      'Vínculo a estaciones de referencia (CORS/IGS)',
    ],
    deliverables: [
      'Archivos crudos RINEX',
      'Coordenadas geodésicas y planas (MAGNA-SIRGAS)',
      'Informe de ajuste y cierre',
      'Monografía/certificado de puntos de control',
      'Reporte de precisión (PDF)',
    ],
    howItWorks:
      'El posicionamiento GNSS usa las constelaciones de satélites (GPS, GLONASS, Galileo, BeiDou) para determinar coordenadas con alta exactitud. En modo estático, el receptor observa varios minutos u horas sobre un punto y luego los datos se post-procesan contra estaciones de referencia. Así obtenemos puntos de control geodésico confiables que sirven de base para todo el proyecto y para enlazar a la red oficial MAGNA-SIRGAS.',
    benefits: [
      'Base geodésica confiable para todo el proyecto',
      'Enlace a la red oficial MAGNA-SIRGAS',
      'Alta exactitud mediante post-proceso',
      'Ideal para control y monitoreo',
      'Trazabilidad y respaldo técnico',
    ],
    process: [
      { n: '01', title: 'Reconocimiento', desc: 'Ubicamos y materializamos los puntos de control.' },
      { n: '02', title: 'Observación', desc: 'Sesiones estáticas con receptores GNSS.' },
      { n: '03', title: 'Post-proceso', desc: 'Ajuste y enlace a estaciones de referencia.' },
      { n: '04', title: 'Entrega', desc: 'Coordenadas, monografías e informe de precisión.' },
    ],
    faq: [
      {
        q: '¿Cuál es la diferencia entre GNSS y GPS RTK?',
        a: 'El RTK da resultados centimétricos al instante en campo; el GNSS estático/post-proceso busca la máxima exactitud para puntos de control (puede llegar a milimétrica), procesando después.',
      },
      {
        q: '¿Qué es MAGNA-SIRGAS?',
        a: 'Es el sistema de referencia oficial de Colombia. Enlazar tu proyecto a él garantiza compatibilidad con entidades y catastro.',
      },
      {
        q: '¿Para qué sirven los puntos de control?',
        a: 'Son la base sobre la que se apoyan los demás levantamientos (RTK, dron, estación total) para que todo quede en el mismo sistema.',
      },
    ],
  },
  {
    Icon: IconProcessing,
    slug: 'procesamiento',
    title: 'PROCESAMIENTO',
    desc: 'Procesamiento de datos avanzado y generación de planos, modelos y reportes técnicos.',
    image: '/images/service-procesamiento.jpg',
    tagline: 'Del dato de campo a planos y modelos listos para diseño',
    intro:
      'En gabinete depuramos, procesamos y modelamos la información capturada para entregar planos, modelos digitales y reportes técnicos listos para ingeniería y diseño, en los formatos que tu proyecto necesite.',
    precision: null,
    applications: [
      'Planos topográficos planimétricos y altimétricos',
      'Modelos digitales de terreno (MDT/MDE)',
      'Curvas de nivel, perfiles y secciones',
      'Cálculo de volúmenes y movimientos de tierra',
      'Conversión y depuración de datos',
    ],
    equipment: [
      'AutoCAD / Civil 3D',
      'Software GIS (QGIS)',
      'Software de procesamiento GNSS y fotogrametría',
    ],
    deliverables: [
      'Planos en CAD (DWG / DXF)',
      'Modelos para diseño (LandXML)',
      'Capas GIS (SHP / GeoJSON / KML)',
      'Cálculos en Excel (volúmenes, áreas)',
      'Planos y reportes en PDF',
    ],
    howItWorks:
      'Una vez capturada la información en campo, en gabinete la depuramos y procesamos: filtramos puntos, generamos el modelo digital de terreno (MDT), trazamos curvas de nivel, perfiles y secciones, y calculamos áreas y volúmenes. Entregamos planos y modelos listos para que tu equipo de ingeniería diseñe sobre ellos, en el formato (CAD, GIS, LandXML, PDF) que necesites.',
    benefits: [
      'Planos y modelos listos para diseño',
      'Formatos compatibles con tu software',
      'Cálculos de volúmenes y áreas confiables',
      'Información ordenada y trazable',
      'Ahorro de tiempo para tu equipo',
    ],
    process: [
      { n: '01', title: 'Depuración', desc: 'Limpiamos y validamos los datos de campo.' },
      { n: '02', title: 'Modelado', desc: 'Generamos MDT, curvas, perfiles y secciones.' },
      { n: '03', title: 'Cálculos', desc: 'Volúmenes, áreas y cantidades de obra.' },
      { n: '04', title: 'Entrega', desc: 'Planos y modelos en los formatos solicitados.' },
    ],
    faq: [
      {
        q: '¿En qué software entregan?',
        a: 'Principalmente AutoCAD/Civil 3D (DWG/DXF) y LandXML; también capas GIS (SHP/GeoJSON/KML) y PDF. Nos adaptamos a tu flujo.',
      },
      {
        q: '¿Pueden procesar datos que ya tengo?',
        a: 'Sí, podemos depurar y modelar información levantada por terceros para entregarte planos y cálculos consistentes.',
      },
      {
        q: '¿Incluye cálculo de cantidades de obra?',
        a: 'Sí: volúmenes de corte/relleno, áreas y demás cantidades necesarias para presupuesto y diseño.',
      },
    ],
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
    location: 'Meta, Colombia',
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
    location: 'Meta, Colombia',
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
    value: '+57 320 301 9744',
    note: 'Lun - Vie: 8:00 a.m. - 6:00 p.m.',
  },
  {
    Icon: Mail,
    label: 'Escríbenos',
    value: 'eogtopografiasas@gmail.com',
    note: 'Respondemos en menos de 24 horas.',
  },
  {
    Icon: MapPin,
    label: 'Visítanos',
    value: 'Meta, Colombia',
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
   "Replanteo de puntos",
   "Catastro de redes",
  'Otro',
]

export const contactDetails = {
  phone: '+57 320 301 9744',
  email: 'eogtopografiasas@gmail.com',
  location: 'Meta, Colombia',
}

/* Marca y destino de las solicitudes del formulario */
export const BRAND = {
  name: 'EOG Topografía',
  slogan: 'Levantando futuro',
}

// Correo que se muestra en la web. Las solicitudes se envían por la función
// serverless (api/contact) y llegan a CONTACT_TO_EMAIL (variable en Vercel).
export const CONTACT_EMAIL = 'eogtopografiasas@gmail.com'

// Tope total de adjuntos (subido respecto al límite anterior de 10MB).
export const MAX_UPLOAD_MB = 25

// hCaptcha (anti-bots). La SITE KEY es pública (va aquí). La SECRET va SOLO en
// las variables de entorno de Vercel (HCAPTCHA_SECRET), nunca en el código; la
// función api/contact la usa para verificar el token del lado servidor.
export const HCAPTCHA_SITE_KEY = '400c9070-a342-4d4a-9c46-d2be57d89566'

// WhatsApp (botón flotante). Número en formato internacional sin "+" ni espacios:
// Colombia +57 + 320 301 9744.
export const WHATSAPP = {
  number: '573203019744',
  display: '+57 320 301 9744',
  message: '👋 Hola, Me gustaría recibir más información sobre sus servicios de topografía.',
};

export { FileCheck2 }
