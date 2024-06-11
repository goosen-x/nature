import Image from 'next/image'
import { Button } from '../ui/button'
import products from '@/data/products.json'
import Link from 'next/link'

const ProductCard = ({ src, alt, title, description, price }: any) => (
	<div className='group relative grid gap-4'>
		<Image
			src={src}
			alt={alt}
			width={450}
			height={600}
			className='aspect-[3/4] w-full rounded-lg object-cover transition-opacity group-hover:opacity-50'
		/>
		<div className='grid gap-1'>
			<h3 className='font-semibold'>{title}</h3>
			<p className='text-sm leading-none'>{description}</p>
			<h4 className='font-semibold'>{price} ₽ </h4>
		</div>
	</div>
)

export const ProductsSection = () => {
	const data = [products[5], products[7], products[2]]

	return (
		<section className='w-full py-12'>
			<div className='container mx-auto grid max-w-xl gap-6 px-4 md:gap-8 md:px-6 lg:max-w-none'>
				<div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8'>
					<div className='grid gap-1'>
						<h1 className='text-2xl font-bold tracking-tight'>Новинки</h1>
						<p className='text-gray-500 dark:text-gray-400'>
							Ознакомьтесь с нашими последними поступлениями
						</p>
					</div>
				</div>
				<div className='grid gap-8 lg:grid-cols-3'>
					{data.map((product: any) => (
						<ProductCard
							key={product.id}
							src={product.image}
							alt={product.title}
							title={product.title}
							description='Описание товара 2'
							price={product.price}
						/>
					))}
				</div>
				<div className='flex justify-center'>
					<Link href='/products'>
						<Button size='lg' variant='outline'>
							Посмотреть все товары
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
