'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import { CONTACT, NAV_LINKS, SITE } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1e3a8a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="bg-[#172554] text-white text-xs py-2 hidden md:block">
        <div className="container-scena flex justify-between items-center px-4">
          <div className="flex gap-6">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-blue-200 transition">
              <Phone size={12} />
              {CONTACT.phone}
            </a>
            <span>{CONTACT.hours}</span>
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-200 transition">{CONTACT.email}</a>
          </div>
        </div>
      </div>
      <div className="container-scena px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{SITE.name}</span>
            <span className="hidden sm:block text-blue-200 text-sm font-medium border-l border-blue-400 pl-2">{SITE.tagline}</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/90 hover:text-white font-medium text-sm transition">{link.label}</Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-lg font-semibold text-sm transition">
              <Phone size={16} />
              Llamar
            </a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e3a8a] border-t border-blue-700">
          <div className="container-scena px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 hover:text-white font-medium py-2">
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-blue-700">
              <a href={`https://wa.me/${CONTACT.phoneRaw}`} className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center justify-center gap-2 bg-[#dc2626] text-white px-4 py-3 rounded-lg font-semibold">
                <Phone size={18} />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
