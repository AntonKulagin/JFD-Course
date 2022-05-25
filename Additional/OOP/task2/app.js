class CarService {
	static DefaultWorkingHours = {
		from: '9:00',
		till: '20:00',
	}

	constructor(name, workingHours) {
		this.name = name
		this.workingHours = workingHours || this.DefaultWorkingHours
	}

	repairCar(carName) {
		if (!carName) {
			console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
		} else {
			const nowDate = new Date()
			const repairHours = nowDate.getHours()

			const morningHours = +this.workingHours.from.split(':')[0]
			const eveningHours = +this.workingHours.till.split(':')[0]

			morningHours <= repairHours && repairHours <= eveningHours
				? alert(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
				: alert('К сожалению, мы сейчас закрыты. Приходите завтра')

		}
	}
}


const carService = new CarService("RepairCarNow", {
	from: "8:00",
	till: "20:00"
});
carService.repairCar("BMW");