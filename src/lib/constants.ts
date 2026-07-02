export const SITE = {
  name: 'SCENA',
  tagline: 'Suministros y Conexiones',
  description: 'Soluciones 24/7 en mangueras y conexiones industriales con levantamiento técnico, cotización y cobertura nacional para minería, petroquímica y maquinaria pesada.',
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
  hours: 'Atención de requerimientos 24/7',
}

export const NAVIGATION = {
  categories: [
    { id: 'soluciones', label: 'Categorías' },
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
    id: 'mineria',
    label: 'Minería',
    description: 'Mangueras para perforación, cargadores y camiones de acarreo, seleccionadas para abrasión, impulso y alta presión.',
    applications: ['Hidráulica móvil', 'Lodos', 'Agua de proceso'],
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Mangueras hidráulicas para maquinaria minera y equipos móviles',
    width: 1600,
    height: 900,
  },
  {
    id: 'petroquimica',
    label: 'Petroquímica',
    description: 'Compatibilidad de materiales para hidrocarburos, vapor y químicos agresivos con presión y temperatura validadas.',
    applications: ['Hidrocarburos', 'Vapor', 'Carga y descarga'],
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Manguera metálica inoxidable para aplicaciones petroquímicas',
    width: 800,
    height: 800,
  },
  {
    id: 'maquinaria',
    label: 'Maquinaria pesada',
    description: 'Ensambles y adaptadores para circuitos sometidos a vibración, movimiento continuo y picos de presión.',
    applications: ['Prensas', 'Cilindros', 'Equipo de construcción'],
    image: '/catalog/adaptadores-hidraulicos.webp',
    imageAlt: 'Adaptadores y conexiones para maquinaria pesada industrial',
    width: 1000,
    height: 1000,
  },
  {
    id: 'alimentos',
    label: 'Alimentos y proceso',
    description: 'Componentes inoxidables y conexiones desmontables para fluidos de proceso, vapor y ciclos frecuentes de limpieza.',
    applications: ['Agua', 'Vapor', 'Líneas de proceso'],
    image: '/catalog/tuberia-inoxidable.webp',
    imageAlt: 'Componentes inoxidables para industria de alimentos y procesos',
    width: 996,
    height: 996,
  },
] as const

export const SERVICES = [
  {
    icon: 'ScanSearch',
    title: 'Levantamiento técnico en sitio',
    result: 'Identificamos la solución correcta antes de que tu línea permanezca detenida más tiempo.',
    cta: 'Agendar visita',
    message: 'Hola SCENA, necesito agendar un levantamiento técnico en sitio.',
  },
  {
    icon: 'DraftingCompass',
    title: 'Ingeniería de aplicación',
    result: 'Cruzamos fluido, presión, temperatura, movimiento y conexión para reducir el riesgo de una selección incorrecta.',
    cta: 'Enviar especificaciones',
    message: 'Hola SCENA, quiero enviar las especificaciones de una aplicación industrial.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Pruebas y documentación',
    result: 'Definimos las pruebas y la documentación técnica que requiere cada ensamble antes de instalarlo.',
    cta: 'Solicitar documentación',
    message: 'Hola SCENA, necesito revisar pruebas y documentación para un ensamble industrial.',
  },
] as const

export const PROCESS_STEPS = [
  { step: 1, title: 'Cuéntanos tu aplicación', description: 'Presión, temperatura, fluido y condiciones de operación.' },
  { step: 2, title: 'Nuestro ingeniero revisa', description: 'Seleccionamos el componente exacto por especificación.' },
  { step: 3, title: 'Recibes tu solución', description: 'Cotización con respaldo técnico y fecha de entrega.' },
] as const
