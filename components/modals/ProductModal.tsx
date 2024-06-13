'use client'

import React from 'react'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
// import { Product } from '@/types' // Предполагается, что тип Product импортируется из файла с типами

export function ProductModal({ product }) {
	const { dispatch } = useCart()

	const formattedDescription = product.description
		.split('\n')
		.map(line => <p key={line}>{line.trim()}</p>)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Подробнее</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>{product.title}</DialogTitle>
					<DialogDescription>{formattedDescription}</DialogDescription>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<Image
						src={product.image || '/placeholder.svg'}
						alt={product.title}
						width={300}
						height={300}
						className='aspect-square w-full object-contain'
					/>
				</div>
				<Button
					variant='outline'
					size='sm'
					onClick={() =>
						dispatch({ type: 'ADD_TO_CART', productId: product.id })
					}
				>
					В корзину
				</Button>
			</DialogContent>
		</Dialog>
	)
}
