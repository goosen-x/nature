'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
	const [captcha, setCaptcha] = useState('')

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// Add form submission logic here
	}

	return (
		<div className='container mx-auto px-4 py-8 md:py-12'>
			<h1 className='mb-6 text-2xl font-bold'>Контакты</h1>
			<div className='mx-auto grid max-w-7xl gap-6 px-4 md:gap-8 md:px-6 lg:max-w-none'>
				<div className='relative mb-24 h-80 w-full'>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3A18232637f5758c8e3baa8925c7530cca5c6d3e3651733f104cf514695d5f0d35&amp;source=constructor'
						width='1280'
						height='369'
						frameborder='0'
					></iframe>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div>
						<h2 className='mb-4 text-xl font-bold'>Контактная информация</h2>
						<p>
							<strong>Офис: </strong> г. Москва, ул. Хромова, д. 20, оф. 112
						</p>
						<p>
							<strong>Пункт выдачи: </strong> г. Москва, ул. Перовская, д. 66,
							к. 2
						</p>
						<p>
							<strong>Телефон:</strong> +7 (926) 707-80-64
						</p>
						<p>
							{/* Email: medvedeva.nsp@ro.ru */}
							<strong>Email:</strong>{' '}
							<a href='mailto:medvedeva.nsp@ro.ru'>medvedeva.nsp@ro.ru</a>
						</p>
						<p>
							<strong>Режим работы:</strong> Пн - Пт: с 9:00 до 19:00 Сб: с
							11:00 до 17:00
						</p>
						<div className='mt-4'>
							<p>Независимый дистрибьютер Медведева&nbsp;А.С.</p>
							<p>Телефон: +7 (926) 707-80-64</p>
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-xl font-bold'>Обратная связь</h2>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700'
								>
									Сообщение *
								</label>
								<textarea
									id='message'
									name='message'
									// rows='4'
									required
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
								></textarea>
							</div>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700'
								>
									Ваше имя *
								</label>
								<input
									id='name'
									name='name'
									type='text'
									required
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
								/>
							</div>
							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-gray-700'
								>
									Телефон *
								</label>
								<input
									id='phone'
									name='phone'
									type='text'
									required
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									E-mail
								</label>
								<input
									id='email'
									name='email'
									type='email'
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
								/>
							</div>
							<div className='flex items-center space-x-4'>
								<input
									type='text'
									value={captcha}
									onChange={e => setCaptcha(e.target.value)}
									className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									placeholder='Введите текст с картинки'
									required
								/>
							</div>
							<button
								type='submit'
								className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
