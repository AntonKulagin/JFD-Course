function getSumOfSequence(number) {

	const sequence = []

	for (let i = 1; i <= number; i++) {
		sequence.push(i)
	}

	return sequence[0] + sequence[sequence.length - 1]

}

console.log(getSumOfSequence(5))
