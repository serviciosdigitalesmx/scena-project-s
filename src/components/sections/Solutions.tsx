'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { ContactActions } from '@/components/ui/ContactActions'
import { CATALOG_CATEGORIES } from '@/lib/catalog'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Solutions() {
  const [openCategory, setOpenCategory] = useState('metalica')
  const [openProduct, setOpenProduct] = useState<string | null>('MM-001')

  const getWhatsappUrl = (productCode: string, productName: string) => {
    const message = `Hola, necesito cotización para el producto ${productCode} - ${productName}. ${SITE.whatsapp.message}`
    return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`
  }

  return (
    <Section id="soluciones" dark className="relative overflow-hidden bg-[#0d1b2b]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fluid-copper/60 to-transparent" />
      <Container>
        <div className="max-w-3xl mb-10">
          <span className="section-kicker">Catálogo técnico</span>
          <Heading level={2} className="mt-4 text-white section-title">
            No buscamos en un catálogo.
            <br />
            <span className="text-fluid-copper">Seleccionamos por especificación.</span>
          </Heading>
          <p className="body-text mt-5 max-w-2xl text-gray-300">
            Aquí sí ves qué vendemos. Fotos reales del catálogo, códigos visibles, specs técnicas y un camino directo a WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {CATALOG_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28 overflow-hidden border border-white/10 bg-navy-light">
              <button
                className="grid w-full grid-cols-[112px_1fr] text-left transition-colors hover:bg-white/[0.025] md:grid-cols-[220px_1fr]"
                onClick={() => setOpenCategory(openCategory === category.id ? '' : category.id)}
                aria-expanded={openCategory === category.id}
                aria-controls={`categoria-${category.id}`}
              >
                <Image src={category.image} alt={category.imageAlt} width={category.width} height={category.height} loading="lazy" sizes="(max-width: 768px) 112px, 220px" className="h-full min-h-28 w-full border-r border-white/10 object-cover md:min-h-36" />
                <div className="flex items-center justify-between gap-4 p-5 md:p-7">
                  <div>
                    <div className="text-xl font-semibold text-white md:text-2xl">{category.label}</div>
                    <div className="mt-2 text-xs leading-5 text-gray-text md:text-sm">{category.summary}</div>
                  </div>
                  <ChevronDown className={cn('h-5 w-5 shrink-0 text-fluid-copper transition-transform duration-300', openCategory === category.id ? 'rotate-180' : '')} />
                </div>
              </button>

              {openCategory === category.id ? (
                <div id={`categoria-${category.id}`} className="border-t border-white/10 p-4 md:p-6">
                  <div className="space-y-4">
                      {category.products.map((product) => (
                        <article key={product.code} id={`producto-${product.code.toLowerCase()}`} className="scroll-mt-28 overflow-hidden border border-white/10 bg-navy">
                          <button className="grid w-full text-left transition-colors hover:bg-white/[0.03] sm:grid-cols-[180px_1fr]" onClick={() => setOpenProduct(openProduct === product.code ? null : product.code)} aria-expanded={openProduct === product.code} aria-controls={`detalle-${product.code.toLowerCase()}`}>
                            <Image src={product.image} alt={product.imageAlt} width={product.width} height={product.height} loading="lazy" sizes="(max-width: 640px) 100vw, 180px" className="h-48 w-full border-b border-white/10 object-cover sm:h-full sm:min-h-52 sm:border-b-0 sm:border-r" />
                            <div className="p-5 md:p-6">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <span className="font-mono text-xs text-fluid-copper">{product.code}</span>
                                  <h3 className="mt-2 text-xl font-semibold text-white">{product.name}</h3>
                                </div>
                                <ChevronDown className={cn('h-5 w-5 shrink-0 text-gray-text transition-transform duration-300', openProduct === product.code ? 'rotate-180' : '')} aria-hidden="true" />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-300">{product.description}</p>
                              <dl className="mt-5 grid gap-3 text-xs sm:grid-cols-3">
                                <div><dt className="font-mono uppercase tracking-wider text-gray-text">Materiales</dt><dd className="mt-1 leading-5 text-white">{product.materials}</dd></div>
                                <div><dt className="font-mono uppercase tracking-wider text-gray-text">Presión</dt><dd className="mt-1 leading-5 text-white">{product.pressure}</dd></div>
                                <div><dt className="font-mono uppercase tracking-wider text-gray-text">Temperatura</dt><dd className="mt-1 leading-5 text-white">{product.temperature}</dd></div>
                              </dl>
                            </div>
                          </button>

                          {openProduct === product.code ? (
                            <div id={`detalle-${product.code.toLowerCase()}`} className="border-t border-white/10 p-5 md:p-7">
                              <div className="grid gap-7 lg:grid-cols-2">
                                <div>
                                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fluid-copper">Aplicaciones típicas</div>
                                  <ul className="mt-3 grid gap-2 text-sm text-gray-200 sm:grid-cols-2">
                                    {product.applications.map((application) => <li key={application} className="border-l border-fluid-copper pl-3">{application}</li>)}
                                  </ul>
                                </div>
                                <div>
                                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fluid-copper">Especificaciones</div>
                                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                                    {product.specifications.map((specification) => <li key={specification}>• {specification}</li>)}
                                  </ul>
                                </div>
                              </div>
                              <Button href={getWhatsappUrl(product.code, product.name)} icon={<MessageCircle className="h-4 w-4" />} size="lg" className="mt-7 w-full md:w-auto" ariaLabel={`Validar aplicación del producto ${product.code} por WhatsApp`}>Validar aplicación</Button>
                            </div>
                          ) : null}
                        </article>
                      ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <ContactActions message="Hola SCENA, quiero validar cuál producto del catálogo corresponde a mi aplicación." />
      </Container>
    </Section>
  )
}
