import Link from 'next/link'
import { Gauge, Wrench, HeadphonesIcon, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Gauge: <Gauge size={32} />,
  Wrench: <Wrench size={32} />,
  HeadphonesIcon: <HeadphonesIcon size={32} />,
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-scena">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mt-3">Soluciones integrales para tu industria</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Más de 15 años de experiencia respaldan cada servicio que ofrecemos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#dc2626] transition-all duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <Link href="/catalogo" className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#dc2626] transition">
                Ver más
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
