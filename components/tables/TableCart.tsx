'use client'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { DeleteIcon, MoveVerticalIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart } from '@/context/CartContext'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'

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

	const handleRemove = transaction => {
		const productId = transaction.id
		if (productId) {
			dispatch({ type: 'REMOVE_ALL_FROM_CART', productId: productId })
		}
	}

	const total = transactions.reduce((total, transaction) => {
		return total + transaction.amount
	}, 0)

	return (
		<Table>
			<TableHeader>
				<TableRow>
					{/* <TableHead>Date</TableHead> */}
					<TableHead>Название</TableHead>
					<TableHead>Категория</TableHead>
					<TableHead>Количество</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Amount</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction, index) => (
					<TableRow key={index}>
						<TableCell>{transaction.title}</TableCell>
						<TableCell>
							<span
								className={`px-2 py-1 bg-${transaction.category.toLowerCase()}-200 text-${transaction.category.toLowerCase()}-800 rounded-md`}
							>
								{transaction.category}
							</span>
						</TableCell>
						<TableCell>{transaction.quantity}</TableCell>
						<TableCell>{transaction.price} ₽</TableCell>
						<TableCell>{transaction.amount} ₽</TableCell>
						<TableCell>
							{/* <Popover>
								<PopoverTrigger>
									<div
										// type='button'
										className='rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300'
									>
										<MoveVerticalIcon className='h-4 w-4' />
									</div>
								</PopoverTrigger>
								<PopoverContent className='w-40'>
									<div
										className='flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300'
										onClick={() => handleRemove(transaction)}
									>
										<DeleteIcon className='h-4 w-4' />
										<span className='text-sm font-medium'>Delete</span>
									</div>
								</PopoverContent>
							</Popover>
						</TableCell> */}
							<Button
								variant={'secondary'}
								className='flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300'
								onClick={() => handleRemove(transaction)}
							>
								<span className='text-sm font-medium'>Удалить</span>
								<DeleteIcon className='h-4 w-4' />
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
