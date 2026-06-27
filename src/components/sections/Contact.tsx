import { MessageCircle, Phone, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

export function Contact() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`
  return (
    <Section id="contacto" dark className="bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-blue/5 blur-3xl" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gray-text font-mono">Contacto técnico</span>
          <Heading level={2} className="mt-3 text-white">Habla con alguien que entiende tu planta</Heading>
          <p className="text-base md:text-lg text-gray-text leading-relaxed mt-4 max-w-2xl mx-auto">Sin esperas, sin call centers. Comunicación directa con ingeniería de aplicación.</p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={whatsappUrl} icon={<MessageCircle className="w-5 h-5" />} size="lg" className="w-full md:w-auto min-w-[200px]" ariaLabel="Solicitar cotización por WhatsApp">WhatsApp</Button>
          <Button variant="secondary" size="lg" href={`tel:${SITE.phone.primary}`} icon={<Phone className="w-5 h-5" />} className="w-full md:w-auto min-w-[200px]" ariaLabel={`Llamar a SCENA al ${SITE.phone.primary}`}>{SITE.phone.primary}</Button>
          <Button variant="ghost" size="lg" href={`mailto:${SITE.email}`} icon={<Mail className="w-5 h-5" />} className="w-full md:w-auto min-w-[200px]" ariaLabel="Enviar correo a SCENA">Correo</Button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-text">Línea alterna: <a href={`tel:${SITE.phone.secondary}`} className="text-white underline decoration-fluid-copper underline-offset-4">{SITE.phone.secondary}</a> · <a href={`mailto:${SITE.email}`} className="text-white underline decoration-fluid-copper underline-offset-4">{SITE.email}</a></p>
      </Container>
    </Section>
  )
}
