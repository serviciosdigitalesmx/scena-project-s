'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION, SITE } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

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
    <header 
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300', 
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)]' 
          : 'bg-[#081734]/35 backdrop-blur-[12px] border-b border-white/[0.08]'
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:h-28 md:px-12">
        <Link 
          href="/" 
          className="shrink-0 relative h-12 w-48 md:h-16 md:w-64" 
          aria-label="Ir al inicio"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <Image 
            src="/logo-scena.png" 
            alt="SCENA" 
            fill 
            className="object-contain object-left brightness-0 invert"
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAVIGATION.categories.map((cat) => (
              <li key={cat.id}>
                <Link href={cat.id === 'catalogo' ? '/catalogo' : `/#${cat.id}`} className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 pl-8 border-l border-white/10">
            <a 
              href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
              className="flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white transition-colors" 
              aria-label="Llamar a SCENA"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone.primary}
            </a>
            <Button size="sm" href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} ariaLabel="Abrir WhatsApp de SCENA" className="bg-safety-red hover:bg-red-700 text-white border-none">
              WhatsApp
            </Button>
          </div>
        </nav>
        
        <button className="-mr-2 p-2 text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      
      {isMenuOpen ? (
        <div className="fixed inset-x-0 top-24 max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden md:top-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-6">
              <ul className="space-y-4">
                {NAVIGATION.categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={cat.id === 'catalogo' ? '/catalogo' : `/#${cat.id}`} className="block text-lg font-semibold text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <a 
                  href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
                  className="flex items-center justify-center gap-2 text-base font-semibold text-gray-200 hover:text-white transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
                <Button href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} className="justify-center bg-safety-red hover:bg-red-700 text-white border-none" onClick={() => setIsMenuOpen(false)}>
                  WhatsApp
                </Button>
              </div>
            </div>
        </div>
      ) : null}
    </header>
  )
}
