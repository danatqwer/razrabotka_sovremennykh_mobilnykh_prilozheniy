// 2. Функция для фильтрации четных чисел из массива

function filterEvenNumbers(arr) {
  return arr.filter((e) => e % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 11])); // []
console.log(filterEvenNumbers([12, 14, 15, 17])); // [12, 14]
