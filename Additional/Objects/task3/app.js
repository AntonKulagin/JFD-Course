function getKiller(suspectInfo, deadPeople) {

	for (const suspect in suspectInfo) {
		const suspectPerson = suspectInfo[suspect].filter(killed => deadPeople.includes(killed))
		if (suspectPerson.length === deadPeople.length) {
			console.log(`Убийца ${suspect}`)
		}
	}
}

getKiller(
	{
		'James': ['Jacob', 'Bill', 'Lucas'],
		'Johnny': ['David', 'Kyle', 'Lucas'],
		'Peter': ['Lucy', 'Kyle'],
	},
	['Lucas', 'Bill']
); // Убийца James

getKiller(
	{
		'Brad': [],
		'Megan': ['Ben', 'Kevin'],
		'Finn': [],
	},
	['Ben']
); // Убийца Megan