'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Имя должно быть не менее 2 символов.'
	}),
	phone: z.string().regex(phoneRegex, 'Неверный формат номера телефона.'),
	email: z
		.string()
		.min(1, { message: 'Это обязательное поле.' })
		.email('Неверный формат электронной почты.')
})

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [responseMessage, setResponseMessage] = useState('')
	const { state } = useCart()
	const items = state.items

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			email: ''
		}
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true)
		setResponseMessage('')

		try {
			const response = await fetch('/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...values, items })
			})

			const result = await response.json()

			if (response.ok) {
				setResponseMessage(
					'Заказ успешно оформлен. Менеджер свяжется с вами в ближайшее время.'
				)
			} else {
				setResponseMessage(`Ошибка: ${result.msg}`)
			}
		} catch (err) {
			console.error('Ошибка при отправке формы:', err)
			setResponseMessage(
				'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder='Введите имя' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Телефон</FormLabel>
								<FormControl>
									<Input placeholder='Введите телефон' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='Введите email' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? 'Отправка...' : 'Отправить'}
					</Button>
				</form>
			</Form>
			{responseMessage && <p className='mt-6'>{responseMessage}</p>}
		</div>
	)
}
