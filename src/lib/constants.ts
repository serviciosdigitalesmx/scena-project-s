export const SITE = {
  name: 'SCENA',
  tagline: 'Suministros y Conexiones',
  description:
    'Mangueras hidráulicas, conexiones industriales y componentes para operaciones críticas. Empresa 100% mexicana con cobertura nacional.',
  url: 'https://scena-project-s.vercel.app',
  phone: {
    primary: '+52 1 81 3715 7752',
    secondary: '+52 1 81 3715 7752',
  },
  email: 'ventas@scena.com.mx',
  whatsapp: {
    number: '5218137157752',
    message: 'Hola SCENA, tengo un requerimiento industrial urgente y necesito apoyo técnico 24/7:',
  },
  coverage: 'Cobertura nacional en México',
  hours: 'Atención 24/7',
} as const

export const CONTACT = {
  phone: '+52 1 81 3715 7752',
  phoneRaw: '5218137157752',
  email: 'ventas@scena.com.mx',
  hours: 'Atención 24/7',
  coverage: 'Cobertura nacional en México',
  address: 'Monterrey, Nuevo León, México',
} as const

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
] as const

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
] as const

export const PROCESS_STEPS = [
  { step: 1, title: 'Cuéntanos tu aplicación', description: 'Presión, temperatura, fluido y condiciones de operación.' },
  { step: 2, title: 'Nuestro ingeniero revisa', description: 'Seleccionamos el componente exacto por especificación.' },
  { step: 3, title: 'Recibes tu solución', description: 'Cotización con respaldo técnico y fecha de entrega.' },
] as const

export const SERVICES = [
  {
    id: 'pruebas',
    icon: 'Gauge',
    title: 'Pruebas Hidrostáticas',
    description:
      'Verificación de presión y hermeticidad para garantizar la seguridad de tus sistemas hidráulicos.',
    result: 'Certificación de presión de trabajo con evidencia técnica para liberación de equipo.',
    cta: 'Solicitar certificación',
    message: 'Hola SCENA, necesito solicitar una certificación de prueba hidrostática.',
  },
  {
    id: 'ingenieria',
    icon: 'Wrench',
    title: 'Ingeniería de Reemplazo',
    description:
      'Diseñamos soluciones a medida para sustituir componentes obsoletos o dañados.',
    result: 'Equivalencias y mejoras para sustituir componentes críticos sin especificación.',
    cta: 'Enviar especificaciones',
    message: 'Hola SCENA, necesito reemplazar un componente crítico y quiero enviar sus especificaciones.',
  },
  {
    id: 'soporte',
    icon: 'HeadphonesIcon',
    title: 'Soporte y Mantenimiento',
    description:
      'Atención técnica especializada 24/7 para mantener tu operación sin interrupciones.',
    result: 'Medición, documentación y detección de la solución correcta en tu planta.',
    cta: 'Agendar visita técnica',
    message: 'Hola SCENA, necesito agendar una visita técnica en planta.',
  },
] as const

export const STATS = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '1000+', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Atención continua' },
  { value: 'Nacional', label: 'Cobertura en México' },
] as const
