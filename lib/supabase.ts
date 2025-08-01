import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Типы для базы данных
export interface Category {
	id: number
	name: string
	slug: string
	created_at?: string
}

export interface Company {
	id: number
	name: string
	country: string
	created_at?: string
}

export interface Product {
	id: number
	original_id: number
	title: string
	fullname: string
	description: string
	price: number
	image: string
	category_id: number
	company_id: number
	available: boolean
	created_at?: string
	updated_at?: string
	// Связи
	category?: Category
	company?: Company
}

export interface ProductWithRelations extends Product {
	category: Category
	company: Company
}
