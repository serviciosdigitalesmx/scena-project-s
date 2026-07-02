import { cn } from '@/lib/utils'

type BrandMarkProps = {
  className?: string
  showTagline?: boolean
  compact?: boolean
}

export function BrandMark({ className, showTagline = true, compact = false }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center', compact ? 'gap-3' : 'gap-4', className)} role="img" aria-label="SCENA — Ingeniería y suministro industrial 24/7">
      <div className={cn('relative grid shrink-0 place-items-center overflow-hidden bg-accent-blue text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]', compact ? 'h-10 w-10 md:h-12 md:w-12' : 'h-14 w-14')}>
        <span className={cn('font-black tracking-[-0.12em]', compact ? 'text-base md:text-lg' : 'text-xl')}>SC</span>
        <span className="absolute inset-x-0 bottom-0 h-1.5 bg-safety-red" aria-hidden="true" />
        <span className="absolute -right-2 top-1/2 h-px w-5 bg-white/50" aria-hidden="true" />
      </div>
      <div className="leading-none">
        <div className={cn('font-black tracking-[0.18em] text-white', compact ? 'text-lg md:text-xl' : 'text-2xl')}>SCENA</div>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-0.5 w-5 bg-safety-red" aria-hidden="true" />
          <span className={cn('font-mono uppercase tracking-[0.16em] text-gray-text', compact ? 'text-[7px] md:text-[8px]' : 'text-[9px]', !showTagline && 'hidden')}>Ingeniería industrial 24/7</span>
        </div>
      </div>
    </div>
  )
}
