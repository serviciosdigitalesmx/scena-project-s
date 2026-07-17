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
          ? 'bg-white/95 backdrop-blur-xl shadow-md' 
          : 'bg-white border-b border-gray-100'
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:h-28 md:px-12">
        <Link href="/" className="shrink-0 pt-1" aria-label="Ir al inicio">
          <Image 
            src="/logo-scena.png" 
            alt="SCENA - Ingeniería Industrial" 
            width={240} 
            height={80} 
            className="w-48 md:w-56 h-auto"
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAVIGATION.categories.map((cat) => (
              <li key={cat.id}>
                <Link href={cat.id === 'catalogo' ? '/catalogo' : `/#${cat.id}`} className="text-sm font-semibold text-navy hover:text-safety-red transition-colors">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 pl-8 border-l border-gray-200">
            <a 
              href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
              className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-safety-red transition-colors" 
              aria-label="Llamar a SCENA"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone.primary}
            </a>
            <Button size="sm" href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} ariaLabel="Abrir WhatsApp de SCENA" className="bg-green-600 hover:bg-green-700 text-white">
              WhatsApp
            </Button>
          </div>
        </nav>
        
        <button className="-mr-2 p-2 text-navy lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      
      {isMenuOpen ? (
        <div className="fixed inset-x-0 top-24 max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden md:top-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-6">
              <ul className="space-y-4">
                {NAVIGATION.categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={cat.id === 'catalogo' ? '/catalogo' : `/#${cat.id}`} className="block text-lg font-semibold text-navy hover:text-safety-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
                <a 
                  href={`tel:${SITE.phone.primary.replaceAll(' ', '')}`} 
                  className="flex items-center justify-center gap-2 text-base font-semibold text-navy hover:text-safety-red transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
                <Button href={whatsappUrl} icon={<MessageCircle className="w-4 h-4" />} className="justify-center bg-green-600 hover:bg-green-700 text-white" onClick={() => setIsMenuOpen(false)}>
                  WhatsApp
                </Button>
              </div>
            </div>
        </div>
      ) : null}
    </header>
  )
}
