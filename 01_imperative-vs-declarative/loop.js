const books = require('../books');

//imperative
// for (let i = 0; i < books.length; i++) {
//     let book = books[i];

//     console.log(book);
// }

// for (let book of books) {
//     console.log(book);
// }

// let obj = {
//     name: '',
//     title: ''
// }

// for (let property in obj) {
//     console.log(property);
// }

books.forEach(book => console.log(book));