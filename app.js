const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const personBeforeDinner = prompt('Введите имя последнего человека, которого успеет обслужить почта:')


while (peopleWaiting.length > 0) {
	peopleWaiting.includes(personBeforeDinner)
		? giveParcel(peopleWaiting[0])
		: leaveQueueWithoutParcel(peopleWaiting[0])
}

function giveParcel(name) {
	peopleWaiting.shift()
	alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
}

function leaveQueueWithoutParcel(name) {
	peopleWaiting.shift()
	alert(`${name} не получил(а) посылку и ушел из очереди. В очереди осталось ${peopleWaiting.length} человек`)
}