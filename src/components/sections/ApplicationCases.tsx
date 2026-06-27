import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { APPLICATION_CASES, CATALOG_PRODUCTS } from '@/lib/catalog'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { ContactActions } from '@/components/ui/ContactActions'

export function ApplicationCases() {
  return (
    <Section id="casos" dark className="bg-navy-light">
      <Container>
        <div className="max-w-3xl">
          <span className="section-kicker">Casos de aplicación</span>
          <Heading level={2} className="mt-4 text-white">Del problema de planta a una especificación defendible</Heading>
          <p className="mt-5 text-lg text-gray-text">Ejemplos de cómo traducimos condiciones de operación en una selección concreta.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {APPLICATION_CASES.map((item) => {
            const product = CATALOG_PRODUCTS.find((candidate) => candidate.code === item.productCode)
            const categoryId = item.productCode.startsWith('MM') || item.productCode.startsWith('JE')
              ? 'metalica'
              : item.productCode.startsWith('MH') || item.productCode.startsWith('AH')
                ? 'hidraulica'
                : item.productCode.startsWith('MI')
                  ? 'industrial'
                  : item.productCode.startsWith('PV')
                    ? 'pvc'
                    : 'conexiones'
            return (
              <article key={item.id} className="grid overflow-hidden border border-white/10 bg-navy sm:grid-cols-[200px_1fr]">
                <Image src={item.image} alt={item.imageAlt} width={item.width} height={item.height} loading="lazy" sizes="(max-width: 640px) 100vw, 200px" className="h-52 w-full object-cover sm:h-full" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  <dl className="mt-5 space-y-4 text-sm leading-6">
                    <div><dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fluid-copper">Problema</dt><dd className="mt-1 text-gray-300">{item.problem}</dd></div>
                    <div><dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fluid-copper">Solución</dt><dd className="mt-1 text-gray-300">{item.solution}</dd></div>
                  </dl>
                  <a href={`#${categoryId}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-fluid-copper underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluid-copper" aria-label={`Ver producto recomendado ${product?.name ?? item.productCode}`}>
                    {item.productCode} · {product?.name}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <ContactActions message="Hola SCENA, quiero revisar un caso de aplicación similar a los ejemplos de su sitio." />
      </Container>
    </Section>
  )
}
