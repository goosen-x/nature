'use client'

import { useCart } from '@/context/CartContext'
import { ContactForm } from '../forms/ContactForm'
import { Button } from '../ui/button'
import {
	DialogHeader,
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription
} from '../ui/dialog'

export const ContactModal: React.FC = () => {
	const { state } = useCart()
	const items = state.items

	const isProducts = Object.keys(items).length > 0

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='ml-4' variant='outline'>
					Оформить заказ
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Оформить заказ</DialogTitle>
					<DialogDescription>
						{' '}
						{isProducts
							? 'Заполните форму'
							: 'Корзина пустая, менеджер проконсультирует вас по наличию товаров'}
					</DialogDescription>
				</DialogHeader>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
