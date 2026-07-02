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
    id: 'metalica',
    label: 'Metálica',
    summary: 'Absorbe movimiento y temperatura sin comprometer la línea.',
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Mangueras flexibles de acero inoxidable con malla trenzada',
    width: 800,
    height: 800,
    products: [
      {
        code: 'MM-001',
        name: 'Manguera metálica corrugada',
        description: 'Tubo corrugado flexible con una o dos mallas trenzadas para conducir vapor, gases y fluidos a temperatura extrema.',
        image: '/catalog/manguera-metalica.webp',
        imageAlt: 'Manguera metálica corrugada de acero inoxidable con conexiones',
        width: 800,
        height: 800,
        materials: 'Tubo AISI 304 o 316L; malla AISI 304',
        pressure: 'Hasta 3,000 PSI, según diámetro y configuración',
        temperature: '-196 °C a 550 °C',
        applications: ['Vapor', 'Gases industriales', 'Transferencia térmica', 'Escape y vibración'],
        specifications: ['Diámetros de 1/4 a 12 pulgadas', 'Una o dos mallas trenzadas', 'Terminales NPT, bridados o especiales'],
      },
      {
        code: 'JE-004',
        name: 'Junta de expansión metálica',
        description: 'Elemento flexible para absorber dilatación térmica, vibración y desalineación controlada en líneas de proceso.',
        image: '/catalog/junta-expansion.webp',
        imageAlt: 'Junta de expansión metálica para tubería industrial',
        width: 390,
        height: 280,
        materials: 'Fuelle AISI 304 o 316L; bridas en acero al carbón o inoxidable',
        pressure: 'Clases ANSI 150 y 300',
        temperature: '-200 °C a 600 °C',
        applications: ['Tuberías de vapor', 'Escape de motores', 'Bombas', 'Equipos con expansión térmica'],
        specifications: ['Movimiento axial y lateral calculado', 'Bridas ANSI o DIN', 'Diseño de uno o varios fuelles'],
      },
    ],
  },
  {
    id: 'hidraulica',
    label: 'Hidráulica',
    summary: 'Mantén la potencia hidráulica donde la presión no perdona.',
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Mangueras hidráulicas industriales con terminales prensadas',
    width: 1600,
    height: 900,
    products: [
      {
        code: 'MH-001',
        name: 'Manguera hidráulica R1/R2',
        description: 'Manguera SAE 100R1AT o R2AT para circuitos hidráulicos con refuerzo de una o dos trenzas de acero.',
        image: '/catalog/manguera-hidraulica.webp',
        imageAlt: 'Ensamble de mangueras hidráulicas R1 y R2 con terminales',
        width: 1600,
        height: 900,
        materials: 'Tubo de hule sintético, refuerzo de acero y cubierta resistente a aceite',
        pressure: 'Hasta 5,000 PSI, según diámetro y serie',
        temperature: '-40 °C a 100 °C',
        applications: ['Maquinaria móvil', 'Prensas', 'Unidades de potencia', 'Equipo agrícola y minero'],
        specifications: ['Norma SAE J517', 'Diámetros de 1/4 a 1 1/4 pulgadas', 'Prensado y prueba disponibles'],
      },
      {
        code: 'AH-002',
        name: 'Adaptadores hidráulicos',
        description: 'Adaptadores para unir roscas, cambiar orientación y resolver transiciones sin comprometer el sello del circuito.',
        image: '/catalog/adaptadores-hidraulicos.webp',
        imageAlt: 'Adaptadores hidráulicos rectos y codos de acero',
        width: 1000,
        height: 1000,
        materials: 'Acero zincado, acero inoxidable y latón',
        pressure: 'Hasta 6,000 PSI, según familia y medida',
        temperature: '-40 °C a 120 °C con sello compatible',
        applications: ['Manifolds', 'Cilindros', 'Bombas', 'Conversión NPT, JIC, ORFS y BSP'],
        specifications: ['Roscas NPT, JIC, ORFS, BSP y métricas', 'Configuraciones rectas, codo y tee', 'Sellos Buna-N o FKM'],
      },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial',
    summary: 'Transfiere agua, aceites y lodos con el refuerzo correcto.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Familias de mangueras industriales para transferencia de fluidos',
    width: 850,
    height: 621,
    products: [
      {
        code: 'MI-002',
        name: 'Manguera industrial de succión y descarga',
        description: 'Manguera reforzada para transferencia de agua, aceites ligeros y servicios generales con operación a presión o vacío.',
        image: '/catalog/manguera-industrial.webp',
        imageAlt: 'Mangueras industriales de distintos diámetros y compuestos',
        width: 850,
        height: 621,
        materials: 'Compuestos de PVC o hule sintético con espiral textil o metálica',
        pressure: 'Hasta 300 PSI; vacío de hasta 28 inHg',
        temperature: '-30 °C a 100 °C, según compuesto',
        applications: ['Agua', 'Aceites ligeros', 'Lodos', 'Carga y descarga de tanques'],
        specifications: ['Diámetros de 3/4 a 8 pulgadas', 'Versiones para succión o descarga', 'Acoples Camlock, bridados y roscados'],
      },
    ],
  },
  {
    id: 'contra-incendio',
    label: 'Contra incendio',
    summary: 'Respuesta confiable para gabinetes y brigadas industriales.',
    image: '/catalog/manguera-contra-incendio.webp',
    imageAlt: 'Mangueras y accesorios para sistemas contra incendio',
    width: 800,
    height: 800,
    products: [
      {
        code: 'CI-001',
        name: 'Manguera contra incendio',
        description: 'Línea flexible para gabinetes, brigadas y plantas industriales, disponible en construcción sencilla o doble chaqueta.',
        image: '/catalog/manguera-contra-incendio.webp',
        imageAlt: 'Mangueras contra incendio enrolladas con boquillas y conexiones',
        width: 800,
        height: 800,
        materials: 'Chaqueta de poliéster o algodón y tubo interior EPDM',
        pressure: 'Servicio de 250 a 400 PSI; prueba según modelo',
        temperature: '-20 °C a 80 °C',
        applications: ['Gabinetes contra incendio', 'Brigadas industriales', 'Bomberos', 'Sistemas de respaldo'],
        specifications: ['Diámetros de 1 1/2 a 3 pulgadas', 'Coverflex, algodón o doble jacket', 'Conexiones NST, NH o NPSH'],
      },
    ],
  },
  {
    id: 'pvc',
    label: 'PVC',
    summary: 'Flexibilidad y visibilidad para servicios de agua y aire.',
    image: '/catalog/manguera-pvc.webp',
    imageAlt: 'Mangueras de PVC reforzado para aplicaciones industriales',
    width: 800,
    height: 800,
    products: [
      {
        code: 'PV-001',
        name: 'Manguera PVC reforzada',
        description: 'Manguera flexible y ligera para conducción de agua, aire y fluidos compatibles en servicios de baja y media presión.',
        image: '/catalog/manguera-pvc.webp',
        imageAlt: 'Mangueras industriales de PVC transparente y de colores',
        width: 800,
        height: 800,
        materials: 'PVC flexible con refuerzo textil o espiral rígida',
        pressure: 'Hasta 300 PSI, según diámetro y refuerzo',
        temperature: '-10 °C a 65 °C',
        applications: ['Riego', 'Agua de proceso', 'Aire', 'Succión ligera'],
        specifications: ['Versiones transparentes y de color', 'Diámetros de 1/4 a 6 pulgadas', 'Presentaciones en rollo o ensamble'],
      },
    ],
  },
  {
    id: 'neumatica',
    label: 'Neumática',
    summary: 'Conecta actuadores y herramientas con recorridos limpios.',
    image: '/catalog/manguera-neumatica.webp',
    imageAlt: 'Mangueras neumáticas para aire comprimido y automatización',
    width: 704,
    height: 450,
    products: [
      {
        code: 'MN-006',
        name: 'Manguera neumática',
        description: 'Tubo flexible para distribución de aire comprimido y conexión de actuadores, válvulas y herramientas.',
        image: '/catalog/manguera-neumatica.webp',
        imageAlt: 'Mangueras neumáticas de distintos colores y diámetros',
        width: 704,
        height: 450,
        materials: 'Poliuretano, poliamida o polietileno',
        pressure: 'Hasta 150 PSI, según material y diámetro',
        temperature: '-20 °C a 80 °C',
        applications: ['Automatización', 'Herramientas neumáticas', 'Instrumentación', 'Tableros de control'],
        specifications: ['Medidas métricas y en pulgadas', 'Compatibilidad con conexión push-in', 'Alta flexibilidad y radio reducido'],
      },
    ],
  },
  {
    id: 'conexiones',
    label: 'Conexiones',
    summary: 'Resuelve transiciones y desmontajes con el sello adecuado.',
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Conexiones hidráulicas industriales de acero',
    width: 697,
    height: 594,
    products: [
      {
        code: 'CR-003',
        name: 'Conexiones hidráulicas y rápidas',
        description: 'Conexiones para armado, mantenimiento y desconexión de líneas de fluido con geometría y sello compatibles.',
        image: '/catalog/conexiones-hidraulicas.webp',
        imageAlt: 'Conexiones hidráulicas roscadas y acoples rápidos',
        width: 697,
        height: 594,
        materials: 'Acero zincado, acero inoxidable, latón o aluminio',
        pressure: 'Hasta 5,000 PSI, según tipo y material',
        temperature: '-40 °C a 200 °C con sello seleccionado',
        applications: ['Hidráulica', 'Aire comprimido', 'Transferencia de fluidos', 'Mantenimiento de planta'],
        specifications: ['Roscas NPT, JIC, BSP y métricas', 'Acoples rápidos y Camlock', 'Sellos seleccionados por fluido'],
      },
    ],
  },
]

