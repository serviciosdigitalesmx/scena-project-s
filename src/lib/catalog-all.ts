import {
  APPLICATION_CASES,
  CATALOG_CATEGORIES as SCENA_CATEGORIES,
  FAQS,
} from '@/lib/catalog'
import {
  EXTENDED_CATALOG_CATEGORIES,
  EXTENDED_CATALOG_PRODUCTS,
} from '@/lib/extended-catalog-generated'

const imageByCategory: Record<string, string> = {
  industrial: '/catalog/manguera-industrial.webp',
  pvc: '/catalog/manguera-pvc.webp',
  metalica: '/catalog/manguera-metalica.webp',
  hidraulica: '/catalog/manguera-hidraulica.webp',
  conexiones: '/catalog/conexiones-hidraulicas.webp',
}

const products = SCENA_CATEGORIES.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    image: imageByCategory[category.id] ?? product.image,
  })),
)

const allProducts = [...products, ...EXTENDED_CATALOG_PRODUCTS] as CatalogProductRecord[]

type CatalogProductRecord = {
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
  applications: readonly string[]
  specifications: readonly string[]
  categoryId?: string
}

type CatalogCategoryRecord = {
  id: string
  label: string
  summary: string
  image: string
  imageAlt: string
  width: number
  height: number
  products: readonly CatalogProductRecord[]
}

export const CATALOG_CATEGORIES: CatalogCategoryRecord[] = [
  {
    id: 'todos',
    label: 'Todos los productos',
    summary: 'Explora las soluciones industriales de SCENA.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras industriales SCENA',
    width: 850,
    height: 621,
    products: allProducts,
  },
  ...SCENA_CATEGORIES.map((category) => ({
    ...category,
    summary: 'Productos SCENA para selección por aplicación.',
    image: imageByCategory[category.id] ?? '/catalog/manguera-industrial.webp',
    imageAlt: `${category.label} SCENA`,
    width: 1200,
    height: 800,
    products: products.filter((product) => product.categoryId === category.id),
  })),
  ...EXTENDED_CATALOG_CATEGORIES,
]

export { APPLICATION_CASES, FAQS }
export const CATALOG_PRODUCTS: CatalogProductRecord[] = allProducts
