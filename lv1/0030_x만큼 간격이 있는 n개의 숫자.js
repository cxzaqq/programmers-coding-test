//my answer
const solution = (x, n) => {
  let a = x;
  let answer = [];
  while (answer.length !== n) {
    answer.push(a);
    a += x;
  }
  return answer;
};

//most liked answer
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
