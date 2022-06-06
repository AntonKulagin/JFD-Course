const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const usersContainer = document.querySelector('#data-container')

function createElement(text) {
	const itemElement = document.createElement('li')
	const linkElement = document.createElement('a')
	linkElement.href = '#'
	linkElement.textContent = text
	itemElement.append(linkElement)

	return itemElement
}

function toggleLoader() {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')
	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}

function getAllUsers() {
	toggleLoader()
	const listUsers = fetch(USERS_URL)

	listUsers
		.then(response => {
			if (!response.ok) {
				throw new Error('ОШИБКА ЗАПРОСА')
			}
			return response.json()
		})
		.then(json => {
			json.forEach(user => {
				const userHTML = createElement(user.name)
				usersContainer.append(userHTML)
			});
		})
		.catch(err => console.log(err))
		.finally(() => toggleLoader())
}

getAllUsers()

