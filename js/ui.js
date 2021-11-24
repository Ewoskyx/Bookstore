import Store from "./store.js";

const dynamicBooksDiv = document.getElementById('books-wrapper');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

class UI {
  static addBooksToList(book) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const button = document.createElement("button");

    div.className = "book-div";
    h3.innerText = `Title : ${book.title}`;
    h4.innerText = `Author :  ${book.author}`;
    h3.className = 'book-header';
    h4.className = 'book-header';
    button.innerHTML = "x";
    button.id = book.id;
    button.type = "button";
    button.className = "rmv";

    div.append(h3, h4, button);
    dynamicBooksDiv.appendChild(div);
  }

  static showBooks() {
    const booksCreated = Store.getBooks();
    booksCreated.forEach((book) => UI.addBooksToList(book));
  }

  static clearInputs() {
    bookTitle.value = "";
    bookAuthor.value = "";
  }

  static deleteBook(book) {
    if (book.classList.contains("rmv")) {
      book.parentElement.remove();
    }
  }
}

export default UI;