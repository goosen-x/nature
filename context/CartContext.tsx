'use client'

import { cartLocalStorage } from '@/lib/cartLocalStorage'
import React, {
	createContext,
	useReducer,
	useContext,
	ReactNode,
	useEffect
} from 'react'

export type Product = {
	id: number
	title: string
	price: number
	description: string
	image: string
	category: string
	available: string
	country: string
	company: string
}

type CartState = {
	items: { [productId: number]: number }
}

type CartAction =
	| { type: 'ADD_TO_CART'; productId: number }
	| { type: 'REMOVE_ONE_FROM_CART'; productId: number }
	| { type: 'REMOVE_FROM_CART'; productId: number }
	| { type: 'CLEAR_CART' }
	| { type: 'REMOVE_ALL_FROM_CART'; productId: number }

const CartContext = createContext<
	| {
			state: CartState
			dispatch: React.Dispatch<CartAction>
	  }
	| undefined
>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
	let newState
	switch (action.type) {
		case 'ADD_TO_CART':
			newState = {
				...state,
				items: {
					...state.items,
					[action.productId]: (state.items[action.productId] || 0) + 1
				}
			}
			cartLocalStorage(newState) // Сохранение в localStorage
			return newState
		case 'REMOVE_FROM_CART':
			const updatedItems = { ...state.items }
			if (updatedItems[action.productId] > 1) {
				updatedItems[action.productId] -= 1
			} else {
				delete updatedItems[action.productId]
			}
			newState = {
				...state,
				items: updatedItems
			}
			cartLocalStorage(newState) // Сохранение в localStorage
			return newState
		case 'CLEAR_CART':
			newState = { items: {} }
			cartLocalStorage(newState) // Сохранение в localStorage
			return newState
		case 'REMOVE_ALL_FROM_CART':
			const { [action.productId]: _, ...restItems } = state.items
			newState = { ...state, items: restItems }
			cartLocalStorage(newState) // Сохранение в localStorage
			return newState

		case 'REMOVE_ONE_FROM_CART':
			const items = { ...state.items }
			if (items[action.productId] > 1) {
				items[action.productId] -= 1
			}
		default:
			throw new Error(`Unhandled action type`)
	}
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, { items: {} }, () => {
		if (typeof window !== 'undefined') {
			const savedCart = localStorage.getItem('cart')
			return savedCart ? JSON.parse(savedCart) : { items: {} }
		}
		return { items: {} }
	}) // Используем функцию инициализации для загрузки из localStorage

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(state))
		}
	}, [state])

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
