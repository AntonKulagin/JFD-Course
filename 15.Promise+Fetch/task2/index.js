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

function getUsersByIds(usersId) {
	toggleLoader()
	const responseUsersById = usersId.map(id => fetch(`${USERS_URL}/${id}`))

	Promise.all(responseUsersById)
		.then(usersById => {
			const dataUsers = usersById.map(user => {
				if (!user.ok) {
					throw new Error('ОШИБКА ЗАПРОСА')
				}
				return user.json()
			})
			return Promise.all(dataUsers)
		})
		.then((users) => {
			users.forEach(user => {
				usersContainer.append(createElement(user.name))
			})
		})
		.catch(err => console.error(err))
		.finally(() => toggleLoader())
}

getUsersByIds([5, 6, 2, 1]);