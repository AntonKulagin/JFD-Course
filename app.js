let health = prompt('Введите число параметра "здоровье" для персонажа')
health = Number(health)
console.log(`Переменная health = ${health}, тип данных должен быть "number": ${typeof health}`)
if (health <= 0 || !health) {
	console.log('Условие заключить в скобки, изменить первое условие "<" на "<=", знак "!" ставится перед переменной')
	alert('Параметр "здоровье" должен быть больше нуля!')
} else {
	console.log('После else скобки () не нужны')
	alert(`Параметр "здоровье" равен ${health}`);
	console.log('Переменную "Health" необходимо указать с маленькой буквы "health"')
}
