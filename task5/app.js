const clientsEstimations = []

for (let i = 0; i < 5; i++) {
	askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter(item => item > 5).length
const notGoodEstimations = clientsEstimations.filter(item => item <= 5).length

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)

function askClientToGiveEstimation() {
	let rating = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')

	if (rating >= 1 && rating <= 10) {
		clientsEstimations.push(rating)
	}
}