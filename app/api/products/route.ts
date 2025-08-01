import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const page = parseInt(searchParams.get('page') || '1')
		const limit = parseInt(searchParams.get('limit') || '20')
		const category = searchParams.get('category')
		const search = searchParams.get('search')
		const minPrice = searchParams.get('minPrice')
		const maxPrice = searchParams.get('maxPrice')
		const available = searchParams.get('available')

		let query = supabase.from('products').select(`
        *,
        category:categories(*),
        company:companies(*)
      `)

		// Фильтр по категории
		if (category) {
			query = query.eq('category_id', category)
		}

		// Фильтр по цене
		if (minPrice) {
			query = query.gte('price', parseFloat(minPrice))
		}
		if (maxPrice) {
			query = query.lte('price', parseFloat(maxPrice))
		}

		// Фильтр по наличию
		if (available !== null) {
			query = query.eq('available', available === 'true')
		}

		// Поиск по названию
		if (search) {
			query = query.or(`title.ilike.%${search}%,fullname.ilike.%${search}%`)
		}

		// Сначала получаем общее количество записей
		const { count: totalCount } = await supabase
			.from('products')
			.select('*', { count: 'exact', head: true })

		// Пагинация
		const from = (page - 1) * limit
		const to = from + limit - 1

		const { data: products, error } = await query.range(from, to).order('title')

		if (error) {
			console.error('Ошибка при получении товаров:', error)
			return NextResponse.json(
				{ error: 'Ошибка при получении товаров' },
				{ status: 500 }
			)
		}

		return NextResponse.json({
			products,
			pagination: {
				page,
				limit,
				total: totalCount || 0,
				totalPages: Math.ceil((totalCount || 0) / limit)
			}
		})
	} catch (error) {
		console.error('Ошибка API:', error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