export const CATALOG_PRODUCTS = CATALOG_CATEGORIES.flatMap((category) => category.products)

export const APPLICATION_CASES = [
  {
    id: 'vapor',
    name: 'Línea de vapor',
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Manguera metálica para conducción de vapor',
    width: 800,
    height: 800,
    problem: 'Dilatación térmica y vibración provocaban fatiga prematura en una conexión rígida.',
    solution: 'Se validó temperatura, presión y movimiento para especificar un ensamble inoxidable flexible.',
    productCode: 'MM-001',
  },
  {
    id: 'petroleo',
    name: 'Transferencia de petróleo',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Manguera industrial para transferencia de derivados del petróleo',
    width: 850,
    height: 621,
    problem: 'La manguera existente se ablandaba por incompatibilidad con el fluido y el ambiente de trabajo.',
    solution: 'Se seleccionó compuesto compatible, conexión sellada y margen correcto de presión y vacío.',
    productCode: 'MI-002',
  },
  {
    id: 'hidraulica',
    name: 'Circuito hidráulico',
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Ensamble hidráulico para maquinaria de alta presión',
    width: 1600,
    height: 900,
    problem: 'Picos de presión y radio de curvatura corto reducían la vida útil del ensamble.',
    solution: 'Se verificó presión dinámica, impulso y ruta para definir serie, diámetro y terminales prensadas.',
    productCode: 'MH-001',
  },
  {
    id: 'quimicos',
    name: 'Dosificación química',
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Conexiones seleccionadas para dosificación de productos químicos',
    width: 697,
    height: 594,
    problem: 'El sello de la conexión presentaba hinchamiento y fuga después de ciclos de operación.',
    solution: 'Se cruzó la compatibilidad química y temperatura para elegir material y elastómero adecuados.',
    productCode: 'CR-003',
  },
  {
    id: 'alimentos',
    name: 'Proceso de alimentos',
    image: '/catalog/tuberia-inoxidable.webp',
    imageAlt: 'Componentes inoxidables para conducción de fluidos alimentarios',
    width: 996,
    height: 996,
    problem: 'El proceso requería limpieza frecuente y superficies resistentes a corrosión.',
    solution: 'Se definieron componentes inoxidables y conexiones desmontables compatibles con el protocolo de limpieza.',
    productCode: 'MM-001',
  },
  {
    id: 'agua',
    name: 'Succión de agua',
    image: '/catalog/manguera-pvc.webp',
    imageAlt: 'Manguera de PVC reforzada para succión y conducción de agua',
    width: 800,
    height: 800,
    problem: 'La línea colapsaba por vacío durante el cebado de la bomba.',
    solution: 'Se especificó refuerzo helicoidal, diámetro y vacío admisible para estabilizar la operación.',
    productCode: 'PV-001',
  },
] as const

