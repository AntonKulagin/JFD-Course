const todaysWinner = {
	prize: '10 000$',
}

const winnerApplicants = {
	'001': {
		name: 'Максим',
		age: 25,
	},
	'201': {
		name: 'Светлана',
		age: 20,
	},
	'304': {
		name: 'Екатерина',
		age: 35,
	},
}


const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);


function getWinner(applicants, winnerObject) {

	const keysWinner = Object.keys(applicants)
	const randomToken = getRandomNumberInRange(0, keysWinner.length)
	const winnerToken = keysWinner[randomToken]

	const winner = applicants[winnerToken]

	return {
		...winnerObject,
		...winner
	}
}

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


