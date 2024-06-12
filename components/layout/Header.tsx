import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
	return (
		<header className='flex h-14 items-center px-4 lg:px-6'>
			<Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={200}
					height={50}
					className='h-8 w-auto'
				/>
				<span className='sr-only'>Органический Бустер</span>
			</Link>
			{/* <div className='relative ml-auto'>
				<SearchIcon className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400' />
				<Input
					type='search'
					placeholder='Поиск товаров...'
					className='w-64 rounded-md bg-white py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-950'
				/>
			</div> */}
			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<NavLink href='/products'>Продукты</NavLink>
				<NavLink href='/payment'>Доставка и оплата</NavLink>
				<NavLink href='/contacts'>Контакты</NavLink>
			</nav>
		</header>
	)
}

const NavLink = ({ href, children }: any) => (
	<Link
		href={href}
		className='text-sm font-medium underline-offset-4 hover:underline'
	>
		{children}
	</Link>
)
