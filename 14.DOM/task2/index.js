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
