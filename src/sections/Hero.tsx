// src/sections/Hero.tsx — VERSIÓN CORREGIDA
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/catalog/manguera-metalica.webp"
          alt="Manguera metálica industrial SCENA"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 bg-[#0f172a]/90" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

      <div className="relative z-10 container-scena px-4 text-center pt-24">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-blue-200 text-sm font-medium">
            {CONTACT.hours} • {CONTACT.coverage}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
          Mangueras y Conexiones
          <span className="block text-blue-400 mt-2">Industriales de Élite</span>
        </h1>

        <p className="text-base md:text-lg text-blue-200/90 max-w-xl mx-auto mb-10 leading-relaxed">
          Soluciones hidráulicas, neumáticas e industriales con ingeniería de precisión.
          Empresa 100% mexicana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/25"
          >
            Explorar Catálogo
            <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
          >
            <Phone size={18} />
            Cotizar Ahora
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-300/80 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Calidad certificada
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Entrega express
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Soporte técnico 24/7
          </span>
        </div>
      </div>
    </section>
  )
}
