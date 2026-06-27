import { ChevronDown } from 'lucide-react'
import { FAQS } from '@/lib/catalog'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'

export function FAQ() {
  return (
    <Section id="faq" className="bg-gray-technical">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="section-kicker">Preguntas frecuentes</span>
            <Heading level={2} className="mt-4 text-navy">Lo que necesitamos para cotizar bien</Heading>
            <p className="mt-5 text-gray-600">Si no tienes todos los datos, te ayudamos a identificarlos sin asumir especificaciones críticas.</p>
          </div>
          <div className="divide-y divide-navy/10 border-y border-navy/10 lg:col-span-8">
            {FAQS.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-accent-blue transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <ContactActions dark={false} message="Hola SCENA, tengo una pregunta sobre una aplicación y quiero enviarles mis datos de operación." />
      </Container>
    </Section>
  )
}
