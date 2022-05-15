const goals = [8, 1, 1, 3, 2, -1, 5]

//----Самый результативный матч --------------------------

const maxGoals = Math.max(...goals)

goals.forEach((numberOfGoals, number) => {
	if (numberOfGoals === maxGoals) {
		alert(`Самый результативный матч был под номером ${number + 1}. В нем было забито ${numberOfGoals} гол(ов).`)
	}
})

//----Самые нерезультативные игры-------------------------

const goalsWithoutAutoDefeat = goals.filter(goal => goal >= 0)
const minGoals = Math.min(...goalsWithoutAutoDefeat)
let numbers = ''
const comma = ', '

goals.forEach((numberOfGoals, number) => {

	if (numberOfGoals === minGoals) {
		numbers += String(number + 1) + comma
	}

	if (number == goals.length - 1) {
		numbers = numbers.slice(0, numbers.length - comma.length)
		alert(`Самые нерезультативные матчи были под номерами ${numbers}. В каждом из них было забито по ${minGoals} мячу(а).`)
	}
})

//----Общее количество голов за сезон---------------------

const sumOfGoals = goalsWithoutAutoDefeat
	.reduce((sum, numberOfGoals) => sum + numberOfGoals, 0)

alert(`Общее количество голов за сезон равно ${sumOfGoals}`)

//----Автоматические поражения----------------------------

const hasAutoDefeats = goals.filter(defeat => defeat < 0).length

hasAutoDefeats
	? alert('Были автоматические поражения: да')
	: alert('Были автоматические поражения: нет')

//----Среднее количество голов за матч-------------------

const averageNumberOfGoals = Math.floor(sumOfGoals / goalsWithoutAutoDefeat.length)

alert(`Среднее количество голов за матч равно ${averageNumberOfGoals}`)

//----Голы в порядке возрастания------------------------

const goalsAscending = goalsWithoutAutoDefeat.sort((a, b) => a - b)

alert(goalsAscending)

