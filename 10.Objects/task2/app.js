const ordersArr = [4, 2, 1, 3];
const people = [
	{ id: 1, name: "Максим" },
	{ id: 2, name: "Николай" },
	{ id: 3, name: "Ангелина" },
	{ id: 4, name: "Виталий" },
];

function giveTalonsInOrder(patients, orders) {
	const sortPeople = []

	orders.forEach(order => {
		patients.forEach(patient => {
			if (patient.id === order) {
				sortPeople.push(patient)
			}
		})
	})

	return sortPeople
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
