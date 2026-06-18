'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type CatalogItem = {
  id: string;
  section: string;
  name: string;
  description: string;
  options: string[];
  unitLabel?: string;
};

type CartLine = CatalogItem & {
  quantity: number;
  selectedOption: string;
  notes: string;
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_SCENA_WHATSAPP_NUMBER || '528137157752';
const COMPANY_NAME = process.env.NEXT_PUBLIC_SCENA_COMPANY_NAME || 'SCENA';
const COMPANY_CITY = process.env.NEXT_PUBLIC_SCENA_COMPANY_CITY || 'Monterrey, N.L., México';
const COMPANY_EMAIL = process.env.NEXT_PUBLIC_SCENA_COMPANY_EMAIL || 'ventas@scena.com.mx';
const COMPANY_PHONE = process.env.NEXT_PUBLIC_SCENA_COMPANY_PHONE || '+52 81 3715 7752';
const COMPANY_URL = process.env.NEXT_PUBLIC_SCENA_WEBSITE || 'https://www.scena.com.mx';

const catalog: CatalogItem[] = [
  {
    id: 'mangueras-metalicas-flexibles',
    section: 'Mangueras metálicas flexibles',
    name: 'Manguera metálica flexible',
    description: 'Disponible en acero inoxidable T304 y T316. Fabricación a especificación para conducción de fluidos, vibración y alta temperatura.',
    options: ['3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"', '6"', '8"', '10"'],
    unitLabel: 'diámetro nominal',
  },
  {
    id: 'juntas-hule',
    section: 'Juntas de expansión de hule',
    name: 'Junta de expansión de hule',
    description: 'Modelos de una esfera y dos esferas para absorción de vibración, sonido y movimientos axiales y transversales.',
    options: ['Con una esfera', 'Con dos esferas'],
    unitLabel: 'modelo',
  },
  {
    id: 'conexiones-rapidas',
    section: 'Conexiones rápidas',
    name: 'Conexión rápida',
    description: 'Conexiones rápidas para múltiples materiales y partes del sistema.',
    options: ['Aluminio', 'Bronce', 'Acero inoxidable', 'Acero al carbón', 'Polipropileno'],
    unitLabel: 'material',
  },
  {
    id: 'conexiones-partes',
    section: 'Conexiones rápidas',
    name: 'Parte de conexión',
    description: 'Partes de conexión y adaptadores para integración de líneas industriales.',
    options: ['Parte A', 'Parte B', 'Parte C', 'Parte D', 'Parte DC', 'Parte DP', 'Parte E', 'Parte F', 'RADADAPT', 'ADPT-M', 'ADAPT-H', 'ADAPT-B'],
    unitLabel: 'tipo',
  },
  {
    id: 'niples-botella',
    section: 'Niples botella',
    name: 'Niple botella',
    description: 'Disponible en acero inoxidable, acero al carbón y polipropileno, de 1/2" a 6".',
    options: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"', '5"', '6"'],
    unitLabel: 'diámetro',
  },
  {
    id: 'empaques-flexitallic',
    section: 'Empaques metálicos tipo Flexitallic',
    name: 'Empaque industrial',
    description: 'Soluciones de sellado para bridas, reactores, intercambiadores y válvulas.',
    options: ['Spiral wound', 'Camprofile', 'Ring joint', 'Lámina prensada'],
    unitLabel: 'tipo',
  },
  {
    id: 'juntas-expansion-metalicas',
    section: 'Juntas de expansión metálicas',
    name: 'Junta metálica',
    description: 'Diseños para compensar dilatación, vibración y desalineaciones en tubería.',
    options: ['Tipo universal', 'Codo de presión balanceada', 'Presión balanceada en línea', 'Simple', 'Cardan', 'Bisagra', 'Tipo X', 'Tipo X balanceada'],
    unitLabel: 'configuración',
  },
  {
    id: 'conexiones-comunes',
    section: 'Conexiones comunes',
    name: 'Conexión común',
    description: 'Piezas de conexión y acople para integración de sistemas a especificación.',
    options: ['Bajo especificación', 'Según muestra', 'Según plano'],
    unitLabel: 'criterio',
  },
  {
    id: 'kuriyama',
    section: 'Productos Kuriyama',
    name: 'Línea Kuriyama',
    description: 'Productos industriales de apoyo para conducción y transferencia de fluidos.',
    options: ['Bajo especificación'],
    unitLabel: 'alcance',
  },
];

const sections = Array.from(new Set(catalog.map((item) => item.section)));
const storageKey = 'scena-catalog-cart';

function buildWhatsAppMessage(lines: CartLine[]) {
  const items = lines
    .map((line, index) => {
      const notes = line.notes.trim() ? `\n   Notas: ${line.notes.trim()}` : '';
      return `${index + 1}. ${line.name}\n   Sección: ${line.section}\n   Opción: ${line.selectedOption}\n   Cantidad: ${line.quantity}${notes}`;
    })
    .join('\n\n');

  return [
    `Hola ${COMPANY_NAME}, quiero solicitar una cotización para los siguientes productos:`,
    '',
    items,
    '',
    'Datos de la empresa:',
    `Nombre comercial: ${COMPANY_NAME}`,
    `Ciudad: ${COMPANY_CITY}`,
    `Teléfono: ${COMPANY_PHONE}`,
    `Correo: ${COMPANY_EMAIL}`,
    `Sitio web: ${COMPANY_URL}`,
  ].join('\n');
}

export default function CatalogoPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>('Todos');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setCart(JSON.parse(stored));
    } catch {
      setError('No se pudo cargar el carrito guardado.');
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(cart));
    } catch {
      // Persistencia opcional.
    }
  }, [cart]);

  const filteredCatalog = useMemo(() => {
    if (selectedSection === 'Todos') return catalog;
    return catalog.filter((item) => item.section === selectedSection);
  }, [selectedSection]);

  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  const addToCart = (item: CatalogItem, option: string) => {
    setError('');
    setCart((current) => {
      const existingIndex = current.findIndex(
        (line) => line.id === item.id && line.selectedOption === option,
      );
      if (existingIndex >= 0) {
        const next = [...current];
        next[existingIndex] = { ...next[existingIndex], quantity: next[existingIndex].quantity + 1 };
        return next;
      }
      return [...current, { ...item, quantity: 1, selectedOption: option, notes: '' }];
    });
  };

  const updateLine = (index: number, patch: Partial<CartLine>) => {
    setCart((current) => current.map((line, i) => (i === index ? { ...line, ...patch } : line)));
  };

  const removeLine = (index: number) => {
    setCart((current) => current.filter((_, i) => i !== index));
  };

  const sendOrder = () => {
    if (!WHATSAPP_NUMBER) {
      setError('Falta configurar NEXT_PUBLIC_SCENA_WHATSAPP_NUMBER en el entorno.');
      return;
    }
    if (cart.length === 0) {
      setError('Agrega al menos un producto al carrito antes de enviar el pedido.');
      return;
    }

    const message = buildWhatsAppMessage(cart);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="sticky top-0 z-50 border-b border-secondary/20 bg-background/90 backdrop-blur-md">
        <div className="container-custom flex h-20 items-center justify-between">
          <Link href="/" className="text-sm uppercase tracking-[0.35em] text-text-secondary hover:text-primary transition-colors">
            Volver al inicio
          </Link>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Catálogo SCENA</p>
            <p className="text-sm text-text-secondary">Selecciona piezas y solicita cotización por WhatsApp</p>
          </div>
        </div>
      </header>

      <section className="border-b border-secondary/20 bg-[radial-gradient(circle_at_top,_rgba(196,101,42,0.15),_transparent_35%),linear-gradient(to_bottom,_rgba(255,255,255,0.03),transparent)]">
        <div className="container-custom py-16 md:py-24 grid gap-8 md:grid-cols-[1.3fr_0.7fr] items-end">
          <div>
            <span className="label text-primary">¿Ya sabes qué ordenar?</span>
            <h1 className="text-hero text-white mt-4 mb-6 max-w-4xl">arma tu pedido por secciones y cotiza en un solo mensaje</h1>
            <p className="max-w-3xl text-text-secondary text-lg leading-relaxed">
              Revisa el catálogo, agrega las piezas que necesitas y envía el pedido directo a WhatsApp con el detalle completo.
            </p>
          </div>
          <div className="bg-surface border border-secondary/20 p-6">
            <p className="label text-text-secondary">Carrito actual</p>
            <p className="kpi mt-4">{cartCount}</p>
            <p className="text-sm text-text-secondary mt-2">piezas agregadas</p>
            <button onClick={sendOrder} className="btn-primary w-full mt-6">
              Hacer pedido
            </button>
          </div>
        </div>
      </section>

      <section className="container-custom py-10">
        <div className="flex flex-wrap gap-3 mb-8">
          {['Todos', ...sections].map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.25em] border transition-colors ${selectedSection === section ? 'bg-primary border-primary text-white' : 'border-secondary/30 text-text-secondary hover:border-primary hover:text-primary'}`}
            >
              {section}
            </button>
          ))}
        </div>

        {error ? <p className="mb-6 text-sm text-accent">{error}</p> : null}

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            {filteredCatalog.map((item) => (
              <article key={item.id} className="bg-surface border border-secondary/20 p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="label text-primary">{item.section}</p>
                    <h2 className="text-subtitle text-white mt-2">{item.name}</h2>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-secondary">{item.unitLabel}</span>
                </div>
                <p className="text-text-secondary max-w-3xl mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => addToCart(item, option)}
                      className="border border-secondary/30 px-4 py-2 text-sm text-white hover:border-primary hover:text-primary transition-colors"
                    >
                      Agregar {option}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 h-fit bg-surface border border-secondary/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-subtitle text-white">Tu carrito</h2>
              <span className="label text-text-secondary">{cartCount} piezas</span>
            </div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <p className="text-sm text-text-secondary">Todavía no agregas productos.</p>
              ) : (
                cart.map((line, index) => (
                  <div key={`${line.id}-${line.selectedOption}-${index}`} className="border border-secondary/20 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-white font-semibold">{line.name}</p>
                        <p className="text-xs uppercase tracking-[0.25em] text-text-secondary mt-1">{line.section}</p>
                      </div>
                      <button onClick={() => removeLine(index)} className="text-xs uppercase tracking-[0.25em] text-accent">
                        Quitar
                      </button>
                    </div>
                    <p className="text-sm text-text-secondary mt-3">{line.selectedOption}</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <label className="text-xs uppercase tracking-[0.25em] text-text-secondary">
                        Cantidad
                        <input
                          type="number"
                          min={1}
                          value={line.quantity}
                          onChange={(e) => updateLine(index, { quantity: Math.max(1, Number(e.target.value) || 1) })}
                          className="mt-2 w-full bg-background border border-secondary/30 px-3 py-2 text-white"
                        />
                      </label>
                      <label className="text-xs uppercase tracking-[0.25em] text-text-secondary col-span-2">
                        Notas
                        <textarea
                          value={line.notes}
                          onChange={(e) => updateLine(index, { notes: e.target.value })}
                          className="mt-2 w-full bg-background border border-secondary/30 px-3 py-2 text-white min-h-20"
                          placeholder="Medidas, presión, material, urgencia"
                        />
                      </label>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button onClick={sendOrder} className="btn-primary w-full mt-6">
              Hacer pedido por WhatsApp
            </button>
            <p className="text-xs text-text-secondary mt-4 leading-relaxed">
              El mensaje incluirá el detalle del carrito y los datos de contacto de {COMPANY_NAME}.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
