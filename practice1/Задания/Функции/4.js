// 4. Функция, которая переворачивает строку

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
