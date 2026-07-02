import Image from 'next/image'
import { ArrowRight, CheckCircle2, Clock3, Map, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

const proofPoints = [
  { value: '30+', label: 'años resolviendo aplicaciones' },
  { value: '24/7', label: 'atención a requerimientos críticos' },
  { value: 'MX', label: 'cobertura técnica nacional' },
]

export function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`

  return (
    <section className="relative isolate overflow-hidden bg-navy pb-20 pt-32 md:pb-28 md:pt-40 lg:min-h-[820px] lg:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_30%,rgba(208,138,72,0.14),transparent_28%),linear-gradient(120deg,#081422_0%,#0A1628_48%,#12283c_100%)]" />
      <div className="industrial-grid absolute inset-0 -z-10 opacity-40" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal-up">
            <div className="mb-7 inline-flex items-center gap-3 border border-fluid-copper/35 bg-fluid-copper/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3B574]">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              Respuesta técnica para operaciones críticas
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Tu operación no se detiene.
              <span className="mt-3 block text-fluid-copper">SCENA 24/7.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
              Mangueras, conexiones y componentes industriales con levantamiento técnico para minería, petroquímica y maquinaria pesada.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl} size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right" className="w-full bg-[#E83B2F] px-7 py-5 text-base shadow-[0_18px_45px_rgba(232,59,47,0.22)] hover:-translate-y-0.5 hover:bg-[#F04A3D] sm:w-auto" ariaLabel="Resolver un requerimiento industrial urgente por WhatsApp">
                Resolver mi requerimiento ahora
              </Button>
              <Button variant="ghost" size="lg" href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} icon={<Phone className="h-5 w-5" />} className="w-full px-7 py-5 sm:w-auto" ariaLabel={`Llamar ahora a SCENA al ${SITE.phone.primary}`}>
                Llamar ahora
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-fluid-copper" />Selección por aplicación</span>
              <span className="flex items-center gap-2"><Map className="h-4 w-4 text-fluid-copper" />Cobertura nacional</span>
              <a href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} className="font-semibold text-white transition-colors hover:text-fluid-copper">{SITE.phone.primary}</a>
            </div>
          </div>

          <div className="reveal-up relative [animation-delay:120ms]">
            <div className="absolute -left-5 top-10 z-10 hidden border border-fluid-copper/40 bg-navy/95 px-5 py-4 shadow-2xl backdrop-blur md:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fluid-copper">Línea activa</div>
              <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Atención 24/7</div>
            </div>
            <div className="relative overflow-hidden border border-white/15 bg-white shadow-[0_35px_90px_rgba(0,0,0,0.38)]">
              <Image src="/catalog/manguera-hidraulica.webp" alt="Ensambles de mangueras hidráulicas industriales listos para especificación técnica" width={1600} height={900} className="aspect-[4/3] h-full w-full object-cover" priority sizes="(max-width: 1024px) 100vw, 48vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/85 to-transparent px-6 pb-6 pt-24">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-fluid-copper">Aplicación hidráulica</div>
                <p className="mt-2 max-w-md text-sm leading-6 text-gray-200">Presión, fluido, temperatura y terminal: cuatro datos para evitar una selección por apariencia.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-20">
          {proofPoints.map((point) => (
            <div key={point.value} className="flex items-baseline gap-4 py-5 sm:px-7 sm:first:pl-0">
              <span className="text-3xl font-extrabold text-white">{point.value}</span>
              <span className="max-w-40 text-sm leading-5 text-gray-300">{point.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
