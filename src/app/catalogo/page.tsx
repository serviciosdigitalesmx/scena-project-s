import { Solutions } from '@/components/sections/Solutions'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { CATALOG_PRODUCTS, FAQS } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'

export const metadata = {
  title: 'Catálogo técnico | SCENA',
  description: 'Catálogo interactivo por categorías con fichas expandibles, listo para consulta técnica y cotización.',
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
      brand: { '@type': 'Brand', name: 'SCENA' },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Presión de trabajo', value: product.pressure },
        { '@type': 'PropertyValue', name: 'Temperatura', value: product.temperature },
        { '@type': 'PropertyValue', name: 'Aplicaciones', value: product.applications.join(', ') },
      ],
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section className="bg-navy pt-28 md:pt-32">
        <Container>
          <div className="max-w-3xl">
            <span className="section-kicker">Catálogo interactivo</span>
            <Heading level={1} className="mt-4 text-white">Inventario técnico por categorías</Heading>
            <p className="mt-5 text-lg leading-8 text-gray-text">
              Aquí está el catálogo completo en formato navegable, sin scroll infinito y con fichas que se abren por familia y producto.
            </p>
          </div>
          <ContactActions
            dark
            message="Hola SCENA, quiero revisar el catálogo técnico interactivo y cotizar una aplicación."
            className="mt-8"
          />
        </Container>
      </Section>
      <Solutions />
    </>
  )
}
