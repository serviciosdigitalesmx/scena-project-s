import { Phone, Mail } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626] to-[#b91c1c]" />
      <div className="absolute inset-0 bg-[url('/catalog/manguera-industrial.webp')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10 container-scena px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">¿Necesitas una cotización urgente?</h2>
        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10">Nuestro equipo de ingeniería está listo para atenderte. Respuesta en menos de 30 minutos.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-[#dc2626] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            <Phone size={20} />
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
            <Mail size={20} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  )
}
