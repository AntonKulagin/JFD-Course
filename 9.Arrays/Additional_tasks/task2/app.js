function getMathResult(expression) {

	const allowededSymbols = '><=+-*/'
	const expressionCorrect = expression.filter(element => {
		if (+element || allowededSymbols.includes(element)) {
			return element
		}
	})

	const firstNumber = +expressionCorrect[0]
	const secondNumber = +expressionCorrect[2]
	const operator = expressionCorrect[1]


	if (expressionCorrect.length < 3 || !firstNumber || !allowededSymbols.includes(operator) || !secondNumber) {
		console.error('Ошибка')
	} else {
		console.log(operatorConversion(firstNumber, operator, secondNumber))
	}
}

function operatorConversion(a, operator, b) {
	let res
	switch (operator) {
		case '>':
			res = Boolean(a > b)
			break

		case '<':
			res = Boolean(a < b)
			break

		case '=':
			res = Boolean(a = b)
			break

		case '+':
			res = a + b
			break

		case '-':
			res = a - b
			break

		case '*':
			res = a * b
			break

		case '/':
			res = a / b
			break
	}
	return res
}

getMathResult(['200', '+', 300]) // 500
getMathResult(['20', '-', '5']) // 15
getMathResult([100, '/', 100]) // 1
getMathResult([2, '-', 2]) // 0
getMathResult(['5', '>', '10']) // false
getMathResult(['5', '<', '10']) // true
getMathResult(['1', '=', 1]) // true
getMathResult(['1', '**', 1]) // 'Ошибка'

getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]) // 104