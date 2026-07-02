import { Mail, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { RequirementForm } from '@/components/ui/RequirementForm'
import { SITE } from '@/lib/constants'

export function Contact() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`

  return (
    <Section id="contacto" dark className="relative overflow-hidden bg-navy">
      <div className="industrial-grid absolute inset-0 opacity-30" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-fluid-copper/10 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <span className="section-kicker">Atención 24/7</span>
            <Heading level={2} className="mt-4 text-white">¿Línea detenida, fuga o componente crítico sin especificación?</Heading>
            <p className="mt-6 text-lg leading-8 text-gray-300">Envíanos foto, medida o descripción. Nuestro equipo identifica la solución.</p>

            <div className="mt-8 border-l-2 border-fluid-copper pl-5">
              <div className="flex items-center gap-3 text-white"><ShieldCheck className="h-5 w-5 text-fluid-copper" /><strong>Respuesta en menos de 4 horas</strong></div>
              <p className="mt-2 text-sm leading-6 text-gray-400">Levantamiento técnico en sitio disponible.</p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={whatsappUrl} icon={<MessageCircle className="h-5 w-5" />} className="w-full sm:w-auto" ariaLabel="Abrir WhatsApp de SCENA">WhatsApp directo</Button>
              <Button variant="ghost" href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} icon={<Phone className="h-5 w-5" />} className="w-full sm:w-auto" ariaLabel={`Llamar a SCENA al ${SITE.phone.primary}`}>{SITE.phone.primary}</Button>
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"><Mail className="h-4 w-4 text-fluid-copper" />{SITE.email}</a>
          </div>

          <RequirementForm />
        </div>
      </Container>
    </Section>
  )
}
