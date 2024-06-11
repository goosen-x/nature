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
				<div className='relative mb-8 h-80 w-full'>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Aea9265a15ef1c7a9916d89e268d7b4b0fdc635c68f11624a3ef91a392baad9e2&amp;source=constructor'
						width='100%'
						height='100%'
						frameBorder='0'
						allowFullScreen
					></iframe>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div>
						<h2 className='mb-4 text-xl font-bold'>Контактная информация</h2>
						<p>
							<strong>Адрес:</strong> г. Казань, ул. Касаткина, 20
						</p>
						<p>
							<strong>Телефон:</strong> +7 (986) 931 77 21
						</p>
						<p>
							<strong>Email:</strong>{' '}
							<a href='mailto:nspcompany25@gmail.com'>nspcompany25@gmail.com</a>
						</p>
						<p>
							<strong>Режим работы:</strong> Пн - Пт: с 9:00 до 19:00 Сб: с
							11:00 до 17:00
						</p>
						<div className='mt-4'>
							<h3 className='text-lg font-bold'>Реквизиты:</h3>
							<p>ИП Грибов Максим Александрович</p>
							<p>ИНН 911112670302 / ОГРНИП 323169000280631</p>
							<p>Тел.: 8 (800) 511-39-41, 8 (986) 931-77-21</p>
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
