'use client';

import Image from 'next/image';
import React from 'react';

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? 'https://wa.me/528137157752';
const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'https://www.scena.com.mx';
const CATALOG_URL = process.env.NEXT_PUBLIC_CATALOG_URL ?? WEBSITE_URL;

const quickActions = [
  { label: 'Cotización', href: WHATSAPP_URL },
  { label: 'Pruebas hidrostáticas', href: WHATSAPP_URL },
  { label: 'Levantamiento en sitio', href: WHATSAPP_URL },
  { label: 'Catálogos técnicos', href: CATALOG_URL },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Industrias', href: '#industrias' },
];

const productFamilies = [
  ['Mangueras hidráulicas', 'Para circuitos de alta presión, retorno y transferencia de fluidos críticos.'],
  ['Mangueras industriales', 'Abrasión, vapor, químicos, alimentos y operación continua.'],
  ['Mangueras especiales', 'PTFE, acero inoxidable, alta temperatura y aplicaciones severas.'],
  ['Conexiones y acoples', 'Racores, bridas, adaptadores, clamps y soluciones de integración.'],
  ['Ensambles certificados', 'Armados listos para instalación con validación dimensional.'],
  ['Refacciones para conducción de fluidos', 'Componentes de reemplazo para continuidad operativa.'],
  ['Productos metálicos', 'Elementos metálicos flexibles y componentes de ingeniería.'],
  ['Soluciones a medida', 'Diseño técnico para reemplazo, rediseño y mejora de desempeño.'],
];

const services = [
  ['Pruebas hidrostáticas certificadas', 'Validamos integridad y presión de trabajo con evidencia técnica para liberar equipo con confianza.'],
  ['Levantamiento técnico en sitio', 'Medimos, documentamos y detectamos la solución correcta antes de detener más tiempo la línea.'],
  ['Ingeniería de reemplazo', 'Identificamos equivalencias y mejoras para sustituir el componente crítico correcto.'],
  ['Identificación de riesgos', 'Detectamos fugas, fatiga, abrasión, temperatura y exposición química antes de que escale la falla.'],
  ['Desarrollo de soluciones especiales', 'Convertimos condiciones de planta en una solución específica y cotizable.'],
  ['Soporte para mantenimiento industrial', 'Atención para paros, refacciones, mantenimientos programados y urgencias.'],
];

const industries = [
  'Oil & Gas',
  'Petroquímica',
  'Manufactura',
  'Construcción',
  'Minería',
  'Transporte',
  'Alimentos y bebidas',
  'Mantenimiento industrial',
];

const catalogs = [
  ['Catálogo de productos metálicos', CATALOG_URL],
  ['Catálogo hidráulico', CATALOG_URL],
  ['Catálogo industrial', CATALOG_URL],
  ['Fichas técnicas', CATALOG_URL],
  ['Solicitar catálogo completo', WHATSAPP_URL],
];

