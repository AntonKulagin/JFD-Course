
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
console.log('Тип данных переменной totalJuniorDevelopersSalary должен быть "number".', `В коде: ${typeof totalJuniorDevelopersSalary}`)

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
	const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
	totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
//=======
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

