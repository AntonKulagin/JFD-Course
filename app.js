const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:')
const coffeeNameCorrect = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase()
const coffeeNameCorrectIndex = coffees.findIndex(coffee => coffee === coffeeNameCorrect)

coffeeNameCorrectIndex < 0
	? alert('К сожалению, такого вида кофе нет в наличии')
	: alert(`Держите ваш любимый кофе ${coffeeNameCorrect}. Он ${coffeeNameCorrectIndex + 1} по популярности в нашей кофейне`)
