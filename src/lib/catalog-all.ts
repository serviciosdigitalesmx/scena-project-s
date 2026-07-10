import {
  APPLICATION_CASES,
  CATALOG_CATEGORIES as SCENA_CATEGORIES,
  CATALOG_PRODUCTS as SCENA_PRODUCTS,
  FAQS,
} from '@/lib/catalog'
import {
  CATALOG_CATEGORIES as QUALITYRUBBER_CATEGORIES,
  CATALOG_PRODUCTS as QUALITYRUBBER_PRODUCTS,
} from '@/lib/qualityrubber-generated'
import {
  CATALOG_CATEGORIES as KEATON_CATEGORIES,
  CATALOG_PRODUCTS as KEATON_PRODUCTS,
} from '@/lib/keaton-generated'

type Source = 'scena' | 'quality' | 'keaton'

const BASE_CATEGORIES = [
  ...SCENA_CATEGORIES.map((category) => ({ ...category, source: 'scena' as const })),
  ...QUALITYRUBBER_CATEGORIES.map((category) => ({ ...category, source: 'quality' as const })),
  ...KEATON_CATEGORIES.map((category) => ({ ...category, source: 'keaton' as const })),
]
const BASE_PRODUCTS = [...SCENA_PRODUCTS, ...QUALITYRUBBER_PRODUCTS, ...KEATON_PRODUCTS]

const uniqueProducts = BASE_PRODUCTS.filter((product, index, products) => {
  const key = `${product.code || product.name}`.trim().toLowerCase()
  return products.findIndex((candidate) => `${candidate.code || candidate.name}`.trim().toLowerCase() === key) === index
})

const excludedCodes = new Set(['QR-001', 'QR-DET'])
export const CATALOG_PRODUCTS = uniqueProducts.filter((product) => !excludedCodes.has(product.code))

const groupedProducts = (sources: Source[], categoryIds: string[]) => {
  const products = BASE_CATEGORIES
    .filter((category) => sources.includes(category.source) && categoryIds.includes(category.id))
    .flatMap((category) => category.products)
    .filter((product) => !excludedCodes.has(product.code))

  return products.filter((product, index, entries) => (
    entries.findIndex((candidate) => candidate.code === product.code) === index
  ))
}

export const CATALOG_CATEGORIES = [
  {
    id: 'todos',
    label: 'Todos los productos',
    summary: 'Explora el catálogo completo SCENA.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Catálogo SCENA de soluciones industriales',
    width: 850,
    height: 621,
    products: CATALOG_PRODUCTS,
  },
  {
    id: 'mangueras-industriales',
    label: 'Mangueras industriales',
    summary: 'Agua, aire, abrasión, combustibles, químicos y servicios generales.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras industriales SCENA',
    width: 850,
    height: 621,
    products: groupedProducts(
      ['scena', 'quality', 'keaton'],
      ['industrial', 'pvc', 'quality-agua', 'quality-materiales', 'quality-combustibles', 'quality-quimicos', 'mangueras-industriales', 'especiales']
    ),
  },
  {
    id: 'mangueras-proceso',
    label: 'Mangueras de proceso',
    summary: 'Vapor, alimentos, contra incendio, aire y aplicaciones especiales.',
    image: '/catalog/manguera-metalica.webp',
    imageAlt: 'Mangueras SCENA para procesos industriales',
    width: 800,
    height: 800,
    products: groupedProducts(
      ['scena', 'quality', 'keaton'],
      ['metalica', 'contra-incendio', 'neumatica', 'quality-aire', 'quality-vapor', 'quality-alimentos', 'quality-especiales', 'frenos-aire', 'silicon-codos']
    ),
  },
  {
    id: 'hidraulica',
    label: 'Hidráulica',
    summary: 'Mangueras, terminales y componentes para circuitos hidráulicos.',
    image: '/catalog/manguera-hidraulica.webp',
    imageAlt: 'Mangueras y componentes hidráulicos SCENA',
    width: 1600,
    height: 900,
    products: groupedProducts(['scena', 'keaton'], ['hidraulica', 'mangueras-hidraulicas']),
  },
  {
    id: 'conexiones-hidraulicas',
    label: 'Conexiones hidráulicas',
    summary: 'Conexiones y componentes para ensambles hidráulicos.',
    image: '/catalog/conexiones-hidraulicas.webp',
    imageAlt: 'Conexiones hidráulicas SCENA',
    width: 697,
    height: 594,
    products: groupedProducts(['scena', 'keaton'], ['conexiones', 'conexiones-hidraulicas']),
  },
  {
    id: 'adaptadores-racores',
    label: 'Adaptadores y racores',
    summary: 'Adaptadores, racores y conexiones para líneas industriales.',
    image: '/catalog/adaptadores-hidraulicos.webp',
    imageAlt: 'Adaptadores y racores SCENA',
    width: 1000,
    height: 1000,
    products: groupedProducts(['keaton'], ['adaptadores-laton', 'otros']),
  },
]

export { APPLICATION_CASES, FAQS }
