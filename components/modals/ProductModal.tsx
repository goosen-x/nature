'use client'

import React from 'react'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Badge } from '../ui/badge'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'
import Link from 'next/link'

export function ProductModal({ product }) {
	const { state, dispatch } = useCart()

	const formattedDescription = product.description.split('\n').map(line => (
		<p className='mb-3' key={line}>
			{line.trim()}
		</p>
	))

	const quantity = state.items[product.id.toString()] || 0
	const price = toNumberWithSpaces(product.price)

	const add = () => {
		dispatch({ type: 'ADD_TO_CART', productId: product.id })
	}

	const remove = () => {
		dispatch({ type: 'REMOVE_FROM_CART', productId: product.id })
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Подробнее</Button>
			</DialogTrigger>
			<DialogContent className='max-h-screen min-w-[70vw] overflow-y-scroll sm:max-w-md lg:max-w-screen-lg'>
				<DialogHeader>
					<DialogTitle className='mb-2 text-left sm:text-center'>
						{product.title}
					</DialogTitle>
					<Badge className='w-fit bg-green-600'>
						{' '}
						{product.category?.name || product.category}
					</Badge>
				</DialogHeader>
				<div className='flex flex-col min-[1020px]:flex-row'>
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
				<div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
					<div>
						В корзине:{' '}
						<Button onClick={remove} variant={'outline'}>
							-
						</Button>{' '}
						<span className='mx-3'>{quantity}</span>
						<Button onClick={add} variant={'outline'}>
							+
						</Button>
					</div>
					<div className='flex justify-between gap-8'>
						<Link href={`/cart`}>
							<Button className='w-fit' variant='outline' size='sm'>
								Перейти в корзину
							</Button>
						</Link>
						<DialogClose>
							<Button variant='secondary' size='sm'>
								Закрыть
							</Button>
						</DialogClose>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
