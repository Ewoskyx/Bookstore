import Book from "./js/book.js";
import Store from "./js/store.js";
import UI from "./js/ui.js";


const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');


document.addEventListener('DOMContentLoaded', UI.showBooks);

document.querySelector('#formContainer').addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    UI.clearInputs();
  } else {
    const book = new Book(bookTitle.value, bookAuthor.value);

    UI.addBooksToList(book);
    Store.addBooks(book);
    UI.clearInputs();
  }
});

document.querySelector('.books-wrapper').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBooks(e.target.id);
});
