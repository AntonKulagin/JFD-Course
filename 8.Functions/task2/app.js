function getSumOfNumbers(number, type = 'odd') {
	let sum = 0
	for (let i = 0; i <= number; i++) {

		if (type === 'odd') {
			if (i % 2) {
				sum += i
			}
		} else if (type === 'even') {
			if (!(i % 2)) {
				sum += i
			}
		} else {
			sum += i
		}
	}
	return sum
}

console.log(getSumOfNumbers(10, ''))
