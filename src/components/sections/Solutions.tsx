'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Check, ChevronDown, MessageCircle, Search } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { CATALOG_CATEGORIES } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Solutions() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('hidraulica')
  const [query, setQuery] = useState('')
  const selectedCategory = CATALOG_CATEGORIES.find((category) => category.id === selectedCategoryId) ?? CATALOG_CATEGORIES[0]
  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return selectedCategory.products
    return selectedCategory.products.filter((product) => {
      const haystack = [
        product.code,
        product.name,
        product.description,
        product.materials,
        product.pressure,
        product.temperature,
        product.applications.join(' '),
        product.specifications.join(' '),
      ].join(' ').toLowerCase()
      return haystack.includes(normalized)
    })
  }, [query, selectedCategory.products])

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

        <div className="mt-12 flex gap-3 overflow-x-auto pb-2">
          {CATALOG_CATEGORIES.map((category) => {
            const isSelected = selectedCategory.id === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategoryId(category.id)
                  setQuery('')
                }}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluid-copper focus-visible:ring-offset-2',
                  isSelected ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-fluid-copper hover:text-fluid-copper'
                )}
                aria-current={isSelected ? 'location' : undefined}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div id="catalogo" aria-live="polite" className="mt-16 scroll-mt-28 border border-navy/10 bg-navy p-6 text-white md:p-10">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fluid-copper">Catálogo técnico</span>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">{selectedCategory.id === 'hidraulica' ? 'Mangueras hidráulicas' : selectedCategory.label}</h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-gray-300">{selectedCategory.id === 'hidraulica' ? 'Circuitos hidráulicos de alta presión. Especificaciones de referencia — ingeniería confirma selección según tu operación.' : `${selectedCategory.summary} Especificaciones de referencia — ingeniería confirma selección según tu operación.`}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="lg:col-span-2 mb-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex w-full max-w-2xl items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3 text-white">
                <Search className="h-4 w-4 shrink-0 text-fluid-copper" aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
                  placeholder={`Buscar en ${selectedCategory.label}`}
                  aria-label={`Buscar productos dentro de ${selectedCategory.label}`}
                />
              </label>
              <p className="text-sm text-gray-300">
                {filteredProducts.length} resultado{filteredProducts.length === 1 ? '' : 's'} en esta categoría
              </p>
            </div>

            {filteredProducts.map((product) => (
              <article key={product.code} className="overflow-hidden border border-white/10 bg-white/[0.035]">
                <div className="grid sm:grid-cols-[160px_1fr]">
                  <Image src={product.image} alt={product.imageAlt} width={product.width} height={product.height} loading="lazy" sizes="(max-width: 640px) 100vw, 160px" className="h-52 w-full object-cover sm:h-full" />
                  <div className="p-6">
                    <span className="font-mono text-xs text-fluid-copper">{product.code}</span>
                    <h4 className="mt-2 text-xl font-bold text-white">{product.name}</h4>
                    <p className="mt-3 text-sm leading-6 text-gray-300">{product.description}</p>
                  </div>
                </div>
                <details className="group border-t border-white/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fluid-copper">
                    Ver características
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="border-t border-white/10 p-6">
                    <dl className="grid gap-4 sm:grid-cols-3">
                      {[
                        ['Materiales', product.materials],
                        ['Presión', product.pressure],
                        ['Temperatura', product.temperature],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                          <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-text">{label}</dt>
                          <dd className="mt-2 text-xs leading-5 text-white">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                </details>
                <div className="border-t border-white/10 px-6 py-4 text-xs text-gray-400">
                  Selección por categoría y ficha expandible, en HTML nativo.
                </div>
              </article>
            ))}
            {filteredProducts.length === 0 ? (
              <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.04] p-8 text-center text-gray-300">
                No encontramos productos con ese texto en esta categoría. Prueba otra búsqueda o cambia de familia.
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  )
}
