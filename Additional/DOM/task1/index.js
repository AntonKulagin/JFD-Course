class CustomSelect {

	#id
	#options
	#currentSelectedOption

	constructor(id, options) {

		this.#id = id
		this.#options = options
		this.#currentSelectedOption = null
	}

	#createBlock() {

		const selectBlock = document.createElement('div')
		selectBlock.className = 'select-dropdown'
		selectBlock.classList.add(`${selectBlock.className}--${this.#id}`)

		const buttonElement = document.createElement('button')
		buttonElement.className = 'select-dropdown__button'
		buttonElement.classList.add(`${buttonElement.className}--${this.#id}`)

		const spanElement = document.createElement('span')
		spanElement.className = 'select-dropdown'
		spanElement.classList.add(`${spanElement.className}--${this.#id}`)
		spanElement.textContent = 'Выберите элемент'

		const listBlock = document.createElement('ul')
		listBlock.className = 'select-dropdown__list'
		listBlock.classList.add(`${listBlock.className}--${this.#id}`)

		this.#options.forEach(element => {
			const value = `${element.value}`
			const text = `${element.text}`

			listBlock.append(this.#createItemElement(value, text))
		})

		buttonElement.append(spanElement)
		selectBlock.append(buttonElement)
		selectBlock.append(listBlock)

		return selectBlock
	}

	#createItemElement(value, text) {

		const itemElement = document.createElement('li')
		itemElement.className = 'select-dropdown__list-item'
		itemElement.dataset.value = value
		itemElement.textContent = text
		return itemElement
	}

	#listenEvents() {

		const dropdownButton = document.querySelector('.select-dropdown__button')
		const dropdownList = document.querySelector('.select-dropdown__list')
		const dropdownButtonText = dropdownButton.querySelector('.select-dropdown')

		dropdownButton.addEventListener('click', event => {

			const { target } = event

			if (target.closest('button')) {
				this.#toggleActiveList(dropdownList)
			}
		})

		dropdownList.addEventListener('click', event => {

			this.#removeClassItems()

			const { target } = event

			this.#addClassItem(target)

			this.#currentSelectedOption = target

			this.#renameButton(dropdownButtonText)

			this.#removeActivList(dropdownList)


		})
	}

	#addClassItem(target) {

		target.classList.add('selected')
	}

	#removeClassItems() {

		const items = document.querySelectorAll('.select-dropdown__list-item')
		items.forEach(item => {
			item.classList.remove('selected')
		})
	}

	#renameButton(buttonText) {

		buttonText.textContent = this.#selectedValue.text
	}

	#toggleActiveList(list) {

		list.classList.toggle('active')
	}

	#removeActivList(list) {

		list.classList.remove('active')
	}

	get #selectedValue() {

		const selectedObjectInArray = this.#options.filter(item => +item.value === +this.#currentSelectedOption.getAttribute('data-value'))
		const currentSelectedOption = selectedObjectInArray[0]
		return currentSelectedOption
	}

	render(container) {

		container.append(this.#createBlock())
		this.#listenEvents()
	}
}

const options = [
	{ value: 1, text: 'JavaScript' },
	{ value: 2, text: 'NodeJS' },
	{ value: 3, text: 'ReactJS' },
	{ value: 4, text: 'HTML' },
	{ value: 5, text: 'CSS' },
]

const customSelect = new CustomSelect("123", options)
const mainContainer = document.querySelector("#container")
customSelect.render(mainContainer)