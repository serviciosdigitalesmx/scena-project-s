import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  dark?: boolean
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', dark ? 'bg-navy text-white' : 'bg-gray-technical text-navy-light', className)}>
      {children}
    </section>
  )
}
