//my answer
const solution = (n) => {
  let answer = 2;
  while (n % answer !== 1) answer++;
  return answer;
};

//most liked answer
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