export const FAQS = [
  { question: '¿Cómo sé qué manguera necesito?', answer: 'Envíanos fluido, presión, temperatura, diámetro, tipo de conexión y condiciones de movimiento. Ingeniería cruza esos datos y te propone la construcción correcta.' },
  { question: '¿Fabrican ensambles sobre medida?', answer: 'Sí. Podemos definir longitud, orientación, conexiones y protección exterior. La fabricación final depende de la familia de producto y de la validación técnica.' },
  { question: '¿Qué presión soporta una manguera?', answer: 'Depende de la serie, diámetro, temperatura y factor de seguridad. Nuestro catálogo cubre desde servicios ligeros hasta circuitos hidráulicos de 5,000 PSI.' },
  { question: '¿Qué información necesito enviar?', answer: 'Fluido, presión de trabajo y picos, temperatura, diámetro interior, longitud, conexiones, movimiento, ambiente y cantidad requerida.' },
  { question: '¿Hacen envíos nacionales?', answer: 'Sí. Coordinamos entregas a nivel nacional y confirmamos cobertura, costo y tiempo con cada cotización.' },
  { question: '¿Qué tiempo de entrega manejan?', answer: 'Varía según material, configuración y cantidad. Al validar la aplicación entregamos una fecha estimada; para urgencias revisamos alternativas compatibles disponibles.' },
] as const
