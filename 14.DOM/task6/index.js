const tasks = [
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

addTask()
addTheme()


function addTask() {
	taskList.innerHTML = ''

	tasks.forEach(item => {
		const taskId = item.id
		const taskText = item.text

		taskList.innerHTML += `
		<div class="task-item" data-task-id="${taskId}">
			<div class="task-item__main-container">
				<div class="task-item__main-content">
						<form class="checkbox-form">
							<input class="checkbox-form__checkbox" type="checkbox" id="${taskId}">
							<label for="${taskId}"></label>
						</form>
						<span class="task-item__text">
							${taskText}
						</span>
				</div>
				<button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
						Удалить
				</button>
			</div>
		</div>
	`
	})
}


const createTask = document.querySelector('.create-task-block')

const spanErrorText = document.createElement('span')
spanErrorText.className = 'error-message-block'



createTask.addEventListener('submit', (event) => {
	event.preventDefault()
	spanErrorText.remove()

	const { target } = event
	const taskNameInput = target.taskName
	const inputValue = taskNameInput.value

	if (inputValue) {
		let hasSimilarTask = false

		tasks.forEach(item => {
			if (item.text === inputValue) {
				spanErrorText.textContent = 'Задача с таким названием уже существует.'
				createTask.append(spanErrorText)
				hasSimilarTask = true
			}
		})

		if (!hasSimilarTask) {
			tasks.push(
				{
					id: `${Date.now()}`,
					completed: false,
					text: inputValue
				}
			)
			addTask()
			addTheme()
		}
	} else {
		spanErrorText.textContent = 'Название задачи не должно быть пустым'
		createTask.append(spanErrorText)
	}
})

const modalWindow = document.querySelector('.modal-overlay')
const modalCancelButton = modalWindow.querySelector('.delete-modal__cancel-button')
const modalConfirmButton = modalWindow.querySelector('.delete-modal__confirm-button')

let taskDelete
let taskDeleteId

taskList.addEventListener('click', e => {
	spanErrorText.remove()
	const { target } = e

	if (target.classList.contains('delete-button')) {
		taskDelete = target.closest('.task-item')
		taskDeleteId = taskDelete.getAttribute('data-task-id')

		modalWindow.classList.remove('modal-overlay_hidden')
	}
})


modalWindow.addEventListener('click', e => {
	const { target } = e

	if (target === modalCancelButton) {
		modalWindow.classList.add('modal-overlay_hidden')
	} else if (target === modalConfirmButton) {
		tasks.forEach((item, index) => {
			if (item.id === taskDeleteId) {
				tasks.splice(index, 1)
			}
		})
		taskDelete.remove()
		modalWindow.classList.add('modal-overlay_hidden')
	}
})



document.addEventListener('keydown', e => {

	const { key } = e

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

