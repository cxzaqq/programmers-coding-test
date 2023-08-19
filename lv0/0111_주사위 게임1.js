//my answer
const solution = (a, b) => {
  let answer;
  if (a % 2 !== 0 && b % 2 !== 0) answer = a * a + b * b;
  else if (a % 2 === 0 && b % 2 === 0) answer = Math.abs(a - b);
  else answer = (a + b) * 2;
  return answer;
};

//most liked answer
function solution(a, b) {
  const isOdd = (num) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : isOdd(a) || isOdd(b)
    ? 2 * (a + b)
    : Math.abs(a - b);
}
