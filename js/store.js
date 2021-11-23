class Store {
  static getBooks() {
    let booksList;
    if (localStorage.getItem("booksDetails") === null) {
      booksList = [];
    } else {
      booksList = JSON.parse(localStorage.getItem("booksDetails"));
    }
    return booksList;
  }

  static addBooks(book) {
    const newbooksList = Store.getBooks();
    newbooksList.push(book);
    localStorage.setItem("booksDetails", JSON.stringify(newbooksList));
  }

  static removeBooks(bookID) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.id === bookID) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("booksDetails", JSON.stringify(books));
  }
}
export default Store;
