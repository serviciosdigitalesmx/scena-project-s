import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
  { name: 'Mangueras Hidráulicas', image: '/catalog/manguera-hidraulica.webp', description: 'Alta presión para aplicaciones exigentes' },
  { name: 'Mangueras Metálicas', image: '/catalog/manguera-metalica.webp', description: 'Flexibilidad y resistencia extrema' },
  { name: 'Conexiones Industriales', image: '/catalog/conexiones-hidraulicas.webp', description: 'Acoples y fittings de precisión' },
  { name: 'Mangueras Neumáticas', image: '/catalog/manguera-neumatica.webp', description: 'Para sistemas de aire comprimido' },
]

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-scena">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-wider">Productos Destacados</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mt-3">Lo más solicitado</h2>
          </div>
          <Link href="/catalogo" className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#dc2626] transition mt-4 md:mt-0">
            Ver catálogo completo
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.name} href="/catalogo" className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#1e3a8a] transition">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
