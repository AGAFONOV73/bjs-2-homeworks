class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state(newState) {
		if (typeof newState !== "number") {
			return;
		}
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}

	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

const novelExample = new NovelBook("Джек Лондон", "Белый клык", 1906, 300);

console.log(novelExample.author);
console.log(novelExample.type);

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book instanceof PrintEditionItem) {
			if (book.state > 30) {
				this.books.push(book);
			}

		}
	}
	findBookBy(type, value) {
		for (let book of this.books) {
			if (book.hasOwnProperty(type) && book[type] === value) {
				return book;
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}
}

const myLibrary = new Library("Моя библиотека");

const book1 = new Book("Автор 1", "Книга 1", 1919, 110);
const book2 = new NovelBook("Автор 2", "Роман 2", 1920, 240);
const magazine1 = new Magazine("Журнал 1", 2020, 70);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(magazine1);

console.log("Библиотека после добавления книг:", myLibrary.books);

const foundBook = myLibrary.findBookBy("releaseDate", 1919);
console.log("Найденная книга из 1919 года:", foundBook);

const issuedBook = myLibrary.giveBookByName("Книга 1");
console.log("Выданная книга:", issuedBook);
if (issuedBook) {
	console.log(`Состояние книги до повреждения: ${issuedBook.state}`);

	issuedBook.state -= 80;
	console.log(`Состояние книги после повреждения: ${issuedBook.state}`);
}
if (issuedBook) {
	issuedBook.fix();
	console.log(`Состояние после восстановления: ${issuedBook.state}`);
}
if (issuedBook.state > 30) {
	myLibrary.addBook(issuedBook);
	console.log("Восстановленная книга добавлена обратно в библиотеку");
} else {
	console.log("Книга слишком повреждена и не может быть добавлена обратно");
}

console.log("Итоговая библиотека:", myLibrary.books);