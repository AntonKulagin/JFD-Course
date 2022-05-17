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

	let sum = 0

	shoppingBag
		.map(prod => {
			return { ...prod, ...groceries[prod.product] }
		})
		.forEach(prod => sum += calcPrice(prod.quantity, prod.price, prod.discount))

	return sum.toFixed(2)
}

function calcPrice(quantity, price, discount) {
	return quantity * (price - price * discount / 100)
}


const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05