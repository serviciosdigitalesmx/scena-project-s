import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-safety-red text-white hover:bg-safety-red/90 focus:ring-safety-red/50',
  secondary: 'bg-accent-blue text-white hover:bg-accent-blue/90 focus:ring-accent-blue/50',
  ghost: 'border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 focus:ring-white/30',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-base gap-2.5',
  lg: 'px-8 py-4 text-lg gap-3',
}

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  onClick?: () => void
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'left',
  children,
  ariaLabel,
  onClick,
  ...props
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center rounded-sm font-mono font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy disabled:cursor-not-allowed disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className
  )
  const content = (
    <>
      {icon && iconPosition === 'left' ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <span className="shrink-0">{icon}</span> : null}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link href={href} className={base} aria-label={ariaLabel} onClick={onClick} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
        {content}
      </Link>
    )
  }

  return (
    <button className={base} aria-label={ariaLabel} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
