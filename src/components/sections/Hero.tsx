import Image from 'next/image'
import { MessageCircle, Phone, Gauge, ShieldCheck, CircleDot, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

export function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`

  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-32 md:pb-24 md:pt-40 lg:flex lg:min-h-screen lg:items-center lg:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0A1628_0%,#0D1B2B_45%,#13263b_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute right-0 top-0 hidden h-full w-[34%] bg-gradient-to-l from-fluid-copper/10 to-transparent lg:block" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 xl:grid-cols-12 xl:gap-16">
          <div className="reveal-up xl:col-span-7">
            <div className="section-kicker mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-fluid-copper" />
              30 años resolviendo aplicaciones industriales
            </div>
            <h1 className="section-title max-w-4xl text-white">
              No vendemos mangueras.
              <span className="mt-2 block text-fluid-copper">Validamos especificaciones.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              30 años resolviendo fugas, tiempos muertos y especificaciones mal entendidas. Ingeniería directa, sin catálogos infinitos, con respuesta clara para presión, temperatura, fluido y conexión.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl} icon={<MessageCircle className="h-5 w-5" />} size="lg" className="w-full sm:w-auto" ariaLabel="Hablar con ingeniería de aplicación por WhatsApp">Hablar con ingeniería</Button>
              <Button variant="ghost" size="lg" href={`tel:${SITE.phone.primary}`} icon={<Phone className="h-5 w-5" />} className="w-full sm:w-auto" ariaLabel="Llamar a SCENA">Llamar ahora</Button>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { icon: Gauge, label: 'Validación por aplicación' },
                { icon: ShieldCheck, label: 'Respaldo técnico real' },
                { icon: CircleDot, label: 'Cotización directa por WhatsApp' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 py-4 sm:px-5 sm:first:pl-0">
                  <Icon className="h-4 w-4 shrink-0 text-fluid-copper" />
                  <span className="text-sm text-gray-text">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-text">
              <a href={`tel:${SITE.phone.primary}`} className="transition-colors hover:text-white">{SITE.phone.primary}</a>
              <span className="hidden text-white/20 sm:inline">/</span>
              <a href={`tel:${SITE.phone.secondary}`} className="transition-colors hover:text-white">{SITE.phone.secondary}</a>
              <span className="hidden text-white/20 sm:inline">/</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-fluid-copper" />{SITE.address}</span>
            </div>
          </div>

          <div className="reveal-up xl:col-span-5 [animation-delay:120ms]">
            <div className="overflow-hidden border border-white/10 bg-navy-light">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image src="/catalog/manguera-hidraulica.webp" alt="Mangueras hidráulicas industriales con conexiones prensadas" width={1600} height={900} className="h-full w-full object-cover" priority sizes="(max-width: 1280px) 100vw, 42vw" />
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
                <div className="p-5">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-fluid-copper">Presión</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">Hasta 5,000 PSI</div>
                  </div>
                <div className="p-5">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-fluid-copper">Respuesta</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">Selección técnica</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
