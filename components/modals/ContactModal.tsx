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
					<DialogDescription>Заполните форму</DialogDescription>
				</DialogHeader>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
