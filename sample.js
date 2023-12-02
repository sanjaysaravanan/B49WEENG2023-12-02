// console.log(window);
console.log("Hello world");

console.log("Global", globalThis);

console.log("process", process);

function generatePrimesUpToN(n) {
  // Function to check if a number is prime
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // Generate prime numbers up to n
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log("Cmd Line Argeuments", process.argv);

// Example: Generate prime numbers up to 20
const primesUpTo20 = generatePrimesUpToN(Number(process.argv[2]));
console.log(primesUpTo20);
