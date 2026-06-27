import { BadgeCheck, CalendarCheck, HardHat, Map, ShieldCheck, Timer } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { TRUST_POINTS } from '@/lib/constants'

const iconMap = { BadgeCheck, CalendarCheck, HardHat, Map, ShieldCheck, Timer }

export function Trust() {
  return (
    <Section id="confianza" className="bg-gray-technical">
      <Container>
        <div className="max-w-3xl">
          <span className="section-kicker">Por qué SCENA</span>
          <Heading level={2} className="mt-4 text-navy">Respaldo técnico antes, durante y después de la compra</Heading>
          <p className="mt-5 text-lg text-gray-600">Reducimos el riesgo de seleccionar por apariencia. Cada recomendación parte de condiciones reales de operación.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point) => {
            const Icon = iconMap[point.icon]
            return (
              <article key={point.title} className="bg-white p-7">
                <Icon className="h-6 w-6 text-accent-blue" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-navy">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{point.description}</p>
              </article>
            )
          })}
        </div>
        <ContactActions dark={false} message="Hola SCENA, quiero validar una aplicación industrial con su equipo de ingeniería." />
      </Container>
    </Section>
  )
}
