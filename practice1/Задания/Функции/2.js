// 2. Функция для проверки, является ли число простым

function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
