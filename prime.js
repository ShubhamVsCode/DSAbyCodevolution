function prime(n) {
  for (let i = 2; i < n; i++) {
    console.log(` ${n} % ${i} = ${n % i}`);
  }
}

console.log(prime(7)); // true
