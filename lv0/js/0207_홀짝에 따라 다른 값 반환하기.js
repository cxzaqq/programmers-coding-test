//my answer
const solution = (n) => {
  let answer = 0;
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      answer += i ** 2;
    }
  }
  return answer;
};

//most liked answer
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
