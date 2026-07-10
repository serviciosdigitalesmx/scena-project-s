import { STATS } from '@/lib/constants'

export default function About() {
  return (
    <section className="section-padding bg-[#1e3a8a] text-white">
      <div className="container-scena">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Sobre SCENA</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Precisión industrial con respaldo mexicano</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              En SCENA nos especializamos en el suministro de mangueras hidráulicas, conexiones industriales y componentes para operaciones críticas.
              Nuestro compromiso es garantizar la continuidad de tu operación con productos de la más alta calidad y un servicio técnico especializado.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Trabajamos con las principales marcas del sector y ofrecemos soluciones a medida para industrias como la automotriz, petrolera, minera y manufacturera.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
