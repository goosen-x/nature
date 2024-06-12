import { Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import React from 'react'
import Image from 'next/image'

export function ProductModal({ product }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Подробнее</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>{product.title}</DialogTitle>
					<DialogDescription>{product.description}</DialogDescription>
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
				<Button variant='outline' size='sm'>
					В корзину
				</Button>
				{/* <DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Close
						</Button>
					</DialogClose>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	)
}
