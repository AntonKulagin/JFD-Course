const peopleWithVisa = [
	{
		firstName: 'Stasia',
		lastName: 'Ward',
		criminalRecord: true,
		passportExpiration: '19.06.2023',
	},
	{
		firstName: 'Elliot',
		lastName: 'Baker',
		criminalRecord: false,
		passportExpiration: '04.06.2021',
	},
	{
		firstName: 'Leighann',
		lastName: 'Scott',
		criminalRecord: false,
		passportExpiration: '31.07.2022',
	},
	{
		firstName: 'Nick',
		lastName: 'Pop',
		criminalRecord: false,
		passportExpiration: '31.12.2021',
	},
]


function allowVisa(peopleVisa) {

	const dateNow = Date.now()
	const sortOfDate = peopleVisa.filter(person => dateNow < getCorrectDate(person.passportExpiration))
	const sortOfDateAndCriminal = sortOfDate.filter(person => person.criminalRecord === false)

	return sortOfDateAndCriminal
}

function getCorrectDate(personDate) {
	const date = personDate.split('.').reverse().join(', ')
	const correctDate = new Date(date)
	return correctDate.getTime()
}


const result = allowVisa(peopleWithVisa);
console.log('result', result);