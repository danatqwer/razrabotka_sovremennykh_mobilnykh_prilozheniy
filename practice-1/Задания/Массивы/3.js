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
