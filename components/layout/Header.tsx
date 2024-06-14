'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Badge } from '../ui/badge'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger
} from '../ui/drawer'
import { MenuIcon } from 'lucide-react'

export const Header = () => {
	const { state } = useCart()
	const [count, setCount] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const totalItems = Object.values(state.items).reduce((acc, item) => {
			return acc + item
		}, 0)
		setCount(totalItems)
	}, [state.items])

	return (
		<header className='flex h-28 items-center justify-between px-4 lg:px-6'>
			<Link href='/' className='flex shrink-0 items-center'>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={200}
					height={50}
					className='h-14 w-auto'
				/>
				<span className='sr-only'>Органический Бустер</span>
			</Link>
			<div className='hidden lg:block'>
				<Navigation setIsOpen={() => {}} count={count} />
			</div>

			<div className='block lg:hidden'>
				<Drawer open={isOpen} onOpenChange={setIsOpen}>
					<DrawerTrigger>
						<div>
							<MenuIcon />
						</div>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerFooter>
							<div className='m-auto'>
								<Navigation count={count} setIsOpen={setIsOpen} />
							</div>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	)
}

// Компонент NavLink
const NavLink = ({
	href,
	children,
	...rest
}: {
	href: string
	children: React.ReactNode
} & ComponentPropsWithoutRef<'a'>) => (
	<Link
		href={href}
		className='text-2xl font-medium underline-offset-4 hover:underline lg:text-sm'
		{...rest}
	>
		{children}
	</Link>
)

const Navigation = ({
	count,
	setIsOpen
}: {
	count: number
	setIsOpen: (boolean) => void
}) => {
	return (
		<nav className='flex flex-col items-center gap-4 lg:ml-auto lg:flex-row lg:gap-6'>
			<NavLink onClick={() => setIsOpen(false)} href='/'>
				Главная
			</NavLink>
			<NavLink onClick={() => setIsOpen(false)} href='/products'>
				Продукты
			</NavLink>
			<NavLink onClick={() => setIsOpen(false)} href='/payment'>
				Доставка и оплата
			</NavLink>
			<NavLink onClick={() => setIsOpen(false)} href='/contacts'>
				Контакты
			</NavLink>
			<NavLink onClick={() => setIsOpen(false)} href='/cart'>
				<div className='inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'>
					Корзина
					<Badge className='ml-4' variant='default'>
						{count}
					</Badge>
				</div>
			</NavLink>
		</nav>
	)
}
