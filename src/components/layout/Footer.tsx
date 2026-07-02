import Link from 'next/link'
import { Clock3, Mail, Map, MessageCircle, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { BrandMark } from '@/components/ui/BrandMark'

const footerLinks = [
  { label: 'Familias de productos', href: '/#soluciones' },
  { label: 'Catálogo técnico', href: '/#catalogo' },
  { label: 'Industrias', href: '/#industrias' },
  { label: 'Casos de aplicación', href: '/#casos' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-[#06111D] py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <BrandMark className="items-start" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">Mangueras, conexiones y componentes para conducción de fluidos con selección por aplicación.</p>
          </div>
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegación</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">{item.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">Contacto directo</h2>
            <ul className="mt-5 space-y-3">
              <li><a href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"><Phone className="h-4 w-4 text-fluid-copper" />{SITE.phone.primary}</a></li>
              <li><a href={`tel:${SITE.phone.secondary.replaceAll(' ', '')}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"><Phone className="h-4 w-4 text-fluid-copper" />{SITE.phone.secondary}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all text-sm text-gray-300 hover:text-white"><Mail className="h-4 w-4 shrink-0 text-fluid-copper" />{SITE.email}</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">Disponibilidad</h2>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-fluid-copper" />{SITE.hours}</li>
              <li className="flex items-center gap-2"><Map className="h-4 w-4 text-fluid-copper" />{SITE.coverage}</li>
            </ul>
            <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#E83B2F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#F04A3D]"><MessageCircle className="h-4 w-4" />Cotizar ahora</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} SCENA · Suministros y Conexiones.</p>
          <p>Atención técnica para operaciones industriales en México.</p>
        </div>
      </div>
    </footer>
  )
}
