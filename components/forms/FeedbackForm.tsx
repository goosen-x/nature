import React from 'react'

export const FeedbackForm = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault()
		// Add form submission logic here
	}

	return (
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
		</form>
	)
}
