import { useState, useEffect } from 'react'
import { ProductWithRelations } from '@/lib/supabase'

interface ProductsResponse {
	products: ProductWithRelations[]
	pagination: {
		page: number
		limit: number
		total: number
		totalPages: number
	}
}

interface UseProductsOptions {
	page?: number
	limit?: number
	category?: string
	search?: string
	minPrice?: number
	maxPrice?: number
	available?: boolean
}

export function useProducts(options: UseProductsOptions = {}) {
	const [data, setData] = useState<ProductsResponse | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const {
		page = 1,
		limit = 20,
		category,
		search,
		minPrice,
		maxPrice,
		available
	} = options

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				setError(null)

				const params = new URLSearchParams({
					page: page.toString(),
					limit: limit.toString()
				})

				if (category) params.append('category', category)
				if (search) params.append('search', search)
				if (minPrice) params.append('minPrice', minPrice.toString())
				if (maxPrice) params.append('maxPrice', maxPrice.toString())
				if (available !== undefined)
					params.append('available', available.toString())

				const controller = new AbortController()
				const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 секунд таймаут

				const response = await fetch(`/api/products?${params}`, {
					signal: controller.signal
				})

				clearTimeout(timeoutId)

				if (!response.ok) {
					const errorText = await response.text()
					console.error('API Error:', response.status, errorText)
					throw new Error(`Ошибка при загрузке товаров: ${response.status}`)
				}

				const result = await response.json()
				console.log('API Response:', result)
				setData(result)
			} catch (err) {
				if (err instanceof Error) {
					if (err.name === 'AbortError') {
						setError('Превышено время ожидания запроса')
					} else {
						setError(err.message)
					}
				} else {
					setError('Неизвестная ошибка')
				}
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [page, limit, category, search, minPrice, maxPrice, available])

	return {
		products: data?.products || [],
		pagination: data?.pagination,
		loading,
		error
	}
}
