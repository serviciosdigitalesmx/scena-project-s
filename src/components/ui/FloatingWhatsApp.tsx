import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function FloatingWhatsApp() {
  const message = 'Hola SCENA, tengo un requerimiento urgente. Necesito apoyo para identificar una manguera o conexión industrial.'
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-[0_14px_38px_rgba(22,163,74,0.4)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#16A34A] md:bottom-7 md:right-7" aria-label="Abrir WhatsApp para un requerimiento urgente">
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#16A34A]/25 [animation-duration:2.8s]" aria-hidden="true" />
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
