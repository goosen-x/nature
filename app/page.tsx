import { LeafIcon } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import Image from 'next/image'
import { HeroSection } from '@/components/sections/HeroSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container m-auto space-y-12 px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm dark:bg-[#4CAF50]/20'>
								Естественно мощный
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Используйте силу природы
							</h2>
							<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
								Наши биологически активные добавки разработаны с тщательно
								отобранными натуральными ингредиентами, чтобы обеспечить научно
								обоснованные преимущества для вашего здоровья и благополучия.
							</p>
						</div>
					</div>
					<div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
						<div className='grid gap-1'>
							<h3 className='text-lg font-bold'>Поддержка иммунитета</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								Наша формула, повышающая иммунитет, использует силу
								антиоксидантов и адаптогенов, чтобы поддержать естественные
								защитные силы вашего организма.
							</p>
						</div>
						<div className='grid gap-1'>
							<h3 className='text-lg font-bold'>Здоровье кишечника</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								Способствуйте здоровому микробиому кишечника с помощью нашей
								смеси пробиотиков и пребиотических волокон.
							</p>
						</div>
						<div className='grid gap-1'>
							<h3 className='text-lg font-bold'>Энергия и жизненная сила</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								Повысьте уровень энергии и чувствуйте себя более энергичным с
								нашей тщательно разработанной формулой натуральных стимуляторов
								и адаптогенов.
							</p>
						</div>
						<div className='grid gap-1'>
							<h3 className='text-lg font-bold'>Снятие стресса</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								Расслабьтесь и найдите баланс с нашей формулой, снимающей
								стресс, с успокаивающими травами и минералами.
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
								Питайте свою кожу изнутри с помощью нашей богатой
								антиоксидантами смеси растительных экстрактов.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-start justify-center gap-4 sm:flex-row'>
						<Link
							className='inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#43a047] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#4CAF50] dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'
							href='#'
						>
							Купить сейчас
						</Link>
					</div>
				</div>
			</section>
			<section className='bg-[#f5f5f5] px-4 py-12 md:px-6'>
				<div className='container mx-auto'>
					<h2 className='mb-8 text-3xl font-bold'>Наши премиальные добавки</h2>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						<div className='overflow-hidden rounded-lg bg-white shadow-md'>
							<Image
								src='/placeholder.svg'
								alt='Продукт 1'
								width={400}
								height={300}
								className='h-48 w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='mb-2 text-xl font-bold'>Рыбий жир Омега-3</h3>
								<p className='mb-4 text-gray-500'>
									Поддержите здоровье сердца и мозга с нашей премиальной
									добавкой рыбьего жира.
								</p>
								<Button className='w-full'>Купить сейчас</Button>
							</div>
						</div>
						<div className='overflow-hidden rounded-lg bg-white shadow-md'>
							<Image
								src='/placeholder.svg'
								alt='Продукт 2'
								width={400}
								height={300}
								className='h-48 w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='mb-2 text-xl font-bold'>Куркумин Турмерика</h3>
								<p className='mb-4 text-gray-500'>
									Используйте силу природного противовоспалительного средства с
									нашей добавкой турмерика.
								</p>
								<Button className='w-full'>Купить сейчас</Button>
							</div>
						</div>
						<div className='overflow-hidden rounded-lg bg-white shadow-md'>
							<Image
								src='/placeholder.svg'
								alt='Продукт 3'
								width={400}
								height={300}
								className='h-48 w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='mb-2 text-xl font-bold'>Витамин D3</h3>
								<p className='mb-4 text-gray-500'>
									Укрепите свою иммунную систему и поддержите здоровье костей с
									нашей добавкой Витамина D3.
								</p>
								<Button className='w-full'>Купить сейчас</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full bg-[#e8f5e9] py-12 md:py-24 lg:py-32 dark:bg-[#4CAF50]/20'>
				<div className='container m-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
					<div className='space-y-3'>
						<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
							Откройте для себя разницу с Органическим Бустером
						</h2>
						<p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							Наши биологически активные добавки разработаны с использованием
							высококачественных натуральных ингредиентов, чтобы обеспечить
							научно обоснованные преимущества для вашего здоровья и
							благополучия.
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
			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container m-auto space-y-12 px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Отзывы наших клиентов
							</h2>
							<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
								Послушайте, что говорят о нас наши довольные клиенты.
							</p>
						</div>
					</div>
					<div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
						<div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
							<div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
								<PlayIcon className='h-12 w-12 text-white' />
								<span className='sr-only'>Play video</span>
							</div>
							<Image
								alt='Video Thumbnail'
								className='h-64 w-full object-cover'
								height='300'
								src='/placeholder.svg'
								style={{
									aspectRatio: '400/300',
									objectFit: 'cover'
								}}
								width='400'
							/>
							<div className='bg-white p-4 dark:bg-gray-950'>
								<h3 className='text-xl font-bold'>Отзыв 1</h3>
								<p className='text-sm text-gray-500'>
									{
										'Органический Бустер действительно изменил мою жизнь. Я чувствую себя более энергичным и здоровым, чем когда-либо.'
									}
								</p>
								<div className='flex items-center gap-2 pt-2'>
									<Avatar className='h-8 w-8 border'>
										<AvatarImage alt='User' src='/placeholder-user.jpg' />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-semibold'>Джон Доу</div>
										<div className='text-sm text-gray-500 dark:text-gray-400'>
											Клиент
											<div className='flex items-center gap-2 pt-2'>
												<Avatar className='h-8 w-8 border'>
													<AvatarImage alt='User' src='/placeholder-user.jpg' />
													<AvatarFallback>AM</AvatarFallback>
												</Avatar>
												<div>
													<div className='font-semibold'>Анна Михайлова</div>
													<div className='text-sm text-gray-500 dark:text-gray-400'>
														Клиент
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
							<div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
								<PlayIcon className='h-12 w-12 text-white' />
								<span className='sr-only'>Play video</span>
							</div>
							<Image
								alt='Video Thumbnail'
								className='h-64 w-full object-cover'
								height='300'
								src='/placeholder.svg'
								style={{
									aspectRatio: '400/300',
									objectFit: 'cover'
								}}
								width='400'
							/>
							<div className='bg-white p-4 dark:bg-gray-950'>
								<h3 className='text-xl font-bold'>Отзыв 2</h3>
								<p className='text-sm text-gray-500'>
									{
										'Я была скептически настроена, но Органический Бустер действительно помог мне справиться со стрессом и повысить энергию. Я рекомендую его всем!'
									}
								</p>
								<div className='flex items-center gap-2 pt-2'>
									<Avatar className='h-8 w-8 border'>
										<AvatarImage alt='User' src='/placeholder-user.jpg' />
										<AvatarFallback>SM</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-semibold'>Сара Миллер</div>
										<div className='text-sm text-gray-500 dark:text-gray-400'>
											Клиент
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
							<div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
								<PlayIcon className='h-12 w-12 text-white' />
								<span className='sr-only'>Play video</span>
							</div>
							<Image
								alt='Video Thumbnail'
								className='h-64 w-full object-cover'
								height='300'
								src='/placeholder.svg'
								style={{
									aspectRatio: '400/300',
									objectFit: 'cover'
								}}
								width='400'
							/>
							<div className='bg-white p-4 dark:bg-gray-950'>
								<h3 className='text-xl font-bold'>Отзыв 2</h3>
								<p className='text-sm text-gray-500'>
									{
										'Я была скептически настроена, но Органический Бустер	действительно помог мне справиться со стрессом и повысить	энергию. Я рекомендую его всем!'
									}
								</p>
								<div className='flex items-center gap-2 pt-2'>
									<Avatar className='h-8 w-8 border'>
										<AvatarImage alt='User' src='/placeholder-user.jpg' />
										<AvatarFallback>SM</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-semibold'>Сара Миллер</div>
										<div className='text-sm text-gray-500 dark:text-gray-400'>
											Клиент
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='"relative ease-in-out/></div></div></section></div></div>); }/></></></></></> group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl' />
					</div>
				</div>
			</section>
		</>
	)
}

function PlayIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polygon points='6 3 20 12 6 21 6 3' />
		</svg>
	)
}