function Button({ href, children, variant = 'primary', external = false }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; external?: boolean }) {
  const base = 'inline-flex items-center justify-center px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors border';
  const styles = {
    primary: 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary',
    secondary: 'bg-secondary border-secondary text-white hover:bg-transparent hover:text-secondary',
    ghost: 'bg-transparent border-white/15 text-white hover:border-primary hover:text-primary',
  }[variant];
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="label text-primary">{eyebrow}</p>
      <h2 className="text-section text-white mt-2 mb-4">{title}</h2>
      <p className="text-text-secondary text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen overflow-x-hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-3 border border-primary bg-background/95 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        <Image src="/images/whatsapp-button-logo.png" alt="" aria-hidden="true" width={28} height={28} className="h-7 w-7" />
        <span className="text-xs font-liter uppercase tracking-widest text-white">WhatsApp</span>
      </a>

      <header className="sticky top-0 z-40 border-b border-secondary/20 bg-background/90 backdrop-blur-md">
        <div className="container-custom flex h-20 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-4">
            <Image src="/images/scena-logo.jpg" alt="SCENA" width={220} height={72} className="h-14 w-auto object-contain" priority />
          </a>
          <nav className="hidden xl:flex items-center gap-6 text-xs font-liter uppercase tracking-[0.2em] text-text-secondary">
            <a href="#soluciones" className="hover:text-primary">Soluciones</a>
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#catalogos" className="hover:text-primary">Catálogos</a>
            <a href="#industrias" className="hover:text-primary">Industrias</a>
            <a href="#marcas" className="hover:text-primary">Marcas</a>
            <a href="#urgencia" className="hover:text-primary">Urgencia</a>
          </nav>
          <Button href={WHATSAPP_URL} external variant="primary">Solicitar cotización</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/hero-refinery.png" alt="Industria crítica" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="label text-accent mb-5">Ingeniería para Sistemas de Conducción de Fluidos</p>
            <h1 className="text-hero text-white mb-6 text-4xl md:text-6xl leading-[1.02]">
              Ingeniería, suministro y servicio para sistemas de conducción de fluidos industriales
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-text-secondary mb-8">
              Mangueras hidráulicas, industriales y especializadas, conexiones, ensambles, pruebas hidrostáticas certificadas y levantamientos en sitio para industria crítica.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={WHATSAPP_URL} external variant="primary">Solicitar cotización</Button>
              <Button href={WHATSAPP_URL} external variant="secondary">Hablar con ingeniería</Button>
              <Button href={CATALOG_URL} external variant="ghost">Ver catálogos</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-secondary/20 bg-surface/35">
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            {quickActions.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="border border-secondary/20 bg-background px-4 py-3 text-center text-xs font-liter uppercase tracking-[0.18em] text-white hover:border-primary hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="container-custom py-20">
        <SectionTitle
          eyebrow="Soluciones que suministramos"
          title="Familias de productos"
          description="Acceso rápido a las familias que más consulta compra industrial. Cada card prioriza cotización y, cuando aplica, catálogo."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productFamilies.map(([title, desc]) => (
            <article key={title} className="border border-secondary/20 bg-surface p-5 hover-premium flex flex-col justify-between min-h-[210px]">
              <div>
                <h3 className="font-liter text-base uppercase tracking-wider text-white mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={WHATSAPP_URL} external variant="primary">Cotizar</Button>
                <Button href={CATALOG_URL} external variant="ghost">Ver catálogo</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicios" className="border-y border-secondary/20 bg-surface/35">
        <div className="container-custom py-20">
          <SectionTitle
            eyebrow="Servicios técnicos especializados"
            title="Servicios que ayudan a cerrar compra"
            description="Cada servicio reduce riesgo, acelera especificación y mejora el tiempo de respuesta del comprador industrial."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(([title, desc]) => (
              <article key={title} className="border border-secondary/20 bg-background p-6">
                <h3 className="font-liter text-base uppercase tracking-wider text-white mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{desc}</p>
                <Button href={WHATSAPP_URL} external variant="primary">Solicitar ingeniería</Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogos" className="container-custom py-20">
        <SectionTitle
          eyebrow="Catálogos técnicos"
          title="Zona de descarga rápida"
          description="Si el catálogo existe, lo enlazamos. Si no, el CTA lleva a WhatsApp para envío inmediato de información comercial."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {catalogs.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="border border-secondary/20 bg-surface p-5 text-center hover:border-primary">
              <span className="block text-sm font-semibold text-white">{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="industrias" className="border-y border-secondary/20 bg-surface/35">
        <div className="container-custom py-20">
          <SectionTitle
            eyebrow="Industrias que atendemos"
            title="Aplicación comercial por sector"
            description="Enfocado a parar fugas, presión, temperatura, abrasión, químicos y disponibilidad."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((name) => (
              <article key={name} className="border border-secondary/20 bg-background p-5">
                <h3 className="font-liter text-sm uppercase tracking-wider text-white mb-2">{name}</h3>
                <p className="text-sm text-text-secondary">Resuelve problemas de paros de línea, fugas, presión, temperatura y seguridad operativa.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marcas" className="container-custom py-20">
        <SectionTitle
          eyebrow="Marcas que respaldan nuestras soluciones"
          title="Respaldo técnico y comercial"
          description="Usamos texto limpio porque no vamos a inventar logos que no estén disponibles en assets."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {['Kuriyama', 'Alfagomma', 'Piranha'].map((brand) => (
            <div key={brand} className="border border-secondary/20 bg-surface p-6 text-center">
              <span className="font-liter text-lg uppercase tracking-[0.2em] text-white">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="urgencia" className="border-t border-secondary/20 bg-background">
        <div className="container-custom py-20">
          <div className="max-w-4xl border border-secondary/20 bg-surface p-8 md:p-10">
            <p className="label text-primary mb-3">¿Tienes una línea detenida, fuga o componente crítico?</p>
            <h2 className="text-section text-white mb-4">Envíanos foto, medida, aplicación o ficha técnica</h2>
            <p className="text-text-secondary text-lg mb-8">Nuestro equipo te ayuda a identificar la solución correcta y acelerar tu compra.</p>
            <Button href={WHATSAPP_URL} external variant="primary">Enviar información por WhatsApp</Button>
          </div>
        </div>
      </section>

      <section className="border-t border-secondary/20 bg-surface/35">
        <div className="container-custom py-20">
          <SectionTitle
            eyebrow="Solicita una cotización técnica"
            title="Cierre comercial"
            description="Si no hay backend de formulario, el CTA directo a WhatsApp mantiene la velocidad de respuesta."
          />
          <div className="flex flex-wrap gap-3">
            <Button href={WHATSAPP_URL} external variant="primary">Solicitar cotización técnica</Button>
            <Button href={WHATSAPP_URL} external variant="secondary">Enviar archivo o foto</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-secondary/20 bg-background">
        <div className="container-custom py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/scena-logo.jpg" alt="SCENA" width={220} height={72} className="h-14 w-auto object-contain" />
            <div>
              <p className="label text-accent">SCENA</p>
              <p className="text-sm text-text-secondary">Ingeniería para sistemas de conducción de fluidos</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={WHATSAPP_URL} external variant="primary">WhatsApp</Button>
            <Button href={WEBSITE_URL} external variant="ghost">Sitio web</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
