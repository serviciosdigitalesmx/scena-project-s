export const SITE = {
  name: 'SCENA',
  tagline: 'Suministros y Conexiones',
  description: 'Atención 24/7 en mangueras hidráulicas, conexiones industriales y componentes para operaciones críticas. Levantamiento técnico en sitio. 28+ años de experiencia. Cotiza por WhatsApp.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://scena.com.mx',
  phone: {
    primary: '933 132 1193',
    secondary: '813 715 7752',
  },
  email: 'albertodelacruz@scena.com.mx',
  whatsapp: {
    number: '529331321193',
    message: 'Hola SCENA, tengo un requerimiento industrial urgente y necesito apoyo técnico 24/7:',
  },
  coverage: 'Cobertura nacional en México',
  hours: 'Atención 24/7',
}

export const NAVIGATION = {
  categories: [
    { id: 'soluciones', label: 'Productos' },
    { id: 'industrias', label: 'Industrias' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'casos', label: 'Casos' },
    { id: 'contacto', label: 'Contacto' },
  ],
}

export const DIAGNOSTICS = [
  { id: 'presion', label: 'Presión', description: '¿Tu sistema opera a baja, media o alta presión?', icon: 'Gauge' },
  { id: 'temperatura', label: 'Temperatura', description: '¿El fluido está a temperatura ambiente o extrema?', icon: 'Thermometer' },
  { id: 'fluido', label: 'Fluido', description: '¿Agua, aire, petróleo, químicos o alimentos?', icon: 'Droplet' },
] as const

export const INDUSTRIES = [
  {
    id: 'oil-gas',
    label: 'Oil & Gas',
    description: 'Mangueras y conexiones para hidrocarburos, alta presión y condiciones severas. Cumplimiento con estándares de la industria.',
    applications: ['Hidrocarburos', 'Alta presión', 'Transferencia'],
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras industriales para hidrocarburos y aplicaciones Oil and Gas',
    width: 850,
    height: 621,
  },
  {
    id: 'petroquimica',
    label: 'Petroquímica',
    description: 'Materiales compatibles con químicos agresivos. Experiencia con especificaciones Pemex y refinerías.',
    applications: ['Químicos agresivos', 'Vapor', 'Refinerías'],
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Manguera metálica inoxidable para aplicaciones petroquímicas',
    width: 800,
    height: 800,
  },
  {
    id: 'manufactura',
    label: 'Manufactura',
    description: 'Ensambles certificados para líneas de producción continua. Disponibilidad inmediata y soporte técnico.',
    applications: ['Producción continua', 'Automatización', 'Mantenimiento'],
    image: '/catalog/adaptadores-hidraulicos.webp',
    imageAlt: 'Adaptadores y conexiones para líneas de manufactura industrial',
    width: 1000,
    height: 1000,
  },
  {
    id: 'construccion',
    label: 'Construcción',
    description: 'Mangueras para equipos de construcción pesada. Resistencia a abrasión y condiciones de obra.',
    applications: ['Excavadoras', 'Cargadores', 'Equipo pesado'],
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Mangueras hidráulicas para equipos de construcción pesada',
    width: 1600,
    height: 900,
  },
  {
    id: 'mineria',
    label: 'Minería',
    description: 'Mangueras para perforación, cargadores y camiones de acarreo. Resistencia extrema a abrasión y presión.',
    applications: ['Perforación', 'Acarreo', 'Hidráulica móvil'],
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Mangueras hidráulicas para maquinaria minera y equipos de perforación',
    width: 1600,
    height: 900,
  },
  {
    id: 'transporte',
    label: 'Transporte',
    description: 'Ensambles certificados para flotas y transporte de carga. Levantamiento técnico en ruta disponible.',
    applications: ['Flotas', 'Carga', 'Levantamiento en ruta'],
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Conexiones y ensambles para flotas de transporte de carga',
    width: 697,
    height: 594,
  },
  {
    id: 'alimentos',
    label: 'Alimentos y bebidas',
    description: 'Materiales certificados para contacto con alimentos. Cumplimiento con normas sanitarias.',
    applications: ['Proceso sanitario', 'Vapor', 'Limpieza'],
    image: '/catalog/tuberia-inoxidable.webp',
    imageAlt: 'Componentes inoxidables para industria de alimentos y bebidas',
    width: 996,
    height: 996,
  },
  {
    id: 'mantenimiento',
    label: 'Mantenimiento industrial',
    description: 'Respuesta 24/7 para paros de emergencia. Refacciones y componentes con entrega programada.',
    applications: ['Paros de emergencia', 'Refacciones', 'Entrega programada'],
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Conexiones y componentes para mantenimiento industrial de emergencia',
    width: 697,
    height: 594,
  },
] as const

export const SERVICES = [
  {
    icon: 'Gauge',
    title: 'Pruebas hidrostáticas',
    result: 'Certificación de presión de trabajo con evidencia técnica para liberación de equipo.',
    cta: 'Solicitar certificación',
    message: 'Hola SCENA, necesito solicitar una certificación de prueba hidrostática.',
  },
  {
    icon: 'ScanSearch',
    title: 'Levantamiento técnico',
    result: 'Medición, documentación y detección de la solución correcta en tu planta.',
    cta: 'Agendar visita técnica',
    message: 'Hola SCENA, necesito agendar una visita técnica en planta.',
  },
  {
    icon: 'DraftingCompass',
    title: 'Ingeniería de reemplazo',
    result: 'Equivalencias y mejoras para sustituir componentes críticos sin especificación.',
    cta: 'Enviar especificaciones',
    message: 'Hola SCENA, necesito reemplazar un componente crítico y quiero enviar sus especificaciones.',
  },
  {
    icon: 'TriangleAlert',
    title: 'Identificación de riesgos',
    result: 'Detección temprana de fugas, fatiga, abrasión y exposición química.',
    cta: 'Solicitar diagnóstico',
    message: 'Hola SCENA, necesito solicitar un diagnóstico de riesgos en una línea industrial.',
  },
  {
    icon: 'Wrench',
    title: 'Desarrollo de soluciones',
    result: 'Diseño de soluciones a medida a partir de las condiciones reales de tu planta.',
    cta: 'Cotizar solución especial',
    message: 'Hola SCENA, necesito cotizar una solución industrial especial.',
  },
  {
    icon: 'Clock3',
    title: 'Soporte mantenimiento',
    result: 'Atención para paros programados, refacciones y urgencias operativas.',
    cta: 'Atender urgencia',
    message: 'Hola SCENA, necesito atención para una urgencia operativa de mantenimiento.',
  },
] as const

export const PROCESS_STEPS = [
  { step: 1, title: 'Cuéntanos tu aplicación', description: 'Presión, temperatura, fluido y condiciones de operación.' },
  { step: 2, title: 'Nuestro ingeniero revisa', description: 'Seleccionamos el componente exacto por especificación.' },
  { step: 3, title: 'Recibes tu solución', description: 'Cotización con respaldo técnico y fecha de entrega.' },
] as const
