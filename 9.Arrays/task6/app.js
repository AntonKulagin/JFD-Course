
const numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i] ** 3
}
console.log(sum)
//========================================
sum = 0

for (let number of numbers) {
	sum += number ** 3
}
console.log(sum)
//========================================
sum = 0

numbers.forEach(number => sum += number ** 3)

console.log(sum)
//========================================
sum = 0

sum = numbers.reduce((acc, number) => acc += number ** 3, 0)

console.log(sum)

//==============Другая задача===================

let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

temperatureInCelsius = Number(temperatureInCelsius)
console.log('Тип данных:', typeof temperatureInCelsius)

if (temperatureInCelsius === 0) {
	alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
	alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
console.log(temperatureInCelsius, 'Не соблюдено правило написания lowCamelCase')
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`);
console.log('Исправить % на $')
