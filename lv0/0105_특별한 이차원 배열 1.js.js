//my answer
const solution = (n) => {
  const arr = Array.from(Array(n), () => new Array(n).fill(0));
  arr.map((e, i) => (e[i] = 1));
  return arr;
};

//most liked answer
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
