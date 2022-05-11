let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {

	console.log(`Не стоит изменять переменную number[${i}]:(${numbers[i]}) в массиве [${numbers}]`)
	sum += numbers[i] ** 3
}
console.log(sum) // 1158411


// Через цикл for of
sum = 0
for (let num of numbers) {

	console.log(`Не стоит изменять переменную num:(${num}) в массиве [${numbers}]`)
	sum += num ** 3
}
console.log(sum) // 1003904306910622800  // 1158411