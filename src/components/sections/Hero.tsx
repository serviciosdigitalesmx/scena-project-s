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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-industrial.jpg"
            alt="Operación industrial SCENA"
            fill
            className="animate-slow-zoom object-cover object-[70%_center] brightness-110 contrast-125 saturate-105"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for text legibility - Lighter to show worker */}
        <div className="absolute inset-0 bg-navy/40 sm:bg-gradient-to-r sm:from-navy/70 sm:via-navy/20 sm:to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        {/* Content restricted to the left side to avoid the worker on the right */}
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10 opacity-90">
            <div className="w-8 md:w-12 h-[2px] bg-safety-red" />
            <span className="font-mono text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-gray-300">
              Especialistas en conducción de fluidos para la industria
            </span>
          </div>

          <h1 className="text-[3.5rem] md:text-6xl lg:text-[6.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8">
            Tu operación<br />
            no se detiene.<br />
            <span className="block mt-4 md:mt-6">Nosotros tampoco.</span>
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
              ariaLabel="Hablar con un ingeniero por WhatsApp"
            >
              Hablar con un ingeniero
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
              icon={<Phone className="h-5 w-5" />} 
              className="border-white text-white hover:bg-safety-red hover:border-safety-red hover:text-white w-full sm:w-auto px-10 py-5 text-lg"
              ariaLabel="Llamar ahora a SCENA"
            >
              Llamar ahora
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
