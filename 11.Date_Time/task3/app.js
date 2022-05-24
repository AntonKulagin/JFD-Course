function addDays(date, days = 1) {
	if (typeof date === 'number') {
		return new Date(date + convertDaysToMs(days))
	} else {
		return new Date(date.getTime() + convertDaysToMs(days))
	}
}

function convertDaysToMs(numberOfDays) {
	return numberOfDays * 24 * 60 * 60 * 1000
}

const newDate = addDays(Date.now(), 5)
console.log(newDate)