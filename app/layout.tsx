import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Intro Component with Sign up Form',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} bg-mobile md:bg-desktop bg-red bg-no-repeat bg-cover`}>
				{children}
			</body>
		</html>
	)
}
