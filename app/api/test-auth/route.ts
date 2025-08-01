import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { secret } = body

		// Проверяем секретный ключ
		const validSecret = process.env.TEST_PAGE_SECRET

		if (!validSecret) {
			console.error('TEST_PAGE_SECRET не настроен в переменных окружения')
			return NextResponse.json(
				{ error: 'Секретный ключ не настроен' },
				{ status: 500 }
			)
		}

		if (secret === validSecret) {
			return NextResponse.json({ success: true })
		} else {
			return NextResponse.json(
				{ error: 'Неверный секретный ключ' },
				{ status: 401 }
			)
		}
	} catch (error) {
		console.error('Ошибка при проверке секретного ключа:', error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
