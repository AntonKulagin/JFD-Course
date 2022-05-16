function getDaysBeforeBirthday(nextBirthdayDate) {

	const today = Date.now()
	const futureDay = nextBirthdayDate.getTime()
	const difference = futureDay - today

	return convertMsToDays(difference)

}

function convertMsToDays(ms) {
	return Math.round(ms / 1000 / 60 / 60 / 24)
}

const daysBeforeBirthday = getDaysBeforeBirthday(new Date(2023, 1, 7))
console.log('daysBeforeBirthday', daysBeforeBirthday)