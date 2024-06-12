const toNumberWithSpaces = (num: number) => {
	return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
}

export default toNumberWithSpaces
