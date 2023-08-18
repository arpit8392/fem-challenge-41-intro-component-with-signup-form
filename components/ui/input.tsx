import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'block w-full rounded-md bg-background text-sm placeholder:opacity-75 font-semibold outline-none disabled:cursor-not-allowed disabled:opacity-50 px-5 lg:px-8 py-4 focus:ring-inset',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
