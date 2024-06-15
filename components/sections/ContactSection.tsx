import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const ContactSection = () => {
	return (
		<section className='w-full bg-[#e8f5e9] py-12 dark:bg-green-600/20 md:py-24 lg:py-32'>
			<div className='container m-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
				<div className='space-y-3'>
					<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
						{"Испытайте силу природы с добавками от Nature's Sunshine"}
					</h2>
					<p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
						Наши биологически активные добавки созданы из высококачественных
						натуральных ингредиентов, чтобы гарантировать доказанную наукой
						поддержку вашего здоровья и благополучия.
					</p>
				</div>
				<div className='mx-auto w-full max-w-sm space-y-2'>
					<form className='grid grid-cols-2 space-x-2'>
						<Input
							className='max-w-lg flex-1 text-xs sm:text-sm'
							placeholder='Введите свой email'
							type='email'
						/>

						<Button
							className='hover:bg-green-700focus-visible:outline-none inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-xs font-medium text-gray-50 shadow transition-colors focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c] sm:text-sm'
							type='submit'
						>
							Получать обновления
						</Button>
					</form>
					<p className='m-auto max-w-60 text-xs text-gray-500 dark:text-gray-400'>
						Подпишитесь, чтобы быть в курсе наших последних продуктов и акций.
					</p>
				</div>
			</div>
		</section>
	)
}
