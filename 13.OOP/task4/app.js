class Dictionary {

	constructor(name) {
		this.name = name
		this.words = {}
	}

	add(word, description) {

		if (!this.words[word]) {
			this.words[word] = {
				word,
				description
			}
		}
	}

	remove(word) {

		if (this.words[word]) {
			delete this.words[word]
		} else {
			console.error(`Слова ${word} нет в словаре. Удалять нечего.`)
		}
	}

	get(word) {

		if (this.words[word]) {
			return this.words[word]
		} else {
			console.error(`Слова ${word} нет в словаре.`)
		}
	}

	showAllWords() {

		Object.values(this.words).forEach(wordItem => {
			console.log(`${wordItem.word} - ${wordItem.description}`)
		})
	}
}

class HardWordsDictionary extends Dictionary {

	constructor(name) {
		super(name)
	}

	add(word, description) {

		if (!this.words[word]) {
			this.words[word] = {
				word,
				description,
				isDifficult: true
			}
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


console.log(hardWordsDictionary.showAllWords())