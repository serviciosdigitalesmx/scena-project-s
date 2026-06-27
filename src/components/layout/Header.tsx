'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION, SITE } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { BrandMark } from '@/components/ui/BrandMark'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`
  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl transition-shadow duration-300', isScrolled && 'shadow-[0_18px_50px_rgba(0,0,0,0.25)]')}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12">
        <Link href="/" className="shrink-0" aria-label="Ir al inicio">
          <BrandMark compact />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAVIGATION.categories.map((cat) => (
              <li key={cat.id}>
                <Link href={`/#${cat.id}`} className="text-sm font-mono text-gray-text hover:text-white transition-colors">{cat.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pl-6 border-l border-white/10">
            <Button variant="ghost" size="sm" href={`tel:${SITE.phone.primary}`} icon={<Phone className="w-4 h-4" />} ariaLabel="Llamar a SCENA">Llamar</Button>
            <Button size="sm" href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} ariaLabel="Solicitar cotización por WhatsApp">Cotizar</Button>
          </div>
        </nav>
        <button className="-mr-2 p-2 text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-x-0 top-20 overflow-hidden border-t border-white/10 bg-navy lg:hidden md:top-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-6">
              <ul className="space-y-4">
                {NAVIGATION.categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/#${cat.id}`} className="block text-lg font-mono text-gray-text hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <Button variant="ghost" href={`tel:${SITE.phone.primary}`} icon={<Phone className="w-4 h-4" />} className="justify-center" onClick={() => setIsMenuOpen(false)}>Llamar ahora</Button>
                <Button href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} className="justify-center" onClick={() => setIsMenuOpen(false)}>Solicitar cotización</Button>
              </div>
            </div>
        </div>
      ) : null}
    </header>
  )
}
