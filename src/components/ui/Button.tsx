import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'white' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary/90',
  ghost: 'border border-border bg-surface text-foreground hover:bg-surface-hover',
  white: 'bg-white text-primary shadow-lg hover:bg-emerald-50',
  'outline-light': 'border border-white/40 text-white hover:bg-white/10',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm rounded-lg',
  md: 'h-11 px-5 text-sm rounded-xl',
  lg: 'h-12 px-7 text-base rounded-xl',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold transition-colors cursor-pointer'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

function buildClassName(variant: Variant, size: Size, className?: string): string {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { children: ReactNode }

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buildClassName(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

type ButtonLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    children: ReactNode
    href: string
  }

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  const isExternal = /^https?:/i.test(href)
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a href={href} className={buildClassName(variant, size, className)} {...externalProps} {...rest}>
      {children}
    </a>
  )
}
