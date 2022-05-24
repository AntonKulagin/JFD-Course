const student = {
	fullName: 'Максим',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
	const newStudent = { ...student }
	newStudent.job = jobName
	alert(`Поздравляем! У студента ${newStudent.fullName} появилась новая работа! Теперь он ${newStudent.job}`)
	return newStudent
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log('updatedStudent', updatedStudent)