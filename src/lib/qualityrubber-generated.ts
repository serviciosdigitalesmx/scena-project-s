export type CatalogProduct = {
  code: string
  name: string
  description: string
  image: string
  imageAlt: string
  width: number
  height: number
  materials: string
  pressure: string
  temperature: string
  applications: string[]
  specifications: string[]
}

export type CatalogCategory = {
  id: string
  label: string
  summary: string
  image: string
  imageAlt: string
  width: number
  height: number
  products: CatalogProduct[]
}

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'quality-rubber-intro',
    label: 'SCENA',
    summary: 'Catálogo corporativo de mangueras industriales para distintas aplicaciones de conducción de fluidos.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras y conexiones industriales SCENA',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-001',
        name: 'Catálogo industrial SCENA',
        description: 'Presentación general de la línea industrial con enfoque en seguridad, calidad y atención comercial para la industria mexicana.',
        image: '/catalog/manguera-industrial.webp',
        imageAlt: 'Mangueras y conexiones industriales SCENA',
        width: 1440,
        height: 960,
        materials: 'Portafolio industrial de mangueras y ensambles',
        pressure: 'Aplicaciones de servicio ligero a industrial, según familia',
        temperature: 'Validación por familia y aplicación',
        applications: ['Consulta comercial', 'Selección por especificación', 'Cotización técnica', 'Atención industrial'],
        specifications: ['Empresa 100% mexicana', 'Soluciones personalizadas', 'Descarga de catálogo y contacto directo'],
      },
    ],
  },
  {
    id: 'quality-agua',
    label: 'Mangueras para agua',
    summary: 'Mangueras para agua de alta resistencia para construcción, agricultura e industria.',
    image: '/catalog/manguera-pvc.webp',
    imageAlt: 'Mangueras SCENA para agua',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-AGUA',
        name: 'Mangueras para agua',
        description: 'Línea para trasiego, riego, dragado, aguas negras y servicios generales con enfoque en durabilidad y flexibilidad.',
        image: '/catalog/manguera-pvc.webp',
        imageAlt: 'Catálogo SCENA para mangueras de agua',
        width: 1440,
        height: 960,
        materials: 'Compuestos reforzados para servicio de agua',
        pressure: 'Servicio ligero, medio y pesado según construcción',
        temperature: 'Validación de acuerdo con la aplicación',
        applications: ['Construcción', 'Agricultura', 'Pipas', 'Aguas negras', 'Dragado'],
        specifications: ['Diámetros y presentaciones múltiples', 'Servicio industrial y general', 'Opciones de ensamble'],
      },
    ],
  },
  {
    id: 'quality-aire',
    label: 'Mangueras para aire',
    summary: 'Soluciones para aire comprimido y aplicaciones neumáticas en planta.',
    image: '/catalog/manguera-neumatica.webp',
    imageAlt: 'Mangueras SCENA para aire comprimido',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-AIRE',
        name: 'Mangueras para aire',
        description: 'Mangueras para distribución de aire y líneas neumáticas con buen desempeño y respuesta flexible.',
        image: '/catalog/manguera-neumatica.webp',
        imageAlt: 'Catálogo SCENA para aire comprimido',
        width: 1440,
        height: 960,
        materials: 'Compuestos para aire comprimido y uso neumático',
        pressure: 'Rango según línea y diámetro',
        temperature: 'Validación por aplicación',
        applications: ['Líneas neumáticas', 'Herramienta de aire', 'Conexión industrial', 'Automatización'],
        specifications: ['Uso industrial general', 'Opciones con refuerzo', 'Ensamble a medida'],
      },
    ],
  },
  {
    id: 'quality-materiales',
    label: 'Manejo de materiales',
    summary: 'Mangueras para abrasión, sólidos, minerales y materiales a granel.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras SCENA para manejo de materiales',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-MAT',
        name: 'Mangueras para manejo de materiales',
        description: 'Líneas reforzadas para arena, grava, cemento, granos, sand blast y bombeo de concreto.',
        image: '/catalog/manguera-industrial.webp',
        imageAlt: 'Catálogo SCENA para manejo de materiales',
        width: 1440,
        height: 960,
        materials: 'Compuestos resistentes a fricción y abrasión',
        pressure: 'Servicio industrial de alta exigencia',
        temperature: 'Validación por material transportado',
        applications: ['Sand blast', 'Bombeo de concreto', 'Descarga de tolvas', 'Minería', 'Lodos'],
        specifications: ['Alta resistencia al desgaste', 'Servicio para sólidos y abrasivos', 'Configuración bajo especificación'],
      },
    ],
  },
  {
    id: 'quality-combustibles',
    label: 'Combustibles',
    summary: 'Mangueras para hidrocarburos, gasolina y trasiego de combustibles.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras SCENA para combustibles',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-COMB',
        name: 'Mangueras para combustibles',
        description: 'Familia para conducción y trasiego de combustibles con enfoque en seguridad y compatibilidad química.',
        image: '/catalog/manguera-industrial.webp',
        imageAlt: 'Catálogo SCENA para combustibles',
        width: 1440,
        height: 960,
        materials: 'Compuestos compatibles con hidrocarburos',
        pressure: 'Servicio según especificación y diámetro',
        temperature: 'Validación por fluido y ambiente',
        applications: ['Gasolina', 'Diésel', 'Hidrocarburos', 'Trasiego de combustibles'],
        specifications: ['Diseño industrial', 'Validación por compatibilidad', 'Opciones de ensamble'],
      },
    ],
  },
  {
    id: 'quality-quimicos',
    label: 'Químicos',
    summary: 'Mangueras para succión y descarga de fluidos químicos.',
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Mangueras SCENA para químicos',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-QUIM',
        name: 'Mangueras para químicos',
        description: 'Soluciones para el servicio químico con resistencia a gran parte de los productos más usados en la industria.',
        image: '/catalog/conexiones-hidraulicas.webp',
        imageAlt: 'Catálogo SCENA para químicos',
        width: 1440,
        height: 960,
        materials: 'Compuestos químicos compatibles según fluido',
        pressure: 'Succión o descarga según construcción',
        temperature: 'Validación por compatibilidad química',
        applications: ['Flechas neumáticas', 'Trasiego de barita', 'Succión química', 'Descarga química'],
        specifications: ['Resistencia a gran parte de los químicos comunes', 'Servicio industrial especializado', 'Consulta por compatibilidad'],
      },
    ],
  },
  {
    id: 'quality-vapor',
    label: 'Vapor',
    summary: 'Mangueras para vapor industrial y aplicaciones de alta temperatura.',
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Mangueras SCENA para vapor',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-VAP',
        name: 'Manguera para vapor',
        description: 'Mangueras para vapor con construcción orientada a temperatura, presión y seguridad operativa.',
        image: '/catalog/manguera-metalica.webp',
        imageAlt: 'Catálogo SCENA para vapor',
        width: 1440,
        height: 960,
        materials: 'Compuestos para vapor de servicio industrial',
        pressure: 'Validación por presión y temperatura',
        temperature: 'Servicio de alta temperatura',
        applications: ['Vapor industrial', 'Procesos térmicos', 'Limpieza con vapor', 'Planta de proceso'],
        specifications: ['Familia orientada a alta temperatura', 'Selección por aplicación', 'Ensamble conforme a necesidad'],
      },
    ],
  },
  {
    id: 'quality-alimentos',
    label: 'Alimentos',
    summary: 'Mangueras para aplicaciones alimentarias y servicio sanitario.',
    image: '/catalog/tuberia-inoxidable.webp',
    imageAlt: 'Mangueras SCENA para alimentos',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-ALIM',
        name: 'Manguera para alimentos',
        description: 'Línea para servicio alimentario con enfoque en limpieza, manejo sanitario y compatibilidad de proceso.',
        image: '/catalog/tuberia-inoxidable.webp',
        imageAlt: 'Catálogo SCENA para alimentos',
        width: 1440,
        height: 960,
        materials: 'Compuestos para servicio alimentario',
        pressure: 'Según construcción y uso sanitario',
        temperature: 'Validación para proceso alimentario',
        applications: ['Transferencia de alimentos', 'Líquidos de proceso', 'Servicio sanitario', 'Plantas de alimentos'],
        specifications: ['Orientación sanitaria', 'Selección por compatibilidad', 'Ensamble industrial'],
      },
    ],
  },
  {
    id: 'quality-adicionales',
    label: 'Detalles adicionales',
    summary: 'Accesorios, refacciones y complementos para el catálogo industrial.',
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Detalles adicionales SCENA',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-DET',
        name: 'Detalles adicionales',
        description: 'Material de apoyo visual y complementario para cierre de cotización, inspección y comunicación comercial.',
        image: '/catalog/conexiones-hidraulicas.webp',
        imageAlt: 'Catálogo SCENA con detalles adicionales',
        width: 1440,
        height: 960,
        materials: 'Accesorios y complementos de catálogo',
        pressure: 'Según componente',
        temperature: 'Según componente',
        applications: ['Complementos', 'Cotización', 'Referencia visual', 'Apoyo comercial'],
        specifications: ['Galería complementaria', 'Soporte visual de catálogo', 'Material adicional'],
      },
    ],
  },
  {
    id: 'quality-especiales',
    label: 'Mangueras especiales',
    summary: 'Mangueras especiales y soluciones bajo especificación para aplicaciones no estándar.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras especiales SCENA',
    width: 1440,
    height: 960,
    products: [
      {
        code: 'QR-ESP',
        name: 'Mangueras especiales',
        description: 'Desarrollos a medida para requerimientos especiales de operación, aplicación o montaje.',
        image: '/catalog/manguera-industrial.webp',
        imageAlt: 'Catálogo SCENA de mangueras especiales',
        width: 1440,
        height: 960,
        materials: 'Según desarrollo y especificación',
        pressure: 'Según desarrollo y validación',
        temperature: 'Según desarrollo y validación',
        applications: ['Soluciones especiales', 'Desarrollo a medida', 'Aplicaciones críticas', 'Especificación custom'],
        specifications: ['Manejo técnico personalizado', 'Producción bajo requerimiento', 'Validación por ingeniería'],
      },
    ],
  },
]

export const CATALOG_PRODUCTS = CATALOG_CATEGORIES.flatMap((category) => category.products)
