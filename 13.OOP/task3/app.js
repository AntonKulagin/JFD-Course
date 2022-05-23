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


const dictionary = new Dictionary("Толковый словарь")

dictionary.add("JavaScript", "популярный язык программирования")
dictionary.add(
	"Веб-разработчик",
	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
)
dictionary.remove("JavaScript")
dictionary.showAllWords()

console.log(dictionary)