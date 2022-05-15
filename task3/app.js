function getDivisorsCount(number = 1) {

	let amountDivisors = 0
	let valuesDivisors = ''

	if (number <= 0 || !Number.isInteger(number)) {
		alert(`Число ${number} должно быть целым числом и больше нуля`)
	} else {
		for (let i = 1; i <= number; i++) {
			if (!(number % i)) {
				amountDivisors++
				valuesDivisors += String(i)
				if (!(i === number)) {
					valuesDivisors += ', '
				}
			}
		}
		return console.log(`Количество делителей числа ${number} = ${amountDivisors}, их значения: ${valuesDivisors}.`)
	}
	return console.log('Попробуйте заново ввести число')
}

getDivisorsCount(30)