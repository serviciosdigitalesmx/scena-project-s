'use client';

import Image from 'next/image';
import React, { useMemo, useState } from 'react';

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? 'https://wa.me/528137157752';
const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'https://www.scena.com.mx';

type Product = {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  tag: string;
};

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'metalicas', label: 'Metálicos' },
  { id: 'hidraulicas', label: 'Hidráulicos' },
  { id: 'industriales', label: 'Industriales' },
  { id: 'conexiones', label: 'Conexiones' },
  { id: 'sellado', label: 'Sellado' },
  { id: 'expansion', label: 'Expansión' },
];

const products: Product[] = [
  {
    id: 'mangueras-metalicas',
    category: 'metalicas',
    title: 'Mangueras metálicas flexibles',
    summary: 'Aceros inoxidables T304 y T316 para altas temperaturas, vibración y transferencia crítica.',
    details: ['Presión máxima de trabajo', 'Radio de curvatura controlado', 'Aplicación en procesos críticos', 'Fabricación a especificación'],
    tag: 'Base del catálogo',
  },
  {
    id: 'juntas-hule',
    category: 'expansion',
    title: 'Juntas de expansión de hule',
    summary: 'Diseñadas para eliminar vibración, absorber movimientos y facilitar la instalación.',
    details: ['Con una esfera', 'Con dos esferas', 'Bridas giratorias', 'Absorbe movimientos axiales y laterales'],
    tag: 'Movimiento',
  },
  {
    id: 'juntas-metalicas',
    category: 'expansion',
    title: 'Juntas de expansión metálicas',
    summary: 'Soluciones para grandes movimientos laterales, axialidad y compensación térmica.',
    details: ['Tipo universal', 'Cardan', 'Bisagra', 'Codos de presión balanceada'],
    tag: 'Ingeniería',
  },
  {
    id: 'conexiones-rapidas',
    category: 'conexiones',
    title: 'Conexiones rápidas',
    summary: 'Aluminio, bronce, acero inoxidable, acero al carbón y polipropileno.',
    details: ['Parte A, B, C, D', 'Parte DC, DP, E, F', 'Adaptadores', 'Acoples de integración'],
    tag: 'Acoples',
  },
  {
    id: 'niples-botella',
    category: 'conexiones',
    title: 'Niples botella',
    summary: 'Disponibles en acero inoxidable, acero al carbón y polipropileno.',
    details: ['Desde 1/2" hasta 6"', 'Compatibilidad industrial', 'Integración a líneas existentes', 'Reemplazo rápido'],
    tag: 'Integración',
  },
  {
    id: 'empaques-flexitallic',
    category: 'sellado',
    title: 'Empaques metálicos tipo Flexitallic',
    summary: 'Soluciones de sellado para procesos con exigencia térmica y química.',
    details: ['Sellado confiable', 'Aplicación industrial', 'Alternativas metálicas', 'Adaptación a medida'],
    tag: 'Sellado',
  },
  {
    id: 'niples-comunes',
    category: 'conexiones',
    title: 'Conexiones comunes',
    summary: 'Bridas, niples, codos, coples y accesorios para conducción de fluidos.',
    details: ['Brida fija SORF', 'Brida giratoria', 'Niple ranurado', 'NPT / JIC / unión'],
    tag: 'Accesorios',
  },
  {
    id: 'soluciones-curso',
    category: 'industriales',
    title: 'Soluciones a medida',
    summary: 'Levantamiento, sustitución y especificación para resolver fallas críticas.',
    details: ['Diagnóstico en sitio', 'Reemplazo técnico', 'Ensambles certificados', 'Aceleración de compra'],
    tag: 'Servicio',
  },
];

function CTA({ href, children, external = false, variant = 'primary' }: { href: string; children: React.ReactNode; external?: boolean; variant?: 'primary' | 'ghost' }) {
  const styles = variant === 'primary'
    ? 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary'
    : 'bg-transparent border-white/15 text-white hover:border-primary hover:text-primary';
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={`inline-flex items-center justify-center border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${styles}`}>
      {children}
    </a>
  );
}

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
      const searchMatch = `${product.title} ${product.summary} ${product.details.join(' ')}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="sticky top-0 z-40 border-b border-secondary/20 bg-background/90 backdrop-blur-md">
        <div className="container-custom flex h-20 items-center justify-between gap-4">
          <a href={WEBSITE_URL} className="flex items-center gap-4">
            <Image src="/images/scena-logo.jpg" alt="SCENA" width={220} height={72} className="h-14 w-auto object-contain" priority />
          </a>
          <div className="flex items-center gap-3">
            <CTA href={WHATSAPP_URL} external>Solicitar catálogo</CTA>
          </div>
        </div>
      </header>

      <section className="border-b border-secondary/20 bg-surface/35">
        <div className="container-custom py-14 md:py-16">
          <p className="label text-primary mb-4">Catálogo de productos metálicos SCENA</p>
          <h1 className="text-hero text-white mb-5 text-4xl md:text-6xl">Catálogo comercial de productos y soluciones</h1>
          <p className="max-w-3xl text-lg text-text-secondary">
            Base de productos reales para compra industrial: mangueras, conexiones, sellado, expansión y soluciones a medida. Sin precios, con CTA directo a ingeniería.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href={WHATSAPP_URL} external>Enviar requerimiento</CTA>
            <CTA href={WEBSITE_URL} external variant="ghost">Volver al sitio</CTA>
          </div>
        </div>
      </section>

      <section className="container-custom py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${activeCategory === category.id ? 'border-primary bg-primary text-white' : 'border-secondary/20 bg-surface text-text-secondary hover:border-primary hover:text-primary'}`}>
                {category.label}
              </button>
            ))}
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar producto, familia o solución" className="w-full md:max-w-sm border border-secondary/20 bg-surface px-4 py-3 text-sm text-white outline-none focus:border-primary" />
        </div>
      </section>

      <section className="container-custom pb-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <article key={product.id} className="border border-secondary/20 bg-surface p-6 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="label text-accent">{product.tag}</span>
                  <span className="label text-text-secondary">{product.category}</span>
                </div>
                <h2 className="font-liter text-lg uppercase tracking-wider text-white mb-3">{product.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{product.summary}</p>
                <ul className="space-y-2 text-sm text-text-primary">
                  {product.details.map((detail) => (
                    <li key={detail} className="border-l-2 border-primary/60 pl-3">{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <CTA href={WHATSAPP_URL} external>Cotizar</CTA>
                <CTA href={WHATSAPP_URL} external variant="ghost">Pedir ficha</CTA>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-secondary/20 bg-background p-6">
          <p className="label text-primary mb-2">Catálogo base</p>
          <p className="text-text-secondary">
            Este catálogo parte del PDF real de productos metálicos y se extendió con la estructura comercial de menú para que SCENA venda más rápido.
          </p>
        </div>
      </section>
    </main>
  );
}
