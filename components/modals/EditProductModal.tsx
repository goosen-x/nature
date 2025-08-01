'use client'

import { useState, useEffect } from 'react'
import { ProductWithRelations } from '@/lib/supabase'

interface EditProductModalProps {
	product: ProductWithRelations | null
	isOpen: boolean
	onClose: () => void
	onSave: (updatedProduct: ProductWithRelations) => void
}

export default function EditProductModal({
	product,
	isOpen,
	onClose,
	onSave
}: EditProductModalProps) {
	const [formData, setFormData] = useState({
		title: product?.title || '',
		fullname: product?.fullname || '',
		price: product?.price || 0,
		available: product?.available || false
	})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	// Обновляем форму при изменении продукта
	useEffect(() => {
		if (product) {
			setFormData({
				title: product.title,
				fullname: product.fullname,
				price: product.price,
				available: product.available
			})
		}
	}, [product])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!product) return

		setLoading(true)
		setError(null)

		try {
			const response = await fetch(`/api/products/${product.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			})

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.error || 'Ошибка при обновлении')
			}

			const updatedProduct = await response.json()
			onSave(updatedProduct)
			onClose()
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
		} finally {
			setLoading(false)
		}
	}

	if (!isOpen || !product) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl'>
				<div className='mb-4 flex items-center justify-between'>
					<h2 className='text-xl font-bold'>Редактировать товар</h2>
					<button
						onClick={onClose}
						className='text-gray-500 hover:text-gray-700'
					>
						✕
					</button>
				</div>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='mb-1 block text-sm font-medium'>
							Название товара:
						</label>
						<input
							type='text'
							value={formData.title}
							onChange={e =>
								setFormData({ ...formData, title: e.target.value })
							}
							className='w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='mb-1 block text-sm font-medium'>
							Полное название:
						</label>
						<textarea
							value={formData.fullname}
							onChange={e =>
								setFormData({ ...formData, fullname: e.target.value })
							}
							className='w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none'
							rows={3}
							required
						/>
					</div>

					<div>
						<label className='mb-1 block text-sm font-medium'>Цена (₽):</label>
						<input
							type='number'
							value={formData.price}
							onChange={e =>
								setFormData({
									...formData,
									price: parseFloat(e.target.value) || 0
								})
							}
							className='w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none'
							min='0'
							step='0.01'
							required
						/>
					</div>

					<div className='flex items-center'>
						<input
							type='checkbox'
							id='available'
							checked={formData.available}
							onChange={e =>
								setFormData({ ...formData, available: e.target.checked })
							}
							className='mr-2 h-4 w-4'
						/>
						<label htmlFor='available' className='text-sm font-medium'>
							В наличии
						</label>
					</div>

					{error && (
						<div className='rounded-lg bg-red-50 p-3 text-red-600'>{error}</div>
					)}

					<div className='flex space-x-3'>
						<button
							type='button'
							onClick={onClose}
							className='flex-1 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50'
							disabled={loading}
						>
							Отмена
						</button>
						<button
							type='submit'
							className='flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50'
							disabled={loading}
						>
							{loading ? 'Сохранение...' : 'Сохранить'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
