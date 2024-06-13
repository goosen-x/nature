import Image from 'next/image'

const reviews = [
	{
		name: 'Анна Степаненко',
		rating: 5,
		image: '/images/avatars/avatar1.jpg',
		review:
			'Я принимаю добавки от NSP уже около двух лет и ощущаю реальную пользу для своего огранизма. Рекомендую всем!'
	},
	{
		name: 'Константин Петров',
		rating: 4,
		image: '/images/avatars/avatar2.jpg',
		review:
			'Я регулярно покупаю хлорофил, он помогает мне поддерживать здоровье и выводит токсины. Я рекомендую его всем своим друзьям.'
	},
	{
		name: 'Светлана Манн',
		rating: 5,
		image: '/images/avatars/avatar4.jpg',
		review:
			'Отличный интернет-магазин! Низкие цены, быстрая доставка. Оригинал, всё пришло в отличном состоянии.'
	}
]

const StarIcon = ({ filled }: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={filled ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}
	>
		<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
	</svg>
)

const ReviewCard = ({ name, rating, review, image }: any) => (
	<div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 p-6 text-center dark:bg-gray-800'>
		<Image
			src={image}
			width={80}
			height={80}
			alt='Клиент'
			className='aspect-square rounded-full object-cover object-top'
		/>
		<div className='grid gap-2'>
			<h3 className='font-semibold'>{name}</h3>
			<div className='flex items-center justify-center gap-1'>
				{[...Array(5)].map((_, index) => (
					<StarIcon key={index} filled={index < rating} />
				))}
			</div>
			<p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
				{review}
			</p>
		</div>
	</div>
)

export const ReviewsSection = () => (
	<section className='w-full pb-12 pt-0 md:pb-24 lg:pb-32'>
		<div className='container grid max-w-5xl items-center justify-center gap-8 px-4 md:px-6'>
			<div className='space-y-3 text-center'>
				<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
					Что говорят наши клиенты
				</h2>
				<p className='m-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
					Натуральные добавки, которые действительно работают. Прочитайте отзывы
					реальных людей.
				</p>
			</div>
			<div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{reviews.map((review, index) => (
					<ReviewCard key={index} {...review} />
				))}
			</div>
		</div>
	</section>
)
