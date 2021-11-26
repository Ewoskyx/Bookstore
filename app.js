import Book from "./js/book.js";
import Store from "./js/store.js";
import UI from "./js/ui.js";

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const listSection = document.getElementById("list");
const addNewSection = document.getElementById("add-new");
const contactSection = document.getElementById("contact");
const listbtn = document.getElementById("listbtn");
const addnewbtn = document.getElementById("add-newbtn");
const contactbtn = document.getElementById("contactbtn");
const timer = document.querySelector(".timer");

const setTime = function () {
  const now = luxon.DateTime.now();
  timer.innerHTML = now.toFormat("dd LLL yyyy HH:mm:ss");
};
setTime();
setInterval (function(){
  setTime();
},1000);

document.addEventListener("DOMContentLoaded", UI.showBooks);
listbtn.addEventListener("click", (e) => {
  listbtn.style.color = "#ec5242";
  addnewbtn.style.color = "#d3d3d3";
  contactbtn.style.color = "#d3d3d3";
  addNewSection.style = "display:none";
  listSection.style = "display:flex";
  contactSection.style = "display:none";
});

addnewbtn.addEventListener("click", (e) => {
  listbtn.style.color = "#d3d3d3";
  addnewbtn.style.color = "#ec5242";
  contactbtn.style.color = "#d3d3d3";
  listSection.style = "display:none";
  contactSection.style = "display:none";
  addNewSection.style = "display:flex";
});

contactbtn.addEventListener("click", (e) => {
  listbtn.style.color = "#d3d3d3";
  addnewbtn.style.color = "#d3d3d3";
  contactbtn.style.color = "#ec5242";
  listSection.style = "display:none";
  contactSection.style = "display:flex";
  addNewSection.style = "display:none";
});

document.querySelector("#formContainer").addEventListener("submit", (e) => {
  e.preventDefault();
  if (bookTitle.value === "" || bookAuthor.value === "") {
    UI.clearInputs();
  } else {
    const book = new Book(bookTitle.value, bookAuthor.value);

    UI.addBooksToList(book);
    Store.addBooks(book);
    UI.clearInputs();
  }
});

document.querySelector(".books-wrapper").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  Store.removeBooks(e.target.id);
});
