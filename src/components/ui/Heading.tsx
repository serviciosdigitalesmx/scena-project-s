import { cn } from '@/lib/utils'

export function Heading({ level = 2, className, children }: { level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string; children: React.ReactNode }) {
  const Comp = `h${level}` as keyof JSX.IntrinsicElements
  const headingClasses = {
    1: 'text-4xl md:text-6xl lg:text-7xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  }[level]
  return <Comp className={cn('font-sans font-semibold leading-[1.08] tracking-[-0.035em]', headingClasses, className)}>{children}</Comp>
}
