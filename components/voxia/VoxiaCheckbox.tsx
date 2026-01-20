'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface VoxiaCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
  error?: string
}

export const VoxiaCheckbox = forwardRef<HTMLInputElement, VoxiaCheckboxProps>(
  ({ label, description, error, className, ...props }, ref) => {
    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-6">
          <input
            ref={ref}
            type="checkbox"
            className={clsx(
              'h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary/50 cursor-pointer',
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3">
          <label
            htmlFor={props.id}
            className="text-sm font-medium text-secondary dark:text-white cursor-pointer"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          )}
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    )
  }
)

VoxiaCheckbox.displayName = 'VoxiaCheckbox'
