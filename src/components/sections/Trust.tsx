import { Clock3, DraftingCompass, Gauge, ScanSearch, TriangleAlert, Wrench } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { SERVICES, SITE } from '@/lib/constants'

const iconMap = { Clock3, DraftingCompass, Gauge, ScanSearch, TriangleAlert, Wrench }

export function Trust() {
  return (
    <Section id="servicios" dark className="relative overflow-hidden bg-[#0B1929]">
      <div className="industrial-grid absolute inset-0 opacity-30" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <span className="section-kicker">Soporte de ingeniería</span>
            <Heading level={2} className="mt-4 max-w-3xl text-white">Servicios técnicos especializados</Heading>
          </div>
          <p className="text-lg leading-8 text-gray-300">Diagnóstico, especificación y respuesta rápida para mantener tu operación en movimiento.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(service.message)}`
            return (
              <article key={service.title} className="group relative overflow-hidden border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-fluid-copper/60 hover:bg-white/[0.06] md:p-8">
                <span className="absolute right-6 top-5 font-mono text-5xl font-bold text-white/[0.035]">0{index + 1}</span>
                <div className="relative flex h-14 w-14 items-center justify-center border border-fluid-copper/40 bg-fluid-copper/10 before:absolute before:-inset-2 before:border before:border-white/5">
                  <Icon className="h-7 w-7 text-fluid-copper" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">{service.result}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex border-b border-fluid-copper pb-1 text-sm font-bold text-white transition-colors hover:text-fluid-copper" aria-label={`${service.cta} por WhatsApp`}>
                  {service.cta}
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
          {[
            ['28+', 'años de experiencia'],
            ['24/7', 'atención a urgencias'],
            ['Nacional', 'coordinación de entregas'],
          ].map(([value, label]) => (
            <div key={value} className="bg-navy px-6 py-7 text-center">
              <div className="text-3xl font-extrabold text-white">{value}</div>
              <div className="mt-1 text-sm text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
