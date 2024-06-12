import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export const AdvantagesSection = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container m-auto space-y-12 px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm dark:bg-green-600/20'>
							Проверено временем
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Используйте силу природы
						</h2>
						<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Биологически активные добавки Natures Sunshine созданы из
							тщательно отобранных натуральных ингредиентов, чтобы принести
							доказанную наукой пользу вашему здоровью и благополучию.
						</p>
					</div>
				</div>
				<div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Поддержка иммунитета</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Наша формула, повышающая иммунитет, использует силу антиоксидантов
							и адаптогенов, чтобы поддержать естественные защитные силы вашего
							организма.
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Здоровье кишечника</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Способствуйте здоровому микробиому кишечника с помощью нашей смеси
							пробиотиков и пребиотических волокон.
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Энергия и жизненная сила</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Повысьте уровень энергии и чувствуйте себя более энергичным с
							нашей тщательно разработанной формулой натуральных стимуляторов и
							адаптогенов.
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Снятие стресса</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Расслабьтесь и найдите баланс с нашей формулой, снимающей стресс,
							с успокаивающими травами и минералами.
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Когнитивные функции</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Поддержите ясность ума и концентрацию с нашей формулой,
							обогащенной ноотропами.
						</p>
					</div>
					<div className='grid gap-1'>
						<h3 className='text-lg font-bold'>Кожа и красота</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Питайте свою кожу изнутри с помощью нашей богатой антиоксидантами
							смеси растительных экстрактов.
						</p>
					</div>
				</div>
				<div className='flex flex-col items-start justify-center gap-4 sm:flex-row'>
					<Button className='hover:bg-green-700focus-visible:outline-none inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'>
						Оформить заказ
					</Button>
				</div>
			</div>
		</section>
	)
}
