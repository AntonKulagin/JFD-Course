const attacker = {
	archer: 30,
	footSoldier: 55,
	cavalry: 10,
	artillery: 3,

	checkChancesToWin(defenderObject) {
		const chancesToWin = [0, Object.keys(defenderObject).length]
		const attackerArmy = Object.keys(this).filter(attackerFighters => typeof this[attackerFighters] === 'number')

		attackerArmy.forEach(attackerFighters => {
			if (this[attackerFighters] > defenderObject[attackerFighters]) {
				chancesToWin[0]++
			}
		})

		return chancesToWin
	},

	improveArmy() {
		const attackerArmy = Object.keys(this).filter(attackerFighters => typeof this[attackerFighters] === 'number')

		attackerArmy.forEach(attackerFighters => {
			this[attackerFighters] += 5
		})
	},

	attack(defender) {
		const chancesToWin = this.checkChancesToWin(defender)
		const ourArmyChances = chancesToWin[0]
		const maximumChances = chancesToWin[1]

		if (ourArmyChances / maximumChances < 0.7) {
			alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`)
			this.improveArmy()
		} else {
			alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
		}
	}
}

const defender = {
	archer: 33,
	footSoldier: 50,
	cavalry: 40,
	artillery: 10,
}



attacker.attack(defender) // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender) // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender) // Мы усилились! Мы несомненно победим! Наши шансы высоки!
