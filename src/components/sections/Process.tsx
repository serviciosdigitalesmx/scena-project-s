import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <Section id="proceso" className="bg-gray-technical">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-accent-blue font-mono">Proceso</span>
            <Heading level={2} className="mt-3 text-navy-light">No necesitas saber el código.<br /><span className="text-accent-blue">Necesitas decirnos tu aplicación.</span></Heading>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">Así funciona nuestra cotización técnica. Sin adivinanzas, sin aproximaciones.</p>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="flex items-start gap-6 p-6 rounded-lg bg-white border border-gray-200 hover:border-accent-blue/20 transition-all duration-300">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center"><span className="font-mono text-lg font-bold text-white">{step.step}</span></div>
                  {index < PROCESS_STEPS.length - 1 ? <div className="w-px h-8 mx-auto bg-gray-200 mt-2" /> : null}
                </div>
                <div>
                  <h3 className="font-mono text-lg font-semibold text-navy-light">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactActions dark={false} message="Hola SCENA, quiero iniciar una cotización técnica y enviar los datos de mi aplicación." />
      </Container>
    </Section>
  )
}
