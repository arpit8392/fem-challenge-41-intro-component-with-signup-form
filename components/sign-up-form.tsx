'use client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const formSchema = z.object({
	firstName: z
		.string()
		.min(1, { message: 'First Name cannot be empty.' })
		.max(50),
	lastName: z
		.string()
		.min(1, { message: 'Last Name cannot be empty.' })
		.max(50),
	email: z.string().email({ message: 'Looks like this is not an email' }),
	password: z
		.string()
		.min(5, { message: 'Password should at least be 5 characters long.' }),
})

const SignupForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log('form submitted')
		console.log(values)
	}
	return (
		<div className='bg-white shadow-lg shadow-black/50 rounded-xl p-6 lg:p-10 space-y-2'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='First Name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Last Name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Email Address' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full bg-green uppercase tracking-[1px] text-[15px] font-semibold hover:bg-lightGreen py-4'>
						Claim your free trail
					</Button>
				</form>
			</Form>
			<p className='text-grayishBlue text-xs font-medium text-center max-w-sm mx-auto lg:max-w-none'>
				By clicking the button, you are agreeing to our{' '}
				<span className='text-red font-bold'>Terms and Services</span>
			</p>
		</div>
	)
}
export default SignupForm
