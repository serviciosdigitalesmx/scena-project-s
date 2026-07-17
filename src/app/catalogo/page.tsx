import type { Metadata } from 'next'
import { Solutions } from '@/components/sections/Solutions'
import { CATALOG_PRODUCTS, FAQS } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Catálogo | SCENA',
  description:
    'Catálogo de mangueras, conexiones y componentes industriales SCENA.',
  alternates: {
    canonical: '/catalogo',
  },
}

export default function CatalogPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@graph': CATALOG_PRODUCTS.map((product) => ({
      '@type': 'Product',
      name: product.name,
      sku: product.code,
      image: `${SITE.url}${product.image}`,
      description: product.description,
      material: product.materials,
      brand: {
        '@type': 'Brand',
        name: 'SCENA',
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Presión de trabajo',
          value: product.pressure,
        },
        {
          '@type': 'PropertyValue',
          name: 'Temperatura',
          value: product.temperature,
        },
        {
          '@type': 'PropertyValue',
          name: 'Aplicaciones',
          value: product.applications.join(', '),
        },
      ],
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="pt-20 md:pt-24">
        <Solutions />
      </div>
    </>
  )
}
