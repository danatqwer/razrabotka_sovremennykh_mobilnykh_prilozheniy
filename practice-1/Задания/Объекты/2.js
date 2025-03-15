// 2. Проверка наличия свойства в объекте
function hasProperty(obj, key) {
    return Object.hasOwn(obj, key)
}

const user = { name: "Bob", age: 30 };
console.log(hasProperty(user, "age")); // true
console.log(hasProperty(user, "city")); // false