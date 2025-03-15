// 1. Функция для нахождения максимального элемента в массиве

function findMax(arr) {
    let max = arr[0]
    arr.forEach(element => max = element > max ? element : max);
    return max
}

console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([-10, -3, -5, -1])); // -1
console.log(findMax([100])); // 100