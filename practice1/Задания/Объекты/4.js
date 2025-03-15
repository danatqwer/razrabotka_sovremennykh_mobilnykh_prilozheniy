// 4. Получение всех ключей объекта

function getObjectKeys(obj) {
  return Object.keys(obj);
}

const car = { brand: "Toyota", model: "Camry", year: 2022 };
console.log(getObjectKeys(car));
// ["brand", "model", "year"]
