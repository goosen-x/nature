import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
	return (
		<section className='relative w-full pt-12 md:pt-24 lg:pt-32'>
			<div className='m-auto space-y-10 px-4 md:px-6 xl:space-y-16'>
				<div className='mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10'>
					<div>
						<h1 className='lg:leading-tighter mb-4 text-4xl font-bold leading-5 tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
							Будьте здоровы с натуральными добавками.
						</h1>
						<p className='mx-auto mb-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
							Наши биологически активные добавки используют природную благодать
							растений, чтобы поддержать ваше здоровье и благополучие. Научно
							разработаны для максимальной эффективности.
						</p>
						<Link
							className='inline-flex h-9 items-center justify-center rounded-md bg-[#4CAF50] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#43a047] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#4CAF50] dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'
							href='#'
						>
							Узнать больше
						</Link>
					</div>
				</div>
				<Image
					alt='Природа'
					className='mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover'
					height='300'
					src='/images/forest.jpg'
					width='1270'
				/>
				<Image
					alt='Биологически активные добавки'
					className='absolute right-[5%] top-0 z-10 mx-auto overflow-hidden rounded-t-xl object-cover'
					height='1600'
					src='/images/pills.png'
					width='700'
				/>
			</div>
		</section>
	)
}
