import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
	try {
		const { data: categories, error } = await supabase
			.from('categories')
			.select('*')
			.order('name')

		if (error) {
			console.error('Ошибка при получении категорий:', error)
			return NextResponse.json(
				{ error: 'Ошибка при получении категорий' },
				{ status: 500 }
			)
		}

		return NextResponse.json(categories)
	} catch (error) {
		console.error('Ошибка API:', error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
