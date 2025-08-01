import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const id = parseInt(params.id)
		const body = await request.json()

		// Валидация данных
		const { title, fullname, price, available } = body

		if (
			!title ||
			!fullname ||
			typeof price !== 'number' ||
			typeof available !== 'boolean'
		) {
			return NextResponse.json(
				{ error: 'Неверные данные для обновления' },
				{ status: 400 }
			)
		}

		// Обновляем товар
		const { data, error } = await supabase
			.from('products')
			.update({
				title,
				fullname,
				price,
				available,
				updated_at: new Date().toISOString()
			})
			.eq('id', id)
			.select(
				`
				*,
				category:categories(*),
				company:companies(*)
			`
			)
			.single()

		if (error) {
			console.error('Ошибка при обновлении товара:', error)
			return NextResponse.json(
				{ error: 'Ошибка при обновлении товара' },
				{ status: 500 }
			)
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error('Ошибка API:', error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
