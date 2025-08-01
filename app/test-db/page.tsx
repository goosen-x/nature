'use client'

import { useProducts } from '@/hooks/useProducts'
import { useState, useEffect, Suspense } from 'react'
import { ProductWithRelations } from '@/lib/supabase'
import EditProductModal from '@/components/modals/EditProductModal'
import TestPageLoginForm from '@/components/forms/TestPageLoginForm'
import { useSearchParams } from 'next/navigation'

export default function TestDBPage() {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<TestDBPageContent />
		</Suspense>
	)
}

function TestDBPageContent() {
	const searchParams = useSearchParams()
	const secret = searchParams.get('secret')

	// Проверяем секретный ключ
	const isValidSecret = secret === process.env.NEXT_PUBLIC_TEST_PAGE_SECRET

	// Если секрет неверный, показываем форму входа
	if (!isValidSecret) {
		return <TestPageLoginForm />
	}

	return <ProtectedTestDBContent />
}

function ProtectedTestDBContent() {
	const [page, setPage] = useState(1)
	const [search, setSearch] = useState('')
	const [category, setCategory] = useState('')
	const [categories, setCategories] = useState<any[]>([])
	const [editingProduct, setEditingProduct] =
		useState<ProductWithRelations | null>(null)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	const { products, pagination, loading, error } = useProducts({
		page,
		limit: 12,
		search: search || undefined,
		category: category || undefined
	})

	// Загружаем категории
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch('/api/categories')
				if (response.ok) {
					const data = await response.json()
					setCategories(data)
				}
			} catch (error) {
				console.error('Ошибка при загрузке категорий:', error)
			}
		}
		fetchCategories()
	}, [])

	// Функция для обновления товара в списке
	const handleProductUpdate = (updatedProduct: ProductWithRelations) => {
		// Обновляем товар в списке
		const updatedProducts = products.map(product =>
			product.id === updatedProduct.id ? updatedProduct : product
		)

		// Принудительно обновляем данные через хук
		// Это временное решение, в реальном приложении лучше использовать React Query или SWR
		window.location.reload()
	}

	// Функция для открытия модального окна редактирования
	const handleEditProduct = (product: ProductWithRelations) => {
		setEditingProduct(product)
		setIsEditModalOpen(true)
	}

	if (loading) {
		return (
			<div className='container mx-auto p-4'>
				<h1 className='mb-4 text-2xl font-bold'>Тест базы данных</h1>
				<div className='flex items-center justify-center py-8'>
					<div className='text-center'>
						<div className='mb-4 text-2xl'>🔄</div>
						<div>Загрузка данных...</div>
					</div>
				</div>

				{/* Модальное окно редактирования */}
				<EditProductModal
					product={editingProduct}
					isOpen={isEditModalOpen}
					onClose={() => {
						setIsEditModalOpen(false)
						setEditingProduct(null)
					}}
					onSave={handleProductUpdate}
				/>
			</div>
		)
	}

	if (error) {
		return (
			<div className='container mx-auto p-4'>
				<h1 className='mb-4 text-2xl font-bold'>Тест базы данных</h1>
				<div className='rounded-lg bg-red-50 p-4 text-red-600'>
					<strong>Ошибка:</strong> {error}
				</div>
			</div>
		)
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='mb-6 text-3xl font-bold'>🎯 Тест базы данных Supabase</h1>

			{/* Фильтры */}
			<div className='mb-6 rounded-lg bg-gray-50 p-4'>
				<div className='grid gap-4 md:grid-cols-2'>
					<div>
						<label className='mb-2 block text-sm font-medium'>
							🔍 Поиск товаров:
						</label>
						<input
							type='text'
							value={search}
							onChange={e => setSearch(e.target.value)}
							className='w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none'
							placeholder='Введите название товара...'
						/>
					</div>

					<div>
						<label className='mb-2 block text-sm font-medium'>
							📂 Категория:
						</label>
						<select
							value={category}
							onChange={e => setCategory(e.target.value)}
							className='w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none'
						>
							<option value=''>Все категории</option>
							{categories.map(cat => (
								<option key={cat.id} value={cat.id}>
									{cat.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			{/* Статистика */}
			<div className='mb-6 rounded-lg bg-blue-50 p-4'>
				<div className='grid gap-2 text-sm md:grid-cols-3'>
					<div>
						<strong>📊 Всего товаров:</strong> {pagination?.total || 0}
					</div>
					<div>
						<strong>📄 Страница:</strong> {pagination?.page || 1} из{' '}
						{pagination?.totalPages || 1}
					</div>
					<div>
						<strong>🎯 Показано:</strong> {products.length} товаров
					</div>
				</div>
			</div>

			{/* Список товаров */}
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{products.map(product => (
					<div
						key={product.id}
						className='rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md'
					>
						<div className='mb-2 flex items-center justify-between'>
							<h3 className='font-semibold text-gray-900'>{product.title}</h3>
							<div className='flex items-center space-x-2'>
								<span
									className={`rounded-full px-2 py-1 text-xs ${
										product.available
											? 'bg-green-100 text-green-800'
											: 'bg-red-100 text-red-800'
									}`}
								>
									{product.available ? '✅ В наличии' : '❌ Нет в наличии'}
								</span>
								<button
									onClick={() => handleEditProduct(product)}
									className='rounded-lg bg-blue-500 px-2 py-1 text-xs text-white transition-colors hover:bg-blue-600'
									title='Редактировать товар'
								>
									✏️ Редактировать
								</button>
							</div>
						</div>

						<p className='mb-2 text-sm text-gray-600'>{product.fullname}</p>

						<div className='mb-2 text-lg font-bold text-green-600'>
							{product.price.toLocaleString()} ₽
						</div>

						<div className='space-y-1 text-xs text-gray-500'>
							<div>📂 Категория: {product.category?.name}</div>
							<div>🏢 Компания: {product.company?.name}</div>
						</div>
					</div>
				))}
			</div>

			{/* Пагинация */}
			{pagination && pagination.totalPages > 1 && (
				<div className='mt-8 flex justify-center space-x-2'>
					<button
						onClick={() => setPage(Math.max(1, page - 1))}
						disabled={page === 1}
						className='rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 disabled:opacity-50'
					>
						← Назад
					</button>

					<span className='flex items-center px-4 py-2'>
						Страница {page} из {pagination.totalPages}
					</span>

					<button
						onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
						disabled={page === pagination.totalPages}
						className='rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 disabled:opacity-50'
					>
						Вперед →
					</button>
				</div>
			)}

			{/* Информация о базе данных */}
			<div className='mt-8 rounded-lg bg-green-50 p-4'>
				<h2 className='mb-2 text-lg font-semibold text-green-800'>
					✅ Миграция завершена успешно!
				</h2>
				<div className='text-sm text-green-700'>
					<p>• Все товары перенесены в Supabase</p>
					<p>• Настроены связи между таблицами</p>
					<p>• Добавлены индексы для быстрого поиска</p>
					<p>• API endpoints готовы к использованию</p>
				</div>
			</div>

			{/* Информация о функционале редактирования */}
			<div className='mt-4 rounded-lg bg-blue-50 p-4'>
				<h2 className='mb-2 text-lg font-semibold text-blue-800'>
					✏️ Функционал редактирования
				</h2>
				<div className='text-sm text-blue-700'>
					<p>• Нажмите на кнопку ✏️ рядом с товаром для редактирования</p>
					<p>• Можно изменить название, полное название, цену и наличие</p>
					<p>• Изменения сохраняются в базе данных Supabase</p>
					<p>• Страница автоматически обновляется после сохранения</p>
				</div>
			</div>

			{/* Модальное окно редактирования */}
			<EditProductModal
				product={editingProduct}
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false)
					setEditingProduct(null)
				}}
				onSave={handleProductUpdate}
			/>
		</div>
	)
}
