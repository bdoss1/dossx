import { ReactNode, HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export interface VoxiaCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'elevated' | 'bordered'
}

export function VoxiaCard({
  children,
  className,
  padding = 'md',
  variant = 'default',
  onClick,
  ...props
}: VoxiaCardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantStyles = {
    default: 'bg-white dark:bg-dark-200',
    elevated: 'bg-white dark:bg-dark-200 shadow-box',
    bordered: 'bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700',
  }

  return (
    <div
      className={clsx(
        'rounded-2xl',
        paddingStyles[padding],
        variantStyles[variant],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}
