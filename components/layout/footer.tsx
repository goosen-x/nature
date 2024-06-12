import { Send } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className='bg-[#f8f8f8] py-10 dark:bg-[#1a1a1a]'>
			<div className='container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6'>
				<div className='flex flex-col items-start gap-4'>
					<Link className='flex items-center gap-2' href='#'>
						{/* <LeafIcon className='h-8 w-8 text-[#4caf50]' /> */}
						<span className='text-xl font-bold text-[#4caf50]'>
							Независимый дистрибьютер Медведева&nbsp;А.С.
						</span>
					</Link>
					<div className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
						<div>Офис: г. Москва, ул. Хромова, д. 20, оф. 112</div>
						<div>Телефон: +7 (926) 707-80-64</div>
						<div>Email: medvedeva.nsp@ro.ru</div>
					</div>
				</div>
				<div className='flex flex-col items-start gap-4'>
					<h4 className='text-lg font-bold text-[#4caf50]'>Навигация</h4>
					<div className='flex flex-col gap-2'>
						<Link className='hover:text-[#4caf50]' href='/products'>
							Продукты
						</Link>
						<Link className='hover:text-[#4caf50]' href='/payment'>
							Доставка и оплата
						</Link>
						<Link className='hover:text-[#4caf50]' href='/contacts'>
							Контакты
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-start gap-4'>
					<h4 className='text-lg font-bold text-[#4caf50]'>Связаться с нами</h4>
					<div className='flex gap-4'>
						<Link
							className='hover:text-[#4caf50]'
							href='https://t.me/+79267078064'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='30'
								height='30'
								viewBox='0 0 50 50'
							>
								<path d='M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z'></path>
							</svg>
						</Link>
						<Link
							className='hover:text-[#4caf50]'
							href='https://wa.me/79267078064'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='30'
								height='30'
								viewBox='0 0 50 50'
							>
								<path d='M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z'></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
