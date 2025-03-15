// 3. Объединение двух объектов
function mergeObjects(obj1, obj2) {
   return Object.assign(obj1, obj2)
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "London" };
console.log(mergeObjects(obj1, obj2));
// { name: "Alice", age: 30, city: "London" }