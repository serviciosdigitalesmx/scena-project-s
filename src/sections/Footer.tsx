import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { SITE, CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0f172a] text-white">
      <div className="container-scena section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-2">{SITE.name}</h3>
            <p className="text-blue-400 font-medium mb-4">{SITE.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{SITE.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Inicio</Link></li>
              <li><Link href="/catalogo" className="text-gray-400 hover:text-white transition">Catálogo</Link></li>
              <li><Link href="#servicios" className="text-gray-400 hover:text-white transition">Servicios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3"><Phone size={18} className="mt-0.5 text-blue-400 shrink-0" /><a href={`tel:${CONTACT.phone}`} className="hover:text-white transition">{CONTACT.phone}</a></li>
              <li className="flex items-start gap-3"><Mail size={18} className="mt-0.5 text-blue-400 shrink-0" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white transition">{CONTACT.email}</a></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-blue-400 shrink-0" /><span>{CONTACT.coverage}</span></li>
              <li className="flex items-start gap-3"><Clock size={18} className="mt-0.5 text-blue-400 shrink-0" /><span>{CONTACT.hours}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">¿Hablamos?</h4>
            <p className="text-gray-400 text-sm mb-4">Cotización inmediata vía WhatsApp o llamada directa.</p>
            <div className="space-y-3">
              <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-3 rounded-lg font-semibold transition w-full">
                <Phone size={18} />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
