class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.id = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
}
export default Book;  