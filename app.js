let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
	numbers[i] = numbers[i] ** 3
	sum += numbers[i]
}
console.log(sum) // 1158411


// Через цикл for of
console.log(numbers)

console.log(`Необходимо привести массив к исходному состоянию`)
for (let i = 0; i < numbers.length; i += 1) {
	numbers[i] = Math.cbrt(numbers[i])
}

console.log(numbers)
sum = 0
for (let num of numbers) {
	num = num ** 3
	sum += num
}
console.log(sum) // 1003904306910622800  // 1158411