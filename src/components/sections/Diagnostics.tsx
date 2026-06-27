import { Gauge, Thermometer, Droplet } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'
import { DIAGNOSTICS } from '@/lib/constants'

const iconMap = { Gauge, Thermometer, Droplet }

export function Diagnostics() {
  return (
    <Section id="diagnostico" dark className="bg-navy-light">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-gray-text font-mono">Diagnóstico</span>
            <Heading level={2} className="mt-3 text-white">Tres escenarios que conocemos bien</Heading>
            <p className="text-base md:text-lg text-gray-text leading-relaxed mt-4">Cada aplicación industrial tiene sus propias exigencias. Identifiquemos la tuya.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-8">
            {DIAGNOSTICS.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const image = item.id === 'presion'
                ? { src: '/catalog/manguera-hidraulica.webp', alt: 'Mangueras hidráulicas para validar presión de trabajo', width: 1600, height: 900 }
                : item.id === 'temperatura'
                  ? { src: '/catalog/manguera-metalica.webp', alt: 'Manguera inoxidable para validar temperatura de operación', width: 800, height: 800 }
                  : { src: '/catalog/conexiones-hidraulicas.webp', alt: 'Conexiones industriales seleccionadas por compatibilidad de fluido', width: 697, height: 594 }
              return (
                <article key={item.id} className="group overflow-hidden border border-white/10 bg-navy transition-colors duration-300 hover:border-fluid-copper/50">
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[16/10] w-full border-b border-white/10 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-fluid-copper/30 bg-fluid-copper/10">
                        {Icon ? <Icon className="h-5 w-5 text-fluid-copper" /> : null}
                      </div>
                      <h3 className="font-mono text-lg font-semibold text-white">{item.label}</h3>
                    </div>
                    <p className="text-sm text-gray-text mt-2">{item.description}</p>
                    <div className="mt-5 text-xs font-mono uppercase tracking-wider text-fluid-copper">Dato requerido</div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <ContactActions message="Hola SCENA, quiero diagnosticar una aplicación por presión, temperatura y fluido." />
      </Container>
    </Section>
  )
}
