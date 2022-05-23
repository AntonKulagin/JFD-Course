class Dictionary {

	constructor(name) {
		this.name = name
		this.words = {}
	}

	add(word, description) {

		if (!this.words.hasOwnProperty(word)) {
			const obj = {}
			obj.word = word
			obj.description = description
			this.words[word] = obj
		}
	}

	remove(word) {

		if (this.words.hasOwnProperty(word)) {
			delete this.words[word]
		} else {
			console.error(`Слова ${word} нет в словаре. Удалять нечего.`)
		}
	}

	get(word) {

		if (this.words.hasOwnProperty(word)) {
			return this.words[word]
		} else {
			console.error(`Слова ${word} нет в словаре.`)
		}
	}

	showAllWords() {

		for (const key in this.words) {
			const obj = this.words[key]
			console.log(`${obj.word} - ${obj.description}`)
		}
	}
}

class HardWordsDictionary extends Dictionary {

	constructor(name) {
		super()
		this.name = name
	}

	add(word, description) {

		if (!this.words.hasOwnProperty(word)) {
			const obj = {}
			obj.word = word
			obj.description = description
			obj.isDifficult = true
			this.words[word] = obj
		}
	}
}


const hardWordsDictionary = new HardWordsDictionary("Сложные слова")


hardWordsDictionary.add(
	"дилетант",
	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
)
hardWordsDictionary.add(
	"неологизм",
	"Новое слово или выражение, а также новое значение старого слова."
)
hardWordsDictionary.add(
	"квант",
	"Неделимая часть какой-либо величины в физике."
)


console.log(hardWordsDictionary)