import Image from 'next/image'
import toNumberWithSpaces from '@/lib/toNumberWithSpaces'
import { ProductModal } from '../modals/ProductModal'

export const ProductCard = ({ product }) => {
	return (
		<>
			<div
				key={product.id}
				className='grid gap-4 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg'
			>
				<div className='relative w-full'>
					<Image
						src={product.image || '/placeholder.svg'}
						alt={product.title}
						width={300}
						height={300}
						className='aspect-square w-full object-contain'
					/>
				</div>
				<div className='flex min-h-40 flex-col justify-between gap-2 p-4'>
					<h3 className='text-lg font-semibold'>{product.title}</h3>
					<p className='line-clamp-2 text-gray-500 dark:text-gray-400'>
						{product.description}
					</p>
					<div className='flex items-center justify-between'>
						<span className='font-semibold text-primary'>
							{toNumberWithSpaces(Math.floor(product.price))} ₽
						</span>
						<ProductModal product={product} />
					</div>
				</div>
			</div>
		</>
	)
}
