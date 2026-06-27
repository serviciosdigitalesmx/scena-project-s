import { Factory, FlaskConical, Fuel, Mountain, Settings, Sprout } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { INDUSTRIES, SITE } from '@/lib/constants'

const iconMap = { Factory, FlaskConical, Fuel, Mountain, Settings, Sprout }

export function Industries() {
  return (
    <Section id="industrias" dark className="bg-navy">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-text font-mono">Aplicaciones</span>
          <Heading level={2} className="mt-3 text-white">Donde la falla no es una opción</Heading>
          <p className="text-base md:text-lg text-gray-text leading-relaxed mt-4 max-w-2xl mx-auto">SCENA opera en entornos críticos. Conocemos las exigencias de cada industria.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon]
            const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(`Hola SCENA, quiero consultar una aplicación para la industria ${industry.label}.`)}`
            return (
              <article key={industry.id} className="group border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-fluid-copper/50">
                <Icon className="h-7 w-7 text-fluid-copper" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">{industry.label}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-text">{industry.description}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-text">Aplicaciones típicas</div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {industry.applications.map((application) => <li key={application} className="border border-white/10 px-2.5 py-1 text-xs text-gray-300">{application}</li>)}
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-semibold text-white underline decoration-fluid-copper underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluid-copper" aria-label={`Consultar una aplicación de ${industry.label} con ingeniería`}>Consultar con ingeniería</a>
              </article>
            )
          })}
        </div>
        <ContactActions message="Hola SCENA, quiero consultar una aplicación industrial con su equipo de ingeniería." />
      </Container>
    </Section>
  )
}
