const hero = {
	name: 'Batman',
	health: 100,
	heatEnemy(enemy) {
		enemy.health -= 10
	}
}

const enemy = {
	name: 'Joker',
	health: 100,
	heatHero(hero) {
		hero.health -= 10
	}
}

function startGame(heroPlayer, enemyPlayer) {

	let name, health

	while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
		getRandomNumberInRange(0, 1)
			? enemyPlayer.heatHero(heroPlayer)
			: heroPlayer.heatEnemy(enemyPlayer)
	}

	if (heroPlayer.health) {
		name = heroPlayer.name
		health = heroPlayer.health
	} else {
		name = enemyPlayer.name
		health = enemyPlayer.health
	}

	alert(`${name} победил! У него осталось ${health} здоровья`)
}

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}


startGame(hero, enemy)