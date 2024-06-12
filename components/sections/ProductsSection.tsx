import Image from 'next/image'
import { Button } from '../ui/button'
import products from '@/data/products.json'
import Link from 'next/link'
import { ProductCard } from '../cards/ProductCard'

export const ProductsSection = () => {
	const data = [products[5], products[7], products[2]]

	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container m-auto space-y-12 px-4 md:px-6'>
				<div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8'>
					<div className='grid gap-1'>
						<h2 className='text-2xl font-bold tracking-tight'>
							Популярные товары
						</h2>
						<p className='text-gray-500 dark:text-gray-400'>
							Ознакомьтесь с нашими последними поступлениями
						</p>
					</div>
				</div>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{data.map((product: any) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				<div className='flex justify-center'>
					<Link href='/products'>
						<Button className='hover:bg-green-700focus-visible:outline-none inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'>
							Посмотреть все товары
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
