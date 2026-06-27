import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { BrandMark } from '@/components/ui/BrandMark'

const footerLinks = [
  { label: 'Catálogo técnico', href: '/#soluciones' },
  { label: 'Industrias', href: '/#industrias' },
  { label: 'Casos de aplicación', href: '/#casos' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-navy-light border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <BrandMark className="items-start" showTagline={false} />
            <p className="text-sm text-gray-text mt-1">Fabricante y comercializadora de productos para la conducción de fluidos.</p>
          </div>
          <div>
            <h4 className="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Productos</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-text hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li><a href={`tel:${SITE.phone.primary}`} className="flex items-center gap-2 text-sm text-gray-text hover:text-white transition-colors"><Phone className="w-4 h-4 shrink-0" />{SITE.phone.primary}</a></li>
              <li><a href={`tel:${SITE.phone.secondary}`} className="flex items-center gap-2 text-sm text-gray-text hover:text-white transition-colors"><Phone className="w-4 h-4 shrink-0" />{SITE.phone.secondary}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm text-gray-text hover:text-white transition-colors"><Mail className="w-4 h-4 shrink-0" />{SITE.email}</a></li>
              <li><a href={`https://wa.me/${SITE.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-text hover:text-white transition-colors"><MessageCircle className="w-4 h-4 shrink-0" />WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">¿Necesitas ayuda?</h4>
            <p className="text-sm text-gray-text mb-4">Habla con nuestro equipo de ingeniería.</p>
            <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-safety-red text-white font-mono font-semibold text-sm rounded-md hover:bg-safety-red/90 transition-colors"><MessageCircle className="w-4 h-4" />Solicitar cotización</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-text">© {currentYear} SCENA — Suministros y Conexiones. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-text">{SITE.phone.primary} · {SITE.phone.secondary}</p>
          <a href="/#contacto" className="text-xs text-gray-text hover:text-white transition-colors">Atención técnica nacional</a>
        </div>
      </div>
    </footer>
  )
}
