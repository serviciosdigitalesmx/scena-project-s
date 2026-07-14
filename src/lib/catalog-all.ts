import {
  APPLICATION_CASES,
  CATALOG_CATEGORIES as SCENA_CATEGORIES,
  FAQS,
} from '@/lib/catalog'

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

export const CATALOG_CATEGORIES = [
  {
    id: 'todos',
    label: 'Todos los productos',
    summary: 'Explora las soluciones industriales de SCENA.',
    image: '/catalog/manguera-industrial.webp',
    imageAlt: 'Mangueras industriales SCENA',
    width: 850,
    height: 621,
    products,
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
]

export { APPLICATION_CASES, FAQS }
export { products as CATALOG_PRODUCTS }
