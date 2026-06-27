import { Hero } from '@/components/sections/Hero'
import { Diagnostics } from '@/components/sections/Diagnostics'
import { Solutions } from '@/components/sections/Solutions'
import { Trust } from '@/components/sections/Trust'
import { Industries } from '@/components/sections/Industries'
import { ApplicationCases } from '@/components/sections/ApplicationCases'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { CATALOG_PRODUCTS, FAQS } from '@/lib/catalog'
import { SITE } from '@/lib/constants'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/scena-logo.webp`,
    description: SITE.description,
    email: SITE.email,
    telephone: [SITE.phone.primary, SITE.phone.secondary],
    areaServed: { '@type': 'Country', name: 'México' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone.primary,
      contactType: 'sales and technical support',
      areaServed: 'MX',
      availableLanguage: 'Spanish',
    },
  }

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Diagnostics />
      <Solutions />
      <Trust />
      <Industries />
      <ApplicationCases />
      <Process />
      <FAQ />
      <Contact />
    </>
  )
}
