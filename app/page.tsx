'use client';

import React, { useState } from 'react';

const WEBSITE_URL = 'https://www.scena.com.mx';
const EMAIL_URL = 'mailto:ventas@scena.com.mx';
const PHONE_URL = 'tel:+529334062126';
const WHATSAPP_URL = 'https://wa.me/528137157752';

// Custom SVG Icons with consistent outline stroke
const LeakIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.105-7.5 11.5-7.5 11.5s-7.5-4.395-7.5-11.5a7.5 7.5 0 0 1 15 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m3 3 18 18" />
  </svg>
);

const VibrationIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3L9 3l6 18 3-9h3" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const TempIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v14M9 6h6M9 10h6M9 14h6m-3-11a3 3 0 0 1 3 3v8.158a6 6 0 1 1-6 0V6a3 3 0 0 1 3-3z" />
  </svg>
);

const FlaskIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5M12 3v5.25M9 8.25h6M6.75 19.5a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25L15 8.25H9L6.75 19.5z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a37.39 37.39 0 0 1-5.746 3.597 1.5 1.5 0 0 1-1.322 0 37.381 37.381 0 0 1-5.746-3.597A5.336 5.336 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a37.39 37.39 0 0 1 5.746-3.597 1.5 1.5 0 0 1 1.322 0 37.385 37.385 0 0 1 5.746 3.597C20.37 9.61 21 10.732 21 12z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
  </svg>
);

const PenRulerIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83m-3.75 3.75a2.25 2.25 0 0 1-3.18-3.18l7.5-7.5a2.25 2.25 0 0 1 3.18 3.18M11.42 15.17l3.75-3.75M15.17 11.42l3.75-3.75M8.25 8.25h.008v.008H8.25V8.25z" />
  </svg>
);

const FactoryIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25m16.5 0V7.493c0-.83-.497-1.585-1.258-1.92l-4.125-1.812a1.125 1.125 0 0 0-1.034 0L7.75 5.573c-.76.335-1.258 1.09-1.258 1.92v6.657" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

