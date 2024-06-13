import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ContactModal } from '../modals/ContactModal'

const Advantage = ({ title, description }) => (
	<div className='grid gap-1'>
		<h3 className='text-lg font-bold'>{title}</h3>
		<p className='text-sm text-gray-500 dark:text-gray-400'>{description}</p>
	</div>
)

const advantagesData = [
	{
		title: 'Набор «Здоровье ЖКТ»',
		description:
			'Поддержите здоровье желудочно-кишечного тракта с этим комплексом для улучшения пищеварения и нормализации микрофлоры.'
	},
	{
		title: 'Набор «Здоровье с NSP»',
		description:
			'Полный комплекс витаминов и минералов от NSP для общего укрепления здоровья и повышения жизненного тонуса.'
	},
	{
		title: 'Набор «Здоровье ваших костей»',
		description:
			'Специальная формула для укрепления костей и профилактики остеопороза, богатая кальцием и витамином D.'
	},
	{
		title: 'Набор «Здоровье ваших суставов»',
		description:
			'Поддержите гибкость и здоровье суставов с помощью этого набора, содержащего глюкозамин и хондроитин.'
	},
	{
		title: 'Набор «Здоровый ребёнок»',
		description:
			'Оптимальный комплекс витаминов и минералов для полноценного развития и укрепления иммунитета вашего ребёнка.'
	},
	{
		title: 'Набор «Здоровье вашей печени»',
		description:
			'Комплекс для поддержки и детоксикации печени, включающий расторопшу и другие натуральные экстракты.'
	},
	{
		title: 'Набор «Стоп аллергия»',
		description:
			'Набор для облегчения симптомов аллергии и поддержки иммунной системы в период обострений.'
	},
	{
		title: 'Набор «Сильный иммунитет»',
		description:
			'Укрепите иммунитет с помощью этого набора, содержащего витамины, минералы и антиоксиданты.'
	},
	{
		title: 'Набор «Антистресс»',
		description:
			'Снимите напряжение и улучшите настроение с помощью комплекса для борьбы со стрессом и тревожностью.'
	}
]

export const AdvantagesSection = () => {
	return (
		<section className='w-full pb-12 pt-0 md:pb-24 lg:pb-32'>
			<div className='container m-auto space-y-12 px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm dark:bg-green-600/20'>
							Выгодно
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Используйте силу природы
						</h2>
						<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Наборы биологически активных добавок Nature’s Sunshine созданы для
							комплексной заботы о Вашем организме по выгодным ценам. Получите
							максимальный эффект от приема продукции NSP.
						</p>
					</div>
				</div>
				<div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
					{advantagesData.map((adv, index) => (
						<Advantage
							key={index}
							title={adv.title}
							description={adv.description}
						/>
					))}
				</div>
				<div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<ContactModal />
				</div>
			</div>
		</section>
	)
}
