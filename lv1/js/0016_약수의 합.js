//my answer
const solution = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr.reduce((a, c) => a + c, 0);
};

//most liked answer
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
