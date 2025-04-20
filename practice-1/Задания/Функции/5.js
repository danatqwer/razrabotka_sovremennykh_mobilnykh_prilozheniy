// 5. Функция, которая форматирует имя

function formatName(name) {
  let nameSplit = name.toLowerCase().split("");
  nameSplit[0] = name[0].toUpperCase();
  return nameSplit.join('');
}

console.log(formatName("aLiCe")); // "Alice"
console.log(formatName("BOB")); // "Bob"
console.log(formatName("john")); // "John"
