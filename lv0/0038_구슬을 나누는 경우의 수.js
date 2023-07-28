//my answer
const factorial = (n) => {
  let fac = BigInt(1);
  for (let i = 1; i <= n; i++) {
    fac *= BigInt(i);
  }
  return fac;
};
const solution = (balls, share) => {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
};

//most liked answer
const fact = (n) => (n === 0 ? 1 : n * fact(n - 1));

function solution(balls, share) {
  return Math.round(fact(balls) / fact(balls - share) / fact(share));
}
