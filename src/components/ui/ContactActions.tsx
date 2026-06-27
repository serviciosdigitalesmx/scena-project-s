import { Mail, MessageCircle, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type ContactActionsProps = {
  message: string
  className?: string
  dark?: boolean
}

export function ContactActions({ message, className, dark = true }: ContactActionsProps) {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`

  return (
    <div className={cn('mt-12 border-t pt-8', dark ? 'border-white/10' : 'border-navy/10', className)}>
      <p className={cn('mb-5 text-sm', dark ? 'text-gray-text' : 'text-gray-600')}>¿Quieres validar tu caso con una persona? Elige el canal que te resulte más rápido.</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={whatsappUrl} icon={<MessageCircle className="h-4 w-4" />} ariaLabel="Consultar esta aplicación por WhatsApp">WhatsApp</Button>
        <Button href={`tel:${SITE.phone.primary}`} variant={dark ? 'ghost' : 'secondary'} icon={<Phone className="h-4 w-4" />} ariaLabel="Llamar a ingeniería SCENA">Llamar</Button>
        <Button href={`mailto:${SITE.email}?subject=${encodeURIComponent('Consulta técnica SCENA')}`} variant="ghost" icon={<Mail className="h-4 w-4" />} className={dark ? undefined : 'border-navy/20 text-navy hover:border-navy/40 hover:bg-navy/5'} ariaLabel="Enviar consulta técnica por correo">Correo</Button>
      </div>
    </div>
  )
}
