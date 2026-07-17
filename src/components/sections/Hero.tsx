import Image from 'next/image'
import { ArrowRight, CheckCircle2, Map, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

export function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`

  return (
    <section className="relative flex min-h-[90vh] lg:min-h-[800px] items-center pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-navy">
      {/* Background Image - Full width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-industrial.jpg"
          alt="Operación industrial SCENA"
          fill
          className="object-cover object-[25%_center] scale-[1.05] translate-x-8 md:translate-x-16 brightness-110 contrast-105"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text legibility - Lighter to show worker */}
        <div className="absolute inset-0 bg-navy/60 sm:bg-gradient-to-r sm:from-navy/80 sm:via-navy/40 sm:to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        {/* Content restricted to the left side to avoid the worker on the right */}
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Simple, non-SaaS Kicker */}
          <div className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
            <span className="h-px w-8 bg-safety-red" />
            Ingeniería industrial especializada • Atención 24/7
          </div>
          
          <h1 className="text-6xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
            Tu operación no se detiene.<br className="hidden sm:block" />
            <span className="block mt-2 text-white">Nosotros tampoco.</span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Mangueras, conexiones y componentes industriales con levantamiento técnico en sitio para minería, petroquímica y maquinaria pesada.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Button 
              href={whatsappUrl} 
              size="lg" 
              icon={<ArrowRight className="h-5 w-5" />} 
              iconPosition="right" 
              className="bg-safety-red text-white hover:bg-red-700 w-full sm:w-auto px-10 py-5 text-lg"
              ariaLabel="Solicitar cotización urgente"
            >
              Solicitar cotización urgente
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
              icon={<Phone className="h-5 w-5" />} 
              className="border-white text-white hover:bg-safety-red hover:border-safety-red hover:text-white w-full sm:w-auto px-10 py-5 text-lg"
              ariaLabel={`Llamar ahora a SCENA al ${SITE.phone.primary}`}
            >
              Llamar ahora: {SITE.phone.primary}
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-safety-red" />
              Selección por aplicación
            </span>
            <span className="flex items-center gap-3">
              <Map className="h-5 w-5 text-safety-red" />
              Cobertura nacional
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
