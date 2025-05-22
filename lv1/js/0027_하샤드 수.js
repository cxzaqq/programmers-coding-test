//my answer
const solution = (x) =>
  x % [...x.toString()].map((v) => +v).reduce((a, c) => a + c, 0) === 0;

//most liked answer
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
