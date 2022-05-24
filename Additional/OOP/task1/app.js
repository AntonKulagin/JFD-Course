class Dictionary {
	#name
	#words

	constructor(name) {
		this.#name = name
		this.#words = {}
	}

	get mainName() {
		return this.#name
	}

	set setMainName(name) {
		this.#name = name
	}

	get allWords() {
		return this.#words
	}

	addNewWord(wordKey, wordObj) {
		this.#words[wordKey] = wordObj
	}

	add(word, description) {

		if (!this.allWords[word]) {
			const wordObj = {
				word,
				description
			}
			this.addNewWord(word, wordObj)
		}
	}

	remove(word) {

		// delete this.allWords[word]

		//! Марк, привет.
		//? Немного не понял, как мне обращаться к приватной переменной в родительском классе
		//? На прямую "#words" или через метод "allWords" ?
		//? Работает и так и так. Как и в остальных методах данного класса.
		//? Но как правильно написать, не понятно.

		delete this.#words[word]
	}

	get(word) {

		if (this.allWords[word]) {
			return this.allWords[word]
		} else {
			console.error(`Слова ${word} нет в словаре.`)
		}
	}

	showAllWords() {

		Object.values(this.allWords).forEach(wordItem => {
			console.log(`${wordItem.word} - ${wordItem.description}`)
		})
	}
}

class HardWordsDictionary extends Dictionary {

	constructor(name) {
		super(name)
	}

	add(word, description) {

		if (!this.allWords[word]) {
			const wordObj = {
				word,
				description,
				isDifficult: true
			}
			this.addNewWord(word, wordObj)
		}
	}
}


const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
	"дилетант",
	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
	"неологизм",
	"Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
	"квант",
	"Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант

