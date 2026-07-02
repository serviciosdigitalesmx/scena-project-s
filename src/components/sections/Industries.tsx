import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { INDUSTRIES, SITE } from '@/lib/constants'

export function Industries() {
  return (
    <Section id="industrias" className="bg-white">
      <Container>
        <div className="max-w-3xl">
          <span className="section-kicker">Industrias críticas</span>
          <Heading level={2} className="mt-4 text-navy">Cada sector falla distinto. La solución también.</Heading>
          <p className="mt-5 text-lg leading-8 text-gray-700">Cuatro entornos donde la compatibilidad, la presión y el tiempo de respuesta cambian por completo la especificación.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {INDUSTRIES.map((industry) => {
            const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(`Hola SCENA, necesito resolver una aplicación para ${industry.label}.`)}`
            return (
              <article key={industry.id} className="group grid overflow-hidden border border-navy/10 bg-[#F4F5F6] sm:grid-cols-[0.86fr_1.14fr]">
                <div className="overflow-hidden bg-white">
                  <Image src={industry.image} alt={industry.imageAlt} width={industry.width} height={industry.height} loading="lazy" sizes="(max-width: 640px) 100vw, 42vw" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] sm:h-full" />
                </div>
                <div className="flex flex-col p-7 md:p-8">
                  <h3 className="text-2xl font-extrabold text-navy">{industry.label}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-700">{industry.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {industry.applications.map((application) => <li key={application} className="border border-navy/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy">{application}</li>)}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-navy underline decoration-fluid-copper decoration-2 underline-offset-4 transition-colors hover:text-fluid-copper" aria-label={`Consultar una aplicación de ${industry.label} con ingeniería`}>
                    Consultar aplicación <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
