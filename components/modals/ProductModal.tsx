'use client'

import React from 'react'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Badge } from '../ui/badge'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'

export function ProductModal({ product }) {
	const { state, dispatch } = useCart()

	const formattedDescription = product.description.split('\n').map(line => (
		<p className='mb-3' key={line}>
			{line.trim()}
		</p>
	))

	const quantity = state.items[product.id.toString()] || 0
	console.log('quantity: ', state)
	const price = toNumberWithSpaces(product.price)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Подробнее</Button>
			</DialogTrigger>
			<DialogContent className='max-h-screen min-w-[70vw] overflow-y-scroll sm:max-w-md lg:max-w-screen-lg'>
				<DialogHeader>
					<DialogTitle>{product.title}</DialogTitle>
					<Badge className='w-fit bg-green-600'> {product.category}</Badge>
				</DialogHeader>
				<div className='flex flex-col space-x-2 sm:flex-row'>
					<div className='max-w-[700px]'>{formattedDescription}</div>
					<Image
						className='aspect-square max-h-[600px] w-full max-w-[600px] object-contain'
						src={product.image || '/placeholder.svg'}
						alt={product.title}
						width={600}
						height={600}
					/>
				</div>
				<p>
					Цена: <span className='text-2xl font-bold'>{price} ₽</span>
				</p>
				<div className='flex items-center gap-8'>
					<Button
						className='w-fit'
						variant='outline'
						size='sm'
						onClick={() =>
							dispatch({ type: 'ADD_TO_CART', productId: product.id })
						}
					>
						Добавить в корзину
					</Button>
					<p>В корзине: {quantity}</p>
				</div>
			</DialogContent>
		</Dialog>
	)
}
