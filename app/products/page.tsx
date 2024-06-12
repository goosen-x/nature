'use client'

import products from '@/data/products.json'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

export default function Component() {
	const [selectedFilters, setSelectedFilters] = useState({
		category: [],
		price: { min: 0, max: 1000 },
		size: []
	})
	const [sort, setSort] = useState('featured')
	// const filteredProducts = useMemo(() => {
	// 	return products
	// 		.filter(product => {
	// 			if (
	// 				selectedFilters.category.length > 0 &&
	// 				!selectedFilters.category.includes(product.category)
	// 			) {
	// 				return false
	// 			}
	// 			if (
	// 				product.price < selectedFilters.price.min ||
	// 				product.price > selectedFilters.price.max
	// 			) {
	// 				return false
	// 			}
	// 			if (
	// 				selectedFilters.size.length > 0 &&
	// 				!selectedFilters.size.some(size => product.size.includes(size))
	// 			) {
	// 				return false
	// 			}
	// 			return true
	// 		})
	// 		.sort((a, b) => {
	// 			switch (sort) {
	// 				case 'featured':
	// 					return b.featured - a.featured
	// 				case 'low':
	// 					return a.price - b.price
	// 				case 'high':
	// 					return b.price - a.price
	// 				default:
	// 					return 0
	// 			}
	// 		})
	// }, [selectedFilters, sort])
	// const handleFilterChange = (type, value) => {
	// 	if (type === 'category') {
	// 		setSelectedFilters({
	// 			...selectedFilters,
	// 			category: selectedFilters.category.includes(value)
	// 				? selectedFilters.category.filter(item => item !== value)
	// 				: [...selectedFilters.category, value]
	// 		})
	// 	} else if (type === 'price') {
	// 		setSelectedFilters({
	// 			...selectedFilters,
	// 			price: value
	// 		})
	// 	} else if (type === 'size') {
	// 		setSelectedFilters({
	// 			...selectedFilters,
	// 			size: selectedFilters.size.includes(value)
	// 				? selectedFilters.size.filter(item => item !== value)
	// 				: [...selectedFilters.size, value]
	// 		})
	// 	}
	// }
	return (
		<div className='w-full'>
			<div className='container mx-auto grid gap-8 py-8 md:grid-cols-[240px_1fr]'>
				<div className='flex flex-col gap-4'>
					<Accordion type='single' collapsible>
						<AccordionItem value='category'>
							<AccordionTrigger className='text-base font-semibold'>
								Категории
							</AccordionTrigger>
							<AccordionContent>
								<div className='grid gap-2'>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() =>
										// 	handleFilterChange(
										// 		'category',
										// 		'\u041E\u0434\u0435\u0436\u0434\u0430'
										// 	)
										// }
										/>
										Одежда
									</Label>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() =>
										// 	handleFilterChange(
										// 		'category',
										// 		'\u041E\u0431\u0443\u0432\u044C'
										// 	)
										// }
										/>
										Обувь
									</Label>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() =>
										// 	handleFilterChange(
										// 		'category',
										// 		'\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B'
										// 	)
										// }
										/>
										Аксессуары
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='price'>
							<AccordionTrigger className='text-base font-semibold'>
								Цена
							</AccordionTrigger>
							<AccordionContent>
								<div />
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='size'>
							<AccordionTrigger className='text-base font-semibold'>
								Размер
							</AccordionTrigger>
							<AccordionContent>
								<div className='grid gap-2'>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() => handleFilterChange('size', 'S')}
										/>
										S
									</Label>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() => handleFilterChange('size', 'M')}
										/>
										M
									</Label>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() => handleFilterChange('size', 'L')}
										/>
										L
									</Label>
									<Label className='flex items-center gap-2 font-normal'>
										<Checkbox
										// onCheckedChange={() => handleFilterChange('size', 'XL')}
										/>
										XL
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center justify-between'>
						<div className='grid gap-1'>
							<h1 className='text-2xl font-bold'>Популярные товары</h1>
							<p className='text-gray-500 dark:text-gray-400'>
								Выбирайте из широкого ассортимента
							</p>
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='outline' className='shrink-0'>
									<ArrowUpDownIcon className='mr-2 h-4 w-4' />
									Сортировать
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-[200px]' align='end'>
								<DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
									<DropdownMenuRadioItem value='featured'>
										Рекомендуемые
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value='low'>
										Цена: от низкой к высокой
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value='high'>
										Цена: от высокой к низкой
									</DropdownMenuRadioItem>
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{products.map(product => (
							<div
								key={product.id}
								className='grid gap-4 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg'
							>
								<Link href='#' className='relative' prefetch={false}>
									<Image
										src={product.image || '/placeholder.svg'}
										alt={product.title}
										width={300}
										height={300}
										className='aspect-square w-full object-contain'
									/>
									<span className='absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs text-white'>
										{/* {product.featured
											? '\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C'
											: ''} */}
									</span>
								</Link>
								<div className='flex flex-col gap-2 p-4'>
									<h3 className='text-lg font-semibold'>{product.title}</h3>
									<p className='line-clamp-2 text-gray-500 dark:text-gray-400'>
										{/* {product.description} */}
									</p>
									<div className='flex items-center justify-between'>
										<span className='font-semibold text-primary'>
											{/* ${product.price.toFixed(2)} */}
											{product.price}
										</span>
										<Button variant='outline' size='sm'>
											В корзину
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

function ArrowUpDownIcon(props) {
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
			<path d='m21 16-4 4-4-4' />
			<path d='M17 20V4' />
			<path d='m3 8 4-4 4 4' />
			<path d='M7 4v16' />
		</svg>
	)
}
