import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
	return (
		<section className='bg-white px-4 py-12 md:px-6'>
			<div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
				<div className='space-y-4'>
					<h2 className='text-5xl font-bold'>
						{"Будьте здоровы с натуральными добавками от Nature's Sunshine"}
					</h2>
					<p className='text-gray-500'>
						Наши добавки созданы из лучших натуральных ингредиентов, чтобы
						поддержать ваше общее здоровье и благополучие.
					</p>
					<ul className='space-y-2'>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>100% натуральные ингредиенты</span>
						</li>
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
