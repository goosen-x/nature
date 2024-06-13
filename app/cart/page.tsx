'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'
import { Transaction, TransactionTable } from '@/components/tables/TableCart'
import products from '@/data/products.json'
import { ContactModal } from '@/components/modals/ContactModal'

const CartPage: React.FC = () => {
	const { state } = useCart()

	// Объединение данных корзины и продуктов
	const cartItems = Object.entries(state.items)
		.map(([productId, quantity]) => {
			const product = products.find(p => p.id === parseInt(productId))
			if (!product) return null

			return {
				id: product.id,
				category: product.category,
				amount: product.price * quantity,
				title: product.title,
				quantity,
				price: product.price,
				image: product.image
			}
		})
		.filter(item => item !== null)

	return (
		<div className='container mx-auto px-4 py-8 md:py-12'>
			<h1 className='mb-6 text-2xl font-bold'>Корзина</h1>
			<main className='flex-grow p-6'>
				<div className='flex w-full justify-end'>
					<ContactModal />
				</div>
				<div className='mb-4 flex items-center justify-between'>
					<h1 className='text-lg font-medium'>Transactions</h1>
				</div>
				<TransactionTable transactions={cartItems as Transaction[]} />
			</main>
		</div>
	)
}

export default CartPage
