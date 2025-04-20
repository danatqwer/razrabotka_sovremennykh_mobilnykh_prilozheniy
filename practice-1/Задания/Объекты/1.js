// 1. Подсчет количества свойств в объекте

function countProperties(obj) {
    return Object.keys(obj).length
}

const user = { name: "Alice", age: 25, city: "New York" };
console.log(countProperties(user)); // 3