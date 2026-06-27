export const SITE = {
  name: 'SCENA 30 Años',
  tagline: 'Suministros y Conexiones',
  description: 'Mangueras, conexiones y soluciones para conducción de fluidos. Selección por presión, temperatura y aplicación con atención técnica en México.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://scena.com.mx',
  phone: {
    primary: '933 132 1193',
    secondary: '813 715 7752',
  },
  email: 'albertodelacruz@scena.com.mx',
  whatsapp: {
    number: '529331321193',
    message: 'Hola, necesito cotización para una aplicación industrial:',
  },
  address: 'Servicios y Conexiones Cena, México',
}

export const NAVIGATION = {
  categories: [
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'industrias', label: 'Industrias' },
    { id: 'casos', label: 'Casos' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' },
  ],
}

export const DIAGNOSTICS = [
  { id: 'presion', label: 'Presión', description: '¿Tu sistema opera a baja, media o alta presión?', icon: 'Gauge' },
  { id: 'temperatura', label: 'Temperatura', description: '¿El fluido está a temperatura ambiente o extrema?', icon: 'Thermometer' },
  { id: 'fluido', label: 'Fluido', description: '¿Agua, aire, petróleo, químicos o alimentos?', icon: 'Droplet' },
] as const

export const INDUSTRIES = [
  { id: 'mineria', label: 'Minería', icon: 'Mountain', description: 'Componentes para abrasión, presión y operación continua.', applications: ['Lodos', 'Hidráulica móvil', 'Agua de proceso'] },
  { id: 'petroleo', label: 'Petróleo y derivados', icon: 'Fuel', description: 'Transferencia segura con compatibilidad química validada.', applications: ['Carga y descarga', 'Aceites', 'Combustibles'] },
  { id: 'agricola', label: 'Agrícola', icon: 'Sprout', description: 'Conducción flexible para campo, riego y maquinaria.', applications: ['Riego', 'Fertilizantes', 'Equipo hidráulico'] },
  { id: 'alimentos', label: 'Alimentos', icon: 'Factory', description: 'Materiales resistentes a corrosión y ciclos de limpieza.', applications: ['Agua', 'Vapor', 'Procesos sanitarios'] },
  { id: 'quimicos', label: 'Químicos', icon: 'FlaskConical', description: 'Selección por fluido, concentración y temperatura.', applications: ['Ácidos', 'Solventes', 'Dosificación'] },
  { id: 'general', label: 'Industria general', icon: 'Settings', description: 'Soluciones para mantenimiento y servicios de planta.', applications: ['Aire', 'Agua', 'Vapor y automatización'] },
] as const

export const TRUST_POINTS = [
  { icon: 'CalendarCheck', title: 'Más de 30 años', description: 'Experiencia acumulada en conducción de fluidos y mantenimiento industrial.' },
  { icon: 'HardHat', title: 'Atención por ingenieros', description: 'La selección parte de tu aplicación, no de una lista genérica.' },
  { icon: 'BadgeCheck', title: 'Validación técnica', description: 'Revisamos fluido, presión, temperatura, conexión y movimiento.' },
  { icon: 'Map', title: 'Cobertura nacional', description: 'Coordinamos cotizaciones y entregas para proyectos en México.' },
  { icon: 'Timer', title: 'Respuesta rápida', description: 'Priorizamos especificaciones completas y necesidades urgentes de planta.' },
  { icon: 'ShieldCheck', title: 'Materiales certificados', description: 'Especificamos normas y materiales trazables cuando la aplicación lo requiere.' },
] as const

export const PROCESS_STEPS = [
  { step: 1, title: 'Cuéntanos tu aplicación', description: 'Presión, temperatura, fluido y condiciones de operación.' },
  { step: 2, title: 'Nuestro ingeniero revisa', description: 'Seleccionamos el componente exacto por especificación.' },
  { step: 3, title: 'Recibes tu solución', description: 'Cotización con respaldo técnico y fecha de entrega.' },
] as const
