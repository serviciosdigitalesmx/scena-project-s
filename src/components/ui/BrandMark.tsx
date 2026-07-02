import Image from 'next/image'
import { cn } from '@/lib/utils'

type BrandMarkProps = {
  className?: string
  showTagline?: boolean
  compact?: boolean
}

export function BrandMark({ className, showTagline = true, compact = false }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('shrink-0 overflow-hidden bg-[#55c1dc]', compact ? 'h-10 w-20 md:h-12 md:w-24' : 'h-14 w-28')}>
        <Image src="/brand/scena-logo.webp" alt="SCENA — Ingeniería y suministro industrial 24/7" width={780} height={390} className="h-full w-full object-cover" priority sizes={compact ? '96px' : '112px'} />
      </div>
      {showTagline ? (
        <div className="hidden leading-tight sm:block">
          <div className="text-xs font-mono font-semibold tracking-[0.3em] text-white">SCENA</div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gray-text">Ingeniería de aplicación</div>
        </div>
      ) : null}
    </div>
  )
}
