const groceries = {
	"Orange Juice": {
		price: 1.5,
		discount: 10,
	},
	"Chocolate": {
		price: 2,
		discount: 0,
	},
	// more items...
}

const shoppingBag = [
	{ product: 'Chocolate', quantity: 3 },
	{ product: 'Orange Juice', quantity: 23 },
]

function getTotalPriceOfShoppingBag(shoppingBag) {

	const sum = shoppingBag.reduce((acc, prod) => {
		const allDataOfProduct = { ...prod, ...groceries[prod.product] }
		return acc += calcPrice(allDataOfProduct.quantity, allDataOfProduct.price, allDataOfProduct.discount)
	}, 0)

	return sum.toFixed(2)
}

function calcPrice(quantity, price, discount) {
	return quantity * (price - price * discount / 100)
}


const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05