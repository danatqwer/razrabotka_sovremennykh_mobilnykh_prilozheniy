// 5. Удаление свойства из объекта
function removeProperty(obj, key) {
  delete obj[key];
}

const book = { title: "1984", author: "George Orwell", year: 1949 };
removeProperty(book, "year");
console.log(book);
// { title: "1984", author: "George Orwell" }
