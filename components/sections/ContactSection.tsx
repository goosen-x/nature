import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const ContactSection = () => {
	return (
		<section className='w-full bg-[#e8f5e9] py-12 md:py-24 lg:py-32 dark:bg-[#4CAF50]/20'>
			<div className='container m-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
				<div className='space-y-3'>
					<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
						Откройте для себя разницу с Органическим Бустером
					</h2>
					<p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
						Наши биологически активные добавки разработаны с использованием
						высококачественных натуральных ингредиентов, чтобы обеспечить научно
						обоснованные преимущества для вашего здоровья и благополучия.
					</p>
				</div>
				<div className='mx-auto w-full max-w-sm space-y-2'>
					<form className='flex space-x-2'>
						<Input
							className='max-w-lg flex-1'
							placeholder='Введите свой email'
							type='email'
						/>
						<Button type='submit'>Получать обновления</Button>
					</form>
					<p className='text-xs text-gray-500 dark:text-gray-400'>
						Подпишитесь, чтобы быть в курсе наших последних продуктов и акций.
						<Link className='underline underline-offset-2' href='#'>
							Условия и положения
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
