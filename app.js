let peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const personBeforeDinner = 'Кирилл'
const personBeforeDinnerIndex = peopleWaiting.indexOf(personBeforeDinner)

let newPeopleWaiting = [...peopleWaiting]

peopleWaiting.forEach((person, index) => {
	index <= personBeforeDinnerIndex
		? giveParcel(person)
		: leaveQueueWithoutParcel(person)
})


function giveParcel(name) {
	newPeopleWaiting.shift()
	alert(`${name} получил(а) посылку. В очереди осталось ${newPeopleWaiting.length} человек`)
}

function leaveQueueWithoutParcel(name) {
	newPeopleWaiting.shift()
	alert(`${name} не получил(а) посылку и ушел из очереди. В очереди осталось ${newPeopleWaiting.length} человек`)
}