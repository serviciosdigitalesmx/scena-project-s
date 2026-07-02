'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

export function RequirementForm() {
  const [fileName, setFileName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'Hola SCENA, tengo un requerimiento industrial urgente.',
      `Nombre: ${form.get('name')}`,
      `Empresa: ${form.get('company')}`,
      `Teléfono: ${form.get('phone')}`,
      `Categoría: ${form.get('category')}`,
      `Aplicación: ${form.get('requirement')}`,
      fileName ? `Archivo listo para adjuntar en el chat: ${fileName}` : 'Puedo enviar foto o ficha técnica en este chat.',
    ].join('\n')

    window.open(`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur md:p-8">
      <h3 className="mb-6 text-2xl font-bold text-white">Solicita tu cotización técnica</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-white">
          Nombre
          <input name="name" required autoComplete="name" className="mt-2 w-full border border-white/15 bg-navy/70 px-4 py-3 text-base font-normal text-white outline-none transition-colors placeholder:text-gray-500 focus:border-fluid-copper" placeholder="Tu nombre" />
        </label>
        <label className="text-sm font-semibold text-white">
          Empresa
          <input name="company" required autoComplete="organization" className="mt-2 w-full border border-white/15 bg-navy/70 px-4 py-3 text-base font-normal text-white outline-none transition-colors placeholder:text-gray-500 focus:border-fluid-copper" placeholder="Nombre de empresa" />
        </label>
        <label className="text-sm font-semibold text-white">
          Teléfono
          <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" className="mt-2 w-full border border-white/15 bg-navy/70 px-4 py-3 text-base font-normal text-white outline-none transition-colors placeholder:text-gray-500 focus:border-fluid-copper" placeholder="10 dígitos" />
        </label>
        <label className="text-sm font-semibold text-white">
          Categoría
          <select name="category" required defaultValue="" className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 text-base font-normal text-white outline-none transition-colors focus:border-fluid-copper">
            <option value="" disabled>Selecciona una</option>
            <option>Manguera hidráulica</option>
            <option>Manguera metálica</option>
            <option>Manguera industrial</option>
            <option>Conexiones y adaptadores</option>
            <option>Otro requerimiento</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-white">
        Aplicación o problema
        <textarea name="requirement" required rows={3} className="mt-2 w-full resize-y border border-white/15 bg-navy/70 px-4 py-3 text-base font-normal text-white outline-none transition-colors placeholder:text-gray-500 focus:border-fluid-copper" placeholder="Fluido, presión, temperatura, medida o qué equipo está detenido" />
      </label>

      <label className="mt-5 flex cursor-pointer items-center justify-between gap-4 border border-dashed border-white/20 bg-navy/40 px-4 py-4 text-sm text-gray-300 transition-colors hover:border-fluid-copper/70">
        <span className="flex items-center gap-3"><Paperclip className="h-5 w-5 text-fluid-copper" />{fileName || 'Seleccionar foto o ficha técnica'}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-text">Opcional</span>
        <input type="file" accept="image/*,.pdf" className="sr-only" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')} />
      </label>
      <p className="mt-2 text-xs leading-5 text-gray-400">Por seguridad, el archivo se adjunta manualmente cuando WhatsApp abra el chat.</p>

      <Button type="submit" size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right" className="mt-6 w-full bg-safety-red py-4 hover:bg-red-600">
        Enviar por WhatsApp
      </Button>
    </form>
  )
}
