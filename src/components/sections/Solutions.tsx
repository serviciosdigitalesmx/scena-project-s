'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Check, ChevronDown, MessageCircle, Search } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '@/lib/catalog-all'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

type CatalogItem = (typeof CATALOG_CATEGORIES)[number]['products'][number] & {
  categoryLabel: string
}

export function Solutions() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('todos')
  const [query, setQuery] = useState('')
  const selectedCategory = CATALOG_CATEGORIES.find((category) => category.id === selectedCategoryId) ?? CATALOG_CATEGORIES[0]
  const catalogFamilies = Math.max(CATALOG_CATEGORIES.length - 1, 0)

  const globalProducts = useMemo<CatalogItem[]>(() => CATALOG_CATEGORIES.flatMap((category) => (
    category.id === 'todos' ? [] : category.products.map((product) => ({ ...product, categoryLabel: category.label }))
  )), [])

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const selectedProducts = selectedCategory.id === 'todos'
      ? globalProducts
      : selectedCategory.products.map((product) => ({ ...product, categoryLabel: selectedCategory.label }))
    const source = normalized ? globalProducts : selectedProducts

    if (!normalized) return source

    return source.filter((product) => {
      const haystack = [
        product.categoryLabel,
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
  }, [globalProducts, query, selectedCategory.label, selectedCategory.id, selectedCategory.products])

  const quoteUrl = (subject: string) => `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(`Hola SCENA, quiero cotizar ${subject}.`)}`

  return (
    <Section id="soluciones" className="bg-navy">
      <Container>
        <div className="border border-navy/10 bg-white">
          <div className="grid border-b border-navy/10 lg:grid-cols-[1fr_340px]">
            <div className="p-5 md:p-8">
              <span className="section-kicker">Productos</span>
              <Heading level={2} className="mt-3 max-w-4xl text-navy">Catálogo SCENA</Heading>
            </div>

            <div className="grid grid-cols-3 border-t border-navy/10 lg:border-l lg:border-t-0">
              {[
                [String(CATALOG_PRODUCTS.length), 'Productos'],
                [String(catalogFamilies), 'Líneas'],
                ['24/7', 'WhatsApp'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-navy/10 p-4 last:border-r-0 lg:border-r-0 lg:border-b lg:last:border-b-0">
                  <div className="text-2xl font-black text-navy md:text-3xl">{value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="catalogo" aria-live="polite" className="scroll-mt-28">
            <div className="border-b border-navy/10 bg-navy p-4 text-white md:p-5">
              <div className="grid gap-4 lg:grid-cols-[minmax(260px,420px)_1fr] lg:items-center">
                <label className="flex items-center gap-3 border border-white/15 bg-white/[0.08] px-4 py-3">
                  <Search className="h-4 w-4 shrink-0 text-safety-red" aria-hidden="true" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-gray-text focus:outline-none"
                    placeholder="Buscar producto, código o línea"
                    aria-label="Buscar productos SCENA"
                  />
                </label>

                <div className="flex gap-2 overflow-x-auto pb-1">
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
                          'flex shrink-0 items-center gap-2 border px-3 py-2 text-left text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-red',
                          isSelected ? 'border-safety-red bg-safety-red text-white' : 'border-white/15 bg-white/[0.06] text-gray-text hover:bg-white/[0.12] hover:text-white'
                        )}
                        aria-current={isSelected ? 'location' : undefined}
                      >
                        <span>{category.label}</span>
                        <span className={cn('font-mono text-[10px]', isSelected ? 'text-white' : 'text-gray-text')}>{category.products.length}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[280px_1fr]">
              <aside className="hidden border-r border-navy/10 bg-[#fafcff] p-4 lg:block">
                <div className="sticky top-24">
                  <div className="border-b border-navy/10 pb-3 font-mono text-[11px] uppercase text-gray-500">Líneas de producto</div>
                  <div className="mt-3 grid max-h-[620px] gap-1 overflow-y-auto pr-1">
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
                            'grid grid-cols-[1fr_auto] items-center gap-3 border px-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-red',
                            isSelected ? 'border-navy bg-navy text-white' : 'border-transparent text-navy hover:border-navy/10 hover:bg-white'
                          )}
                        >
                          <span className="text-sm font-bold leading-5">{category.label}</span>
                          <span className={cn('font-mono text-xs', isSelected ? 'text-white' : 'text-gray-500')}>{category.products.length}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </aside>

              <div>
                <div className="grid border-b border-navy/10 bg-white md:grid-cols-[1fr_auto] md:items-center">
                  <div className="p-5 md:p-6">
                    <div className="font-mono text-[11px] uppercase text-safety-red">
                      {query.trim() ? 'Resultados' : selectedCategory.id === 'todos' ? 'Catálogo completo' : 'Línea seleccionada'}
                    </div>
                    <h3 className="mt-2 text-2xl font-black text-navy md:text-3xl">{query.trim() ? 'Productos encontrados' : selectedCategory.label}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-700">
                      {query.trim() ? `Coincidencias para "${query.trim()}".` : selectedCategory.summary}
                    </p>
                  </div>
                  <div className="border-t border-navy/10 px-5 py-4 md:border-l md:border-t-0 md:px-7">
                    <div className="text-3xl font-black text-navy">{filteredProducts.length}</div>
                    <div className="font-mono text-[10px] uppercase text-gray-500">productos</div>
                  </div>
                </div>

                <div className="grid gap-3 bg-[#f6f8fc] p-3 sm:grid-cols-2 md:p-4 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <article key={`${product.categoryLabel}-${product.code}`} className="group grid overflow-hidden border border-navy/10 bg-white transition-colors hover:border-safety-red/60">
                      <div className="grid grid-cols-[118px_1fr]">
                        <div className="relative min-h-[132px] bg-[#edf2f8]">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            width={product.width}
                            height={product.height}
                            loading="lazy"
                            sizes="118px"
                            className="h-full w-full bg-white object-contain p-2"
                          />
                        </div>

                        <div className="min-w-0 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <span className="block truncate font-mono text-xs font-bold text-safety-red">{product.code}</span>
                              <h4 className="mt-1 line-clamp-2 text-base font-black leading-5 text-navy">{product.name}</h4>
                            </div>
                            <a
                              href={quoteUrl(`${product.code} - ${product.name}`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 border border-navy/10 p-2 text-navy transition-colors hover:border-safety-red hover:bg-safety-red hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-red"
                              aria-label={`Cotizar ${product.code} por WhatsApp`}
                            >
                              <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            </a>
                          </div>
                          <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-700">{product.description}</p>
                        </div>
                      </div>

                      <div className="border-t border-navy/10 px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy px-2 py-1 font-mono text-[10px] uppercase text-white">{product.categoryLabel}</span>
                          <span className="border border-navy/10 px-2 py-1 font-mono text-[10px] uppercase text-gray-600">{product.pressure}</span>
                        </div>
                      </div>

                      <details className="group/details border-t border-navy/10">
                        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-navy transition-colors hover:bg-[#f7f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-red">
                          Ver producto
                          <ChevronDown className="h-4 w-4 shrink-0 text-safety-red transition-transform duration-300 group-open/details:rotate-180" aria-hidden="true" />
                        </summary>
                        <div className="border-t border-navy/10 bg-[#fbfcff] p-4">
                          <dl className="grid gap-2 text-xs sm:grid-cols-3">
                            {[
                              ['Materiales', product.materials],
                              ['Presión', product.pressure],
                              ['Temperatura', product.temperature],
                            ].map(([label, value]) => (
                              <div key={label} className="border border-navy/10 bg-white p-3">
                                <dt className="font-mono text-[9px] uppercase text-gray-500">{label}</dt>
                                <dd className="mt-1 leading-5 text-navy">{value}</dd>
                              </div>
                            ))}
                          </dl>

                          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                            <div>
                              <div className="font-mono text-[10px] uppercase text-gray-500">Usos</div>
                              <ul className="mt-2 grid gap-2 text-gray-700">
                                {product.applications.slice(0, 4).map((application) => (
                                  <li key={application} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 shrink-0 text-safety-red" />
                                    {application}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="font-mono text-[10px] uppercase text-gray-500">Detalles</div>
                              <ul className="mt-2 grid gap-2 text-gray-700">
                                {product.specifications.slice(0, 4).map((specification) => (
                                  <li key={specification} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-safety-red" />
                                    {specification}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <Button href={quoteUrl(`${product.code} - ${product.name}`)} icon={<MessageCircle className="h-4 w-4" />} className="mt-5 w-full" ariaLabel={`Cotizar ${product.code} por WhatsApp`}>Cotizar producto</Button>
                        </div>
                      </details>
                    </article>
                  ))}

                  {filteredProducts.length === 0 ? (
                    <div className="border border-navy/10 bg-white p-8 text-center text-gray-700 sm:col-span-2 xl:col-span-3">
                      No encontramos productos con ese texto. Prueba con otro nombre, código o línea.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
