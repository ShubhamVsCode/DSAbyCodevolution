function prime(n) {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    console.log(` ${n} % ${i} = ${n % i}`);
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(47)); // true
