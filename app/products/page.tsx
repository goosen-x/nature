'use client'

import products from '@/data/products.json'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/cards/ProductCard'
import { FilterAccordion } from './widgets/FilterAccordion'
import { SortDropdown } from './widgets/SortDropdown'
import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export default function Component() {
	const [selectedCategory, setSelectedCategory] = useState('')
	const [sort, setSort] = useState('low')
	const [priceRange, setPriceRange] = useState('all')
	const [visibleProducts, setVisibleProducts] = useState(12)
	const qtyShowMore = 8

	const filteredProducts = useMemo(() => {
		return products
			.filter(product => {
				if (
					selectedCategory &&
					selectedCategory !== '' &&
					product.category !== selectedCategory
				) {
					return false
				}
				if (priceRange === 'under1000' && Number(product.price) >= 1000) {
					return false
				}
				if (
					priceRange === '1000to3000' &&
					(Number(product.price) < 1000 || Number(product.price) > 3000)
				) {
					return false
				}
				if (priceRange === 'over3000' && Number(product.price) <= 3000) {
					return false
				}
				return true
			})
			.sort((a, b) => {
				switch (sort) {
					case 'low':
						return Number(a.price) - Number(b.price)
					case 'high':
						return Number(b.price) - Number(a.price)
					case 'alphabet':
						return a.title.localeCompare(b.title)
					default:
						return 0
				}
			})
	}, [selectedCategory, priceRange, sort])

	const handleShowMore = () => {
		setVisibleProducts(prevVisibleProducts => prevVisibleProducts + qtyShowMore)
	}

	const uniqueCategories = useMemo(() => {
		const categoriesSet = new Set<string>(
			products.map(product => product.category)
		)
		// @ts-ignore
		return [...categoriesSet]
	}, [])

	const clearFilter = () => {
		setSelectedCategory('')
		setPriceRange('all')
		setSort('low')
	}

	return (
		<div className='w-full'>
			<div className='container mx-auto grid gap-8 py-8 md:grid-cols-[240px_1fr]'>
				<div className='flex flex-col gap-4'>
					<FilterAccordion
						categories={uniqueCategories}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						setPriceRange={setPriceRange}
						selectedPriceRange={priceRange}
					/>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
						<div className='grid gap-1'>
							<h1 className='text-2xl font-bold'>Популярные товары</h1>
							<p className='text-gray-500 dark:text-gray-400'>
								Выбирайте из широкого ассортимента
							</p>
						</div>
						<div className='flex gap-2'>
							<Button onClick={clearFilter} variant={'ghost'}>
								{' '}
								Очистить фильтры
							</Button>
							<SortDropdown sort={sort} setSort={setSort} />
						</div>
					</div>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{filteredProducts.slice(0, visibleProducts).map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
					{visibleProducts < filteredProducts.length && (
						<Button
							className='hover:bg-green-700focus-visible:outline-none m-auto inline-flex h-10 w-min items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'
							onClick={handleShowMore}
						>
							Показать ещё {qtyShowMore} товаров
						</Button>
					)}
					{filteredProducts.length === 0 && (
						<div className='w-full max-w-[700px] rounded-lg bg-green-600/20 p-3'>
							<p className='mb-8 text-xl'>
								Не нашли интересующий вас товар? Оставьте заявку и менеджер
								проконсультирует вас по подходящему продукту.
							</p>
							<ContactForm />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
