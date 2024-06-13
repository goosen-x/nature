'use client'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { Button } from '../ui/button'
import { useCart } from '@/context/CartContext'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

export type Transaction = {
	id: number
	category: string
	amount: number
	title: string // наименование товара
	quantity: number // количество
	price: number // цена
}

type TransactionTableProps = {
	transactions: Transaction[]
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
	transactions
}) => {
	const { dispatch } = useCart()
	const [total, setTotal] = useState(0)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		const totalAmount = transactions.reduce((total, transaction) => {
			return total + transaction.amount
		}, 0)
		setTotal(totalAmount)
	}, [transactions])

	const handleRemove = transaction => {
		const productId = transaction.id
		if (productId) {
			dispatch({ type: 'REMOVE_ALL_FROM_CART', productId: productId })
		}
	}

	if (!isMounted) {
		return null // Пока не смонтирован, ничего не рендерим
	}

	// const total = transactions.reduce((total, transaction) => {
	// 	return total + transaction.amount
	// }, 0)

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className='sm:text-s text-xs'>Название</TableHead>
					<TableHead className='sm:text-s hidden text-xs md:table-cell'>
						Категория
					</TableHead>
					<TableHead className='sm:text-s text-nowrap text-xs'>
						Кол-во
					</TableHead>
					<TableHead className='sm:text-s text-xs'>Цена</TableHead>
					<TableHead className='sm:text-s text-xs'>Сумма</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction, index) => (
					<TableRow key={index}>
						<TableCell className='text-xs sm:text-base'>
							{transaction.title}
						</TableCell>
						<TableCell className='hidden text-xs sm:text-base md:table-cell'>
							<span
								className={`px-2 py-1 bg-${transaction.category.toLowerCase()}-200 text-${transaction.category.toLowerCase()}-800 rounded-md`}
							>
								{transaction.category}
							</span>
						</TableCell>
						<TableCell className='text-nowrap text-xs sm:text-base'>
							{transaction.quantity}
						</TableCell>
						<TableCell className='text-nowrap text-xs sm:text-base'>
							{toNumberWithSpaces(transaction.price)} ₽
						</TableCell>
						<TableCell className='text-nowrap text-xs sm:text-base'>
							{toNumberWithSpaces(transaction.amount)} ₽
						</TableCell>
						<TableCell>
							<Button
								variant={'outline'}
								className='flex w-full items-center space-x-2 rounded-lg px-1 py-1 text-gray-500 hover:bg-gray-200 active:bg-gray-300'
								onClick={() => handleRemove(transaction)}
							>
								<Cross1Icon className='h-4 w-4' />
							</Button>
						</TableCell>
					</TableRow>
				))}
				<TableRow>
					<TableCell colSpan={6}>
						<div className='flex w-full items-center justify-between'>
							<div className='text-lg font-medium'>Итого</div>
							<div className='text-lg font-medium'>
								Сумма заказа: {toNumberWithSpaces(total)} ₽
							</div>
						</div>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
