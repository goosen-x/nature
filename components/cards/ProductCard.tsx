import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'

export const ProductCard = ({ product }) => {
	return (
		<div
			key={product.id}
			className='grid gap-4 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg'
		>
			<Link href='#' className='relative' prefetch={false}>
				<Image
					src={product.image || '/placeholder.svg'}
					alt={product.title}
					width={300}
					height={300}
					className='aspect-square w-full object-contain'
				/>
				<span className='absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs text-white'>
					НОВИНКА
				</span>
			</Link>
			<div className='flex flex-col gap-2 p-4'>
				<h3 className='text-lg font-semibold'>{product.title}</h3>
				<p className='line-clamp-2 text-gray-500 dark:text-gray-400'>
					{product.description}
				</p>
				<div className='flex items-center justify-between'>
					<span className='font-semibold text-primary'>
						{toNumberWithSpaces(product.price)} ₽
					</span>
					<Button variant='outline' size='sm'>
						В корзину
					</Button>
				</div>
			</div>
		</div>
	)
}
