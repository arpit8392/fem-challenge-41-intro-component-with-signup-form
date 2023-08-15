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
					'flex h-14 w-full rounded-md border border-lightGray bg-background px-5 py-4 md:px-8 text-sm font-semibold tracking-[0.25px] text-darkBlue file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:border-none focus-visible:ring-blue caret-blue disabled:cursor-not-allowed disabled:opacity-50 placeholder:opacity-75',
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
