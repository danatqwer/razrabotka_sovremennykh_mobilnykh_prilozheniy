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