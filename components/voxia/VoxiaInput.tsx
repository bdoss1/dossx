'use client'

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface BaseInputProps {
  label?: string
  error?: string
  hint?: string
}

interface VoxiaInputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
}

interface VoxiaTextareaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
}

const baseInputStyles = 'w-full rounded-lg border bg-white dark:bg-dark-200 text-secondary dark:text-white placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed'

const sizeStyles = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg',
}

export const VoxiaInput = forwardRef<HTMLInputElement, VoxiaInputProps>(
  ({ label, error, hint, size = 'md', className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-secondary dark:text-white">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            baseInputStyles,
            sizeStyles[size],
            error ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200 dark:border-gray-700',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    )
  }
)

VoxiaInput.displayName = 'VoxiaInput'

export const VoxiaTextarea = forwardRef<HTMLTextAreaElement, VoxiaTextareaProps>(
  ({ label, error, hint, rows = 4, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-secondary dark:text-white">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            baseInputStyles,
            'px-4 py-3 resize-none',
            error ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200 dark:border-gray-700',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    )
  }
)

VoxiaTextarea.displayName = 'VoxiaTextarea'
