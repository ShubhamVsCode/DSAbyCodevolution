//   0 , 1 , 2 , 3 ,4 ,   5  ,  6
// [ 1 , 1 , 2 , 6, 24 , 120 , 720]

const factorial = (n) => {
  const fact = [1, 1];

  for (let i = 2; i <= n; i++) {
    fact[i] = i * fact[i - 1];
  }
  // return  "factorial of "+ n +fact[n];
  return `factorial of ${n} is ${fact[n]} `;
};

console.log(factorial(6));
