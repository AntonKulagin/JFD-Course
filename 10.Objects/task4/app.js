const student = {
	fullName: 'Максим',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
	student.job = jobName
	alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.job}`)
	return student
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log('updatedStudent', updatedStudent)