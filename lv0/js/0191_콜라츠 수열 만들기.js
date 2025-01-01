//my answer
const solution = (n) => {
  const result = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  return result;
};

//most liked answer
function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}
