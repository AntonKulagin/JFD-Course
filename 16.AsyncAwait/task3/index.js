const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('#data-container')

const createElement = (title) => {
	const liElement = document.createElement('li')
	liElement.textContent = title

	return liElement
}

const createErrorMessage = (text) => {
	const messageElement = document.createElement('div')
	messageElement.style.color = 'red'
	messageElement.textContent = text

	return messageElement
}

const toggleLoader = () => {
	const loader = document.querySelector('#loader')
	loader.hasAttribute('hidden')
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}

const renderAlbums = async () => {
	try {
		toggleLoader()
		const requests = await fetch(ALBUMS_URL)
		if (!requests.ok) {
			throw new Error('Произошла ошибка в получении данных об альбомах...')
		}
		const results = await requests.json()
		results.forEach(album => {
			dataContainer.append(createElement(album.title))
		})
	} catch (error) {
		dataContainer.prepend(createErrorMessage(error))
	} finally {
		toggleLoader()
	}
}

renderAlbums()