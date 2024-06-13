import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

import React from 'react'

export const HeroSection = () => {
	return (
		<section className='mb-20 w-full bg-[#e8f5e9] py-12 dark:bg-green-600/20 md:py-24 lg:py-32'>
			<div className='container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<div className='space-y-4'>
					<h2 className='text-3xl font-bold md:text-5xl'>
						{"Будьте здоровы с натуральными добавками от Nature's Sunshine"}
					</h2>
					<p className='text-gray-500'>
						Биологически активные добавки от NSP созданы из лучших натуральных
						ингредиентов, чтобы поддержать ваше общее здоровье и благополучие.
					</p>
					<ul className='space-y-2'>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>Научно разработанная формула</span>
						</li>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>Поддержка иммунной системы</span>
						</li>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>100% натуральные ингредиенты</span>
						</li>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>Повышение энергии и жизненного тонуса</span>
						</li>
					</ul>
				</div>
				<div className='flex justify-center'>
					<Image
						alt='Биологически активные добавки'
						className='rounded-lg object-cover'
						height='1000'
						width='1000'
						src='/images/hero.jpg'
					/>
				</div>
			</div>
		</section>
	)
}
