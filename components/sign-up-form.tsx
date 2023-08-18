'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import ErrorIcon from '@/public/images/icon-error.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
		.string({
			required_error: 'Password cannot be empty.',
		})
		.min(4, 'Password should have at least 4 characters.'),
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
		console.log(values)
		form.reset()
	}
	return (
		<div className='bg-white shadow-lg shadow-black/50 rounded-xl p-6 lg:p-10 space-y-2'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4 lg:space-y-5'
					noValidate>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className='relative rounded-md shadow-sm'>
										<Input
											type='text'
											placeholder='First Name'
											{...field}
											className={cn(
												'caret-darkBlue border border-lightGray text-darkBlue',
												form.formState.errors.firstName
													? 'focus:ring-red focus:ring-2 text-red'
													: 'focus:ring-1 focus:ring-darkBlue'
											)}
										/>
										{form.formState.errors.firstName?.message && (
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-8'>
												<Image src={ErrorIcon} alt='Error Icon' />
											</div>
										)}
									</div>
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
									<div className='relative rounded-md shadow-sm'>
										<Input
											type='text'
											placeholder='Last Name'
											{...field}
											className={cn(
												'caret-darkBlue border border-lightGray text-darkBlue',
												form.formState.errors.lastName
													? 'focus:ring-red focus:ring-2 text-red'
													: 'focus:ring-1 focus:ring-darkBlue'
											)}
										/>
										{form.formState.errors.lastName?.message && (
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-8'>
												<Image src={ErrorIcon} alt='Error Icon' />
											</div>
										)}
									</div>
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
									<div className='relative rounded-md shadow-sm'>
										<Input
											type='email'
											placeholder='Email Address'
											{...field}
											className={cn(
												'caret-darkBlue border border-lightGray text-darkBlue',
												form.formState.errors.email
													? 'focus:ring-red focus:ring-2 text-red'
													: 'focus:ring-1 focus:ring-darkBlue'
											)}
										/>
										{form.formState.errors.email?.message && (
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-8'>
												<Image src={ErrorIcon} alt='Error Icon' />
											</div>
										)}
									</div>
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
									<div className='relative rounded-md shadow-sm'>
										<Input
											type='password'
											placeholder='Password'
											{...field}
											className={cn(
												'caret-darkBlue border border-lightGray text-darkBlue',
												form.formState.errors.password
													? 'focus:ring-red focus:ring-2 text-red'
													: 'focus:ring-1 focus:ring-darkBlue'
											)}
										/>
										{form.formState.errors.password?.message && (
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-8'>
												<Image src={ErrorIcon} alt='Error Icon' />
											</div>
										)}
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full bg-green uppercase tracking-[1px] text-[15px] font-semibold hover:bg-lightGreen py-6 lg:py-7'>
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
