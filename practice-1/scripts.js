function findMax(arr) {
  let max = arr[0]
  arr.forEach(element => max = element > max ? element : max);
  return max
}

// console.log(findMax([3, 7, 2, 9, 5])); 

function testFunction() {
  alert("Код выполняется!");
}

// Объекты
// 1. Подсчет количества свойств в объекте
function countProperties(obj) {
  return Object.keys(obj).length
}

const user1 = { name: "Alice", age: 25, city: "New York" };
console.log(countProperties(user1)); // 3

// 2. Проверка наличия свойства в объекте
function hasProperty(obj, key) {
  return Object.hasOwn(obj, key)
}

const user2 = { name: "Bob", age: 30 };
console.log(hasProperty(user2, "age")); // true
console.log(hasProperty(user2, "city")); // false

// 3. Объединение двух объектов
function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2)
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "London" };
console.log(mergeObjects(obj1, obj2));
// { name: "Alice", age: 30, city: "London" }

// 4. Получение всех ключей объекта
function getObjectKeys(obj) {
  return Object.keys(obj);
}

const car = { brand: "Toyota", model: "Camry", year: 2022 };
console.log(getObjectKeys(car));
// ["brand", "model", "year"]


// 5. Удаление свойства из объекта
function removeProperty(obj, key) {
  delete obj[key];
}

const book = { title: "1984", author: "George Orwell", year: 1949 };
removeProperty(book, "year");
console.log(book);
// { title: "1984", author: "George Orwell" }


// Функции
// 1. Функция для вычисления факториала
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6

// 2. Функция для проверки, является ли число простым
function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true

// 3. Функция, возвращающая сумму всех аргументов
function sumAll(...numbers) {
  let sum = 0
  numbers.forEach(e => sum += e)
  return sum
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10, 15));  // 30
console.log(sumAll());           // 0

// 4. Функция, которая переворачивает строку
function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// 5. Функция, которая форматирует имя
function formatName(name) {
  let nameSplit = name.toLowerCase().split("");
  nameSplit[0] = name[0].toUpperCase();
  return nameSplit.join('');
}

console.log(formatName("aLiCe")); // "Alice"
console.log(formatName("BOB")); // "Bob"
console.log(formatName("john")); // "John"

// Массивы
// 1. Функция для нахождения максимального элемента в массиве
function findMax(arr) {
  let max = arr[0]
  arr.forEach(element => max = element > max ? element : max);
  return max
}

console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([-10, -3, -5, -1])); // -1
console.log(findMax([100])); // 100

// 2. Функция для фильтрации четных чисел из массива
function filterEvenNumbers(arr) {
  return arr.filter((e) => e % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 11])); // []
console.log(filterEvenNumbers([12, 14, 15, 17])); // [12, 14]

// 3. Функция для объединения двух массивов без дубликатов
function mergeUnique(arr1, arr2) {
  const set = new Set();
  arr1.forEach((element) => set.add(element));
  arr2.forEach((element) => set.add(element));
  return Array.from(set);
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeUnique([7, 8], [8, 9, 10])); // [7, 8, 9, 10]
console.log(mergeUnique([], [1, 2, 3])); // [1, 2, 3]

// 4. Функция для переворота массива
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
console.log(reverseArray([true, false, true])); // [true, false, true]

// 5. Функция для поиска индекса элемента в массиве
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == value) return i;
  }
  return -1
}

console.log(findIndex([10, 20, 30, 40], 30)); // 2
console.log(findIndex(["apple", "banana", "cherry"], "banana")); // 1
console.log(findIndex([1, 2, 3], 4)); // -1