export default function Home() {
  // Quotation form local state
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    sector: '',
    mensaje: '',
    aceptaTerminos: false,
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: '',
  });

  const conversionCta = WHATSAPP_URL;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      aceptaTerminos: e.target.checked,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: '' });

    // Validate fields
    if (!formData.nombre || !formData.empresa || !formData.correo || !formData.telefono || !formData.sector || !formData.mensaje) {
      setFormState({ submitting: false, success: false, error: 'Por favor complete todos los campos requeridos.' });
      return;
    }

    if (!formData.aceptaTerminos) {
      setFormState({ submitting: false, success: false, error: 'Debe aceptar los términos y tratamiento de datos para continuar.' });
      return;
    }

    const message = [
      'Hola SCENA, solicito información técnica.',
      `Nombre: ${formData.nombre}`,
      `Empresa: ${formData.empresa}`,
      `Correo: ${formData.correo}`,
      `Teléfono: ${formData.telefono}`,
      `Sector: ${formData.sector}`,
      `Detalle: ${formData.mensaje}`,
    ].join('\n');

    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormState({ submitting: false, success: true, error: '' });
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      sector: '',
      mensaje: '',
      aceptaTerminos: false,
    });
  };

  return (
    <main className="bg-background text-text-primary min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* 0. HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-secondary/20 bg-background/90 backdrop-blur-md">
        <div className="container-custom flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img
              src="/images/scena-logo.jpg"
              alt="SCENA"
              className="h-14 w-auto max-w-[220px] object-contain"
              loading="eager"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-liter tracking-widest uppercase text-text-secondary">
            <a href="#problemas" className="hover:text-primary transition-colors">Problemas</a>
            <a href="#soluciones" className="hover:text-primary transition-colors">Soluciones</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#sectores" className="hover:text-primary transition-colors">Sectores</a>
            <a href="#casos" className="hover:text-primary transition-colors">Casos</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <a href={conversionCta} className="btn-outline px-6 py-2.5 text-xs font-semibold" target="_blank" rel="noreferrer">
            Solicitar Cotización
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-start py-20">
        {/* Full-bleed background image with linear-gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-refinery.png"
            alt="Refinería de conducción de fluidos a presión"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark gradient mask from background color to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
        </div>

        <div className="container-custom relative z-20 w-full">
          <div className="max-w-3xl flex">
            {/* Vertical copper bar indicator */}
            <div className="divider-vertical-accent mr-6 hidden sm:block w-[4px]" />
            
            <div>
              <span className="label text-primary tracking-[4px] mb-4 block">INGENIERÍA PARA FLUIDOS INDUSTRIALES</span>
              <h1 className="text-hero text-white font-bold mb-6 text-4xl sm:text-5xl md:text-6xl tracking-[4px] leading-[1.05]">
                INGENIERÍA PARA SISTEMAS DE CONDUCCIÓN DE FLUIDOS
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl font-light mb-8 max-w-2xl leading-relaxed">
                Diseñamos, fabricamos e integramos soluciones para sistemas críticos en la industria mexicana. Desde mangueras metálicas flexibles hasta juntas de expansión de alta especificación.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a href={conversionCta} className="btn-primary" target="_blank" rel="noreferrer">
                  Solicitar Ingeniería
                </a>
                <a href={PHONE_URL} className="btn-outline">
                  Hablar con Especialista
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/20 pt-6 mt-6">
            <span className="label text-text-secondary mr-6 block sm:inline mb-3 sm:mb-0">SECTORES ATENDIDOS:</span>
            <div className="inline-flex flex-wrap gap-x-6 gap-y-2 text-xs font-liter tracking-widest text-text-primary">
              <span>PETROQUÍMICA</span>
              <span className="text-primary font-bold">·</span>
              <span>OIL & GAS</span>
              <span className="text-primary font-bold">·</span>
              <span>ENERGÍA</span>
              <span className="text-primary font-bold">·</span>
              <span>MARINA</span>
              <span className="text-primary font-bold">·</span>
              <span>MANUFACTURA</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 2. PROBLEMAS QUE RESOLVEMOS */}
      <section id="problemas" className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">ANÁLISIS DE RIESGO</span>
            <h2 className="text-section text-white mt-2 mb-4">PROBLEMAS QUE RESOLVEMOS</h2>
            <p className="text-text-secondary text-lg">
              Evitamos paros de planta no programados y riesgos operacionales mediante ingeniería precisa y selección adecuada de materiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <LeakIcon />
                  <span className="label text-text-secondary font-mono">01</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">FUGAS</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sellado de sistemas con empaques de alta especificación. Diseños espiralados (spiral wound), camprofile y juntas de anillo (ring joint).
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <VibrationIcon />
                  <span className="label text-text-secondary font-mono">02</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">VIBRACIÓN</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Mangueras metálicas flexibles en aceros inoxidables T304/T316 para absorción dinámica de vibraciones. Conexiones NPT, BSP y bridadas.
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <AlertIcon />
                  <span className="label text-text-secondary font-mono">03</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">FALLAS PREMATURAS</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Evitamos la fatiga mecánica mediante la correcta selección de aleaciones y elastómeros según el fluido, temperatura y presión de operación.
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <TempIcon />
                  <span className="label text-text-secondary font-mono">04</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">EXPANSIÓN TÉRMICA</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Cálculo e integración de juntas de expansión metálicas, de caucho y PTFE para compensar dilataciones y contracciones axiales y laterales.
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <FlaskIcon />
                  <span className="label text-text-secondary font-mono">05</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">COMPATIBILIDAD QUÍMICA</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Análisis de compatibilidad de elastómeros, metales y sellantes como Grafoil, PTFE, fibra cerámica y Vitón ante fluidos altamente corrosivos.
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

            {/* Card 6 */}
            <div className="bg-surface p-8 border border-secondary/20 hover-premium flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <ShieldIcon />
                  <span className="label text-text-secondary font-mono">06</span>
                </div>
                <h3 className="text-subtitle text-white font-bold mb-2">SEGURIDAD OPERACIONAL</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Cumplimiento estricto con las normativas ASME, API e ISO. Trazabilidad completa de materiales y certificación de procesos de soldadura.
                </p>
              </div>
              <a href={conversionCta} className="text-xs font-liter text-primary hover:text-white transition-colors tracking-widest mt-4 uppercase" target="_blank" rel="noreferrer">
                Ver más &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 3. SOLUCIONES */}
      <section id="soluciones" className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">SISTEMAS DE CONDUCCIÓN DE FLUIDOS</span>
            <h2 className="text-section text-white mt-2 mb-4">SOLUCIONES DE INGENIERÍA</h2>
            <p className="text-text-secondary text-lg">
              Diseño e integración de componentes críticos a especificación. No vendemos catálogo cerrado; adaptamos la solución al punto de falla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Solución 1 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Mangueras Metálicas Flexibles</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Fabricadas en aceros inoxidables T304, T316 y T321. Ideales para soportar temperaturas extremas, alta presión y corrosión agresiva. Conexiones NPT, BSP, bridas y soldadura a tope. Conformes a ASME B31.3.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

            {/* Solución 2 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Juntas de Expansión</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Metálicas, de caucho (hule) y PTFE. Diseñadas para absorber la vibración del sistema, compensar la dilatación térmica lineal y absorber desalineaciones axiales, laterales o angulares en tuberías de planta.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

            {/* Solución 3 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Empaques Industriales</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Empaques espirometálicos tipo Flexitallic (spiral wound), camprofile, ring joints y láminas prensadas. Fabricados con rellenos de Grafoil, PTFE o metales blandos para sellado hermético en reactores, intercambiadores y válvulas.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

            {/* Solución 4 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Mangueras Industriales</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Líneas hidráulicas de alta presión, mangueras químicas, alimentarias certificadas y mangueras abrasivas. Materiales en PVC, UHMWPE y composites reforzados con alambre de acero. Conformes a normas FDA.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

            {/* Solución 5 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Accesorios y Conexiones</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Racores de acople rápido, adaptadores camlock, bridas forjadas, válvulas de control y sistemas de soporte para líneas. Disponibles en acero al carbón, inoxidable y aleaciones especiales bajo conformidad API.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

            {/* Solución 6 */}
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-3">Servicio de Ingeniería</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Levantamiento técnico de piping, diagnóstico metalúrgico y químico de fallas, diseño de soluciones personalizadas de conducción de fluidos, fabricación rápida de repuestos y pruebas hidrostáticas certificadas.
              </p>
              <a href={conversionCta} className="text-xs font-liter text-accent tracking-widest uppercase hover:underline" target="_blank" rel="noreferrer">
                Ver Especificaciones &rarr;
              </a>
            </div>

          </div>

          <div className="mt-16 bg-surface p-8 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-subtitle text-white font-bold mb-2">¿No encuentras una solución estándar para tu línea?</h4>
              <p className="text-text-secondary text-sm">Nuestros ingenieros de aplicación realizan diseños mecánicos a la medida de tus condiciones de planta.</p>
            </div>
            <a href={conversionCta} className="btn-primary py-3 px-6 shrink-0" target="_blank" rel="noreferrer">
              Contactar Ingeniería
            </a>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 4. PROCESO DE INGENIERÍA SCENA */}
      <section id="proceso" className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">METODOLOGÍA DE INTEGRACIÓN</span>
            <h2 className="text-section text-white mt-2 mb-4">PROCESO DE INGENIERÍA SCENA</h2>
            <p className="text-text-secondary text-lg">
              Metodología probada en plantas industriales de alta criticidad para asegurar el correcto desempeño operativo desde el diagnóstico inicial hasta la puesta en marcha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">01</span>
                <ClipboardIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">LEVANTAMIENTO</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Visita técnica en planta. Documentación fotográfica, mediciones dimensionales precisas y registro de variables de operación (fluido, temperatura, presión).
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">02</span>
                <SearchIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">DIAGNÓSTICO</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Análisis metalográfico y operativo de la falla. Identificamos la causa raíz del colapso: si fue de origen químico, térmico, mecánico por fatiga o de operación.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">03</span>
                <PenRulerIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">DISEÑO</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Selección analítica de componentes y aleaciones. Modelado y simulación por elementos finitos (FEA) de juntas y mangueras, y especificación técnica formal.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">04</span>
                <FactoryIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">FABRICACIÓN</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Proceso de manufactura de alta precisión. Soldadura TIG calificada y fabricación bajo lineamientos estrictos de las normas ASME, API e ISO.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">05</span>
                <CheckIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">PRUEBAS</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Validación de integridad física. Pruebas hidrostáticas calibradas, pruebas neumáticas de burbuja y ciclos de presión térmica para garantizar cero fugas.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative border border-secondary/10 p-6 bg-surface/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-primary text-xl font-bold font-mono">06</span>
                <WrenchIcon />
              </div>
              <h3 className="font-liter text-base font-bold text-white uppercase tracking-wider mb-2">INSTALACIÓN</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Supervisión del montaje y alineación en campo por ingenieros de servicio técnico. Puesta en marcha de la línea y capacitación al personal de mantenimiento.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 5. CAPACIDADES TÉCNICAS */}
      <section className="py-24 bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">CAPACIDAD DE RESPUESTA</span>
            <h2 className="text-section text-white mt-2 mb-4">CAPACIDADES TÉCNICAS</h2>
            <p className="text-text-secondary text-lg">
              Infraestructura especializada para asegurar la máxima calidad y trazabilidad técnica en procesos críticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Capacidad 1 */}
            <div className="border border-secondary/20 p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h4 className="font-liter text-base font-bold text-white uppercase tracking-wide mb-3">FABRICACIÓN ESPECIALIZADA</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Talleres metalmecánicos propios equipados para la soldadura, ensamblado y forjado de mangueras trenzadas y juntas metálicas bajo especificación del cliente. Certificados en ISO 9001.
                </p>
              </div>
              <span className="label text-primary text-right font-mono">ASME Section IX</span>
            </div>

            {/* Capacidad 2 */}
            <div className="border border-secondary/20 p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h4 className="font-liter text-base font-bold text-white uppercase tracking-wide mb-3">INGENIERÍA DE APLICACIÓN</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Selección de aleaciones mediante simulación de compatibilidad química e hidráulica. Cálculos predictivos de ciclos de vida por fatiga mecánica ante golpes de ariete y vibraciones.
                </p>
              </div>
              <span className="label text-primary text-right font-mono">FEA Software</span>
            </div>

            {/* Capacidad 3 */}
            <div className="border border-secondary/20 p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h4 className="font-liter text-base font-bold text-white uppercase tracking-wide mb-3">PRUEBAS HIDROSTÁTICAS</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Banco de pruebas certificado de hasta 20,000 PSI para validar la presión de diseño, ráfagas mecánicas y estanqueidad del sello. Entrega de reportes con trazabilidad digital.
                </p>
              </div>
              <span className="label text-primary text-right font-mono">Certificados PDF</span>
            </div>

            {/* Capacidad 4 */}
            <div className="border border-secondary/20 p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h4 className="font-liter text-base font-bold text-white uppercase tracking-wide mb-3">LEVANTAMIENTOS EN SITIO</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Equipo móvil de ingeniería de campo con instrumentación de precisión (calibradores láser, boroscopios) para el mapeo dimensional directo de líneas y tuberías en sitio.
                </p>
              </div>
              <span className="label text-primary text-right font-mono">Mapeo Láser</span>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 6. SECTORES QUE ATENDEMOS & KPI STATS */}
      <section id="sectores" className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">CAMPOS DE EXPERIENCIA</span>
            <h2 className="text-section text-white mt-2 mb-4">SECTORES QUE ATENDEMOS</h2>
            <p className="text-text-secondary text-lg">
              Experiencia comprobada en las industrias con los requerimientos operativos más severos y críticos de México.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            
            {/* Sector 1 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/1_342_Oil_Refinery_Dramatic_Lighting.png" alt="Petroquímica" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">01</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">PETROQUÍMICA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Refinerías y plantas de cracking. Suministramos mangueras para catalizadores, empaques para reactores y juntas de expansión metálicas de alta presión.
                </p>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/9_342_Oil_Refinery_Dramatic_Lighting.png" alt="Oil & Gas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">02</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">OIL & GAS</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Procesos Upstream, Midstream y Downstream. Juntas para líneas críticas de conducción, mangueras de perforación y empaques para válvulas de alta presión.
                </p>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/3_5_480_Industrial_Plant_Night_Lights.png" alt="Energía" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">03</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">ENERGÍA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Centrales termoeléctricas y geotérmicas. Juntas de expansión metálicas multicapa para turbinas de vapor y mangueras para sistemas de agua de enfriamiento.
                </p>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/4_Industrial_Electrics_and_Power_Hydraulics.png" alt="Minería" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">04</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">MINERÍA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Plantas de beneficio y transporte. Mangueras reforzadas para lodos abrasivos, acoples rápidos y empaques para bridas en condiciones severas de polvo.
                </p>
              </div>
            </div>

            {/* Sector 5 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/plant-night.png" alt="Manufactura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">05</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">MANUFACTURA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Industrias automotriz y química. Mangueras flexibles sanitarias, empaques industriales y conexiones rápidas de latón y acero inoxidable.
                </p>
              </div>
            </div>

            {/* Sector 6 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/offshore-platform.png" alt="Marina" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">06</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">MARINA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Embarcaciones y plataformas petroleras offshore. Conducción de combustible y fluidos bajo corrosión marina severa y movimientos oscilatorios continuos.
                </p>
              </div>
            </div>

            {/* Sector 7 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/8_Industrial_Factory_Steam_Smoke_Dark.png" alt="Alimentaria" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">07</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">ALIMENTARIA</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Líneas de pasteurización y procesamiento. Mangueras con certificación de grado alimenticio FDA, juntas sanitarias tri-clamp y sellos limpios.
                </p>
              </div>
            </div>

            {/* Sector 8 */}
            <div className="relative group h-[300px] overflow-hidden border border-secondary/20">
              <img src="/images/7_Long_industrial_pipelines_reflect.png" alt="Construcción" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <span className="label text-primary mb-1">08</span>
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-2">CONSTRUCCIÓN</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Infraestructuras críticas de bombeo hidráulico y sistemas HVAC a gran escala. Mangueras metálicas y juntas de expansión para vibraciones de edificio.
                </p>
              </div>
            </div>

          </div>

          {/* KPI Statistics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-secondary/20 pt-12">
            <div>
              <div className="kpi">15+</div>
              <div className="label mt-2">Años de Experiencia</div>
            </div>
            <div>
              <div className="kpi">500+</div>
              <div className="label mt-2">Proyectos Entregados</div>
            </div>
            <div>
              <div className="kpi">8</div>
              <div className="label mt-2">Sectores Atendidos</div>
            </div>
            <div>
              <div className="kpi">24H</div>
              <div className="label mt-2">Respuesta de Emergencia</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 7. CASOS DE APLICACIÓN (CASOS DE ÉXITO) */}
      <section id="casos" className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <span className="label text-primary">EVIDENCIA OPERATIVA</span>
            <h2 className="text-section text-white mt-2 mb-4">CASOS DE APLICACIÓN</h2>
            <p className="text-text-secondary text-lg">
              Casos de éxito reales donde la ingeniería especializada de SCENA evitó fallas mecánicas en procesos críticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case 1 */}
            <article className="border border-secondary/20 bg-surface flex flex-col h-full hover-premium">
              <div className="h-[200px] overflow-hidden relative">
                <img src="/images/industrial-interior.png" alt="Caso Refinería" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="label text-primary block mb-2">Refinería</span>
                  <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-4">Compensación de expansión térmica en refinería</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Especificación de juntas de expansión metálicas multicapa de alta temperatura para líneas de vapor de proceso en planta de polimerización.
                  </p>
                </div>
                <div className="border-t border-secondary/15 pt-4">
                  <span className="label text-xs block mb-1">Resultado:</span>
                  <p className="text-accent text-sm font-semibold tracking-wide">
                    Cero pérdidas de presión y eliminación completa de fugas por fatiga térmica en 3 años.
                  </p>
                </div>
              </div>
            </article>

            {/* Case 2 */}
            <article className="border border-secondary/20 bg-surface flex flex-col h-full hover-premium">
              <div className="h-[200px] overflow-hidden relative">
                <img src="/images/offshore-platform.png" alt="Caso Marino" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="label text-primary block mb-2">Plataforma Marina</span>
                  <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-4">Conducción de fluidos en plataforma offshore</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Suministro de mangueras trenzadas metálicas en acero inoxidable T316 resistentes a la corrosión salina extrema para transferencia de hidrocarburos.
                  </p>
                </div>
                <div className="border-t border-secondary/15 pt-4">
                  <span className="label text-xs block mb-1">Resultado:</span>
                  <p className="text-accent text-sm font-semibold tracking-wide">
                    Continuidad operativa de carga garantizada bajo condiciones mecánicas de oleaje severo.
                  </p>
                </div>
              </div>
            </article>

            {/* Case 3 */}
            <article className="border border-secondary/20 bg-surface flex flex-col h-full hover-premium">
              <div className="h-[200px] overflow-hidden relative">
                <img src="/images/metal-hose-macro.png" alt="Caso Vibración" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="label text-primary block mb-2">Química y Conexión</span>
                  <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-4">Control de vibración en líneas críticas de proceso</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Integración de mangueras metálicas flexibles de alta presión con bridas de seguridad como amortiguador de vibración dinámica en bombas de alta potencia.
                  </p>
                </div>
                <div className="border-t border-secondary/15 pt-4">
                  <span className="label text-xs block mb-1">Resultado:</span>
                  <p className="text-accent text-sm font-semibold tracking-wide">
                    Reducción del 94% en fatiga mecánica en conexiones bridadas circundantes.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 8. CATÁLOGO INTERACTIVO */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="label text-primary">CATÁLOGO INTERACTIVO</span>
              <h2 className="text-section text-white mt-2 mb-4">¿YA SABES QUÉ ORDENAR?</h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Entra al catálogo para seleccionar piezas por secciones, armar tu carrito y enviar la solicitud de cotización por WhatsApp con el detalle completo.
              </p>
            </div>

            <div className="bg-surface border border-secondary/20 p-8">
              <p className="text-white font-bold text-xl mb-3">Pedido rápido</p>
              <p className="text-text-secondary text-sm mb-6">
                Agrega mangueras, juntas, conexiones y empaques desde un flujo pensado para cotización comercial.
              </p>
              <a href="/catalogo" className="btn-primary w-full">
                Ir al catálogo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACTO Y COTIZACIÓN TÉCNICA */}
      <section id="contacto" className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Block */}
            <div className="lg:col-span-5">
              <span className="label text-primary">CANAL DE INGENIERÍA</span>
              <h2 className="text-section text-white mt-2 mb-6">HABLEMOS DE TU PROYECTO</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Un especialista en ingeniería de fluidos evaluará tu requerimiento y te responderá en menos de 24 horas. Cobertura completa para toda la República Mexicana.
              </p>

              <div className="space-y-6">
                
                {/* Info item 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.18-4.156-6.99-6.979l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="label text-[10px]">Línea directa de ingeniería</div>
                    <a href="tel:+528112345678" className="text-white text-base font-liter tracking-wide hover:text-primary transition-colors">
                      +52 (81) 1234 5678
                    </a>
                  </div>
                </div>

                {/* Info item 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="label text-[10px]">Correo técnico garantizado</div>
                    <a href="mailto:ingenieria@scena.com.mx" className="text-white text-base font-liter tracking-wide hover:text-primary transition-colors">
                      ingenieria@scena.com.mx
                    </a>
                  </div>
                </div>

                {/* Info item 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="label text-[10px]">Ubicación y Cobertura</div>
                    <span className="text-white text-base font-liter tracking-wide block">
                      Monterrey, Nuevo León, México
                    </span>
                  </div>
                </div>

              </div>

              {/* Emergency numbers */}
              <div className="mt-8 p-6 bg-surface border-l-2 border-primary border-y border-r border-secondary/20">
                <span className="label text-primary font-bold block mb-1">EMERGENCIA OPERACIONAL 24H</span>
                <p className="text-[11px] text-text-secondary leading-normal mb-3">
                  Atención a fallas críticas en planta y paros inesperados fuera de horario comercial.
                </p>
                <a href="tel:+528187654321" className="text-white text-lg font-liter font-bold tracking-wider hover:text-primary transition-colors">
                  +52 (81) 8765 4321
                </a>
              </div>

              {/* Certifications footer */}
              <div className="mt-10 border-t border-secondary/15 pt-6">
                <span className="label text-[10px] block mb-3">CERTIFICACIONES Y NORMAS REGULATORIAS:</span>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-liter text-text-secondary tracking-widest">
                  <span>ISO 9001</span>
                  <span>·</span>
                  <span>ASME IX</span>
                  <span>·</span>
                  <span>API 6A</span>
                  <span>·</span>
                  <span>NACE MR0175</span>
                </div>
              </div>
            </div>

            {/* Quotation Form Block */}
            <div className="lg:col-span-7">
              <div className="bg-surface p-8 border border-secondary/25">
                <h3 className="font-liter text-lg font-bold text-white uppercase tracking-wider mb-6">Especificación Técnica de Proyecto</h3>
                
                {formState.success ? (
                  <div className="py-12 text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a37.39 37.39 0 0 1-5.746 3.597 1.5 1.5 0 0 1-1.322 0 37.381 37.381 0 0 1-5.746-3.597A5.336 5.336 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a37.39 37.39 0 0 1 5.746-3.597 1.5 1.5 0 0 1 1.322 0 37.385 37.385 0 0 1 5.746 3.597C20.37 9.61 21 10.732 21 12z" />
                    </svg>
                    <h4 className="font-liter text-xl font-bold text-white tracking-wide mb-3">REQUERIMIENTO RECIBIDO</h4>
                    <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
                      La información de tu proyecto ha sido registrada con éxito. Un especialista técnico se pondrá en contacto en menos de 24 horas.
                    </p>
                    <button 
                      onClick={() => setFormState(prev => ({ ...prev, success: false }))} 
                      className="btn-outline text-xs py-2 px-6 mt-8"
                    >
                      Enviar otro requerimiento
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="label text-[10px]" htmlFor="nombre">Nombre Completo *</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Ing. Alejandro Garza"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>

                      {/* Company input */}
                      <div className="flex flex-col gap-2">
                        <label className="label text-[10px]" htmlFor="empresa">Empresa / Planta *</label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          placeholder="Industrial Química de México S.A."
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="label text-[10px]" htmlFor="correo">Correo Electrónico *</label>
                        <input
                          type="email"
                          id="correo"
                          name="correo"
                          placeholder="a.garza@empresa.com.mx"
                          value={formData.correo}
                          onChange={handleInputChange}
                          className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-2">
                        <label className="label text-[10px]" htmlFor="telefono">Teléfono / Extensión *</label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          placeholder="+52 (81) 9876 5432"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>

                    </div>

                    {/* Sector select */}
                    <div className="flex flex-col gap-2">
                      <label className="label text-[10px]" htmlFor="sector">Sector Industrial *</label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors cursor-pointer"
                      >
                        <option value="" disabled>Seleccione su industria</option>
                        <option value="petroquimica">Petroquímica y Refinería</option>
                        <option value="oilgas">Oil & Gas</option>
                        <option value="energia">Energía y Termoeléctricas</option>
                        <option value="mineria">Minería</option>
                        <option value="manufactura">Manufactura General</option>
                        <option value="marina">Marina Offshore</option>
                        <option value="alimentaria">Alimentaria y Farmacéutica</option>
                        <option value="construccion">Construcción y HVAC</option>
                      </select>
                    </div>

                    {/* Message / Description textarea */}
                    <div className="flex flex-col gap-2">
                      <label className="label text-[10px]" htmlFor="mensaje">Descripción de la Aplicación Crítica *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        placeholder="Describa la aplicación: tipo de fluido, temperatura de diseño, presión de operación, vibración en el punto, o el problema actual de falla prematura..."
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        className="bg-background border border-secondary/20 px-4 py-3 text-sm text-white focus:border-primary outline-none transition-colors resize-y"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="aceptaTerminos"
                        name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 mt-1 bg-background border border-secondary/20 text-primary focus:ring-primary focus:ring-0 cursor-pointer"
                      />
                      <label className="text-xs text-text-secondary select-none cursor-pointer" htmlFor="aceptaTerminos">
                        Acepto los términos de la política de privacidad y autorizo el tratamiento de datos para especificación técnica.
                      </label>
                    </div>

                    {formState.error && (
                      <div className="text-red-500 text-xs font-semibold">
                        {formState.error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className="btn-primary w-full py-4 text-sm font-semibold tracking-widest"
                    >
                      {formState.submitting ? 'Registrando Requerimiento...' : 'ENVIAR SOLICITUD'}
                    </button>
                    
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 9. CONTACTO DIRECTO */}
      <section className="py-20 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <span className="label text-primary">CONTACTO DIRECTO</span>
            <h2 className="text-section text-white mt-2 mb-4">CANALES DE ATENCIÓN</h2>
            <p className="text-text-secondary text-lg">
              Accede al canal correcto según tu necesidad. En móvil el orden prioriza WhatsApp, llamada, correo y sitio web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="border border-secondary/20 bg-background p-6 hover-premium order-1 md:order-none">
              <div className="label text-primary mb-3">WhatsApp</div>
              <div className="text-white text-lg font-liter tracking-wide">81 3715 7752</div>
              <p className="text-text-secondary text-sm mt-3">Respuesta directa para asesoría técnica y cotizaciones.</p>
            </a>

            <a href={PHONE_URL} className="border border-secondary/20 bg-background p-6 hover-premium order-2 md:order-none">
              <div className="label text-primary mb-3">Llamada</div>
              <div className="text-white text-lg font-liter tracking-wide">933 406 2126</div>
              <p className="text-text-secondary text-sm mt-3">Comunicación inmediata con el equipo comercial.</p>
            </a>

            <a href={EMAIL_URL} className="border border-secondary/20 bg-background p-6 hover-premium order-3 md:order-none">
              <div className="label text-primary mb-3">Correo</div>
              <div className="text-white text-lg font-liter tracking-wide">ventas@scena.com.mx</div>
              <p className="text-text-secondary text-sm mt-3">Envío de requerimientos, fichas técnicas y documentación.</p>
            </a>

            <a href={WEBSITE_URL} target="_blank" rel="noreferrer" className="border border-secondary/20 bg-background p-6 hover-premium order-4 md:order-none">
              <div className="label text-primary mb-3">Sitio Web</div>
              <div className="text-white text-lg font-liter tracking-wide">scena.com.mx</div>
              <p className="text-text-secondary text-sm mt-3">Acceso al portal institucional de SCENA.</p>
            </a>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      {/* 10. FOOTER */}
      <footer className="py-16 bg-surface">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5">
              <img
                src="/images/scena-logo.jpg"
                alt="SCENA"
                className="h-16 w-auto max-w-[260px] object-contain"
                loading="lazy"
              />
              <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-sm">
                Firma mexicana de ingeniería industrial especializada en sistemas de conducción de fluidos para procesos críticos. No vendemos catálogo, diseñamos soluciones confiables.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3">
              <span className="label text-[10px] block mb-4">Navegación</span>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li><a href="#problemas" className="hover:text-primary transition-colors">Riesgos Operativos</a></li>
                <li><a href="#soluciones" className="hover:text-primary transition-colors">Componentes de Conducción</a></li>
                <li><a href="#proceso" className="hover:text-primary transition-colors">Proceso Técnico</a></li>
                <li><a href="#sectores" className="hover:text-primary transition-colors">Sectores de Aplicación</a></li>
                <li><a href={conversionCta} className="hover:text-primary transition-colors">Contacto Técnico</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Hours */}
            <div className="md:col-span-4">
              <span className="label text-[10px] block mb-4">Horarios y Atención</span>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>Lunes a Viernes: 08:00 - 18:00 CST</li>
                <li>Emergencias Operativas: 24/7/365</li>
                <li>Monterrey, N.L., México</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-secondary/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Copyright & Links */}
            <div className="text-xs text-text-secondary font-mono">
              <span>&copy; {new Date().getFullYear()} SCENA. Todos los derechos reservados.</span>
              <span className="mx-3 text-secondary">|</span>
              <a href={WEBSITE_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">scena.com.mx</a>
            </div>

            {/* Associated Brands row */}
            <div className="flex items-center gap-6 text-xs font-liter text-text-secondary tracking-[2px]">
              <span className="label text-[8px] tracking-[1px]">SOCIOS DE INTEGRACIÓN:</span>
              <span className="font-bold text-white">KURIYAMA</span>
              <span className="text-primary font-bold">·</span>
              <span className="font-bold text-white">ALFAGOMMA</span>
              <span className="text-primary font-bold">·</span>
              <span className="font-bold text-white">PIRANHA</span>
            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}
