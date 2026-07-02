'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { CATALOG_CATEGORIES } from '@/lib/catalog'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Solutions() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('hidraulica')
  const selectedCategory = CATALOG_CATEGORIES.find((category) => category.id === selectedCategoryId) ?? CATALOG_CATEGORIES[0]

  const quoteUrl = (subject: string) => `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(`Hola SCENA, quiero agregar ${subject} a una cotización. Mi aplicación es:`)}`

  return (
    <Section id="soluciones" className="bg-gray-technical">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <span className="section-kicker">Familias de productos</span>
            <Heading level={2} className="mt-4 max-w-3xl text-navy">¿Qué necesitas resolver?</Heading>
          </div>
          <p className="text-lg leading-8 text-gray-700">Selecciona una familia y agrégala a tu lista de cotización. Un especialista te confirma especificaciones.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATALOG_CATEGORIES.map((category) => {
            const isSelected = selectedCategory.id === category.id
            return (
              <article key={category.id} className={cn('group overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(10,22,40,0.12)]', isSelected ? 'border-fluid-copper shadow-[0_16px_45px_rgba(10,22,40,0.1)]' : 'border-navy/10')}>
                <div className="relative overflow-hidden bg-white">
                  <Image src={category.image} alt={category.imageAlt} width={category.width} height={category.height} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <div className="absolute left-4 top-4 bg-navy px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white">{category.products.length} {category.products.length === 1 ? 'solución' : 'soluciones'}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy">{category.label}</h3>
                  <p className="mt-3 min-h-14 text-base leading-7 text-gray-700">{category.summary}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href={quoteUrl(category.label)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-safety-red px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-red focus-visible:ring-offset-2" aria-label={`Agregar ${category.label} a una cotización por WhatsApp`}>
                      Agregar a cotización
                    </a>
                    <button type="button" onClick={() => setSelectedCategoryId(category.id)} aria-expanded={isSelected} aria-controls="catalogo" className="inline-flex items-center justify-center gap-2 border border-navy/20 px-4 py-3 text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluid-copper focus-visible:ring-offset-2">
                      Ver ficha <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div id="catalogo" className="mt-16 scroll-mt-28 border border-navy/10 bg-navy p-6 text-white md:p-10">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fluid-copper">Catálogo técnico</span>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">{selectedCategory.id === 'hidraulica' ? 'Mangueras hidráulicas' : selectedCategory.label}</h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-gray-300">{selectedCategory.id === 'hidraulica' ? 'Circuitos hidráulicos de alta presión. Especificaciones de referencia — ingeniería confirma selección según tu operación.' : `${selectedCategory.summary} Especificaciones de referencia — ingeniería confirma selección según tu operación.`}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {selectedCategory.products.map((product) => (
              <article key={product.code} className="overflow-hidden border border-white/10 bg-white/[0.035]">
                <div className="grid sm:grid-cols-[160px_1fr]">
                  <Image src={product.image} alt={product.imageAlt} width={product.width} height={product.height} loading="lazy" sizes="(max-width: 640px) 100vw, 160px" className="h-52 w-full object-cover sm:h-full" />
                  <div className="p-6">
                    <span className="font-mono text-xs text-fluid-copper">{product.code}</span>
                    <h4 className="mt-2 text-xl font-bold text-white">{product.name}</h4>
                    <p className="mt-3 text-sm leading-6 text-gray-300">{product.description}</p>
                  </div>
                </div>
                <dl className="grid border-t border-white/10 sm:grid-cols-3">
                  {[
                    ['Materiales', product.materials],
                    ['Presión', product.pressure],
                    ['Temperatura', product.temperature],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-white/10 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-text">{label}</dt>
                      <dd className="mt-2 text-xs leading-5 text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-white/10 p-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-text">Aplicaciones</div>
                      <ul className="mt-3 grid gap-2 text-sm text-gray-300">
                        {product.applications.slice(0, 4).map((application) => <li key={application} className="flex items-center gap-2"><Check className="h-4 w-4 text-fluid-copper" />{application}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-text">Especificaciones</div>
                      <ul className="mt-3 grid gap-2 text-sm text-gray-300">
                        {product.specifications.map((specification) => <li key={specification} className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-fluid-copper" />{specification}</li>)}
                      </ul>
                    </div>
                  </div>
                  <Button href={quoteUrl(`${product.code} - ${product.name}`)} icon={<MessageCircle className="h-4 w-4" />} className="mt-6 w-full sm:w-auto" ariaLabel={`Agregar el producto ${product.code} a una cotización por WhatsApp`}>Agregar a cotización</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
