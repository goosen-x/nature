import { supabase } from '../lib/supabase'
import productsData from '../data/products.json'

interface JsonProduct {
	id: number
	fullname: string
	title: string
	price: number
	description: string
	image: string
	category: string
	avalible: string
	country: string
	company: string
}

async function migrateData() {
	console.log('Начинаем миграцию данных...')

	try {
		// Создаем уникальные категории
		const categories = Array.from(
			new Set(productsData.map((p: JsonProduct) => p.category))
		)
		console.log(`Найдено ${categories.length} уникальных категорий`)

		// Создаем уникальные компании
		const companies = Array.from(
			new Set(productsData.map((p: JsonProduct) => p.company))
		)
		console.log(`Найдено ${companies.length} уникальных компаний`)

		// Вставляем категории
		const categoryMap = new Map<string, number>()
		for (const categoryName of categories) {
			const slug = categoryName
				.toLowerCase()
				.replace(/[^а-яёa-z0-9\s-]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-')
				.trim()

			const { data: category, error } = await supabase
				.from('categories')
				.upsert({ name: categoryName, slug }, { onConflict: 'name' })
				.select()
				.single()

			if (error) {
				console.error('Ошибка при создании категории:', error)
				continue
			}

			categoryMap.set(categoryName, category.id)
			console.log(`Создана категория: ${categoryName} (ID: ${category.id})`)
		}

		// Вставляем компании
		const companyMap = new Map<string, number>()
		for (const companyName of companies) {
			const { data: company, error } = await supabase
				.from('companies')
				.upsert({ name: companyName, country: 'США' }, { onConflict: 'name' })
				.select()
				.single()

			if (error) {
				console.error('Ошибка при создании компании:', error)
				continue
			}

			companyMap.set(companyName, company.id)
			console.log(`Создана компания: ${companyName} (ID: ${company.id})`)
		}

		// Вставляем товары
		let successCount = 0
		let errorCount = 0

		for (const product of productsData) {
			const categoryId = categoryMap.get(product.category)
			const companyId = companyMap.get(product.company)

			if (!categoryId || !companyId) {
				console.error(
					`Пропускаем товар ${product.title}: не найдена категория или компания`
				)
				errorCount++
				continue
			}

			const { error } = await supabase.from('products').upsert(
				{
					original_id: product.id,
					title: product.title,
					fullname: product.fullname,
					description: product.description,
					price: product.price,
					image: product.image,
					category_id: categoryId,
					company_id: companyId,
					available: product.avalible === 'В наличии'
				},
				{ onConflict: 'original_id' }
			)

			if (error) {
				console.error(`Ошибка при создании товара ${product.title}:`, error)
				errorCount++
			} else {
				successCount++
				if (successCount % 50 === 0) {
					console.log(`Обработано товаров: ${successCount}`)
				}
			}
		}

		console.log(`\nМиграция завершена!`)
		console.log(`Успешно: ${successCount} товаров`)
		console.log(`Ошибок: ${errorCount} товаров`)
	} catch (error) {
		console.error('Критическая ошибка при миграции:', error)
	}
}

// Запускаем миграцию
migrateData()
