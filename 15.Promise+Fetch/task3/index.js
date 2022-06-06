const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'

const photoContainer = document.querySelector('#data-container')

function createPhotoElement(photoUrl, id) {
	const photoItem = document.createElement('li')
	photoItem.className = 'photo-item'

	const photoItemImage = document.createElement('img')
	photoItemImage.className = 'photo-item__image'
	photoItemImage.src = `${photoUrl}`

	const photoItemTitle = document.createElement('h3')
	photoItemTitle.className = 'photo-item__title'
	photoItemTitle.textContent = `accusamus beatae ad facilis cum similique qui sunt. Photo ID: ${id}`

	photoItem.append(photoItemImage)
	photoItem.append(photoItemTitle)

	return photoItem
}

function toggleLoader() {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')
	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}

function getFastestLoadedPhoto(ids) {

	toggleLoader()

	const photos = ids.map(id => fetch(`${PHOTO_URL}/${id}`))

	Promise.race(photos)
		.then(photo => {
			if (!photo.ok) {
				throw new Error('Ошибка загрузки фото')
			}
			return photo.json()
		})
		.then(photo => photoContainer.append(createPhotoElement(photo.url, photo.id)))
		.catch(err => console.log(err))
		.finally(() => toggleLoader())
}

getFastestLoadedPhoto([60, 12, 55]);