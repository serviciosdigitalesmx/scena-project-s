import { Solutions } from '@/components/sections/Solutions'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { CATALOG_PRODUCTS, FAQS } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'

export const metadata = {
  title: 'Catálogo | SCENA',
  description: 'Productos industriales SCENA: mangueras, conexiones, adaptadores, acoples y especialidades para planta.',
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
      <Section className="bg-navy pt-24 md:pt-28">
        <Container>
          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-kicker">SCENA</span>
              <Heading level={1} className="mt-3 text-white">Catálogo</Heading>
            </div>
            <ContactActions
              dark
              message="Hola SCENA, quiero cotizar productos del catálogo."
              className="mt-0 border-t-0 pt-0"
            />
          </div>
        </Container>
      </Section>
      <Solutions />
    </>
  )
}
