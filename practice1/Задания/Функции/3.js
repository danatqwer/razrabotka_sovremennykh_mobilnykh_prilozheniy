// 3. Функция, возвращающая сумму всех аргументов

function sumAll(...numbers) {
    let sum = 0
    numbers.forEach(e => sum += e)
    return sum
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10, 15));  // 30
console.log(sumAll());           // 0