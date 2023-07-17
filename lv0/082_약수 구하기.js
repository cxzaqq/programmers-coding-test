//my answer
const solution = (n) => {
  let answer = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
};

//most liked answer
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
