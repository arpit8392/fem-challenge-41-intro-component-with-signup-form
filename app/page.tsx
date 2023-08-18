import SignupForm from '@/components/sign-up-form'

export default function Home() {
	return (
		<main className='min-h-screen px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center lg:px-40'>
			<div className='text-center space-y-4 text-white lg:max-w-lg lg:text-start lg:space-y-8'>
				<h1 className='font-bold text-[28px]/9 tracking-tight lg:text-[50px]/[55px]'>
					Learn to code by watching others
				</h1>
				<p className='text-base/7'>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.{' '}
				</p>
			</div>
			<div className='space-y-6'>
				<div className='py-5 text-center text-white shadow-lg rounded-xl bg-accent shadow-black/50'>
					<p className='text-[15px]/7 tracking-[0.268px]'>
						<span className='font-bold'>Try it free 7 days</span> then $20/mo.
						thereafter
					</p>
				</div>
				<SignupForm />
			</div>
		</main>
	)
}
