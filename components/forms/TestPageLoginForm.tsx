'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function TestPageLoginForm() {
	const [secret, setSecret] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const searchParams = useSearchParams()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError('')

		try {
			// Проверяем секрет через API
			const response = await fetch('/api/test-auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ secret })
			})

			if (response.ok) {
				// Перенаправляем на страницу с секретом
				router.push(`/test-db?secret=${encodeURIComponent(secret)}`)
			} else {
				setError('Неверный секретный ключ')
			}
		} catch (err) {
			setError('Ошибка при проверке ключа')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50'>
			<div className='w-full max-w-md space-y-8'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold text-gray-900'>
						🔒 Доступ к тестовой странице
					</h1>
					<p className='mt-2 text-sm text-gray-600'>
						Введите секретный ключ для доступа к тестовой странице базы данных
					</p>
				</div>

				<form onSubmit={handleSubmit} className='mt-8 space-y-6'>
					<div>
						<label
							htmlFor='secret'
							className='block text-sm font-medium text-gray-700'
						>
							Секретный ключ
						</label>
						<input
							id='secret'
							name='secret'
							type='password'
							required
							value={secret}
							onChange={e => setSecret(e.target.value)}
							className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500'
							placeholder='Введите секретный ключ...'
						/>
					</div>

					{error && (
						<div className='rounded-md bg-red-50 p-4'>
							<div className='text-sm text-red-700'>{error}</div>
						</div>
					)}

					<button
						type='submit'
						disabled={loading}
						className='flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50'
					>
						{loading ? 'Проверка...' : 'Войти'}
					</button>

					<div className='text-center'>
						<button
							type='button'
							onClick={() =>
								router.push('/test-db?secret=super-secret-test-key-2024')
							}
							className='text-sm text-blue-600 underline hover:text-blue-800'
						>
							🚀 Быстрый доступ (для разработки)
						</button>
					</div>
				</form>

				<div className='text-center'>
					<p className='text-xs text-gray-500'>
						💡 Секретный ключ:{' '}
						<code className='rounded bg-gray-100 px-1'>
							super-secret-test-key-2024
						</code>
					</p>
					<p className='mt-1 text-xs text-gray-400'>
						Или перейдите по ссылке: <br />
						<code className='rounded bg-gray-100 px-1'>
							/test-db?secret=super-secret-test-key-2024
						</code>
					</p>
				</div>
			</div>
		</div>
	)
}
