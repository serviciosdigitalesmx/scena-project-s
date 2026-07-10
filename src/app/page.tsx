import { Hero } from '@/components/sections/Hero'
import { Trust } from '@/components/sections/Trust'
import { Industries } from '@/components/sections/Industries'
import { ApplicationCases } from '@/components/sections/ApplicationCases'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { FAQS } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/scena-logo.svg`,
    description: SITE.description,
    email: SITE.email,
    telephone: [SITE.phone.primary, SITE.phone.secondary],
    priceRange: 'Cotización',
    areaServed: { '@type': 'Country', name: 'México' },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    }],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone.primary,
      contactType: 'technical support and sales',
      areaServed: 'MX',
      availableLanguage: 'Spanish',
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Trust />
      <Industries />
      <ApplicationCases />
      <Process />
      <FAQ />
      <Contact />
    </>
  )
}
