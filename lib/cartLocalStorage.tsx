// Функция для сохранения состояния корзины в localStorage
export const cartLocalStorage = cart => {
	localStorage.setItem('cart', JSON.stringify(cart))
}
