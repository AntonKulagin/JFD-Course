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


const dictionary = new Dictionary("Толковый словарь")

dictionary.add("JavaScript", "популярный язык программирования")
dictionary.add(
	"Веб-разработчик",
	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
)
dictionary.remove("JavaScript")
dictionary.showAllWords()

console.log(dictionary)