let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {

	console.log(`Операции над переменной number[${i}]:(${numbers[i]}) приводит к мутации массива [${numbers}]`)
	sum += numbers[i] ** 3
}
console.log(sum) // 1158411


// Через цикл for of
sum = 0
for (let num of numbers) {

	num = num ** 3
	sum += num
	console.log(`В цикле ForOf изменение переменной num:(${num}) не ведет к мутации массива [${numbers}]`)
}
console.log(sum) // 1003904306910622800  // 1158411