let tasks = [
	{
		id: "1138465078061",
		completed: false,
		text: "Посмотреть новый урок по JavaScript"
	},
	{
		id: "1138465078062",
		completed: false,
		text: "Выполнить тест после урока"
	},
	{
		id: "1138465078063",
		completed: false,
		text: "Выполнить ДЗ после урока"
	}
]

const taskList = document.querySelector('.tasks-list')
let darkTheme = false
const body = document.body

showTask()
addTheme()


function showTask() {
	taskList.innerHTML = ''

	tasks.forEach(item => {
		const taskId = item.id
		const taskText = item.text

		taskList.insertAdjacentHTML('beforeend', createTask(taskId, taskText))
	})
	addTheme()
}

function createTask(id, text) {
	return `
	<div class="task-item" data-task-id="${id}">
		<div class="task-item__main-container">
			<div class="task-item__main-content">
					<form class="checkbox-form">
						<input class="checkbox-form__checkbox" type="checkbox" id="${id}">
						<label for="${id}"></label>
					</form>
					<span class="task-item__text">
						${text}
					</span>
			</div>
			<button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
					Удалить
			</button>
		</div>
	</div>
`
}


const formCreateTaskBlock = document.querySelector('.create-task-block')

const spanErrorText = document.createElement('span')
spanErrorText.className = 'error-message-block'



formCreateTaskBlock.addEventListener('submit', (event) => {
	event.preventDefault()
	spanErrorText.remove()

	const { target } = event
	const taskNameInput = target.taskName
	const inputValue = taskNameInput.value

	addDataToTaskArray(inputValue)
	taskNameInput.value = ''
	showTask()
})


function addDataToTaskArray(inputValue) {
	if (inputValue && !hasSimilarTask(inputValue)) {

		tasks.push(
			{
				id: `${Date.now()}`,
				completed: false,
				text: inputValue
			}
		)
	} else {
		showMassegeError(inputValue)
	}
}

function hasSimilarTask(inputValue) {
	return tasks.filter(item => item.text === inputValue).length
}

function showMassegeError(inputValue) {
	if (inputValue) {
		spanErrorText.textContent = 'Задача с таким названием уже существует.'
	} else {
		spanErrorText.textContent = 'Название задачи не должно быть пустым'
	}
	formCreateTaskBlock.append(spanErrorText)
}



const modalWindow = document.querySelector('.modal-overlay')
const modalCancelButton = modalWindow.querySelector('.delete-modal__cancel-button')
const modalConfirmButton = modalWindow.querySelector('.delete-modal__confirm-button')

let taskDeleteId


taskList.addEventListener('click', e => {
	spanErrorText.remove()
	const { target } = e

	if (target.classList.contains('delete-button')) {
		const taskDelete = target.closest('.task-item')
		taskDeleteId = taskDelete.getAttribute('data-task-id')

		showModalWindow()
	}
})

function showModalWindow() {
	modalWindow.classList.remove('modal-overlay_hidden')
}
function hideModalWindow() {
	modalWindow.classList.add('modal-overlay_hidden')
}



modalWindow.addEventListener('click', e => {

	const { target } = e

	if (target === modalCancelButton) {
		hideModalWindow()
	} else if (target === modalConfirmButton) {
		tasks = tasks.filter(task => task.id !== taskDeleteId)
		showTask()
		hideModalWindow()
	}
})



document.addEventListener('keydown', event => {

	event.preventDefault()

	//! Марк, привет!
	//? Я немного не понял, если я убираю дефолтное поведение, то
	//? у меня не получается напечатать новую задачу в инпут.
	//? Как поступить в этом случае?

	const { key } = event

	if (key === 'Tab') {
		darkTheme = !darkTheme
		addTheme()
	}
})

function addTheme() {
	const taskItem = document.querySelectorAll('.task-item')
	const button = document.querySelectorAll('button')
	if (darkTheme) {
		body.style.backgroundColor = '#24292E'
		taskItem.forEach(item => {
			item.style.color = '#ffffff'
		})
		button.forEach(item => {
			item.style.border = '1px solid #ffffff'
		})
	} else {
		body.style.backgroundColor = 'initial'
		taskItem.forEach(item => {
			item.style.color = 'initial'
		})
		button.forEach(item => {
			item.style.border = 'none'
		})
	}
}

