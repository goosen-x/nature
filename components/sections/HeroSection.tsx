import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
	return (
		<section className='bg-white px-4 py-12 md:px-6'>
			<div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
				<div className='space-y-4'>
					<h2 className='text-3xl font-bold'>
						Будьте здоровы с натуральными добавками
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
							<span>Научно разработанные</span>
						</li>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>Поддерживают иммунную систему</span>
						</li>
						<li className='flex items-center'>
							<CheckIcon className='mr-2 h-6 w-6 text-green-500' />
							<span>Повышают энергию и жизненную силу</span>
						</li>
					</ul>
				</div>
				<div className='flex justify-center'>
					{/* <img src="/placeholder.svg" alt="Витаминные добавки" width={400} height={400} className="rounded-lg" /> */}

					<Image
						alt='Биологически активные добавки'
						className='rounded-lg'
						height='400'
						width='400'
						src='/images/pills.png'
					/>
				</div>
			</div>
		</section>
	)
}
