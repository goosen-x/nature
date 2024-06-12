'use client'

import products from '@/data/products.json'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/cards/ProductCard'
import { FilterAccordion } from './FilterAccordion'
import { SortDropdown } from './SortDropdown'

export default function Component() {
	const [selectedCategory, setSelectedCategory] = useState('')
	const [sort, setSort] = useState('low')

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
				return true
			})
			.sort((a, b) => {
				switch (sort) {
					case 'low':
						return a.price - b.price
					case 'high':
						return b.price - a.price
					case 'alphabet':
						return a.title.localeCompare(b.title)
					default:
						return 0
				}
			})
	}, [selectedCategory, sort])

	const uniqueCategories = useMemo(() => {
		const categoriesSet = new Set<string>(
			products.map(product => product.category)
		)
		// @ts-ignore
		return [...categoriesSet]
	}, [products])

	return (
		<div className='w-full'>
			<div className='container mx-auto grid gap-8 py-8 md:grid-cols-[240px_1fr]'>
				<div className='flex flex-col gap-4'>
					<FilterAccordion
						categories={uniqueCategories}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center justify-between'>
						<div className='grid gap-1'>
							<h1 className='text-2xl font-bold'>Популярные товары</h1>
							<p className='text-gray-500 dark:text-gray-400'>
								Выбирайте из широкого ассортимента
							</p>
						</div>
						<SortDropdown sort={sort} setSort={setSort} />
					</div>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{filteredProducts.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
